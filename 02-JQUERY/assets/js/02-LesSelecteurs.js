/**
 *      LES SELECTEURS JQUERY
 */

//-- Format : $('selecteur)
//-- En jQuery, tous les sélecteurs CSS sont disponibles...

$(function(){
    //- DOM READY !
    function l(e) {
        console.log(e);
    }
    //-- Selectionner les balises SPAN :

    //-> EN JS
    l(document.getElementsByTagName('span'));

    //-> EN JQUERY
    l($('span'));

    //-- Selectionner mon Menu :

    //-> EN JS
    l(document.getElementById('menu'));

    //-> EN JQUERY
    l($('#menu'));

    //-- Selectionner une classe 

    //-> En JS
    l(document.getElementsByClassName('MaClasse'));

    //-> En jQuery
    l($('.Maclasse'));

    //-- Selection un Attribut

    //-> En Jquery
    l($("[href='https://www.google.fr']"));
});