$(document).ready(function() {
    var contatc = $('.chat-list .notification');
    var planeIcons = $('.fa-telegram-plane');
    var microphoneIcons = $('.fa-microphone');
    var msgInput = $('.footer input');
    var searchInput = $('.search input');

    var msg = "";


    //status hover chat-list-------------------------------
    contatc.mouseenter(
        function() {
            $(this).addClass('active');
        }
    );
    contatc.mouseleave(
        function() {
            $(this).removeClass('active');
        }
    );

    //gestione icone invio msg-------------------------------
    msgInput.click(
        function() {
            microphoneIcons.addClass('hidden');
            planeIcons.removeClass('hidden');
        }
    );


    //gestione invio msg-------------------------------
    planeIcons.click(
        function() {
            msg = msgInput.val();
            sendMessage(msg);
            setTimeout(receptMessage, 1000)
        }
    );

    //gestione ricerca contatti-------------------------------



    //------------------------FUNZIONI-------------------------
    //funzione invio messaggi
    function sendMessage(message) {
        $('ul').append("<li class='sendMsg clear'><p>" + msg + "</p><p class='littleFont'>12:45</p></li>");
        msgInput.val("");
        microphoneIcons.removeClass('hidden');
        planeIcons.addClass('hidden');
    };

    //funzione x ricezione messaggi
    function receptMessage() {
        $('ul').append("<li class='receiptMsg clear'><p>ok</p><p class='littleFont'>12:45</p></li>");

    }




});