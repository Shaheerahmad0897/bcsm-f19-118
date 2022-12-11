from django.contrib import admin

# Register your models here.
from .models import signup
from .models import postadd
from .models import email
from .models import estimate

admin.site.register(signup)
admin.site.register(postadd)
admin.site.register(email)
admin.site.register(estimate)

