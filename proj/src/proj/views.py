from django.views import generic


class HomePage(generic.TemplateView):
    template_name = "home.html"


class AboutPage(generic.TemplateView):
    template_name = "details.html"


class MapPage(generic.TemplateView):
    template_name = "splocations.html"
