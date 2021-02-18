/*
une fonction qui va ajouter un élément qui contient un texte dans une liste lorsque l'on clique sur le bouton
*/

// on sélectionne la balise du bouton avec querySelector()
let buttonElement = document.querySelector('button');

// on place un écouteur d'évènements sur cette balise avec addEventListener(). Cet écouteur déclenchera la fonction1() lorsque l'on cliquera sur le bouton
buttonElement.addEventListener('click', fonction1);



function fonction1() {

    // on créé l'élément avec la balise <li> avec la fonction createElement() et on la stocke dans une variable "listElement"
    let listElement = document.createElement('li');
    console.log(listElement);
    

    // on insère le texte voulu à l'intérieur avec la fonction innerText()
    listElement.innerText = 'hello world !!';


    // on sélectionne avec la fonction querySelector(), la balise <ul> où nous allons insérer la balise <li> créée plus haut 
    let ulElement = document.querySelector('.list');

    // on insère la balise <li> avec la fonction appendChild()
    ulElement.appendChild(listElement);
}


