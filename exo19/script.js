/*
on va mettre en place un écouteur d'évènement sur le formulaire. On pourra saisir un message dans le formulaire. En soumettant le formulaire, cela déclenche fonction1(). Fonction1() va "bloquer" le processus et intercepter les données entrées dans le formulaire. On affichera alors cette donnée dans une liste du DOM.
*/

// todo on sélectionne la balise du formulaire



//todo on place un écouteur d'évènements sur cette balise avec addEventListener(). Cet écouteur déclenchera la fonction1() lorsque l'on soumettra le formulaire en cliquant sur le bouton "ok"



//! fonction1() doit prendre un argument "event" (on peut choisir un autre nom)
function fonction1(event) {

    //! on commence par bloquer le processus de traitement du formulaire
    event.preventDefault();

    //todo on récupère l'élément <input>


    //todo on récupère la donnée dans le formulaire dans une variable "message"


    //todo on créé un élément <li>


    //todo on insère "message" dans la <li>


    //todo on sélectionne la balise <ul>

    
    //todo on insère <li> dans <ul>

}


