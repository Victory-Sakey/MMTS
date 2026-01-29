from rest_framework import serializers
from .models import ContactFormSubmision


class ContactFormSerializer(serializers.ModelSerializer):
    """
    Serializer for contact form submissions.
    Validates and serializes contact form data.
    """
    
    class Meta:
        model = ContactFormSubmision
        fields = ['id', 'name', 'email', 'number', 'message', 'timestamp']
        read_only_fields = ['id', 'timestamp']
    
    def validate_number(self, value):
        """
        Validate that the phone number is a positive integer.
        """
        if value <= 0:
            raise serializers.ValidationError("Phone number must be a positive number.")
        return value
    
    def validate_email(self, value):
        """
        Validate email format.
        """
        if not value or '@' not in value:
            raise serializers.ValidationError("Please provide a valid email address.")
        return value.lower()
