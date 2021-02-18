/*
on va mettre en place un écouteur d'évènement sur le formulaire. On pourra saisir un message dans le formulaire. En soumettant le formulaire, cela déclenche fonction1(). Fonction1() va "bloquer" le processus et intercepter les données entrées dans le formulaire. On affichera alors cette donnée dans la console.
*/

// on sélectionne la balise du formulaire
let formElement = document.querySelector('form');
console.log(formElement);
// on place un écouteur d'évènements sur cette balise avec addEventListener(). Cet écouteur déclenchera la fonction1() lorsque l'on soumettra le formulaire en cliquant sur le bouton "ok"
formElement.addEventListener('submit', fonction1);


//! fonction1() doit prendre un argument "event" (on peut choisir un autre nom)
function fonction1(event) {

    //! on commence par bloquer le processus de traitement du formulaire
    event.preventDefault();

    // on récupère l'élément <input>
    let inputElement = document.querySelector('input');

    // on récupère la donnée dans le formulaire dans une variable
    let inputValue = inputElement.value;

    // on affiche cette variable dans la console.
    console.log(inputValue);
}


