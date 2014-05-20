from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.conf.urls import patterns, url, include
from django.views.generic.base import TemplateView

from images import rest_views


admin.autodiscover()

urlpatterns = patterns(
    '',
    url(r'^$', TemplateView.as_view(template_name="index.html")),
    url(r'tests/', TemplateView.as_view(template_name="tests.html")),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^images/$', rest_views.ImagesList.as_view()),
    url(r'^images/(?P<pk>[0-9]+)/$', rest_views.ImagesDetail.as_view()),
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
