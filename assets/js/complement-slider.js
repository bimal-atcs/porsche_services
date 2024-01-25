$(".complement-slider").slick({
    dots: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    infinite: false,
    responsive: [
        {
            breakpoint: 1920, // below from 1919px
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1280, // below from 1279
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768, // below from 767
            settings: {
                slidesToShow: 1
            }
        }
    ]
});