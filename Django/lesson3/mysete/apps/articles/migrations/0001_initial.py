# Generated by Django 2.2.4 on 2019-11-08 06:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User_Aceunt',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('login_servis', models.CharField(max_length=50, verbose_name='login')),
                ('password', models.CharField(max_length=100, verbose_name='password')),
                ('email', models.CharField(max_length=50, verbose_name='email')),
            ],
        ),
    ]
