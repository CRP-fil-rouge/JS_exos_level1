/**
 *une fonction qui permet d'afficher dans la balise <h1>, un message entré dans une boîte de dialogue
 * 
 */

function fonction1() {

    // on lance une boîte de dialogue qaui permet d'entrer un message
    let message = window.prompt('message :');


    // je sélectionne l'élément où afficher le message
    let resultElement = document.querySelector('#result');

    // j'insère le message dans l'élément sélectionné
    resultElement.innerHTML = message;
}



fonction1();
