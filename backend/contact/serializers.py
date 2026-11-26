from rest_framework import serializers

from .models import ContactMessage


class ContactMessageSerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=100, trim_whitespace=True)
    email = serializers.EmailField()
    message = serializers.CharField(
        min_length=1,
        max_length=5000,
        trim_whitespace=True,
    )

    class Meta:
        model = ContactMessage
        fields = ["id", "name", "email", "message", "created_at"]
        read_only_fields = ["id", "created_at"]

    def validate_name(self, value: str) -> str:
        if not value:
            raise serializers.ValidationError("Please enter your name.")
        return value

    def validate_message(self, value: str) -> str:
        if not value:
            raise serializers.ValidationError("Please enter a message.")
        return value
