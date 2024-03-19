from django.urls import path
from . import views

app_name = 'portfolio'

urlpatterns = [
    path('', views.portfolio_page, name='portfolio_page'),
    path('send_email', views.send_email, name='send_email'),
]

