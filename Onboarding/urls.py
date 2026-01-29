from . import views

from django.urls import path

app_name = "Onboarding"

urlpatterns = [
    path('' , views.home , name='home'),
    path('about' , views.about , name='about'),
    path('services' , views.services , name='services'),
    path('contact' , views.contacts , name='contacts'),  
]