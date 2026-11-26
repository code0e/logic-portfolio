import logging

from rest_framework.views import exception_handler
from rest_framework.response import Response
from rest_framework import status

logger = logging.getLogger(__name__)


def api_exception_handler(exc, context):
    response = exception_handler(exc, context)

    if response is not None:
        return response

    logger.exception("Unhandled API exception.")
    return Response(
        {"detail": "Something went wrong. Please try again."},
        status=status.HTTP_500_INTERNAL_SERVER_ERROR,
    )
