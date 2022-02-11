window.onload = () => {
    var collections_intro_swiper = new Swiper('.collections__introContainer', {
        direction:"vertical",
        slidesPerView: 1,
        speed:500,
        allowTouchMove: false,
        effect:"creative",
        creativeEffect: {
            prev: {
                translate: [0, -200, 0],
                opacity:0,
              },
              next: {
                translate: [0, 200, 0],
                opacity:0
              },
        }
        
    });

    /* Banner Swiper */
    new Swiper('.banner', {
        loop: true,
        centeredSlides: true,
        slidesPerView: "auto",
        allowTouchMove: false,
        spaceBetween:0,
        speed:800,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: '.banner__button-next',
            prevEl: '.banner__button-prev',
        },

        effect: 'coverflow',
        coverflowEffect: {
            rotate: 30, 
            depth: 10
        },

        breakpoints:{
            425: {
                spaceBetween: 5
            }, 
            768: {
                spaceBetween: 30
            }, 
            1024: {
                spaceBetween: 50
            },
            1200: {
                spaceBetween: 100
            }, 
        }
    });

    /* collections Swiper */
    new Swiper('.collections__mask', {
        speed:800,
        
        navigation: {
            nextEl: '.collections__button-next',
            prevEl: '.collections__button-prev',
            disabledClass:"disable"
        },

        on:{
            slideNextTransitionStart: (e) => {
                collections_intro_swiper.slideNext()
            },

            slidePrevTransitionStart: (e) => {
                collections_intro_swiper.slidePrev()
            }
        }
    });

    gsap.registerPlugin(ScrollTrigger);

    /* Scrolltrigger production */
    let doodleTrigger_sign = gsap.timeline({
        scrollTrigger: {
            trigger: ".banner",
            start:"top center"
        },
    })

    doodleTrigger_sign.to(".banner__doodle-sign path" , {
        strokeDashoffset: 0,
        duration:1,
        ease: "power1.in"
    })


    let productSliderTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: ".productSlider",
            start:"20% center",
            end:"+=500 center",
            scrub:true
        },
    })

    productSliderTrigger.to(".productSlider__item:nth-of-type(1)" , {
        width:'30%',

        onComplete: () => {
            for(let i = 1 ; i < 4 ; i++){
                document
                .querySelector(`.productSlider__item:nth-of-type(${i}) img`)
                .setAttribute("src" , `./assets/image/Seasonal Item/item${i + 3}.png`);
            }
        },
        onReverseComplete: () => {
            for(let i = 1 ; i < 4 ; i++){
                document
                .querySelector(`.productSlider__item:nth-of-type(${i}) img`)
                .setAttribute("src" , `./assets/image/Seasonal Item/item${i}.png`);
            }
        }
    })

    productSliderTrigger.to(".productSlider__item:nth-of-type(2)" , {
        width:'50%'
    },"<")

    productSliderTrigger.to(".productSlider__item:nth-of-type(2)" , {
        width:'30%',

        onComplete: () => {
            for(let i = 1 ; i < 4 ; i++){
                document
                .querySelector(`.productSlider__item:nth-of-type(${i}) img`)
                .setAttribute("src" , `./assets/image/Seasonal Item/item${i + 6}.png`);
            }
        },
        onReverseComplete: () => {
            for(let i = 1 ; i < 4 ; i++){
                document
                .querySelector(`.productSlider__item:nth-of-type(${i}) img`)
                .setAttribute("src" , `./assets/image/Seasonal Item/item${i + 3}.png`);
            }
        }
    },"+1.5")

    productSliderTrigger.to(".productSlider__item:nth-of-type(3)" , {
        width:'50%'
    } , "<") 

    /* Scrolltrigger marquee */
    let marqueeTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: ".marquee h1",
            start:"top center",
            end:`+=${window.innerWidth < 1024 ? 240 : 1320} center`,
            scrub:true,
            pin:true
        },
    });

    marqueeTrigger.to(".marquee h1" , {
        x:window.innerWidth < 1024 ? -400 : -1200
    })

    let doodleTrigger_line1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".productSlider",
            start:"top center"
        },
    })

    doodleTrigger_line1.to(".productSlider__doodle-line1 path" , {
        strokeDashoffset: 0,
        duration:1,
        ease: "power1.in"
    })

    let doodleTrigger_line2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".productSlider",
            start:"center center"
        },
    })

    doodleTrigger_line2.to(".productSlider__doodle-line2 path" , {
        strokeDashoffset: 0,
        duration:1,
        ease: "power1.in"
    })

    let doodleTrigger_line3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".collections",
            start:"-=200 center"
        },
    })

    doodleTrigger_line3.to(".collections__doodle-line path" , {
        strokeDashoffset: 0,
        duration:1,
        ease: "power1.in"
    })


    let modalTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: ".modalBlock",
            start:"10% 70%",
            end:"bottom bottom",
            scrub:true
        },
    })

    modalTrigger.to(".modalBlock__logo" , {
        width: window.innerWidth < 1024 ? "20%" : "15%"
    })

    modalTrigger.to(".modalBlock h1" , {
        x:-300
    } , "<")
    
}