from django.urls import path

from . import views

app_name = "google_app"

urlpatterns = [
	path("", views.index, name="index"),
	path("imghp", views.image_search, name="imghp"),
	path("advanced_search", views.advanced_search, name="advanced_search")
]