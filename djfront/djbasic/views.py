from django.core import serializers
from django.core.urlresolvers import reverse_lazy
from django.shortcuts import render, get_object_or_404
from django.http import (HttpResponse, HttpResponseRedirect,
                         HttpResponseNotAllowed, JsonResponse)
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import CreateView, ListView
from .models import Customer, Person
from .forms import CustomerForm, PersonForm


def home(request):
    return render(request, 'index.html')


def customer_list(request):
    customers = Customer.objects.all()
    form = CustomerForm()
    ctx = {'customers': customers, 'form': form}
    return render(request, 'djbasic/customer_list.html', ctx)


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


def customer_edit(request, pk):
    if request.is_ajax() and request.method == 'POST':
        pk = request.POST.get('customer_id')
        # Edita o próprio customer que foi pego pelo id.
        customer = get_object_or_404(Customer, pk=pk)
        # Usando instance não precisa pegar os campos um a um.
        form = CustomerForm(request.POST, instance=customer)

        if not form.is_valid():
            error = {'error': form.errors}
            return JsonResponse(error, status=422)

        # customer.name = request.POST.get('name')
        # customer.email = request.POST.get('email')
        customer.save()
        response = {'status': 'update'}
        return JsonResponse(response)
    else:
        return HttpResponseRedirect(reverse_lazy('customer_list'))


def customer_delete(request, pk):
    if request.is_ajax() and request.method == 'POST':
        pk = request.POST.get('customer_id')
        customer = get_object_or_404(Customer, pk=pk)
        customer.delete()
        response = {'status': 'delete'}
        return JsonResponse(response)
    else:
        return HttpResponseRedirect(reverse_lazy('customer_list'))


def customer_json(request):
    customers = Customer.objects.all()
    data = serializers.serialize('json', customers)
    return HttpResponse(data, content_type='application/json')


person_create = CreateView.as_view(
    model=Person,
    form_class=PersonForm,
    success_url='/person/'
)

person_list = ListView.as_view(model=Person)
