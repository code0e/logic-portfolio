# contact/urls.py — defines the contact app's endpoint

from django.urls import path
from .views import ContactMessageCreateView


urlpatterns = [
    path(
        "contact/",
        ContactMessageCreateView.as_view(),
        name="contact-create",
    ),
]
