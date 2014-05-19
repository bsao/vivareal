import os

from rest_framework import status
from rest_framework.test import APITestCase


class ImageTests(APITestCase):
    def _create_image(self):
        base_dir = os.path.dirname(os.path.dirname(__file__))
        img = open(os.path.join(base_dir, 'images', 'tests', 'cha.jpg'))
        response = self.client.post('/images/', {'description': 'text of description', 'image': img},
                                    format='multipart')
        os.remove(os.path.join(base_dir, response.data['image']))
        return response

    def test_get_all_images(self):
        response = self.client.get('/images/', format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, [])

    def test_create_image(self):
        response = self._create_image()
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['id'], 1)
        self.assertEqual(response.data['description'], 'text of description')