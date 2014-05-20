setup
==============

- install python 2.7
- clone code

execute pip commands
==============

- pip install django
- pip install djangorestframework
- pip install markdown
- pip install django-filter

sync db
==============
- python manage.py syncdb
- create a admin user/password

execute tests
==============
python manage.py test

access admin
==============
- http://localhost:8000/admin/
- insert some images and descriptions

test rest api
==============

create image
--------------
curl -X POST -H "Content-Type:multipart/form-data" -F "image=@image.jpg;type=image/jpeg" -F "description=descripiton of image" http://127.0.0.1:8000/images/

all image
--------------
curl -H 'Accept: application/json;' http://127.0.0.1:8000/images/

image by id
--------------
curl -H 'Accept: application/json;' http://127.0.0.1:8000/images/1/

delete image
--------------
curl -X DELETE  http://127.0.0.1:8000/images/1/