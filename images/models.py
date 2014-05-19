from django.db import models


class Image(models.Model):
    image = models.ImageField(upload_to='static/photos')
    description = models.TextField()
