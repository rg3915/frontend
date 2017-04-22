from django.conf.urls import url, include
from djfront.djbasic import views as c

customer_patterns = [
    url(r'^$', c.customer_list, name='customer_list'),
    url(r'^add/$', c.customer_add, name='customer_add'),
    url(r'^save/$', c.customer_save, name='customer_save'),
    url(r'^(?P<pk>\d+)/edit/$', c.customer_edit, name='customer_edit'),
    url(r'^(?P<pk>\d+)/delete/$', c.customer_delete, name='customer_delete'),

]

person_patterns = [
    url(r'^$', c.person_list, name='person_list'),
    url(r'^add/$', c.person_create, name='person_add'),
]

urlpatterns = [
    url(r'^$', c.home, name='home'),
    url(r'^customer/', include(customer_patterns)),
    url(r'^person/', include(person_patterns)),
]
