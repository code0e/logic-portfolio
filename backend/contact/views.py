
import logging
import os

import resend
from rest_framework import generics

from .models import ContactMessage
from .serializers import ContactMessageSerializer


logger = logging.getLogger(__name__)


class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def perform_create(self, serializer):
        contact_message = serializer.save()

        try:
            resend.api_key = os.getenv("RESEND_API_KEY")

            resend.Emails.send({
                "from": "Logic.Dev <onboarding@resend.dev>",
                "to": ["codee025@gmail.com"],
                "subject": f"New Logic.Dev message from {contact_message.name}",
                "text": (
                    f"You received a new message through your portfolio.\n\n"
                    f"Name: {contact_message.name}\n"
                    f"Email: {contact_message.email}\n\n"
                    f"Message:\n{contact_message.message}"
                ),
                "reply_to": contact_message.email,
            })

        except Exception:
            logger.exception(
                "Failed to send contact notification email."
            )
