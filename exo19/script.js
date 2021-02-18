/*
on va mettre en place un écouteur d'évènement sur le formulaire. On pourra saisir un message dans le formulaire. En soumettant le formulaire, cela déclenche fonction1(). Fonction1() va "bloquer" le processus et intercepter les données entrées dans le formulaire. On affichera alors cette donnée dans une liste du DOM.
*/

// on sélectionne la balise du formulaire
let formElement = document.querySelector('form');


// on place un écouteur d'évènements sur cette balise avec addEventListener(). Cet écouteur déclenchera la fonction1() lorsque l'on soumettra le formulaire en cliquant sur le bouton "ok" (évènement 'submit')
formElement.addEventListener('submit', fonction1);


//! fonction1() doit prendre un argument "event" (on peut choisir un autre nom)
function fonction1(event) {

    //! on commence par bloquer le processus de traitement du formulaire
    event.preventDefault();

    // (1) on récupère l'élément <input>
    let inputElement = document.querySelector('#input1');

    // (2) on récupère la donnée dans le formulaire dans une variable "message"
    let message = inputElement.value;
    console.log(message);

    // (3) on créé un élément <li>
    let listElement = document.createElement('li');

    // (4) on insère "message" dans la <li>
    listElement.innerText = message;

    // (5) on sélectionne la balise <ul>
    let ulElement = document.querySelector('ul');

    // (6) on insère <li> dans <ul>
    ulElement.appendChild(listElement);

    // (7) on remet le input à 0 après traitement
    inputElement.value = '';
}


