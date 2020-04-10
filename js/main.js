$(document).ready(function() {
    var contactList = $('.chat-list .notification');
    var planeIcons = $('.plane');
    var microphoneIcons = $('.mic');
    var msgInput = $('.footer input');
    var searchInput = $('.search input');
    var chat = $('.chat');
    var msg = "";

    console.log(planeIcons);

    //status hover chat-list-------------------------------
    contactList.mouseenter(
        function() {
            $(this).addClass('hover');
        }
    );
    contactList.mouseleave(
        function() {
            $(this).removeClass('hover');
        }
    );

    //gestione icone invio msg-------------------------------
    msgInput.click(
        function() {
            microphoneIcons.addClass('hidden');
            planeIcons.removeClass('hidden');
        }
    );


    //gestione invio msg-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
    planeIcons.click(
        function() {
            msg = msgInput.val();
            sendMessage(msg);
        }
    );

    msgInput.keypress(function(e) {
        var key = e.which;
        if (key == 13) {
            msg = msgInput.val();
            sendMessage(msg);
        }
    });

    //gestione ricerca contatti-------------------------------
    searchInput.keyup(
        function() {
            var userText = searchInput.val().toUpperCase();
            contactList.each(
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
    //Associo il titolare della condersazione con la propria chat
    contactList.click(
        function() {
            var indexContact = $(this).index();
            contactList.removeClass('active');
            chat.removeClass('view');
            $(this).addClass('active');
            chat.addClass('hidden');
            chat.eq(indexContact).removeClass('hidden').addClass('view');
        }
    );

    $('.messagesContainer').on("click", "i",
        function() {
            $(this).parents().hide;

        }
    )


    //------------------------FUNZIONI-------------------------
    //funzione invio messaggi
    function sendMessage(message) {
        $('.view ul').append("<li class='sendMsg clear'><p>" + msg + "<i class='fas fa-angle-down icons hidden'></i></p><p class='littleFont'>12:45</p></li>");
        msgInput.val("");
        microphoneIcons.removeClass('hidden');
        planeIcons.addClass('hidden');
        setTimeout(receptMessage, 1000);
    };

    //funzione x ricezione messaggi
    function receptMessage() {
        $('.view ul').append("<li class='receiptMsg clear'><p>ok<i class='fas fa-angle-down icons hidden'></i></p><p class='littleFont'>12:45</p></li>");
    }





});