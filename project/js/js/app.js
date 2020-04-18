



$(document).ready(function () {

    var speed = 5000;
    var run = setInterval('rotate()', speed);

    var item_width = $('#itens li').outerWidth();
    var left_value = item_width * (-1);
    $('#itens li:first').before($('#itens li:last'));
    $('#itens ul').css({ 'left': left_value });
    $("#prev").click(function () {
        var left_intend = parseInt($('#itens ul').css('left')) + item_width;
        $('#itens ul').animate({ 'left': left_intend }, 200, function () {
            $('#itens li:first').before($('#itens li:last'));
            $('#itens ul').css({ 'left': left_value });
        });
    });
    $("#next").click(function () {
        var left_intend = parseInt($('#itens ul').css('left')) - item_width;
        $('#itens ul').animate({ 'left': left_intend }, 200, function () {
            $('#itens li:last').after($('#itens li:first'));
            $('#itens ul').css({ 'left': left_value });
        });
    });

});
function rotate() {

    $('#next').click();

}





        
$(function () {
    var nav = $('.galeria')

    $(window).scroll(function () {
        if ($(this).scrollTop() >=0) {
            nav.addClass('animate')



        } else {
            nav.removeClass('animate');

        }
    })
        if ($(window).width() <=380)
            $('.galeria').removeClass('galeria1');


    
    })
$(function () {
    var nav = $('.Combo')

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            nav.addClass('animate')



        } else {
            nav.removeClass('animate');

        }
    })
})
$(document).ready(function () {
    console.log("document is ready");
    $('[data-toggle="offcanvas"], #navToggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })
});
window.onload = function () {
    console.log("window is loaded");
};