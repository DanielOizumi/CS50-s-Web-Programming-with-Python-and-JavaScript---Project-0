from django.shortcuts import render

# Create your views here.

def index(request):
	return render(request, "google/index.html")

def image_search(request):
	return render(request, "google/images.html")

def advanced_search(request):
	return render(request, "google/advanced.html")