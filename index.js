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
        width: window.innerWidth < 1200 ? '30%' : '50%',

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
        width:window.innerWidth < 1200 ? '50%' : '80%',
    },"<")

    productSliderTrigger.to(".productSlider__item:nth-of-type(2)" , {
        width:window.innerWidth < 1200 ? '30%' : '50%',

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
        width:window.innerWidth < 1200 ? '50%' : '80%',
    } , "<") 

    /* Scrolltrigger marquee */
    let marqueeTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: ".marquee h1",
            start:"top center",
            end:`+=${window.innerWidth < 1200 ? 240 : 1320} center`,
            scrub:true,
            pin:true
        },
    });

    marqueeTrigger.to(".marquee h1" , {
        x:window.innerWidth < 1200 ? -400 : -1200
    })

    let doodleTrigger_line1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".productSlider__doodle-line1",
            start:"top center",
            toggleActions: "restart none restart none"
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
            start:"center center",
            toggleActions: "restart none restart none"
        },
    })

    doodleTrigger_line2.to(".productSlider__doodle-line2 path" , {
        strokeDashoffset: 0,
        duration:1,
        ease: "power1.in"
    })

    let doodleTrigger_line3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".collections__doodle-line",
            start:"top bottom",
            markers:true,
            toggleActions: "restart none restart none"
        },
    })

    doodleTrigger_line3.to(".collections__doodle-line path" , {
        strokeDashoffset: 0,
        duration:1,
        ease: "power1.in"
    })


    let modelTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: ".modelBlock",
            start:"10% 70%",
            end:"bottom bottom",
            scrub:true
        },
    })

    modelTrigger.to(".modelBlock__logo" , {
        width: window.innerWidth < 1200 ? "20%" : "15%"
    })

    modelTrigger.to(".modelBlock h1" , {
        x:-300
    } , "<")

    let boxRotate = {
        degree:0
    }
    modelTrigger.to(boxRotate , {
        degree:Math.PI * 2,
        ease:Power0.easeNone
    } , "<")




    /* three.js */
    //scene
    var scene = new THREE.Scene();
    let el_modelBlock = document.querySelector(".modelBlock").getBoundingClientRect()

    //camera
    var camera = new THREE.PerspectiveCamera( 45, el_modelBlock.width/el_modelBlock.height, 0.1, 1000 );
    camera.position.set(0, 0, 0.28) 
    camera.lookAt(scene.position) 

    //light
    const light = new THREE.DirectionalLight( 0xffffff , 5 );
	light.position.set( 0, 0, 2 );
	scene.add( light );

    spotLight = new THREE.SpotLight( 0xffffff, 1 );
    spotLight.position.set( 0 , 100 , 0 );
    spotLight.angle = 0.01;
    spotLight.penumbra = 0.1;
    spotLight.decay = 2;
    spotLight.distance = 200;
    spotLight.castShadow = true;
    scene.add( spotLight );


    //renderer
    var renderer = new THREE.WebGLRenderer({
        antialias:true,
        alpha: true
    });

    renderer.setClearColor( 0x000000 , 0 );
    renderer.setSize( el_modelBlock.width , el_modelBlock.height );
    renderer.shadowMap.enable = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	renderer.outputEncoding = THREE.sRGBEncoding;

    // Append Renderer to DOM
    document.querySelector(".modelBlock__3Dmodel").appendChild( renderer.domElement );


    // Render Loop
    var render = function () {
        requestAnimationFrame( render );

        pivot.rotation.y = boxRotate.degree;

        renderer.render(scene, camera);
    };

    let StoneModel;
    let pivot;
    const loader = new THREE.GLTFLoader();
    loader.load(
        './assets/stone.gltf',
        function ( gltf ) {

            StoneModel = gltf.scene;
            StoneModel.position.set(-0.02,-0.1,-0.05);
            
            pivot = new THREE.Group();
            if(window.innerWidth < 1200){
                let acc = window.innerWidth / 1200
                pivot.scale.set(acc , acc , acc)
            }else{
                pivot.scale.set(0.9 , 0.9 , 0.9)
            }

            pivot.add( StoneModel );
            scene.add( pivot );
    
            render();

        },
        function(xhr){
            console.log((xhr.loaded / xhr.total * 100) + "% loaded")
        }
    );

    
}