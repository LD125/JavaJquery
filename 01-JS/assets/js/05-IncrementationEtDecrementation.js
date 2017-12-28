/**
 * INCREMENTATION ET DECREMENTATION
 */
//------------- INCREMENTATION ------------//

var nb1 = 1;
nb1 = nb1 + 1;

// -- affichage dans la console
console.log(nb1);

//-- Ecriture Simplifiée
nb1++; // Raccourci de nb1 = nb1 + 1; -> Par pas de 1
console.log(nb1);


//---------------------DECREMENTATION-----------------//
nb1 = nb1 - 1;

//- Ecriutré simplefiée
nb1--; // Raccourci de nb1 = nb1 + 1; -> Par pas de 1
console.log(nb1);



// subtilité
nb1 = 0;
console.log("nb1++ = " + nb1++);
nb1 = 0;
console.log("++nb1 = " + ++nb1);