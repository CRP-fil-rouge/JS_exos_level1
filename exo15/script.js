/*
on va mettre en place un écouteur d'évènement sur le bouton qui va déclencher la fonction1()
fonction1() va créer une balise "p" pour y mettre un texte. On va placer cette nouvelle balise dans la div ".target"
*/

// on sélectionne la balise du bouton
let buttonElement = document.querySelector('button');

// on lui adjoint un écouteur d'évènements : si on clique sur le bouton, la fonction1() se déclenchera
buttonElement.addEventListener('click', fonction1)




function fonction1() {

    //todo on créé la balise <p> avec createElement()
    let paragrapheElement = document.createElement('p');
    console.log(paragrapheElement);

    //todo on y ajoute le texte voulu
    paragrapheElement.innerHTML = "ceci est un paragraphe."

    //todo on sélectionne l'endroit où la placer
    let targetElement = document.querySelector('.target');

    //todo on place la balise créée à l'endroit sélectionné avec appendChild()
    targetElement.appendChild(paragrapheElement);

}


