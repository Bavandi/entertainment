import { Injectable } from '@angular/core';

declare const $: any;
declare const WOW: any;
declare const Swiper: any;

@Injectable({
  providedIn: 'root'
})
export class JsPluginsInitService {

  constructor() { }

  initializeTab() {
    // TAB
    $(".tab-nav li").on('click', function (e: any) {
      const this$ = $(e.currentTarget);

      $(".tab-item").hide();
      $(".tab-nav li").removeClass('active');
      this$.addClass("active");
      const selected_tab = this$.find("a").attr("href");
      $(selected_tab).stop().show();
      return false;
    });
  }

  initializeLogoHover() {
    // LOGO HOVER
    $(".site-menu ul li").hover(function (e: any) {
      const currentTarget = e.currentTarget;

      $('.site-menu ul li').not(currentTarget).css({
        "opacity": "1"
      });
    },
      function (e: any) {
        const currentTarget = e.currentTarget;

        $('.site-menu ul li').not(currentTarget).css({
          "opacity": "1"
        });
      });
  }

  initializeHamburgerMenu() {
    // HAMBURGER MENU
    const main = function () {
      $('.hamburger-menu').click(function () {
        $('.side-widget').animate({
          left: "0px"
        }, 200, function () {

          $(document).on("click.menu", function (event: any) {
            var target = $(event.target); console.log(target);
            if (!target.closest(".side-widget").length || target.closest(".closed").length) {
              closeMenu(function () {
                $(document).off("click.menu");
              });
            }
          })

        });
      });



      function closeMenu(callback: Function) {
        $('.side-widget').animate({
          left: "-100%"
        }, 200);
        $('.hamburger-menu').show();
        if ($.isFunction(callback)) callback();
      }
    };

    main();
  }

  initializePageTransition() {
    // PAGE TRANSITION
    $('body a').on('click', function (e: any) {
      const currentTarget = e.currentTarget
      const this$ = $(currentTarget);

      var target = this$.attr('target');
      var fancybox = this$.data('fancybox');
      var url = currentTarget.getAttribute("href");
      if (target != '_blank' && typeof fancybox == 'undefined' && url.indexOf('') < 0) {


        e.preventDefault();
        var url = currentTarget.getAttribute("href");
        if (url.indexOf('') != -1) {
          var hash = url.substring(url.indexOf('#'));


          if ($('body ' + hash).length != 0) {
            $('.page-transition').removeClass("active");


          }
        } else {
          $('.page-transition').toggleClass("active");
          setTimeout(function () {
            window.location = url;
          }, 1000);

        }
      }
    });
  }



  initializeDataBackgroundImage() {
    // DATA BACKGROUND IMAGE
    const pageSection = $("*");
    pageSection.each(function (indx: number) {
      const element = pageSection[indx];
      const element$ = $(element);

      if (element$.attr("data-background")) {
        element$.css("background", "url(" + element$.data("background") + ")");
      }
    });
  }

  initializeDataBackgroundColor() {
    // DATA BACKGROUND COLOR
    var pageSection = $("*");
    pageSection.each(function (indx: number) {
      const element = pageSection[indx];
      const element$ = $(element);

      if (element$.attr("data-background")) {
        element$.css("background", element$.data("background"));
      }
    });
  }

  initializeWowAnimation() {
    // WOW ANIMATION 
    const wow = new WOW({
      animateClass: 'animated',
      offset: 0
    });
    wow.init();
  }

  initializeCarouselClassesSlider() {
    // CAROUSEL CLASSES SLIDER
    const swiper = new Swiper('.carousel-classes', {
      slidesPerView: '4',
      spaceBetween: 30,
      loop: 'true',
      draggable: 'true',
      navigation: {
        prevEl: '.button-prev1',
        nextEl: '.button-next1',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }
    });
  }

  initializeMainSlider() {
    // MAIN SLIDER
    const swiper = new Swiper('.main-slider', {
      slidesPerView: '1',
      speed: 900,
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: '.button-prev',
        nextEl: '.button-next',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  initializeCounter() {
    // COUNTER
    $(document).scroll(function () {
      const odometerElements = $('.odometer');
      odometerElements.each(function (indx: number) {
        const odometerEl = odometerElements[indx];
        const odometerEl$ = $(odometerEl);

        var parent_section_postion = odometerEl$.closest('section').position();
        var parent_section_top = parent_section_postion.top;
        if ($(document).scrollTop() > parent_section_top - 300) {
          if (odometerEl$.data('status') == 'yes') {
            odometerEl$.html(odometerEl$.data('count'));
            odometerEl$.data('status', 'no');
          }
        }
      });
    });

  }


  initializeShowPreloader() {
    console.info("initializeShowPreloader")
    // PRELOADER
    const timeout = 500;

    $("body").removeClass("page-loaded");

  }

  initializePreloader() {
    console.info("initializePreloader")
    // PRELOADER
    const timeout = 500;

    $("body").addClass("page-loaded");
  }

  initializeAccordion() {
    // accordion
    let question = document.querySelectorAll(".question") as NodeListOf<any>;

    question.forEach(question => {
      question.addEventListener("click", (event: any) => {
        const active = document.querySelector(".question.active") as any;
        if (active && active !== question) {
          active.classList.toggle("active");
          active.nextElementSibling.style.maxHeight = 0;

        }
        question.classList.toggle("active");
        const answer = question.nextElementSibling;
        if (question.classList.contains("active")) {
          answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
          answer.style.maxHeight = 0;
        }
      })
    })
  }

  initializeSticky() {
    //sticky
    $(window).scroll(function (event: any) {
      const this$ = $(event.currentTarget);
      if (this$.scrollTop() > 100) {
        $('.navbar').addClass('sticky')
      } else {
        $('.navbar').removeClass('sticky')
      }
    });
  }

  initializeTabContent() {
    const tabContents$ = $('.tab-content');

    tabContents$.each(function (i: number) {
      const element = tabContents$[i];
      const element$ = $(element);

      var tabTitle = element$.data('tab-title');
      var current = element$.hasClass('current') ? "current" : "";
      var newTab = $('<li class="tab-link"></li>');
      newTab.html(tabTitle)
        .addClass(current)
        .attr('data-tab', element$.attr('id'));
      $('ul.tabs').append(newTab)
    })

    $(document).on('click', '.tabs li', function (event: any) {
      const element = event.currentTarget;
      const element$ = $(element);
      var tab_id = element$.attr('data-tab');

      $('.tabs li').removeClass('current');
      tabContents$.removeClass('current');

      element$.addClass('current');
      $("#" + tab_id).addClass('current');
    });
  }

  manuallyScroll() {
    $("html,body").stop().animate({ scrollTop: "0" }, 100);
  }

  goUp() {
    $("#top").click(function () {
      $("html,body").stop().animate({ scrollTop: "0" }, 100);
    });

    $(window).scroll(function () {
      var uzunluk = $(document).scrollTop();
      if (uzunluk > 300) $("#top").fadeIn(500);
      else { $("#top").fadeOut(500); }
    });
  }

  initializeMag() {
    $('.gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image                      
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item: any) {
          return item.el.attr('title');
        }
      }
    });
  }
}



