from datetime import datetime
from django.test import TestCase
from djfront.djbasic.models import Person


class PersonTest(TestCase):

    def setUp(self):
        self.obj = Person.objects.create(
            name='Regis',
            age=18,
            description='Lorem ipsum dolor sit amet, consectetur adipisicing.'
        )

    def test_create(self):
        self.assertTrue(Person.objects.exists())

    def test_str(self):
        self.assertEqual('Regis', str(self.obj))

    def test_ordering(self):
        self.assertListEqual(['name'], Person._meta.ordering)
