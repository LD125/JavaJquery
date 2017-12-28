/**
 * LES CONDITIONS
 */

var MajoriteLegaleFR = 18; 

if (25 >= MajoriteLegaleFR){
    alert ('Bienvenue');
}
else {
    alert ('google')
}
// le else n'est pas obligatoire//


/*1: déclarer la majorité légale */
/*var MajoriteLegaleFR = 18;*/
/*2: créer une fonction pour demander l'age */
/* Si l'age de l'utilisateur passé en paramètre en supérieur ou égal à la majorité légale, alors la fonction retourne vraie. Sinon elle retourne fausse */
/*
@param {Int} age
@return {boolean}*/

function verifierAge(Age) {
    if(age >= MajoriteLegaleFR){
        return true;
    } else {
        return false;
    }
}
//- 3. Je demande à l'utilisateur son age
var age = parseInt( prompt("Bonjour, Quel age avez-vous ?", "<Saisissez votre Age>") );
//-- 4 Verification de l'age de l'utilisateur
if (verifierAge(age)){

//- 4a. J'affiche un messgae de bienvenue
alert('Bienvenue sur mon site internet reservé pour le smajeurs');    
}
else{
    // -- 4B j'effectue une redirection
    document.location.href= "http://google.fr";
}

/*********************** */
var  Maj = 18;

 function agecheck() {
     let Age = prompt("Indiquez votre age", "<Saisissez votre age>");
     {
     if (Age >= Maj) {
        alert ("Bienvenue");
     } else {
        document.write("vous n'êtes pas majeur ", "https://google.fr");
     }
        }
}

 agecheck(); 

 /**
  * LES OPERATEURS DE COMPARAISON

    L'opérateur de comparaison "==" signifie : Egal à,
    Il permet de vérifier que 2 variables sont identiques,
    
    L'opérateur de comparaison "===" signifie : strictement Egal à.
    Il va comparer la valeur et le type de donnée.

    L'opérateur de comparaison "!=" signifie : Différent de.

    L'opérateur de comparaison "!==" siginifie : Strictement Différent de.

  */

  //* Base de données
  var email, mdp;

  email = "wf3@hl-media.fr";
  mdp = "wf3";

function checkin(email, mdp) {
     email = prompt("saisir email");
     mdp = prompt("saisir mdp");
    if (email === "wf3@hl-media.fr", mdp === "wf3") {
        return true;
    } else{ 
        return false;
    }
    
}
if (checkin(email, mdp)){
    document.write("Bienvenue");
} else{
    alert("Vous avez mal renseigné vos id");
}

checkin();


/** Correction
 */
//* 1 Demander à l'utilisateur son email
var emailUser = prompt("Bonjour, Quel est votre email ?", "<Saisissez votre email>");
//* 2 Je verifie si l'email saisie (emailUser) correspond à celui en BDD(email)
if (emailUser == email){
    //* 2a tout est ok, je continue la verifiacation avec le mot de passe
    //* 2a1 je demande l'user son mdp
    var mdpUser = prompt("votre mdp", "<saisissez votr mdp>");
    if (mdpUser == mdp) {
        alert("Bienvenue !");
    } else {
        alert ("Attention, nous n'avons pas recon votr mdp");
    }
} else {
    //* 2b les emails ne correspondent pas...
    alert("ATTENTION mauvais email");
}

//Exemple avec les fonctions 
/* @param {*String} emailUser
/* @parem {*String} mdpUser
/* @return {Boolean} */

function monUtilisateurEstCorrect(emailUser,mdpUser){
    if(emailUser === email && mdpUser === mdp) {
        return true;
    } else {
        return false;
    }
}
var emailUser = prompt("Bonjour, Quel est votre email ?", "<Saisissez votre email>");
var mdpUser = prompt("votre mdp", "<saisissez votr mdp>");

if ( monUtilisateurEstCorrect(emailUser,mdpUser)){
    alert("Bienvenue " + emailUser);
}   else {
    alert("email/mdp incorrect ");
}

/**
 *                   LES OPERATEURS LOGIQUES
 * L'opérateur ET : && ou AND
 * Si la combinaison emailUser et email correspond ET la combinaison mdpUser et mdp correspond. Dans cette condition les 2 doivent obligatoirement correspondre pour être validée.
 * 
 * Ex. if(emailUser == email && mdpuser == mdp) {. . .}
 * 
 * 
 * 
 * L'opérateur OU : || ou OR 
 * Si la combinaison emailUser et email correspond ET/OU la combinaison mdpUser et mdp correspond. Dans cette condition, 1/2 doit obligatoirement correspondre pour être validée.
 * 
 * 
 * L'opérateur "!" ou encore NOT
 * L'opérateur "!/NOT" signifie le contraire de...
 * 
 * var monUtilisateurEstApprouve = true;
 * if(!monUtilisateurEstApprouve) {...}
 * 
 * Reviens à écrire :
 * if(monUtilisateurEstApprouve == false) {...}
 *
 */