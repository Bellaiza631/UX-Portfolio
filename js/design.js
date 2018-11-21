$('.menu-toggle').on("click touch",function() {

  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');

})

$("#button-cs").on('click', function(){
     window.location = "project.html";
});

$("#button-prototype").on('click', function(){
     window.location = "https://invis.io/HQJ5R2PZPDU";
});

/*-----------fade section----------------*/
$(function(){
  $('section').fadeIn('fast');
});

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('section').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            bottom_of_window = bottom_of_window + 600;
            if( bottom_of_window > bottom_of_object){

                $(this).animate({'opacity':'1'},1500);

            }

        });

    });

});

/*-----------------------------------------------------*/
