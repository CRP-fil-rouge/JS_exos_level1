/*
on va mettre en place un écouteur d'évènement sur le bouton qui va déclencher la fonction1()
fonction1() va afficher dans la balise #result le message "hello world !!"
*/

// on sélectionne la balise du bouton
let buttonElement = document.querySelector('button');

// on lui adjoint un écouteur d'évènements : si on clique sur le bouton, la fonction1() se déclenchera
buttonElement.addEventListener('click', fonction1)




function fonction1() {
    let resultElement = document.querySelector('#result');
    resultElement.innerText = "hello World !!";
}

