from django.shortcuts import render

from rest_framework import viewsets
from .serializers import EmailSerializer
from .models import Email_Subscription
# Create your views here.
class EmailViewSet(viewsets.ModelViewSet):
    queryset = Email_Subscription.objects.all().order_by('id')
    serializer_class = EmailSerializer