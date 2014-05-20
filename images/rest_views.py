from django.http.response import Http404

from rest_framework import status, views
from rest_framework.response import Response

from images.models import Image
from images.serializers import ImageSerializer


class ImagesList(views.APIView):
    def get(self, request, format=None):
        image = Image.objects.all()
        serializer = ImageSerializer(image, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = ImageSerializer(data=request.DATA, files=request.FILES)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ImagesDetail(views.APIView):
    def get_object(self, pk):
        try:
            return Image.objects.get(pk=pk)
        except Image.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        photo = self.get_object(pk)
        serializer = ImageSerializer(photo)
        return Response(serializer.data)

    def delete(self, request, pk, format=None):
        photo = self.get_object(pk)
        photo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
