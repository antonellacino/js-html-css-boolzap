$(document).ready(function() {
    var msg = "";


    $('.footer input').click(
        function() {
            $('.fa-microphone').addClass('hidden');
            $('.fa-telegram-plane').removeClass('hidden');
        }
    );

    $('.fa-telegram-plane').click(
        function() {
            msg = $('.footer input').val();
            console.log(msg);
            $('ul').append("<li class='sendMsg clear'><p>" + msg + "</p><p class='littleFont'>12:45</p></li>");
            $('.footer input').val("");
            $('.fa-microphone').removeClass('hidden');
            $('.fa-telegram-plane').addClass('hidden');
        }
    );



});