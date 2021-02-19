//? un écouteur d'évènements qui va récupérer la valeur dans le input et qui dira de quel type il est. si c'est un nombre, il dira s'il est pair ou impair

// on sélectionne la balise du input
let inputElement = document.querySelector('input');

// on place un écouteur d'évènements sur cette balise avec addEventListener(). Cet écouteur déclenchera la fonction1() lorsque l'on soumettra le formulaire en cliquant sur le bouton "ok" (évènement 'submit')
inputElement.addEventListener('input', fonction1)

function fonction1() {

    // on sélectionne l'élément <input>
    let inputElement = document.querySelector('input');

    // on récupère la valeur
    let inputValue = parseFloat(inputElement.value);

    // on implémente la condition
    if (isNaN(inputValue)) {
        console.log('c\'est une string');
    } else {
        console.log('c\'est un nombre');
    }
}
