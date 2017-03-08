//Burger ico

$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});


//Toggle 

function menu(){
    if ($('.nav_resp').hasClass('toggle')){
        $('.nav_resp').removeClass('toggle');
    } else {    
        $('.nav_resp').addClass('toggle');
    }
};

$('#nav-icon1').click(function(){
    menu();
});


//Swiper

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });


