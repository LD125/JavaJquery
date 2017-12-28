/**
 *  LA MANIPULATION DES CONTENUS
 */
function l(e){
	console.log(e);
}

//-- Je souhaite récupérer mon lien ; comment procéder ?

var google = document.getElementById('google');
l(google);

//-- Maintenant je souhaite accéder aux informations de ce lien...
	//- A: Le lien vers lequel pointe la balise
	l(google.href);

	//-- B: l'ID de la balise
	l(google.id);

	//-- C: la classe de la balise
	l(google.className);

	//-- D: le texte de la balise
	l(google.textContent);

/**
 * Maintenant, je souhaite modifier le contenu de mon lien !
 * Comme une variable classique, je vais simplement venir affecter une nouvelle valeur.
 */

 google.textContent = "Mon lien avec google";

 /**
  *             Ajouter un element dans ma page
  */
  /**
   * Nous allons utiliser 2 methodes :
   * 1- la fonction document.createElement() va permettre de générer un nouvel élément dans le DOM; que je pourrais par la suite modifier avec les méthodes que nous venons de voir.
   * ps: ce nouvel élément est placé en mémoire.
   */

//-- Définition de l'élément
var span = document.createElement('span');

//-- SI je souhaite lui donner un ID
span.id = "MonSpan";

//- Si je souhaite lui attribuer du contenu...
span.textContent = "Mon beau texte en JS !";

//--Comment ajouter l'élément dans la page ?
//-- LA fonction appendChild() va permettre de rajouter un enfant à enfant à un élément du DOM.

/*google.appendChild(span);*/

var h1 = document.createElement('h1');
var a = document.createElement("a");
a.textContent = "Titre de mon Article";
a.href ="#";
h1.appendChild(a);

//-- Je met mon h1 dans ma page, dans mon body.
document.body.appendChild(h1);

//-- Correction du BONUS
	//-- Je veux que mon lien soit de couleur rouge
a.style.color = "red";
a.style.textDecoration = 'none';

