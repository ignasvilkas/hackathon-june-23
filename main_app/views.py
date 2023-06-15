from django.shortcuts import render


def home_page(request):
    """
    When this view is called it takes the request and return the
    response which will render home page.
    """
    template = 'main_app/index.html'
    return render(request, template)


def history_page(request):
    """
    When this view is called it takes the request and return the
    response which will render history page.
    """
    template = 'main_app/history.html'
    return render(request, template)


def resources_page(request):
    """
    When this view is called it takes the request and return the
    response which will render resources page.
    """
    template = 'main_app/resources.html'
    return render(request, template)


def contact_page(request):
    """
    When this view is called it takes the request and return the
    response which will render contact page.
    """
    template = 'main_app/contact.html'
    return render(request, template)
