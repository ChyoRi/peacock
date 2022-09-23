 /* 메인 슬라이드 스와이퍼 */

var swiper = new Swiper(".main_slide_frame", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

/* 헤더 배경색 함수 */

const headerFixed = () => {
    const header = $('header');
    // const logo = $('#logo > a > img');
    // const mainList = $('#nav > ul > li > a');
    // const searchBtn = $('.search_button');
    let headerHeight = header.outerHeight();
    let windowTop = $(document).scrollTop();

    // if (headerHeight <= windowTop) {
    //     // header.css({'background-color' : 'rgba(255, 255, 255, 0.9)'});
    //     // header.css({'height' : '6.4rem'});
    //     // mainList.css({'color' : '#000'});
    //     // logo.attr('src', './images/logo-header-black.png');
    //     // searchBtn.css({'background-position' : '-60px'});
    //     header.addClass('scrolled');
    // } else {
    //     // header.css({'background-color' : 'transparent'});
    //     // header.css({'height' : '8.8rem'});
    //     // mainList.css({'color' : '#fff'});
    //     // logo.attr('src', './images/logo-header.png');
    //     // searchBtn.css({'background-position' : '0'});
    //     header.removeClass('scrolled');
    // }
    const method = (headerHeight <= windowTop ? 'add' : 'remove') + 'Class';
    header[method]('scrolled');

}

$(document).scroll(headerFixed);
