from datetime import date
from enum import unique
from pickle import TRUE
from pyexpat import model
from django.db import models
from django.contrib.auth.models import AbstractUser
from .manager import UserManager

# Create your models here.

class signup(AbstractUser):
    username=None
    firstname=models.CharField(max_length=122)
    email=models.CharField(max_length=122,unique='True')
    password=models.CharField(max_length=122)
    UserType=models.CharField(max_length=122)
    objects = UserManager()
    USERNAME_FIELD= 'email'
    REQUIRED_FIELDS=[]
    
    
class postadd(models.Model):
    cloth=models.CharField(max_length=122,null="true")
    address=models.CharField(max_length=122,null="true")
    gender=models.CharField(max_length=122,null="true")
    price=models.CharField(max_length=122,null="true")
    size=models.CharField(max_length=122,null="true")
    photo  = models.ImageField(upload_to ='static/Images', height_field=None, width_field=None, max_length=100,null="true")
    contact=models.CharField(max_length=122,null="true")
    email=models.CharField(max_length=255,null="true")
    
class email(models.Model):
    email=models.CharField(max_length=255)
    otp=models.CharField(max_length=255)
    
class estimate(models.Model):
    brand=models.CharField(max_length=255)
    model=models.CharField(max_length=255)
    year=models.CharField(max_length=255)
    Variant=models.CharField(max_length=255)
    Transmission=models.CharField(max_length=255)
    mileage=models.CharField(max_length=255)
    email=models.CharField(max_length=255)
    phone=models.CharField(max_length=255)
    instemail=models.CharField(max_length=255)
    
        