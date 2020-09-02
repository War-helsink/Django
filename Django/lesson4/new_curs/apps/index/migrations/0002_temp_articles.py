# Generated by Django 2.2.4 on 2020-02-02 13:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('index', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Temp_Articles',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_title', models.CharField(max_length=100, verbose_name='Тема')),
                ('pub_date', models.DateTimeField(verbose_name='Дата випуска темы')),
            ],
            options={
                'verbose_name': 'Тема',
                'verbose_name_plural': 'Темы',
            },
        ),
    ]