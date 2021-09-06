$( document ).ready(function() {
    $('#header').load('./front/layouts/header.html');
    $('#footer').load('./front/layouts/footer.html');

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            $(".backtotop").removeClass("hidden").addClass('visible');
            $('.navbar').addClass('fixedtop');
        } else {
            $(".backtotop").removeClass("visible").addClass('hidden');
            $('.navbar').removeClass('fixedtop');
        }
    });
});