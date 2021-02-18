//? un écouteur d'évènements qui va changer la couleur du background du body avec une couleur entrée dans le formulaire

// on sélectionne la balise du formulaire
let formElement = document.querySelector('form');

// on place un écouteur d'évènements sur cette balise avec addEventListener(). Cet écouteur déclenchera la fonction1() lorsque l'on soumettra le formulaire en cliquant sur le bouton "ok" (évènement 'submit')
formElement.addEventListener('submit', fonction1);

//! fonction1() doit prendre un argument "event" (on peut choisir un autre nom)
function fonction1(event) {

    //! on commence par bloquer le processus de traitement du formulaire
    event.preventDefault();

    // (1) on récupère l'élément <input>
    let inputElement = document.querySelector('input');

    // (2) on récupère la donnée dans le formulaire dans une variable "inputColor"
    let inputColor = inputElement.value;

    // (3) on va sélectionner le <body>
    let bodyElement = document.querySelector('body');

    // (4) on lui applique la couleur avec "style.backgroundColor"
    bodyElement.style.backgroundColor = inputColor;

    // (5) on remet le input à 0 après traitement
    inputElement.value = '';
}


