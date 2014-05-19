from django.conf.urls import patterns, include, url
from django.contrib import admin

from images import rest_views


admin.autodiscover()

urlpatterns = patterns(
    '',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^images/$', rest_views.ImagesList.as_view()),
)
