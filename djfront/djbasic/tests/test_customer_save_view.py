from django.shortcuts import resolve_url
from django.test import TestCase


class TestCustomerSave(TestCase):

    URL = resolve_url('core:customer_save')

    def test_get(self):
        """GET /customer/save should return 405"""
        resp = self.client.get(self.URL)
        self.assertEqual(405, resp.status_code)

    def test_get_ajax(self):
        """GET /customer/save should return 405 even if sent via ajax"""
        resp = self.client.get(self.URL, HTTP_X_REQUESTED_WITH='XMLHttpRequest')
        self.assertEqual(405, resp.status_code)

    def test_post(self):
        """POST /customer/save should return 422 if not sent via ajax"""
        resp = self.client.post(self.URL)
        self.assertEqual(422, resp.status_code)

    def test_post_ajax_invalid_data(self):
        """POST /customer/save should return 422 if data sent via ajax is not valid"""
        data = dict(name='', email='no email')
        resp = self.client.post(self.URL, data, HTTP_X_REQUESTED_WITH='XMLHttpRequest')
        self.assertEqual(422, resp.status_code)

    def test_post_ajax_valid_data(self):
        """POST /customer/save should return 200 if data sent via ajax is valid"""
        data = dict(name='Regis Silva', email='regis@silva.br')
        resp = self.client.post(self.URL, data, HTTP_X_REQUESTED_WITH='XMLHttpRequest')
        self.assertEqual(200, resp.status_code)
        self.assertIn('Regis Silva (regis@silva.br)', str(resp.content))
        self.assertEqual('application/json', resp['Content-Type'])
