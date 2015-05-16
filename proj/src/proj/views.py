from django.views import generic


class HomePage(generic.TemplateView):
    template_name = "home1.html"


class AboutPage(generic.TemplateView):
    template_name = "about.html"
