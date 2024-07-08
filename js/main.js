// intialization plugins
$(document).ready(function () {

    //animation icon toggler of navbar
    $(`.navbar-toggler`).click(function() {
        $(`.navbar-toggler`).toggleClass(`active`);
    });

    //Wow intit
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();

    //fancybox
    $("[data-fancybox]").fancybox({
        selector: '[data-fancybox="images"]',
        // loop: true
    });

    //  loader 
    // $(window).on("load", function() {
    //     $("#preloader").addClass("isdone");
    // });

});

// Swiper
$(document).ready(function () {

    //////////////////// partners_swiper  ////////////////////
    var swiper = new Swiper('.partners_sec .partners_swiper', {
        // loop: true,
        speed: 900,
        slidesPerView: 2,
        spaceBetween: 15,
        // autoplay: {
        //     delay: 2500,
        // },
        navigation: {
            nextEl: '.partners_sec .swiper-button-next',
            prevEl: '.partners_sec .swiper-button-prev',
        },
        pagination: {
            el: '.partners_sec .swiper-pagination',
            clickable: true
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 20,
                allowTouchMove: false,
                preventClicks: false
            },
        }
    });

    //////////////////// partners_swiper  ////////////////////
    var swiper = new Swiper('.partners_sec2 .partners_swiper2', {
        // loop: true,
        speed: 900,
        slidesPerView: 2,
        spaceBetween: 15,
        // autoplay: {
        //     delay: 2500,
        // },
        navigation: {
            nextEl: '.partners_sec2 .swiper-button-next',
            prevEl: '.partners_sec2 .swiper-button-prev',
        },
        pagination: {
            el: '.partners_sec2 .swiper-pagination',
            clickable: true
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 8,
                spaceBetween: 20,
                allowTouchMove: false,
                preventClicks: false
            },
        }
    });

    //////////////////// Swiper  ////////////////////
    // var swiper = new Swiper(' .swiper-container', {
    //     // loop: true,
    //     speed: 900,
    //     slidesPerView: 1,
    //     spaceBetween: 15,
    //     // autoplay: {
    //     //     delay: 2500,
    //     // },
    //     //In Tabs
    //     // observer: true,
    //     // observeParents: true,
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true
    //     },
    //     breakpoints: {
    //         640: {
    //             slidesPerView: 2,
    //             spaceBetween: 20,
    //         },
    //         768: {
    //             slidesPerView: 3,
    //             spaceBetween: 20,
    //         },
    //         1024: {
    //             slidesPerView: 5,
    //             spaceBetween: 20,
    //             // Prevent swiper in lg screens
    //             // allowTouchMove: false,
    //             // preventClicks: false
    //         },
    //     }
    // });

});


//Cursor
$( function() {
    function mousecursor() {
        if ($("body")) {
            const e = document.querySelector(".cursor-inner"),
                t = document.querySelector(".cursor-outer");
            let n, i = 0,
                o = !1;
            window.onmousemove = function (s) {
                o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
            },
            $("body").on("mouseenter", ".hover_circle, .cursor-pointer", function () {
                e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
            })
            , $("body").on("mouseleave", ".hover_circle, .cursor-pointer", function () {
                $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
            }),

                // $("body").on("mouseenter", ".swiper-wrapper.curs-scroll", function () {
                //     e.classList.add("cursor-scroll"), t.classList.add("cursor-scroll")
                // }), $("body").on("mouseleave", ".swiper-wrapper.curs-scroll", function () {
                //     $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-scroll"), t.classList.remove("cursor-scroll"))
                // }),

                e.style.visibility = "visible", t.style.visibility = "visible"
        }
    };

    $(function () {
        mousecursor();
    });

    $("body").mousedown(function(){
        $(".cursor-outer").css({
            width: "15px",
            height: "15px"
        });
    })

    $("body").mouseup(function(){
        $(".cursor-outer").css({
            width: "25px",
            height: "25px"
        });
    })

    $("a").mouseenter(function(){
        $(".cursor-outer").css({
            width: "60px",
            height: "60px"
        });
    })

    $("a").mouseleave(function(){
        $(".cursor-outer").css({
            width: "25px",
            height: "25px"
        });
    })

});


//GSAP
$(function () {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother ,SplitText );

    // create the smooth scroller FIRST!
    const smoother = ScrollSmoother.create({
        content: "#scrollsmoother-container",
        smooth: 1.5,
        normalizeScroll: true,
        ignoreMobileResize: true,
        effects: true,
    });


    var tl = gsap.timeline(),
      mySplitText = new SplitText(".txt_anim", { type: "words,chars" }),
      chars = mySplitText.chars; //an array of all the divs that wrap each character
    
    gsap.set(".txt_anim", { perspective: 400 });
    
    
    tl.from(chars, {
        duration: 0.8,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.01
    });
    
    
    gsap.timeline({ scrollTrigger: { 
        trigger: ".about_sec1",  start: "-600 top",  scrub: !0 
    } }).to(".about_sec1 .img_box img", {
            x: 0, y: 0, scale: 1.5, duration: 20, ease: "linear", delay: 1 
        }
    ),
    gsap.timeline({ scrollTrigger: { 
        trigger: ".header",  start: "-600 top",  scrub: !0 
    } }).to(".header .robot", {
        x: -100,
        y: 10,
        scale: 1,
        duration: 20,
        ease: "none",
        delay: 0,
        // rotationZ: -90,
        }
    ),
    gsap.timeline({ scrollTrigger: { 
        trigger: ".about_sec2",  start: "-600 top",  scrub: !0 
    } }).to(".about_sec2 .img_box img", {
            x: 0, y: 0, scale: 1.5, duration: 20, ease: "linear", delay: 1 
        }
    ),
    gsap.timeline({ scrollTrigger: { 
        trigger: ".vision_sec",  start: "-600 top",  scrub: !0 
    } }).from(".vision_sec .vision_card" , { x: 0,y: 0, scale: 0.5,duration: 15, ease: "none",delay: 1,
    }).to(".vision_sec .vision_card", {
            x: 0,y: 0, scale: 1,duration: 15, ease: "none",delay: 1
        }
    ),
    gsap.timeline({ scrollTrigger: { 
        trigger: ".team_sec",  start: "-600 top",  scrub: !0 
    } }).from(".team_sec .team_card" , { x: 0,y: 0, scale: 0.5,duration: 15, ease: "none",delay: 1,
    }).to(".team_sec .team_card", {
            x: 0,y: 0, scale: 1,duration: 15, ease: "none",delay: 1
        }
    ),
    gsap.timeline({ scrollTrigger: { 
        trigger: ".banner_sec",  start: "-600 top",  scrub: !0 
    } }).from(".banner_sec .robot" , { x: -100,y: 0, scale: 1,duration: 15, ease: "none",delay: 1,
    }).to(".banner_sec .robot", {
            x: 0,y: 0, scale: 1,duration: 15, ease: "none",delay: 1
        }
    );



    // let t = document.querySelectorAll(".pg_header .anim_txt");
    // function r() {
    //     t.forEach(e => {
    //         e.anim && (e.anim.progress(1).kill(), e.split.revert()), e.split = new SplitText(e, {
    //             type: "lines,words,chars",
    //             linesClass: "split-line"
    //         }), e.anim = gsap.from(e.split.chars, {
    //             scrollTrigger: {
    //                 trigger: e,
    //                 toggleActions: "play none none none",
    //                 start: "-200 50% "
    //             },
    //             duration: .3,
    //             ease: "circ.out",
    //             y: 150,
    //             rotation: 90,
    //             stagger: .02,
    //             delay: 0 ,
    //             opacity: 0
    //         })
    //     })
    // }
    // ScrollTrigger.addEventListener("refresh", r), r();

    
});