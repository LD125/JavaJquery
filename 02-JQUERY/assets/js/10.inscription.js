$(function() { //- Init Jquery
    //-- JE déclare mes variables
    var Membres =  [
        {'pseudo':'Hugo','age':26,'email':'wf3@hl-media.fr','mdp':'wf3'},
        {'pseudo':'Rodrigue','age':56,'email':'rodrigue@hl-media.fr','mdp':'roro'},
        {'pseudo':'James','age':78,'email':'james@hl-media.fr','mdp':'james8862'},
        {'pseudo':'Emilio','age':18,'email':'milio@hl-media.fr','mdp':'milioDu62'}
      ];

      var form = $('#registerForm');
      var bienvenue = $('#Bienvenue');
      var pseudo = $('#pseudo');
      var age = $('#age');
      var email = $('#email');
      var mdp = $('#mdp');
      var submit = $('#submit');
      var pseudoError = $('.pseudoError');
      var ageError = $('.ageError');

      pseudo.on('input', function(e) {      //* Event Input 
        console.log(pseudo.val());
        for (let i = 0 ; i < Membres.length ; i++) { // Si la saise d'un pseudo par mon utilisateur correspond à un pseudo dans mon tableau de membre, alors ma condition s'applique
            if ( pseudo.val() === Membres[i].pseudo ) { // Si il y a correspondance -> afficher pseudoerror
            pseudoError.fadeIn();
            submit.prop('disabled', true); // désactivation du boutton
            bienvenue.text('');
            break; // on stop la boucle si match
            } else { // on cache l'erreur et on reactive le bouton
                pseudoError.fadeOut();
                submit.removeAttr('disabled');
                bienvenue.text(pseudo.val());
            }
        }
      });
      age.on('change', function(e){
        if (age.val() < 18 ) {
            ageError.fadeIn();
            submit.prop('disabled', true);
        } else {
            ageError.fadeOut();
            submit.removeAttr('disabled');
        }
      });
      // creation d'un objet contact
      form.on('submit', function(e) {
          e.preventDefault();
          let member = {
              pseudo : pseudo.val(),
              age : age.val(),
              email : email.val(),
              mdp : mdp.val(),
          }
          // Ajout du membre à l'annuaire
          Membres.push(member);
          //-- Reinit du formulaire
          this.reset();
          $(`
            <p>
                Merci ${member.pseudo} !
                <br><br><strong>Tu es maintenant inscrit </script>
                <br><br><u>Voici la liste de nos membres: </u>
            </p>
          `).appendTo($('body'));
          //--générer la liste d emebre
          var ul = $('<ul>');
          for (let i = 0; i < Membres.length; i++) {
              $(`
                <li>
                    ${Membres[i].pseudo} : ${Membres[i].age} ans.
                </li>
              `).appendTo(ul);
          }
          ul.appendTo($('body'));
    });   
}); // Fin Jquery