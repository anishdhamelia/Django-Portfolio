from django.shortcuts import render, get_object_or_404


# Create your views here.
def portfolio_page(request):
    return render(request,
                  'portfolio/portfolio_page.html',
                  {'js': 'js/portfolio_page.js', 'css': 'css/portfolio_page.css'})
