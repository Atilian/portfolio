from django.urls import path, include
from .views import t

urlpatterns = {
    path("", t)
}