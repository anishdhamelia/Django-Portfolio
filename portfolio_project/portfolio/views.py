from django.shortcuts import render, get_object_or_404
from django.core.mail import send_mail
from django.http import JsonResponse


# Create your views here.
def portfolio_page(request):
    return render(request,
                  'portfolio/portfolio_page.html',
                  {'js': 'js/portfolio_page.js', 'css': 'css/portfolio_page.css'})


def send_email(request):
    if request.method == 'POST':
        # Get form data
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        mail = "From: " + name + "\nEmail: " + email + "\nMessage: " + message

        # Send email
        try:
            send_mail(
                subject='Message from {}'.format(name),
                message=mail,
                from_email='anishkumarportfolio@gmail.com',
                recipient_list=['anishkumarportfolio@gmail.com'],
                fail_silently=False,
            )
            # Email sent successfully
            return JsonResponse({'success': True})
        except Exception as e:
            # Email sending failed
            return JsonResponse({'error': str(e)}, status=500)
    else:
        # Handle GET request
        return JsonResponse({'error': 'Method not allowed'}, status=405)

