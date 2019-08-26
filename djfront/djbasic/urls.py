from django.urls import include, path
from djfront.djbasic import views as c


app_name = 'djbasic'


customer_patterns = [
    path('', c.customer_list, name='customer_list'),
    path('add/', c.customer_add, name='customer_add'),
    path('save/', c.customer_save, name='customer_save'),
    path('<int:pk>/edit/', c.customer_edit, name='customer_edit'),
    path('<int:pk>/delete/', c.customer_delete, name='customer_delete'),
    path('datatable/', c.customer_list_datatable,
         name='customer_list_datatable'),
    path('json/', c.customer_json, name='customer_json'),
]

person_patterns = [
    path('', c.person_list, name='person_list'),
    path('add/', c.person_create, name='person_add'),
]

urlpatterns = [
    path('', c.home, name='home'),
    path('customer/', include(customer_patterns)),
    path('person/', include(person_patterns)),
]
