$(document).ready(function() {

    // Animate the First Page
    $("#name").waypoint(function(){
        $("#name").addClass("animate__animated animate__fadeInDown animate__slow").css('opacity', 1);
        $("#title").addClass("animate__animated animate__fadeInDown animate__slow").css('opacity', 1);
    }, {offset: "20vh"});

    $("#name").waypoint(function(){
        $("#name").removeClass("animate__animated animate__fadeInDown animate__slow").css('opacity', 0);
        $("#title").removeClass("animate__animated animate__fadeInDown animate__slow").css('opacity', 0);
    }, {offset: "-20vh"});

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


});