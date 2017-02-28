/* Id of the #flot-box following the scroll */
$(document).ready(function() {
        // Set this variable with the height of your sidebar + header
    var recup = 640,
    offsetPixels = 460;

    $(window).scroll(function() {
        
        if ($(window).scrollTop() >= offsetPixels && ($(window).scrollTop() <= recup)) {
        console.log(window.pageYOffset);
        $( "#ytb_video" ).css({
        "position": "fixed",
        "top": "315px",
        "transition": ".3s",
        "background": "transparent"
            });
        
        } else {
        $( "#ytb_video" ).css({
        "position": "relative",
        "top": "400px",
            });
        };
    });
});