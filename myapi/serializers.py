# serializers.py
from rest_framework import serializers
from .models import Email_Subscription

class EmailSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Email_Subscription
        fields = ('id', 'name', 'email')
        # fields = (‘id’, ‘name’, ‘email’)