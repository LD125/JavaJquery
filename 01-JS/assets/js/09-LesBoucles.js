/**
 *                      LES BOUCLES
 */

 // -- La boucle FOR
 //* Pour i = 1 ; tant que i <=  strictement inférieur ou égal à 10; alors j'incrémente i de 1.

 for(let i = 1 ; i <= 10 ; i++) {
     document.write('<p>Instruction exectuée : <strong>' + i + '</strong></p>');
 }

 document.write('<hr>');

 var j = 1;
 while(j <=10){
    document.write('<p>Instruction exectuée : <strong>' + j + '</strong></p>');
//* ATTENTION A NE PAS OUBLIER L INCREMENTATION
    j++;
 }

 /**
  *                 EXERCICE
  */
  document.write('<hr>');

  var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre','Paul','Hugo'];

  for(let i = 0 ; i < 7; i++) {
      document.write('<p>Votre prénom est ' + Prenoms[i] + '<p>');
      console.log(Prenoms);
  }

  document.write('<hr>');  

  for(let i = 0 ; i < Prenoms.length ; i++) {
      document.write('<p>Votre prénom est ' + Prenoms[i] + '<p>');
      console.log(Prenoms[i]);
  }

  document.write('<hr>');

  var j = 0;
  while(j < Prenoms.length){
    document.write('<p>Votre prénom est ' + Prenoms[j] + '<p>');
    console.log(Prenoms[j]);
    j++;
  }

  document.write('<hr>');

 //* Même exo avec la boucle ForEach (attention à la perfomance)
 Prenoms.forEach(affichePrenoms);
 
 function affichePrenoms(prenom, indice){
     console.log(prenom);
 }

 /**
  * https:LLbenhollis.net/blog/2009/12/13/investigating-javascript-array-iteration-performance/
  htttps://leftshift.io/4-javascript-optimisations-you-should-know
  */
