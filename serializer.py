from dataclasses import field
from rest_framework import serializers
from .models import signup
from.models import postadd
from.models import email
from api. models import estimate





class signupserializer(serializers.ModelSerializer):
    class Meta:
        model = signup
        fields ='__all__'
   
class postaddserial(serializers.ModelSerializer):
    class Meta:
        model = postadd
        fields ='__all__'
        
class emailserial(serializers.ModelSerializer):
    class Meta:
        model = email
        fields ='__all__'        
        
class estimateserial(serializers.ModelSerializer):
    class Meta:
        model = estimate
        fields ='__all__'       
                
