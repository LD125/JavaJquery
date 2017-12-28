/**
 * REALISER UNE FONCTION PERMETTANT A UN INTERNAUTE DE :
 * - saisir son prénom dans un prompt
 * - retourner à l'utilisateur: Bonjour [prenom], Quel age as-tu ?
 * - saisir son Age
 * - Retourner à l'utilisateur : Tu est donc né en [ANNEE DE NAISSANCE]
 * - afficher en suite un récapitulatif dans la page.
 * Bonjour [Prenom], tu as [AGE] !
 * 
 */

/**
 * 1. Initialisation des Variables
/**
 * 2a. creation d'une fonction
/**
 * 2b. Je lui demande son age
/**
 * 2c. Déduire l'année de naissance, et l'afficher dans une "alert"
/**
 * 2d. J'affiche tout ça dans la page (récap)
/**
 * 3. Execution de ma Fonction
 */
var dateObj = new Date();
var anneeActuelle = dateObj.getFullYear(); 

function Infos() {
    let prenom = prompt("Hello ! What is your name", "<Saisir votre prénom>");
console.log(prenom);
console.log(typeof prenom);
    let age = parseInt( prompt("Bonjour " + prenom + ",Quel age as-tu ? ", "<saisir votre Age"));
    console.log(age); 
    console.log(typeof age);
    alert("Tu es donc né en " + (anneeActuelle- age) );
    document.write(" Bonjour " + prenom + " tu as " + age + " ans");
}
Infos();

