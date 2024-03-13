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
        $(".container-content-2").addClass("animate__animated animate__fadeInLeft animate__slow");
    }, {offset: "-20vh"});


    $(".education-box").click(function() {
            var imgSrc = $(this).find("img").attr("src");
            $("#popup-image").attr("src", imgSrc);
            $("#popup-container").fadeIn();
        });

    // Close the popup when the close button or overlay container is clicked
    $("#close, #popup-container").click(function(event) {
        if (event.target == this) {
            $("#popup-container").fadeOut();
        }
    });

});