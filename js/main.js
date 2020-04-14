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
            console.log(userText);

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
            $('ul.delete').addClass('hidden');
        }
    );

    $(document).on("click", "i",
        function() {
            var msgSelected = $(this).closest('li');
            msgSelected.siblings('li').find('ul.delete').addClass('hidden');
            msgSelected.find('ul.delete').toggleClass('hidden');
        }
    )

    $('.messagesContainer').on("click", "a.remove",
        function() {
            $(this).closest('li.msg').remove();
        }
    )


    //------------------------FUNZIONI-------------------------
    //funzione invio messaggi
    function sendMessage(message) {
        $('.view ul.messagesList').append("<li class='sendMsg clear positionRelative msg'><p>" + msg + "<i class='fas fa-angle-down icons visibility'></i></p><p class='littleFont'>12:45</p><ul class='delete deleteRight hidden positionRight'><li><a href='#'>Info messaggio</a></li><li><a href='#' class='remove'>Cancella Messaggio</a></li></ul></li>");
        msgInput.val("");
        microphoneIcons.removeClass('hidden');
        planeIcons.addClass('hidden');
        setTimeout(receiptMessage, 1000);
    };

    //funzione x ricezione messaggi
    function receiptMessage() {
        $('.view ul.messagesList').append("<li class='receiptMsg clear positionRelative msg'><p>ok<i class='fas fa-angle-down icons visibility'></i></p><p class='littleFont'>12:45</p><ul class='delete hidden'><li><a href='#'>Info messaggio</a></li><li><a href='#' class='remove'>Cancella Messaggio</a></li></ul></li>");
    }





});