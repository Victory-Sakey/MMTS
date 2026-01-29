from django.db import models

# Create your models here.
class ContactFormSubmision(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    number = models.IntegerField()
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)