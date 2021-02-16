/*
une fonction qui va chercher si le mot 'pomme' est présent dans un tableau. Si le mot pomme est présent la fonction retourne true, sinon, faux
*/

function operation(arr) {
    //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/includes
    
    // console.log(arr.includes('pomme'))

    let x = 0;
    for(let element of arr) {
        if(element == 'pomme') {
            x++;
        }
    }
    
    if (x>0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

let arr1 = ['poire', 'banane','cassis']

operation(arr1);
