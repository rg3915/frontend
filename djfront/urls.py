from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'', include('djfront.djbasic.urls', namespace='djbasic')),
    url(r'^admin/', admin.site.urls),
]
