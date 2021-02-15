/*
une fonction qui va chercher si le mot 'pomme' est présent dans un tableau. Si le mot pomme est présent la fonction retourne true, sinon, faux
*/

function operation(arr) {
    //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/includes
    
    console.log(arr.includes('pomme'))

}

let arr1 = ['pomme', 'poire', 'banane','cassis']

operation(arr1);
