//-- Initialisation de JQuery
$(() => {
    //-- fonction console 
    function l(e) { console.log(e) }
    /*var l = e => console.log(e); */
    //-- JE souhaite séléectionner toutes mes divs
    l($('div'));
    //-- Je souhaite sélectionner mon menu
    l($('nav'));
    //-- Je souhaite tous les éléments descendants direct (enfants) qui sont dans le menu...
    l($('nav').children());
    //-- Je souhaite parmi ces enfants, uniquement les éléments "ul"
    l($('nav').children('ul'));
    //-- Je souhaite récupérer toutes li parmis ul
    l($('nav').children('ul').find('li'));
    //-- Je souhaite récupérer uniquement le 2ème élément de mes 'li'
    l($('nav').children('ul').find('li').eq(1));
    //-- Je souhaite connaitre le voisin immediat de mon menu
    l($('nav').next());
    l($('nav').next().next()); //--le voisin du voisin
    l($('nav').prev()); //-- Le voisin d'avant

    //-- LE PARENT
    l($('nav').parent());

    //-- LEs PARENTS
    l($('nav').parents());
    
});