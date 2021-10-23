from django.http.response import HttpResponse
from django.shortcuts import render


def t (request):
    return render(request, "accueil.html")