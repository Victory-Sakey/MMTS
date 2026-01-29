from django.shortcuts import render
from django.core.mail import send_mail , EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings
from .models import ContactFormSubmision
from .forms import ContactForm
# Create your views here.
def home(request):
    return render(request , 'index.html')
# meaningfulmindsllc@gmail.com
# 606 Edmondson Ave Suite 200
# 410-449-3988
def about(request):
    return render(request , 'about.html')

def services(request):
    return render(request , 'services.html')

def contacts(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Save the form data to the database
            person_name = form.cleaned_data['name']
            person_email = form.cleaned_data['email']
            person_number = form.cleaned_data['number']
            person_message = form.cleaned_data['message']
            person = ContactFormSubmision.objects.create(email=person_email, number=person_number , name=person_name, message=person_message)
            person.save()
            subject = 'Response to Your Inquiry'
            subject2 = f'{person_name} just filled a Contact Form'

            # Render HTML email template
            html_message = render_to_string('email_template.html', {'person_name': person_name})
            plain_message = strip_tags(html_message)
            
            second_html_message = render_to_string('email_template2.html' , {'person_name': person_name , 'person_message': person_message , 'person_email': person_email})
            admin_plain_message = strip_tags(second_html_message)
             # Strips HTML tags to create plaintext version

            # Send HTML email
            configured_email = settings.EMAIL_HOST_USER
            receiver = [person_email]
            admin = ['victorysakey66@gmail.com']
            email = EmailMultiAlternatives(subject, plain_message, configured_email, receiver)
            admin_email = EmailMultiAlternatives(subject2 , admin_plain_message , configured_email , admin)
            email.attach_alternative(html_message, "text/html")
            admin_email.attach_alternative(second_html_message , 'text/html')
            email.send(fail_silently=False)
            admin_email.send(fail_silently=False)


            print("Worked")

            return render(request , 'contact_submision.html' , {'name': person_name})
    else:
        form = ContactForm()
        print("Nope")
        return render(request , 'contacts.html' , {'form': form})
