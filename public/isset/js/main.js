$(window).on('load', () => {

    let rootFont = parseInt($(':root').css('font-size'))


    
    //______________HEADER_______________

    $('.header-mobile').click(function() {
        $(this).toggleClass('active')
        $('.mobile-menu').slideToggle(500)
    })

    //_______________MAIN________________


    $('.main-carousel').owlCarousel({
        animateIn: 'fadeInOwl',
        animateOut: 'fadeOutOwl',
        smartSpeed: 1000,
        dots: true,
        nav: false,
        items: 1,
        mouseDrag: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
    })

    $('.main__btn').hover(function() {
        $(this).parent().addClass('hover')
    }, function() {
        $(this).parent().removeClass('hover')
    })


    //_______________SERVICE________________


    $('.services-carousel').owlCarousel({
        animateIn: 'fadeInOwl',
        animateOut: 'fadeOutOwl',
        smartSpeed: 1000,
        dots: false,
        nav: false,
        items: 1,
        mouseDrag: false,
        loop: true,
        margin: 10,
    })


    $('.services-arrows .arrow-left').click(() => {
        $('.services-carousel').trigger('prev.owl.carousel', [700]);
    })

    $('.services-arrows .arrow-right').click(() => {
        $('.services-carousel').trigger('next.owl.carousel', [700]);
    })




    //_______________AREA________________


    $('.area-carousel').owlCarousel({
        smartSpeed: 1000,
        dots: false,
        nav: false,
        items: 1,
        margin: rootFont*2,
        mouseDrag: false,
        loop: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: rootFont*2.5,
                margin: rootFont,
            },

            500: {
                items: 2,
            },
    
            992: {
                items: 3,
            },
        }
    })


    $('.area-arrows .arrow-left').click(() => {
        $('.area-carousel').trigger('prev.owl.carousel', [700]);
    })

    $('.area-arrows .arrow-right').click(() => {
        $('.area-carousel').trigger('next.owl.carousel', [700]);
    })


    
    //_______________PROJECTS________________


    $('.projects-carousel').owlCarousel({
        smartSpeed: 1000,
        dots: false,
        nav: false,
        items: 1,
        margin: rootFont*2,
        mouseDrag: false,
        loop: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: rootFont*2.5,
                margin: rootFont,
            },

            500: {
                items: 2,
            },
        }
    })


    $('.projects-arrows .arrow-left').click(() => {
        $('.projects-carousel').trigger('prev.owl.carousel', [700]);
    })

    $('.projects-arrows .arrow-right').click(() => {
        $('.projects-carousel').trigger('next.owl.carousel', [700]);
    })


    $('.projects-faq__question').click(function() {
        if($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active')
            $(this).parent().find('.projects-faq__answer').slideUp(400)
        } else {
            $('.projects-faq__item').removeClass('active')
            $('.projects-faq__answer').slideUp(400)
            $(this).parent().addClass('active')
            $(this).parent().find('.projects-faq__answer').slideDown(400)
        }
    })


    // __________NEWS__________


    $('.news-choose li').click(function() {
        let index = $(this).index()
        $('.news-choose li').removeClass('current')
        $(this).addClass('current')
        $('.news-tab').removeClass('current')
        $('.news-tab').eq(index).addClass('current')
    })


    //_____________MAP________________

    let map = $('#map')[0]

    if(map) {
        ymaps.ready(init)
    }
    function init() {
        var myMap = new ymaps.Map("map", {
            center: [41.320694554614235, 69.30099585767131],
            zoom: 14,
        }, {
            searchControlProvider: 'yandex#search'
        },
    );
    myMap.geoObjects
    .add(new ymaps.Placemark([41.320694554614235, 69.30099585767131], {
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker.svg',
        iconImageSize: [3.25*rootFont, 4.5*rootFont],
    }))

        myMap.behaviors.disable('scrollZoom')


            
        myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)'
        
    }

    // __________GOTOP__________

    $('.footer-arrow').click((e) => {
        e.preventDefault()
        window.scrollTo({top: 0, behavior: 'smooth'})
    })

    //______________FORMS________________

    $('.customSelect').customSelect()

    $('.contact-head li').click(function() {
        let index = $(this).index()
        $('.contact-head li').removeClass('current')
        $(this).addClass('current')
        $('.contact-tab').removeClass('current')
        $('.contact-tab').eq(index).addClass('current')
    })
    
    $('.form_name').on('keydown', function(e) {
        const key = e.key;
        if (!/^[a-zA-Zа-яА-Я\s]*$/.test(key)) {
            e.preventDefault();
        }
    })

    $('.form_tel').on('input', event => {
        const inputValue = event.target.value;
        const sanitizedValue = inputValue.replace(/[^\d+\-() ]/g, '');
        event.target.value = sanitizedValue;
      });

    
    //__________WOW____________


    new WOW({
        offset: 50,
        mobile: false, 
    }).init();

})