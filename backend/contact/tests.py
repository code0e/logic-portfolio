from unittest.mock import patch

from django.test import override_settings
from rest_framework import status
from rest_framework.test import APITestCase

from .models import ContactMessage

CONTACT_URL = "/api/contact/"
VALID_PAYLOAD = {
    "name": "Logic Test",
    "email": "test@example.com",
    "message": "Testing my contact API.",
}


class ContactMessageAPITest(APITestCase):
    @patch("contact.views.send_contact_notification")
    def test_contact_message_is_created(self, mock_send):
        response = self.client.post(CONTACT_URL, VALID_PAYLOAD, format="json")

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(ContactMessage.objects.count(), 1)
        self.assertEqual(response.data["name"], VALID_PAYLOAD["name"])
        self.assertEqual(response.data["email"], VALID_PAYLOAD["email"])
        self.assertEqual(response.data["message"], VALID_PAYLOAD["message"])
        mock_send.assert_called_once()

    @override_settings(RESEND_API_KEY="test-key")
    @patch("contact.views.resend.Emails.send")
    def test_email_notification_is_sent(self, mock_send):
        response = self.client.post(CONTACT_URL, VALID_PAYLOAD, format="json")

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        mock_send.assert_called_once()
        payload = mock_send.call_args.args[0]
        self.assertIn("Logic Test", payload["subject"])
        self.assertEqual(payload["reply_to"], VALID_PAYLOAD["email"])

    @override_settings(RESEND_API_KEY="test-key")
    @patch("contact.views.resend.Emails.send", side_effect=RuntimeError("Resend down"))
    def test_email_failure_still_saves_message(self, mock_send):
        response = self.client.post(CONTACT_URL, VALID_PAYLOAD, format="json")

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(ContactMessage.objects.count(), 1)
        mock_send.assert_called_once()
        self.assertNotIn("Resend down", str(response.data))

    @override_settings(RESEND_API_KEY="")
    @patch("contact.views.resend.Emails.send")
    def test_missing_resend_key_still_saves_message(self, mock_send):
        response = self.client.post(CONTACT_URL, VALID_PAYLOAD, format="json")

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(ContactMessage.objects.count(), 1)
        mock_send.assert_not_called()

    def test_invalid_email_is_rejected(self):
        data = {
            **VALID_PAYLOAD,
            "email": "not-an-email",
        }

        response = self.client.post(CONTACT_URL, data, format="json")

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(ContactMessage.objects.count(), 0)
        self.assertIn("email", response.data)

    def test_empty_fields_are_rejected(self):
        response = self.client.post(
            CONTACT_URL,
            {"name": "   ", "email": "", "message": "   "},
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(ContactMessage.objects.count(), 0)

    def test_excessively_long_message_is_rejected(self):
        data = {
            **VALID_PAYLOAD,
            "message": "a" * 5001,
        }

        response = self.client.post(CONTACT_URL, data, format="json")

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(ContactMessage.objects.count(), 0)
        self.assertIn("message", response.data)

    def test_name_too_long_is_rejected(self):
        data = {
            **VALID_PAYLOAD,
            "name": "n" * 101,
        }

        response = self.client.post(CONTACT_URL, data, format="json")

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(ContactMessage.objects.count(), 0)
