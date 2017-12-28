/**
 *          LE CHAINAGE DE METHODE AVEC JQUERY
 * 
 * 
 */

 $(function(){

    //-- Je souhaite cacher toutes les divs de ma page html
    console.log($('div'));

    $('div').hide('slow', function(){
        //-- une fois que la méthod hide() est terminée, mon alert peux s'executer.
        alert('Fin du Hide');
        //-- La fx s'executera pour l'ensemble des éléments du sélecteur.

        $('div').css('background','yellow');
        $('div').css('color','red');

        //-- Je fais réapparaitre mes DIVs
        $('div').show('slow');
    }); //Fin fonction anonyme

    $('p').hide(1000).css('color','blue').css('font-size','20px').delay(2000).show(500);

    $('p').hide(1000).css({'color':'green','font-size':'20px'}).delay(2000).show(500);

 });