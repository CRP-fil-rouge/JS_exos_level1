/*
on va mettre en place un écouteur d'évènement sur le bouton qui va déclencher la fonction1()
fonction1() va déclencher une pop-up qui demandera un message à ajouter à une liste
*/

// on sélectionne la balise du bouton
let buttonElement = document.querySelector('button');

// on place un écouteur d'évènements sur cette balise avec addEventListener(). Cet écouteur déclenchera la fonction1() lorsque l'on cliquera sur le bouton
buttonElement.addEventListener('click', fonction1);


function fonction1() {

    // (1) on lance une pop-up qui demande d'entrer un message avec "window.prompt()" et qui le stocke dans une variable "message"
    let message = window.prompt("entrez un message :");

    // (2) on créé une balise <li>
    let listElement = document.createElement('li');

    // (3) on insère "message" dans <li>
    listElement.innerText = message;
    console.log(listElement);

    // (4) on sélection <ul> pour pouvoir y insérer <li>
    let ulElement = document.querySelector('ul');

    // (5) on insère <li>
    ulElement.appendChild(listElement);

}


