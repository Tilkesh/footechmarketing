$(document).ready(function(){

    $('.tab-content:first').show();
    $('.tab-navigation li:first').addClass('active');

    // $('.tab-navigation li').click(function(){
    $('.tab-navigation li').on('click',function(){
            let index =$(this).index();
            $('.tab-navigation li').removeClass('active');
            $(this).addClass('active');
            $('.tab-content').hide();
            $('.tab-content').eq(index).show();
            $('.tab-content').addClass('tabber_newclass');
    });
});


jQuery(".foodtech_slider").owlCarousel({
    autoplay: false,
    rewind: true, /* use rewind if you don't want loop */
    margin: 0,
    loop:true,
    center: true,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      1199: {
        items: 1
      },
  
      1200: {
        items: 3
      }
  
    
    }
  });


  jQuery(".foodtech_slider-single").owlCarousel({
    autoplay: false,
    rewind: true, /* use rewind if you don't want loop */
    margin: 0,
    loop:true,
    center: true,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      1199: {
        items: 1
      },
  
      1200: {
        items: 1
      }
  
    
    }
  });