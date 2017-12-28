/**
 * LES FONCTIONS
 */

//- DECLARER une fonction
//- Cette fonction ne retourne aucune valeur

function ditBonjour() {
    //- Lors de l'appel de cette fonction, les instructions ci-dessous seront executées...-//
    alert("Bonjour !");
}
/**
 * Je vais appeler ma fonction "ditBonjour" et déclencher ses instructions.
 */
ditBonjour();

//- Déclarer une fonction qui prend une variable ne paramètre
function Bonjour (Prenom, Nom){
    document.write ("<p>Bonjour <strong>" + Prenom + " " + Nom + "</strong> !<p>");
}
 // -- Appeler / utiliser une fonction avec des paramètres
 Bonjour('Hugo','LIEGARD');


 function Nombres (nb1, nb2) {
     return (nb1 + nb2);
 }
 
document.write("<p>" + Nombres (10, 5) + "<p>");