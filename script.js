// Dictionnaire avec la liste des jeux et leur lien
const games = {
    "enigmes": "/enigmes/index.html",
    "shifumi": "/shifumi/index.html",
    "pendu": "/pendu/index.html",
    "morpion": "/morpion/index.html",
};


// Fonction pour chopper le nom du jeu choisi
function getGameName() {
    var gameName = document.getElementById('selectInput').value;

    if (gameName == 'Menu Principal') {
        return null;
    }

    return gameName.toLowerCase();
}


// Fonction du bouton pour rediriger vers le lien quand le bouton est pressé
function gameRedirect() {
    var gameName = getGameName();

    if (gameName == null) {
        window.alert("[!] You need to select a game [!]");
        return;
    }

    var gameLink = games[gameName];
    window.location.href = gameLink;
}


function rickroll() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}


/*

TOUT CA C'EST POUR LE SELECT

*/

/*Dropdown Menu*/
$('.dropdown').click(function() {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function() {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function() {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function() {
    var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
        msg = '<span class="msg">Hidden input value: ';
    $('.msg').html(msg + input + '</span>');
});