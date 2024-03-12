$(document).ready(function() {
    function smallStretchAndCompressAnimation() {
        // Stretch animation
        $("#name").animate({
            fontSize: '5.1vw',
        }, 800);
        $("#title").animate({
            fontSize: '2.6vw',
        }, 800);

        // Compress animation
        $("#name").animate({
            fontSize: '5vw',
        }, 800);
        $("#title").animate({
            fontSize: '2.5vw',
        }, 800);
    }

    setInterval(smallStretchAndCompressAnimation, 10000);
});