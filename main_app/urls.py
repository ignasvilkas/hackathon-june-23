from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_page, name='home_page'),
    path('history/', views.history_page, name='history_page'),
    path('resources/', views.resources_page, name='resources_page'),
    path('contact/', views.contact_page, name='contact_page'),
]
