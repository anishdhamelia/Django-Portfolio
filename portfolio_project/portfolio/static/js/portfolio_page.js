$(document).ready(function() {

    // Animate the First Page
    $(".container-item").waypoint(function(direction){
        var current = this.element.id;
        $('.navbar-item').each(function() {
            if ($(this).data('target') == ("#"+current))
                $(this).css('color', "#DDA959");
            else{
                $(this).css('color', "white");
            }
        });
    },{offset: '50%'});

    $(".container-item").waypoint(function(direction){
        var current = this.element.id;
        $('.navbar-item').each(function() {
            if ($(this).data('target') == ("#"+current))
                $(this).css('color', "#DDA959");
            else{
                $(this).css('color', "white");
            }
        });
    },{offset: '-1%'});


    $("#name").waypoint(function(){
        $("#name").addClass("animate__animated animate__fadeInDown animate__slow").css('opacity', 1);
        $("#title").addClass("animate__animated animate__fadeInDown animate__slow").css('opacity', 1);
    }, {offset: "20vh"});

    $("#name").waypoint(function(){
        $("#name").removeClass("animate__animated animate__fadeInDown animate__slow").css('opacity', 0);
        $("#title").removeClass("animate__animated animate__fadeInDown animate__slow").css('opacity', 0);
    }, {offset: "-20vh"});

    $('.navbar-item').on('click', function(event) {
        event.preventDefault();
        var target = $(this).data('target');
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 100);
    });

    // Animate the Second Page
    $(".container-content-2").waypoint(function(){
        $(".container-content-2").css('opacity', 1);
        $("#about").addClass("animate__animated animate__fadeInLeft animate__slow");
        $("#education").addClass("animate__animated animate__fadeInRight animate__slow");
    }, {offset: "20%"});

    $(".education-box").click(function() {
            var imgSrc = $(this).find("img").attr("src");
            $("#popup-image").attr("src", imgSrc);

            var imgAlt = $(this).find("img").attr("alt");

            if (imgAlt === "master_degree.png") {
                $("#popup-university").text("University: Stevens Institute of Technology");
                $("#popup-gpa").text("GPA: 3.801");
                $("#popup-year").text("Year: 2024");
            }
            else {
                $("#popup-university").text("University: D Y Patil College of Engineering");
                $("#popup-gpa").text("GPA: 3.18");
                $("#popup-year").text("Year: 2020");
            }
            $("#popup-container").fadeIn();
        });

    $(document).click(function(event) {
    if (!$(event.target).closest("#popup-container").length && !$(event.target).closest(".education-box").length) {
        $("#popup-container").fadeOut();
    }
    });

    // Animate the Third Page
    $(".container-content-3").waypoint(function(){
        setTimeout(function() {
        $("#content-3-item-1").addClass("animate__animated animate__fadeInUp animate__slow");
        }, 0);
        setTimeout(function() {
            $("#content-3-item-2").addClass("animate__animated animate__fadeInDown animate__slow");
        }, 600);
        setTimeout(function() {
            $("#content-3-item-3").addClass("animate__animated animate__fadeInUp animate__slow");
        }, 800);
        setTimeout(function() {
            $("#content-3-item-4").addClass("animate__animated animate__fadeInDown animate__slow");
        }, 1000);
        setTimeout(function() {
            $("#content-3-item-5").addClass("animate__animated animate__fadeInUp animate__slow");
        }, 1200);
    });

    $('.project-head, .project-head-inverted').click(function(){
        if ($(event.target).closest('a').length > 0) {
        return;
        }

        $('.project-head, .project-head-inverted').not($(this)).each(function() {
           if ($(this).hasClass('expanded-project-head')){
                $(this).toggleClass('expanded-project-head');
                $(this).find('.head-description-tag').toggle();
                var $descriptionHiddenOld = $(this).find('.head-description-hidden');
                $descriptionHiddenOld.css("display", "none");
                $descriptionHiddenOld.hide();
           }
        });

        $(this).toggleClass('expanded-project-head');
        $(this).find('.head-description-tag').toggle();

        var $descriptionHidden = $(this).find('.head-description-hidden');

        if ($descriptionHidden.is(":hidden")) {
            $descriptionHidden.show();
            $descriptionHidden.css("display", "flex");

        } else {
            $descriptionHidden.css("display", "none");
            $descriptionHidden.hide();
        }
    });

    // Animate the Fourth Page
    function animateProgressBar(targetValue, duration, direction) {
        var $progressBar = $("#customProgressBar");
        var currentPercentage = ($progressBar.width() / $progressBar.parent().width()) * 100;
        var increment = (targetValue - currentPercentage) / (duration);
        increment = direction === "backward" ? -Math.abs(increment) : Math.abs(increment);

        var interval = setInterval(function() {
            currentPercentage += increment;
            $progressBar.css("width", currentPercentage + "%");
            if ((direction === "forward" && currentPercentage >= targetValue) || (direction === "backward" && currentPercentage <= targetValue)) {
                clearInterval(interval);
            }
        }, 1);
    }
    $('#changeButton').click(function(){
        animateProgressBar(25, 10, "forward");
        $('#changeButton').fadeOut('fast', function() {
            $('.form-input').fadeIn('fast');
            $('.form-input').css("display", "flex");
            $('#form-name').focus();
        });
    });

    function nameFormRight() {
        // Validate input name
        var name = $('#form-name').val().trim();

        var alphabetPattern = /^[a-zA-Z]+$/;

        if (!alphabetPattern.test(name)) {
            $('#form-name').val('');
            $('#form-name').addClass('animate__animated animate__headShake');
            $('#name-error').text('Please enter a valid name with only alphabets.').fadeIn('slow');
            setTimeout(function() {
                $('#name-error').fadeOut('slow', function() {
                    $(this).text('');
                    $('#form-name').removeClass('animate__animated animate__headShake');
                });
            }, 1000);
        }

        else {
            animateProgressBar(50, 10, 'forward');
            $('.form-input').fadeOut('fast', function() {
                $('.form-input-1').fadeIn('fast');
                $('.form-input-1').css("display", "flex");
                $('#form-email').focus();
            });
        }

    }

    function nameFormLeft() {
        animateProgressBar(0, 10, 'backward');
        $('.form-input').fadeOut('fast', function() {
            $('#changeButton').fadeIn('fast');
        });

    }

    $('#name-left').click(function() {
        nameFormLeft();
    });


    $('#name-right').click(function() {
            nameFormRight();
    });

    function emailFormLeft() {
        animateProgressBar(25, 10, 'backward');
        $('.form-input-1').fadeOut('fast', function() {
            $('.form-input').fadeIn('fast');
            $('.form-input').css("display", "flex");
            $('#form-name').focus();
        });
    }

    function emailFormRight() {
        // Validate input email
        var email = $('#form-email').val().trim();

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            $('#form-email').val('');
            $('#form-email').addClass('animate__animated animate__headShake');
            $('#email-error').text('Please enter a valid email').fadeIn('slow');
            setTimeout(function() {
                $('#email-error').fadeOut('slow', function() {
                    $(this).text('');
                    $('#form-email').removeClass('animate__animated animate__headShake');
                });
            }, 1000);
        }

        else {
            animateProgressBar(75, 10, 'forward');
            $('.form-input-1').fadeOut('fast', function() {
                $('.form-input-2').fadeIn('fast');
                $('.form-input-2').css("display", "flex");
                $('#form-message').focus();
            });
        }
    }

    $('#email-left').click(function() {
        emailFormLeft();
    });

    $('#email-right').click(function() {
        emailFormRight();
    });

    function messageFormLeft() {
        animateProgressBar(50, 10, 'backward');
        $('.form-input-2').fadeOut('fast', function() {
            $('.form-input-1').fadeIn('fast');
            $('.form-input-1').css("display", "flex");
            $('#form-email').focus();
        });
    }

    function messageFormRight() {
        // Validate input message
        var message = $('#form-message').val().trim();

        var messagePattern = new RegExp('^[a-zA-Z0-9!@#$%^&*()_+\-=\\[\\]{};\'":\\\\|,.<>\\/? ]{10,250}$');

        if (!messagePattern.test(message)) {
            $('#form-message').val('');
            $('#form-message').addClass('animate__animated animate__headShake');
            $('#message-error').text('Message must be within 10-250 characters').fadeIn('slow');
            setTimeout(function() {
                $('#message-error').fadeOut('slow', function() {
                    $(this).text('');
                    $('#form-message').removeClass('animate__animated animate__headShake');
                });
            }, 1000);
        }

        else {
            animateProgressBar(100, 10, 'forward');
            $('.form-input-2').fadeOut('fast', function() {
                $('.form-input-3').fadeIn('fast');
                $('.form-input-3').css("display", "flex");
                $('#form-final').focus();

                //add the current values
                var name = $('#form-name').val().trim();
                var email = $('#form-email').val().trim();
                var message = $('#form-message').val().trim();

                $('#final-name').text(name);
                $('#final-email').text(email);
                $('#final-message').text(message);

            });
        }

    }

    $('#message-left').click(function() {
        messageFormLeft();
    });

    $('#message-right').click(function() {
        messageFormRight();
    });

    function finalFormLeft() {
        animateProgressBar(75, 10, 'backward');
        $('.form-input-3').fadeOut('fast', function() {
            $('.form-input-2').fadeIn('fast');
            $('.form-input-2').css("display", "flex");
            $('#form-message').focus();
        });
    }

    function finalFormRight() {
        var url = $('#url').data('ajax-url');
        // Get form data
        var formData = {
            'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val(),
            'name': $('#form-name').val().trim(),
            'email': $('#form-email').val().trim(),
            'message': $('#form-message').val().trim()
        };
        // Send AJAX request
        $.ajax({
            type: 'POST',
            url: url,
            data: formData,
            dataType: 'json',
            encode: true
        })
        .done(function(data) {
            // Handle success response
            console.log('Form submitted successfully!');
        })
        .fail(function(data) {
            // Handle error response
            console.error('An error occurred while submitting the form.');
        });


        $('#mail-sent').fadeIn('fast');
        $('#mail-sent').css("display", "flex");

        setTimeout(function() {
                $('#mail-sent').fadeOut('fast');
                // reset everything
                $('#form-name').val("");
                $('#form-email').val("");
                $('#form-message').val("");
                $('#form-final').val("");
                animateProgressBar(0, 150, 'backward');
                $('.form-input-3').fadeOut('slow', function() {
                    $('#changeButton').fadeIn('slow');
                });
            }, 2000);

    }

    $('#final-left').click(function() {
        finalFormLeft();
    });

    $('#final-right').click(function() {
        finalFormRight();
    });

    var debounceTimer;

    $(document).on('keydown', function(event) {
        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(function() {
            if (event.which === 13) {
                if ($('#form-name').is(':focus')) {
                    nameFormRight();
                }
                else if ($('#form-email').is(':focus')) {
                    emailFormRight();
                }
                else if ($('#form-message').is(':focus')) {
                    messageFormRight();
                }
                else if ($('#form-final').is(':focus')) {
                    finalFormRight();
                }
            }
            else if (event.which === 27) {
                if ($('#form-name').is(':focus')) {
                    nameFormLeft();
                }
                else if ($('#form-email').is(':focus')) {
                    emailFormLeft();
                }
                else if ($('#form-message').is(':focus')) {
                    messageFormLeft();
                }
                else if ($('#form-final').is(':focus')) {
                    finalFormLeft();
                }
            }
        }, 100);
    });

});