const toggle = document.getElementById('toggle'),
    mobileNav = document.getElementById('side-drawer');

toggle.onclick = function(){
    toggle.classList.toggle('toggle_active');
    mobileNav.classList.toggle('sidebar_active');
}
function closeSideDrawer() {
    const toggle = document.getElementById('toggle'),
        mobileNav = document.getElementById('side-drawer');
    toggle.classList.remove("toggle_active");
    mobileNav.classList.remove("sidebar_active");
}
$(document).ready(function($) {
    "use strict";
    $('#slider_section_carousel').owlCarousel({
        loop: true,
        center: true,
        items: 1,
        margin: 0,
        autoplay: true,
        Width:100,
        dots:false,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        // responsive: {
        //     0: {
        //         margin: 20
        //     },
        //     768: {
        //         margin: 15
        //     },
        //     1170: {
        //         margin: 10
        //     }
        // }

    });
    $('#goodEducation_section_carousel').owlCarousel({
        loop: true,
        center: true,
        items: 1,
        margin: 0,
        autoplay: true,
        Width:100,
        dots:true,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        // responsive: {
        //     0:{
        //         dots:false,
        //     },
        //     600:{
        //         dots:true,
        //     },
        //     1000:{
        //         dots:true,
        //     },
        //     1200:{
        //         dots:true,
        //     },
        //     1400:{
        //         dots:true,
        //     },
        //     1600:{
        //         dots:true,
        //     },
        //     1800:{
        //         dots:true,
        //     }
        // }

    });
    $('#mobile_screen_slide_section_carousel').owlCarousel({
        loop: true,
        center: true,
        items: 5,
        margin: 50,
        autoplay: true,
        autoWidth: false,
        dots:false,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        responsive: {
            0:{
                items: 2,
                margin: 20
            },
            600:{
                items: 3,
                margin: 50
            },
            1000:{
                items: 5,
                margin: 50
            },
            1200:{
                items: 5,
                margin: 50
            },
            1400:{
                items: 5,
                margin: 50
            },
            1600:{
                items: 5,
                margin: 50
            },
            1800:{
                items: 5,
                margin: 50
            }
        }

    });
    // $('#on_screen_banner_section_carousel').owlCarousel({
    //     loop: true,
    //     center: true,
    //     items: 1,
    //     margin: 15,
    //     autoplay: true,
    //     Width:100,
    //     dots:true,
    //     autoplayTimeout: 5000,
    //     smartSpeed: 450,
    //
    // });
    // $('.owl-carousel').owlCarousel({
    //     stagePadding: 0,
    //     items: 1,
    //     loop:true,
    //     margin:0,
    //     singleItem:true,
    //     nav:true,
    //     navText: [
    //         "<i class='fa fa-caret-left'></i>",
    //         "<i class='fa fa-caret-right'></i>"
    //     ],
    //     dots:true,
    //      autoplayHoverPause: true,
    //     // responsive:{
    //     //     0:{
    //     //         items:1,
    //     //         stagePadding: 60
    //     //     },
    //     //     600:{
    //     //         items:1,
    //     //         stagePadding: 100
    //     //     },
    //     //     1000:{
    //     //         items:1,
    //     //         stagePadding: 200
    //     //     },
    //     //     1200:{
    //     //         items:1,
    //     //         stagePadding: 250
    //     //     },
    //     //     1400:{
    //     //         items:1,
    //     //         stagePadding: 300
    //     //     },
    //     //     1600:{
    //     //         items:1,
    //     //         stagePadding: 350
    //     //     },
    //     //     1800:{
    //     //         items:1,
    //     //         stagePadding: 400
    //     //     }
    //     // }
    // });
    $('#about_video_section_carousel').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        nav:true,
        navText: [
            "<i class=\"fas fa-step-backward\"></i>",
            "<i class=\"fas fa-step-forward\"></i>"
        ],
        dots:false

    });

});
