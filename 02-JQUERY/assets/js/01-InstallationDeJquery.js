/**
 *                  LA DISPONIBILITE DU DOM
 * 
 * A partir du moment ou mon DOM, c'est à dire l'ensemble de l'arborescence de ma page est complétement chargé;
 * je peux commencer à utiliser Jquery
 * 
 * Je vais mettre l'ensemble de mon code dans une fonction cette fonction sera appelée AUTOMATIQUEMENT par Jquery lorsque le DOM sera entièrement défini
 * 
 * 3 façons de faire :
 * */
jQuery(document).ready(function() {
  //-- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS.
 });
 
 $(document).ready(function() {
 //-- ici le DOM est entièrement chargé, je peux procéder à mon code JS  
 });

$(function(){
    alert("J'ai 20 ans!");
    //* EN JS
    document.getElementById('TexteEnJQuery').innerHTML = "<strong>Mon Texte en JS </strong>";
    //* EN jQuery, les sélecteurs sont les mêmes qu'en CSS :
    $('#TexteEnJQuery').html('Mon Texte en JQ');
});

 