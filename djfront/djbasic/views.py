from django.shortcuts import render
from django.http import HttpResponseNotAllowed, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import CreateView, ListView
from .models import Customer, Person
from .forms import CustomerForm, PersonForm


def home(request):
    return render(request, 'index.html')


def customer_list(request):
    customers = Customer.objects.all()
    return render(request, 'djbasic/customer_list.html', {'customers': customers})


def customer_add(request):
    return render(request, 'djbasic/customer_add.html')


@csrf_exempt
def customer_save(request):

    # abort if request is not made via POST
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])

    # abort if request is not made via ajax
    if not request.is_ajax():
        error = {'error': 'This resource requires ajax requests.'}
        return JsonResponse(error, status=422)

    # abort if posted data is not valid
    form = CustomerForm(request.POST)
    if not form.is_valid():
        error = {'error': form.errors}
        return JsonResponse(error, status=422)

    name = form.cleaned_data.get('name')
    email = form.cleaned_data.get('email')
    Customer.objects.create(name=name, email=email)
    message = '{name} ({email}) added.'.format(name=name, email=email)
    return JsonResponse({'message': message})


person_create = CreateView.as_view(
    model=Person,
    form_class=PersonForm,
    success_url='/person/'
)

person_list = ListView.as_view(model=Person)
