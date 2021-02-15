/*
une fonction qui va sélectionner l'élément du titre et l'afficher dans la console
*/

function selection() {

    // on utilise ici le selecteur d'élément "querySelector()", appliqué au "document". S'il existe plusieurs balises avec le même nom, seul le premier sera sélectionné.
    h1Element = document.querySelector('h1');

    // on peut l'afficher dans la console
    console.log(h1Element);

}


//selection();

/*
une fonction qui retourne tous les <li> du document
*/

function selection2() {

    // querySelectorAll() retourne tous les élément qui portent l'attribut spécifié (ici <li>) Il va les retourner sous forme de tableau
    liElementArray = document.querySelectorAll('li');

    //on affiche le résultat dans la console
    console.log(liElementArray);
}

//selection2();

/*
une fonction qui va afficher le paragraphe avec le nom de classe "second" et lui ajouter du texte avec un lorem80
*/

function selection3() {
    pElement = document.querySelector('p.second');
    console.log(pElement);

    pElement.innerText = "ceci est un deuxième paragraphe";

}

//selection3()

/**
 * une fonction qui sélectionne le 3ème élément de la 2ème liste
 */

function selection4() {
    // on va d'abord sélectionner la bonne liste :
    let list2Element = document.querySelector('.list2');
    console.log(list2Element);

    //on va sélectionner les <li> de cette liste
    liElementArray = list2Element.querySelectorAll('li');
    console.log(liElementArray[2]);
}

//selection4()

/**
 * une fonction qui sélectionne list1 et lui ajoute un élément <li>clementine</li>
 */

function selection5() {
    let list1Element = document.querySelector('.list1');
    console.log(list1Element);
    list1Element.innerHTML += "<li>clementine</li>"
}

selection5();