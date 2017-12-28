/**
 *          LA CONCATENATION
 */

 var debutDePhrase = "Aujourd'hui<br>";
 var laDate        = new Date();
 var suiteDePhrase = ",<br> sont présents :";
 var nombreDeStagiares = 18;
 var finDePhrase    = " stagiaires.<br>";

 /**
  * --Nous Souhaitons maintenant, grâce à la concatenation afficher tout ce petit monde, en un seul morceau !
  */

  document.write(debutDePhrase + laDate.getDate() + '/' + (laDate.getMonth() +1) + '/' + laDate.getFullYear() + suiteDePhrase + nombreDeStagiares + finDePhrase);

  /**
   * EXERCICE CREER UNE CONCATENATION A PARTIR DE/
   */
  var phrase1 = "Je m'appelle ";
  var phrase2 = "Lounis et j'ai ";
  var age     = 24;
  var phrase3 = " ans !"; 

  document.write( phrase1 + phrase2 + age + phrase3);