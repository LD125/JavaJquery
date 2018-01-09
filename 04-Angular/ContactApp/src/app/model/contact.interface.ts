/**
 * Création d'une interface Contact
 * cela me permet de définir la forme/structure de mes objets contact.d
 */
export interface Contact {
    id     : number;
    prenom : string;
    nom    : string;
    email?  : string;
  }