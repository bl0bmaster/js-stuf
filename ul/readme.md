# UL

https://github.com/bl0bmaster/js-stuff

Snippet to create a ul/li structure.

Uses :

    var msg = ul({
            parentTag : "messages",
            childTag : "message"
        } );
    msg("first");
    msg("second");
    msg("third");
    document.documentElement.appendChild(msg());

resulted DOM :

    <!-- in HTML... -->;
    <body>;
    <messages>;
    <message>;first</message>;
    <message>;second</message>;
    <message>;third</message>;
    </messages>;
    </body>;
