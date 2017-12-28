/**
 *              LES EVENEMENTS
 * Les évènements vont me permettre de déclencher une fonction, c'est à dire une série d'instructions suite à une action de mon utilisateur.
 * 
 * Objectif: etre en mesure de capturer ces évènements afin d'executer une fonction.
 * 
 * Les Evenements : MOUSE (souris)
 *                  click -> au clic sur un élément
 *                  mouseenter -> la souris passe au dessus de la zone qu'occupe un élément
 *                  mouseleave -> la souris sors de cette zon
 * Les Evenements : KEYBOARD
 *  keydown : une touche du clavier est enfoncée
 *  keyup   : une touche du clavier a été relachée
 * 
 * Les Evenements : WINDOW
 *  scroll : défilement de la fenêtre
 *  resize : redimentionnement de la fenêtre
 * 
 * Les Evenements : FORM (formulaire)
 *  change : pour les éléments input/select et textarea
 * submit  : à l'envoi du formulaire
 *  input  : pour capter la saisie d'un utilisateur sur un champ input
 * 
 * #########################################################################################
 * 
 *                      LES ECOUTEURS D EVENEMENTS
 * 
 *  Pour attacher un événement à un élément, ou autrement dis, pur déclarer un écouteur d'évènement qui se chargera de déclencher une fonction, je vais utiliser la syntaxe suivante :
 * 
 * 
 */
var p = document.getElementById('MonParagraphe');

//-- 1 je definis une fonction qui sera chargée d'excuer cette action

function changeColorToRed() {
    p.style.color = "red";
}
p.addEventListener('click', changeColorToRed);

/****************************************************** */
//* Création du Champ INPUT
var input = document.createElement('input');
//*Attribution d'un Attribut
input.setAttribute('type','text');
input.setAttribute('placeholder','Saisissez un contenu...');
//-- Attribution d'un ID
input.id = 'MonInput';
//-- Ajout de l'élément dans ma page
document.body.appendChild(input);

function voirLaSaisieDeMonInput() {
    alert(input.value);
}

input.addEventListener('change', voirLaSaisieDeMonInput);


