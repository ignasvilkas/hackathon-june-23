from django.shortcuts import render

def home_page(request):
    """
    When this view is called it takes the request and return the
    response which will render home page.
    """
    template = 'main_app/index.html'
    return render(request, template)
