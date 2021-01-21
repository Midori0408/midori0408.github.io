$(function() {

    // ヘッダーのロゴをクリックした時にページトップへ移動
    $('.header-logo').click(function(){
        $('html, body').animate({
            'scrollTop': 0
        }, 500);
    });

    // メニューのリンクをクリックしたら移動する
    $('.header-nav a').click(function() {
        var id = $(this).attr('href');
        var position = $(id).offset().top - 100;
        $('html, body').animate({
            'scrollTop': position
        }, 500);
    });

    // ハンバーガーバーガーメニュー版
    $('#js-global-menu a').click(function() {
        var id = $(this).attr('href');
        var position = $(id).offset().top - 58;
        $('html, body').animate({
            'scrollTop': position
        }, 500);
        $('#js-hamburger').attr('aria-expanded', 'false');
        $('#js-global-menu').attr('area-hidden', 'true');
        $('body').removeClass('is-drawerActive');
    });

    // お問い合わせボタン版
    $('.header-nav-contact').click(function() {
        var id = $(this).attr('href');
        var position = $(id).offset().top - 100;
        $('html, body').animate({
            'scrollTop': position
        }, 500);
    });
    $('.fv-contact').click(function() {
        var id = $(this).attr('href');
        var position = $(id).offset().top - 100;
        $('html, body').animate({
            'scrollTop': position
        }, 500);
    });


    // ハンバーガーメニュー
    $('#js-hamburger').click(function() {
        $('body').toggleClass('is-drawerActive');
        if ($(this).attr('aria-expanded') == 'false') {
            $(this).attr('aria-expanded', 'true');
            $('#js-global-menu').attr('area-hidden', 'false');
        } else {
            $(this).attr('aria-expanded', 'false');
            $('#js-global-menu').attr('area-hidden', 'true');
        }
    });
    $('#js-drawer-background').click(function() {
        $('body').removeClass('is-drawerActive');
        $('#js-hamburger').attr('aria-expanded', 'false');
        $('#js-global-menu').attr('area-hidden', 'true');
    });

    // worksスライダー
    var mySwiper = new Swiper('.swiper-container', {
        // 560px以下の画面サイズ
        speed: 1000,
        loop: true,
        slidesPerView: 1.3,
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            // 560px以上の画面サイズ
            560: {
                slidesPerView: 1.7,
                spaceBetween: 55,
            },
            // 960px以上の画面サイズ
            960: {
                slidesPerView: 3.7,
                spaceBetween: 35,
            },
            // 1220px以上の画面サイズ
            1220: {
                slidesPerView: 3.7,
                spaceBetween: 55,
            },
        },
        
    });

    // アコーディオンメニュー
    $('.jsAccordionTitle').click(function () {
        $(this).next().toggleClass('is-open');
        
    });

    // AOS
    AOS.init({
        offset: 120,
        delay: 100,
        duration: 700,
        easing: 'ease-out',
        once: true,
    });

    // 問い合わせ完了ページに飛ばさない
    $('#form').submit(function (event) {
        var formData = $('#form').serialize();
        $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScnh6FpeG-o4pC1w2AVFoaJRbLJR9UsUxsa6dsH5qJ2NwFCyA/formResponse",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function () {
            $(".end-message").fadeIn(1200);
            $(".submit-btn").fadeOut(500);
            },
            200: function () {
            $(".false-message").fadeIn(800);
            }
        }
        });
        event.preventDefault();
    });

    // 必須項目を埋めないと送信させない
    var $submitBtn = $('.submit-btn')
    $('#form input, #form textarea').on('change', function () {
        if (
        $('#form input[type="text"]').val() !== "" &&
        $('#form input[type="email"]').val() !== "" &&
        $('#form textarea').val() !== "" &&
        $('#form #agree').prop('checked') === true
        ) {
        $submitBtn.prop('disabled', false);

        } else {
        $submitBtn.prop('disabled', true);
        }
    });



});
