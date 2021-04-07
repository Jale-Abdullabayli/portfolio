$('document').ready(function() {
    $('.items .item').each(function(index) {
        $(this).on("click", function() {
            $('.subjects > div').removeClass('active');
            $('.subjects > div').eq(index).addClass('active');
            $('.items .item').removeClass('active');
            $(this).addClass('active');
            $('footer .links a').removeClass('active');
            $('footer .links a').eq(index).addClass('active');
        })
    })

    $('footer .links a').each(function(index) {
        $(this).on("click", function() {
            $('footer .links a').removeClass('active');
            $(this).addClass('active');
            $('.subjects > div').removeClass('active');
            $('.subjects > div').eq(index).addClass('active');
            $('.items .item').removeClass('active');
            $('.items .item').eq(index).addClass('active');
        })
    })
})