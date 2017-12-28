var PremierTrimestre = [
    {
    nom : "Renard",
    Prenom : "Michel",
    notes : {
        Français : 17,
        Sciences : 2,
        Histoire : 7,
        Mathématiques : 12,
    }
},
    {
    nom : "Jean",
    Prenom : "Didier",
    notes : {
        Anglais : 1,
        Français : 10,
        Sciences : 20,
        Histoire : 14,
    }
},
    {
    nom : "Deux",
    Prenom : "Pascal",
    notes: {
        Anglais : 15,
        Français : 17,
        Sciences : 2, 
        latin : 14,  
    }
},
    {
    nom : "Trois",
    Prenom : "Gislaine",
    notes: {
        Anglais : 11,
        Français : 13,
        Sciences : 19,
        Histoire : 8,    
    }
},   
    {
    nom : "cinq",
    Prenom : "Andrea",
    notes: {
        Français : 20,
        Sciences : 1,
        Histoire : 12,    
    },
} 
];
console.log(PremierTrimestre);

/**
 * Flemme
 * function w(ceciEstUnparamDeMaFunc){
 * document.write(ceciEstUnparamDeMaFunc);
 * }
 */
document.write('<ol>');
for (let i = 0 ; i < PremierTrimestre.length ; i++) {
//-- On recup l'objet etudiant de l'itération
    let etudiant = PremierTrimestre[i];
//-- apreçu console
    console.log(etudiant);
//-- Ici, mes variables seront remises à 0 à chaque nouveau étudiant.
    var NombredeMatiere = 0, SommeDesNotes = 0;
//- Afficher le Prénom et le Nom d'un Etudiant 
    document.write('<li>');
    document.write('<ul>');
        document.write(etudiant.Prenom + ' ' + etudiant.nom + ' ');
        for (let matiere in etudiant.notes){
        console.log(matiere);
        console.log(etudiant.notes[matiere]);
//* Incrementation
        NombredeMatiere++;
        SommeDesNotes += etudiant.notes[matiere];
        document.write('<li>');
            document.write(etudiant.notes[matiere]);
        document.write('</li>');
    } //* Fin de la Boucle matiere
    document.write('<li>');
        document.write('<strong>Moyenne Générale : </strong>'+ (SommeDesNotes / NombredeMatiere).toFixed(2));
    document.write('</li>');
    document.write('</ul>');
    document.write('</li>');
} //* Fin de la Boucle Etudiant
document.write('</ol');