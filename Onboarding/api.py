from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings

from .models import ContactFormSubmision
from .serializers import ContactFormSerializer


@api_view(['GET'])
def health_check(request):
    """
    Simple health check endpoint to verify API is running.
    """
    return Response({
        'status': 'healthy',
        'message': 'MMTS API is running'
    })


@api_view(['POST'])
def contact_form_submit(request):
    """
    Handle contact form submission.
    
    Validates form data, saves to database, and sends confirmation emails.
    - Sends confirmation email to the user
    - Sends notification email to admin
    """
    serializer = ContactFormSerializer(data=request.data)
    
    if serializer.is_valid():
        # Save the contact form submission
        contact = serializer.save()
        
        # Extract data for emails
        person_name = contact.name
        person_email = contact.email
        person_number = contact.number
        person_message = contact.message
        
        try:
            # Email subjects
            subject = 'Response to Your Inquiry'
            subject2 = f'{person_name} just filled a Contact Form'
            
            # Render HTML email templates
            html_message = render_to_string('email_template.html', {'person_name': person_name})
            plain_message = strip_tags(html_message)
            
            second_html_message = render_to_string('email_template2.html', {
                'person_name': person_name,
                'person_message': person_message,
                'person_email': person_email
            })
            admin_plain_message = strip_tags(second_html_message)
            
            # Send emails
            configured_email = settings.EMAIL_HOST_USER
            receiver = [person_email]
            admin = ['victorysakey66@gmail.com']
            
            # User confirmation email
            email = EmailMultiAlternatives(subject, plain_message, configured_email, receiver)
            email.attach_alternative(html_message, "text/html")
            email.send(fail_silently=False)
            
            # Admin notification email
            admin_email = EmailMultiAlternatives(subject2, admin_plain_message, configured_email, admin)
            admin_email.attach_alternative(second_html_message, 'text/html')
            admin_email.send(fail_silently=False)
            
            return Response({
                'success': True,
                'message': 'Thank you for contacting us! We will get back to you soon.',
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
            
        except Exception as e:
            # If email sending fails, still return success for form submission
            # but log the error
            return Response({
                'success': True,
                'message': 'Your message has been received, but there was an issue sending confirmation email.',
                'data': serializer.data,
                'email_error': str(e)
            }, status=status.HTTP_201_CREATED)
    
    return Response({
        'success': False,
        'message': 'Please correct the errors below.',
        'errors': serializer.errors
    }, status=status.HTTP_400_BAD_REQUEST)
