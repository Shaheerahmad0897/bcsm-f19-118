from email.policy import default
from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path ,include
from . import views
from api.views import SignupViewSet
from api.views import addpost 
from rest_framework.routers import DefaultRouter
from api.views import emailpost
from api.views import estimate11

#contact_list, Contact_detail

router = DefaultRouter()
router.register('Contact',SignupViewSet , basename='Contact')
router.register('Api',SignupViewSet , basename='Contact1')
router.register('add',addpost , basename='add')
router.register('emailpost',emailpost , basename='emailpost')
router.register('Estimate',estimate11 , basename='estimate')



urlpatterns = [
  
path('',include(router.urls)),  
  
#  path('', Contactlist.as_view(), name='contact'),
  
    
 #path('Contact/', views.contact_list, name='contact'),
 #path('Contact/<int:pk>/', views.Contact_detail, name='contactdetail'),
]

