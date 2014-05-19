from django.db import models


class Pics(models.Model):
    image = models.ImageField(upload_to='static/photos')
    description = models.TextField()
