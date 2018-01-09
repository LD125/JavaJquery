import { AjoutContactComponent } from './ajout-contact/ajout-contact.component';
//--Importation de "Component" via @angulare/core
//-- Pour déclarer une classe comme commposant de notre application, on importe "Component" via @angular/core
import { Component } from '@angular/core';
import { Contact } from './model/contact.interface';

/**interface ContactArray {
  [index: number] : Contact;
} */
/**
 * @Component est ce qu'on appelle un décorateur.
 * Il va nous permettre de définir 3 paramètres essentiels à notre application
 */
@Component({
  /**
   * Le sélécteur (selector)  déternimine la manière dont le composant sera affiché dans un template
   * On ecrira dans notre HTML: <app-root></app-root>
   * Vous devez OBLIGATOIREMENT avoir la labalise d'ouverture et la balise de fermeture.
   */
  selector: 'app-root',
  /**
   * "templateUrl" ou "template est la partie visible du composant, c'est ce qui s'affiche à l'écran
   * lorsque lle composant est utlisé"
   */
  templateUrl: './app.component.html',
  /**
   * La déclaration des style avec "styleUrls" ou "styles"
   */
  styleUrls: ['./app.component.css']
})
/**
 * La classe contient les données du composant, mais aussi son comportement.
 * Dans le contexte MVVM, notre classe correspond au ViewModel.
 */
export class AppComponent {
 //--- déclaration d'une variable title
 title = 'ContactApp';
  contact:Contact = {
    id      : 1,
    prenom  : "Lounis",
    nom     : "Djadel",
    email   : "lounis.djadel@gmail.com",
  }
  //--- Tableau contenant collection de contacts
  contacts:Contact[] = [
    {id: 1, prenom:"Lounis", nom:"DJADEL"},
    {id: 2, prenom:"Francis", nom:"ALBERT"},
    {id: 3, prenom:"Jean", nom:"DIDIER"},
  ]
/**
 * 
 */
  getNomComplet = (UnContact:Contact) => {
    return UnContact.prenom + ' ' + UnContact.nom;
  }

//-- Choix de mon utilisateur actif contactActif;
contactActif;
//-- Permet de définir un contact actif @param {contact} UnContact
  choisirUnContact = (UnContact:Contact) => {
    this.contactActif = UnContact;
    console.log(this.contactActif);
}
  ajouterContactDansListe(event) {
    this.contacts.push(event.contact);
}
}