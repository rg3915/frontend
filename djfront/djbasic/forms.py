from django import forms
from .models import Customer, Person


class CustomerForm(forms.ModelForm):

    class Meta:
        model = Customer
        fields = ['name', 'email']


class PersonForm(forms.ModelForm):

    class Meta:
        model = Person
        fields = ['name', 'age', 'description']
