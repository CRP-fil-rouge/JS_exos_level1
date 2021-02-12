// 1) on va créer une fonction displayMessage() avec un paramètre 'message' qui récupère l'élément avec l'id 'result' dans le DOM et qui y insère le paramètre de cette fonction

function displayMessage(message) {

    /* 
    Pour récupérer des éléments du DOM on a 4 fonctions différentes :
    - querySelector() -> 1 résultat unique
    - querySelectorAll() -> tous les résultats
    - getElementById() -> 1 résultat unique
    - getElementByClassName() -> 1 ou plusieurs résultats

    Pour bien faire on stocke l'élément sélectionné dans une variable, avant de lui appliquer un traitement.
    */

    let resultElement = document.querySelector('#result');

    console.log(resultElement);

    /*
    Pour modifier une élément, on peut utiliser plusieurs méthodes :
    - innerHTML pour ajouter du contenu
    - style.backgroundColor pour modifier le CSS
    - classList.add(), classList.remove(), classList.replace() on ajoute, enlève ou remplace une classe CSS
    */

    resultElement.style.border = '3px solid red';
    resultElement.classList.add('vert');
    resultElement.innerHTML = message;
}

// 2) on lance la fonction displayMessage() avec le paramètre voulu

displayMessage('hello world !');