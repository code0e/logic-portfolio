import logging

import resend
from django.conf import settings
from rest_framework import generics
from rest_framework.permissions import AllowAny

from .models import ContactMessage
from .serializers import ContactMessageSerializer

logger = logging.getLogger(__name__)


def send_contact_notification(contact_message: ContactMessage) -> None:
    api_key = getattr(settings, "RESEND_API_KEY", "")
    if not api_key:
        logger.warning(
            "RESEND_API_KEY is not configured; contact message saved without email."
        )
        return

    resend.api_key = api_key
    recipient = getattr(
        settings,
        "CONTACT_NOTIFICATION_EMAIL",
        "codee025@gmail.com",
    )

    resend.Emails.send(
        {
            "from": "Logic.Dev <onboarding@resend.dev>",
            "to": [recipient],
            "subject": f"New Logic.Dev message from {contact_message.name}",
            "text": (
                "You received a new message through your portfolio.\n\n"
                f"Name: {contact_message.name}\n"
                f"Email: {contact_message.email}\n\n"
                f"Message:\n{contact_message.message}"
            ),
            "reply_to": contact_message.email,
        }
    )


class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [AllowAny]
    authentication_classes = []

    def perform_create(self, serializer):
        contact_message = serializer.save()

        try:
            send_contact_notification(contact_message)
        except Exception:
            logger.exception("Failed to send contact notification email.")
