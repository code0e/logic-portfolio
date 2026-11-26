from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("contact", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="contactmessage",
            name="message",
            field=models.TextField(max_length=5000),
        ),
    ]
