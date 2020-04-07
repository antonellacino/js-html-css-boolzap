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
            $('.messages').append(msg);
            $('.footer input').val("");
            $('.fa-microphone').removeClass('hidden');
            $('.fa-telegram-plane').addClass('hidden');
        });



});