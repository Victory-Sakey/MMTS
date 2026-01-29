from django import forms
from django.forms import ModelForm
from .models import ContactFormSubmision

class ContactForm(forms.ModelForm):
    class Meta:
        model = ContactFormSubmision
        fields = ['name' , 'email', 'number', 'message']
        widgets = {
            'name': forms.TextInput(attrs={
                'class': 'w-full bg-gray-300 text-gray-900 mt-2 p-1 focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-400'}),
            'email': forms.EmailInput(attrs={
                'class': 'w-full bg-gray-300 text-gray-900 mt-2 p-1 focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-400'}),
            'number': forms.TextInput(attrs={
                'class': 'w-full bg-gray-300 text-gray-900 mt-2 p-1 focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-400'}),
            'message': forms.Textarea(attrs={
                'class': 'w-full h-28 bg-gray-300 text-gray-900 mt-2 p-1  focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-400'})
        }