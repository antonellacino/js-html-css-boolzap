$(document).ready(function() {
    var contact = $('.chat-list .notification');
    var planeIcons = $('.fa-telegram-plane');
    var microphoneIcons = $('.fa-microphone');
    var msgInput = $('.footer input');
    var searchInput = $('.search input');

    var msg = "";


    //status hover chat-list-------------------------------
    contact.mouseenter(
        function() {
            $(this).addClass('active');
        }
    );
    contact.mouseleave(
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
    searchInput.keyup(
        function() {
            var userText = searchInput.val().toUpperCase();
            contact.each(
                function() {
                    var name = $(this).find('span.fontBold').text().toUpperCase();
                    if (name.includes(userText)) {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                }
            )

        }
    );
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