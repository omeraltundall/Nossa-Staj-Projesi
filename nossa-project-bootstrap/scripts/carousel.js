$(function(){
    $('.owl-top-content').owlCarousel({
        loop: true,
        margin: 10,
        smartSpeed: 500,
        autoWidth:true,
        center:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })
})

$(function () {
    $('.owl-intro').owlCarousel({
        loop: true,
        smartSpeed: 1500,
        autoplay:true,
        autoplayTimeout:10000,
        lazyload:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
})