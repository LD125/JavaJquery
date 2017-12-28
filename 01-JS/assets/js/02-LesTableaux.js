// -- Déclarer un Tableau Indexé
var monTableau = [];
var myArray    = new Array;

//-- Affecter des valeurs à un tableau indexé
monTableau[0] = "Marie-Piere";
monTableau[1] = "Hugo";
monTableau[2] = "Hamid";

//-- Afficher le contenu de mon tableau dans la console
console.log(monTableau[1]); //- Hugo
console.log(monTableau[2]); //- Hamid
console.log(monTableau); //- Afficher toutes les donnée du tableau

//-- Déclarer et affecter des valeurs à un tableau indexé
var NosPrenoms = ["Thomas","Marie-Pierre", "Olivier","Chloé","Riad","Hugo"];
console.log(NosPrenoms);

//-- Déclarer et Affecter des valeurs à un Objet
//-- Pas de tableau associatifs en JS !
var Coordonnee = {
    prenom : "Hugo",
    nom    : "Liegeard",
    Age    : 28
};
console.log(Coordonnee);
console.log(typeof Coordonnee);

//- Je vais creer 2 tableaux indexés
var listDePrenoms = ["Hugo","Marie-Pierre","Lounis","Romain"];
var listDeNoms = ["Liegard","DUPOUX","DJADEL","ELIE"];

//-- JE vais crée un tableau à 2 dimensions à partie de mes 2 tableaux précédents
var Annuaire = [ listDePrenoms, listDeNoms];
console.log(Annuaire);

//-- Hugo Liegard
console.log(Annuaire[0][0]);
console.log(Annuaire[1][0]);

/*
var listDePrenoms = ["Anis","Lounis","Reuben"];
var listDeNoms = ["Chahbani","Djadel","Chouraki"];
var listDeTel = ["0123","0256","05684"];

var AnnuaireDesStagiaires = [listDePrenoms, listDeNoms, listDeTel];
console.log(AnnuaireDesStagiaires);
console.log(AnnuaireDesStagiaires[0]);
console.log(AnnuaireDesStagiaires[1]);
console.log(AnnuaireDesStagiaires[2]); */

//- Correction:
var AnnuaireDesStagiaires = [
    {prenom: 'Hugo', nom : 'LIEGEARD', tel: '0783 97 15 15'},
    {prenom: 'Chloé', nom : 'THUILLIER', tel: 'XXXX XX XX XX'},
    {prenom: 'Anis', nom : 'CHABANI', tel: 'XXXX XX XX XX'},
];

console.log(AnnuaireDesStagiaires);
console.log(AnnuaireDesStagiaires[1].prenom);
console.log(AnnuaireDesStagiaires[0]['prenom']);
console.log(AnnuaireDesStagiaires[1]['prenom']);
console.log(AnnuaireDesStagiaires[2]['prenom']);

//- Exemple de tableau 3D

// -- Exemple de Tableau 3D

var Contacts = [

    {
        prenom      : "Hugo",
        nom         : "LIEGEARD",
        coordonnees : {
                        email   : "wf3@hl-media.fr",
                        adresse : {
                                    ville   : "Ducos",
                                    cp      : 97224,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 108 328",
                                    fax     : "0596 108 632",
                                    port    : "0783 97 15 15"
                                  }
                      }
    },
    {
        prenom      : "Rodrigue",
        nom         : "NOUEL",
        coordonnees : {
                        email   : "wellcommunication.net@gmail.com",
                        adresse : {
                                    ville   : "Fort-de-France",
                                    cp      : 97200,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 XXX XXX",
                                    fax     : "0596 XX XX XX",
                                    port    : "0696 07 04 34"
                                  }
                      }
    }

];

console.log(Contacts);
console.log(Contacts[0].coordonnees.tel.port);
console.log(Contacts[1].coordonnees.tel.port);

//- Ajouter un élément dans un tableau:

var Couleurs = ["Rouge", "Jaune", "Vert"];
/**
 * Si je souhaite ajouter un élément dans mon tableau, je fais appel à la fonction
 * push()qui me renvoie le nombre d'éléments de mon tableau; que je peux récupérer
 * facultativement dans une variable.
 */
console.log(Couleurs);
var nombreElementsDeMonTableau = Couleurs.push("Orange");
console.log(Couleurs);
console.log(nombreElementsDeMonTableau);

/** 
 * Notabene: La fonction unshift() permet d'ajouter un ou plusieurs éléments en début de tableau.
*/

/**                  RECUPURER ET SORTIR LE DERNIER ELEMENT */
/**La fonction pop() me permet de supprimer le dernier élément de mon tableau et d'en récupérer la valeur
 * La même chose est possible avec le premeir élément; en utilisant la fonction shift()
 * NB: la fonction splice() vous permet de faire sortir un ou plusieurs éléments de votre tableau.
 */

var monDernierElement = Couleurs.pop();
console.log(monDernierElement);
console.log(Couleurs);  

