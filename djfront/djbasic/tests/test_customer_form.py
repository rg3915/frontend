from django.test import TestCase

from djfront.djbasic.forms import CustomerForm


class CustomerFormTest(TestCase):

    def test_form_has_fields(self):
        form = CustomerForm()
        self.assertSequenceEqual(list(form.fields), ['name', 'email'])
