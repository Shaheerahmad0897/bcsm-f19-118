import http
from http.client import HTTPResponse
from telnetlib import STATUS
from urllib import response
from rest_framework.parsers import JSONParser
from django.shortcuts import render
from .models import signup
from .serializer import signupserializer
from .models import postadd
from .serializer import postaddserial
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import APIView
from rest_framework import generics
from rest_framework import mixins
from rest_framework import viewsets
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework import permissions
from rest_framework.parsers import MultiPartParser, FormParser
from django.core.mail import send_mail

from .models import email
from .serializer import emailserial

# Create your views here.

class SignupViewSet(viewsets.ViewSet):
    
    def list(self,request):
        contact = signup.objects.all()
        serializaer = signupserializer(contact,many=True)
        return Response(serializaer.data)
    
    def create(self,request):
        serializaer = signupserializer(data=request.data)
        if serializaer.is_valid():
            serializaer.save()
            return Response(serializaer.data, status=status.HTTP_201_CREATED)
        return Response(serializaer.errors, status=status.HTTP_400_BAD_REQUEST )

    def retrieve(self,request,pk=None):
        queryset = signup.objects.all()
        contact = get_object_or_404(queryset,pk=pk)
        serializaer = signupserializer(contact)
        return Response(serializaer.data)
    
    
    def update(self,request,pk=None):
        contact = signup.objects.get(pk=pk)
        serializaer = signupserializer(contact,data=request.data)
        if serializaer.is_valid():
            serializaer.save()
            return Response(serializaer.data,status=status.HTTP_201_CREATED)
            
        return Response(serializaer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def destroy(self, request, pk=None):
        contact = signup.objects.get(pk=pk)
        contact.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    
class addpost(viewsets.ViewSet):
    
    def list(self,request):
        postadd1 = postadd.objects.all()
        postaddserial1 = postaddserial(postadd1,many=True)
        return Response(postaddserial1.data)
    
    def create(self,request):
        postaddserial1 = postaddserial(data=request.data)
        if postaddserial1.is_valid():
            postaddserial1.save()
            return Response(postaddserial1.data, status=status.HTTP_201_CREATED)
        return Response(postaddserial1.errors, status=status.HTTP_400_BAD_REQUEST )

    def retrieve(self,request,pk=None):
        queryset = postadd.objects.all()
        contact = get_object_or_404(queryset,pk=pk)
        postaddserial1 = postaddserial(contact)
        return Response(postaddserial1.data)
    
    
    def update(self,request,pk=None):
        contact = postadd.objects.get(pk=pk)
        postaddserial1 = postaddserial(contact,data=request.data)
        if postaddserial1.is_valid():
            postaddserial1.save()
            return Response(postaddserial1.data,status=status.HTTP_201_CREATED)
            
        return Response(postaddserial1.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def destroy(self, request, pk=None):
        postadd1 = postadd.objects.get(pk=pk)
        postadd1.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)    
    
    
class emailpost(viewsets.ViewSet):
    
    def list(self,request):
        email1 = email.objects.all()
        emailserial1 = emailserial(email1, many=True)
        return Response(emailserial1.data)
            # send_mail(
            
            # 'Your OPTP Verification Code is Here',
            # emailserial1.object.otp(),
            # 'abdullahqamar.se@gmail.com',
            # [emailserial1.object.email()],
            # fail_silently=False,
            
            # )
            # print(emailserial1.object.email)
            
        return Response(emailserial1.data)
    
    def create(self,request):
        emailserial1 = emailserial(data=request.data)
        if emailserial1.is_valid():
            emailserial1.save()
            email = emailserial1.data.get('email')
            otp = emailserial1.data.get('otp')
            send_mail(
            'Your OPTP Verification Code is Here',
            otp,
            'abdullahqamar.se@gmail.com',
            [email],
            fail_silently=False,
            )
            return Response(emailserial1.data, status=status.HTTP_201_CREATED)
        return Response(emailserial1.errors, status=status.HTTP_400_BAD_REQUEST )

    def retrieve(self,request,pk=None):
        queryset = email.objects.all()
        contact = get_object_or_404(queryset,pk=pk)
        emailserial1 = emailserial(contact)
        return Response(emailserial1.data)    
    
    
    def update(self,request,pk=None):
        contact = email.objects.get(pk=pk)
        emailserial1 = emailserial(contact,data=request.data)
        if emailserial1.is_valid():
            emailserial1.save()
            return Response(emailserial1.data,status=status.HTTP_201_CREATED)
            
        return Response(emailserial1.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def destroy(self, request, pk=None):
        email1 = email.objects.get(pk=pk)
        email1.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)  
    
    
    
    
from api.models import estimate
from api.serializer import estimateserial

class estimate11(viewsets.ViewSet):    
    def list(self,request):
        
        estimate1 = estimate.objects.all()
        estimateserial1 = estimateserial(estimate1,many=True)
        return Response(estimateserial1.data)
    
    def create(self,request):
        estimateserial1 = estimateserial(data=request.data)
        if estimateserial1.is_valid():
            estimateserial1.save()
            return Response(estimateserial1.data, status=status.HTTP_201_CREATED)
        return Response(estimateserial1.errors, status=status.HTTP_400_BAD_REQUEST )

    def retrieve(self,request,pk=None):
        queryset = estimate.objects.all()
        contact = get_object_or_404(queryset,pk=pk)
        estimateserial1 = estimateserial(contact)
        return Response(estimateserial1.data)
    
    
    def update(self,request,pk=None):
        contact = estimate.objects.get(pk=pk)
        estimateserial1 = estimateserial(contact,data=request.data)
        if estimateserial1.is_valid():
            estimateserial1.save()
            return Response(estimateserial1.data,status=status.HTTP_201_CREATED)  
        return Response(estimateserial1.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def destroy(self, request, pk=None):
        estimate1 = estimate.objects.get(pk=pk)
        estimate1.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
