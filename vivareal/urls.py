from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic.base import TemplateView

from images import rest_views


admin.autodiscover()

urlpatterns = patterns(
    '',
    url(r'^$', TemplateView.as_view(template_name="index.html")),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^images/$', rest_views.ImagesList.as_view()),
)
