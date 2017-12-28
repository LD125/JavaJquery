// alert('WOW ! Tu sur ma page');
// Deux slash pour faire un commentaire uniligne.
/* 
    Ici je peux faire un commentaire sur plusieurs lignes....
    RACCOURCI: CTRL + /
                CTRL-SHIFT+ /
*/

// - - 1.Declarer un variable ne JS
var Prenom;

// - - 2. Affecter une Valeur
Prenom = "Marie-Pierre";

// - - 3. Afficher la valeur de ma variable dans la console du nav
console.log(Prenom);

 /* ------------------------------------------------------------------
   |                 LES TYPES DE VARIABLES                          |
    ---------------------------------------------------------------- */
// -- "typeof" permet de connaitre le type de ma variable
    console.log(typeof Prenom);

// -- Déclaration et affactation d'une valeur à une variable
var Age = 22;

// -- Afficher l'age dans la console
console.log(Age);

// -- Verifier son Type
console.log(typeof Age);

 /* ------------------------------------------------------------------
   |                ~LA PORTEE DES VARIABLES~                        |
    ---------------------------------------------------------------- */
/* Les variables déclarées directement à la racine du ficher sont appelées:
-variable "GLOBAL".

Elles sont dispoannibles dans l'ensemble de votre document y compris dans
les fonctions / Boucles.

La portée des variables "GLOBAL" s'arrête au fichier.
Si je change de page les variables n'existent plus.

Les Variables déclarées à l'intérieur d'une fonction sont appelées:
- variable "LOCAL".

Elles sont dispo uniquement à l'intérieur de celles-ci. */

// -- Les Variables de type FLOAT
var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// -- Les Booléens (VRAI/FAUX)

var unBooleen = false; //-- true
console.log(unBooleen);
console.log(typeof unBooleen);

 /* ------------------------------------------------------------------
   |                ~LES CONSTANTES~                                 |
        La déclaration CONST permet de créer une constante accessible
        UNIQUEMENT en lecture...
        Sa valeur ne pourra pas être modifiée par des réaffectations
        ultérieures. 
        Une constante ne peux pas être céclarée à nouveau.
        Généralement par convention, les constantes sont en 
        MAJUSCULES.
    ---------------------------------------------------------------- */
const HOST = "localhost";
const USER = "root";
const PASW = "mysql";

// Je ne peux pas faire cela . . .
// USER = "127.0.0.1";
// TypeError: Assignement to constant variable.

/* ------------------------------------------------------------------
   |                ~LA MINUTE INFO~                                 |
   Au fur et à mesure que l'on affecte ou que l'on réaffecte des valeur
   à une variable, celle-ci prnd la nouvelle valeur et le nouveau type.                                                                                
   En JS (ECMA Script - ES), les variables sont AUTO-TYPEES.

   Pour convertir une variable de type NUMBER en STRING et STRING en
   NUMBER, je peux utiliser les fontctions natives de javascript.

    ---------------------------------------------------------------- */

console.log('---');

var unNombre = "24";
console.log(unNombre);  
console.log(typeof unNombre);

// -- La fonction parseInt() permet de retourner un ENTIER à partir d'un STRING.
unNombre = parseInt(unNombre);
console.log(unNombre);  
console.log(typeof unNombre);

// -- Je réaffecte une valeur à ma variable
unNombre = "12.55";
console.log(unNombre);  
console.log(typeof unNombre);

//-- La fonction parseFloat() permet de retourner à partir d'un STRING
unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

//-- Conversion d'un Nombre en String avec toString()
var unNombreQuiDevientString = 10;
console.log(typeof unNombreQuiDevientString);
console.log(typeof unNombreQuiDevientString.toString() );

