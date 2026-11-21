
from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework import status
from django.core import mail

from .models import ContactMessage


class ContactMessageAPITest(APITestCase):

    def test_contact_message_is_created(self):
        data = {
            "name": "Logic Test",
            "email": "test@example.com",
            "message": "Testing my contact API."
        }

        response = self.client.post(
            "/api/contact/",
            data,
            format="json"
        )

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(ContactMessage.objects.count(), 1)

    def test_email_notification_is_sent(self):
        data = {
            "name": "Logic Test",
            "email": "test@example.com",
            "message": "Testing email notification."
        }

        self.client.post(
            "/api/contact/",
            data,
            format="json"
        )

        self.assertEqual(len(mail.outbox), 1)
        self.assertIn("Logic Test", mail.outbox[0].subject)

    def test_invalid_email_is_rejected(self):
        data = {
            "name": "Logic Test",
            "email": "not-an-email",
            "message": "Testing invalid email."
        }

        response = self.client.post(
            "/api/contact/",
            data,
            format="json"
        )

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(ContactMessage.objects.count(), 0)
