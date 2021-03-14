from django.db import models

# Create your models here.
class Email_Subscription(models.Model):
    name = models.CharField(max_length=60)
    email = models.CharField(max_length=60)
    def __str__(self):
        return '{} {}'.format(self.name, self.email)