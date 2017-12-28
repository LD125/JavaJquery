/**
 *                             LE DOM
 * 
 * Le DOM est une interface de développement en JS pour HTML.
 * Grâce au DOM, je vais être en musure d'accéder / modifier mon HTML.
 * 
 * L'objet "document" : il est le point d'entrée vers mon contenu HTML !
 * Chaque page chargée dans mon navigateur a un objet "document".
 */
 
 //-- Comment puis-je faire pour récupérer les différents informations de ma page HTML ?

 /**            
  *   document.getElementById()
  */
  var bonjour = document.getElementById('Bonjour');
  console.log(bonjour);

  /** 
   * document.getElementByClassName()
   */
  var contenu = document.getElementsByClassName('contenu');
  console.log(contenu);

  /**
   *    document.getElementsByTagName()
   * c'est une fonction qui va permettre de récupérer un ou plisiers éléments(une liste) HTML à partir de leur *nom de balise*
   */
  var span = document.getElementsByTagName("span");
  console.log(span);