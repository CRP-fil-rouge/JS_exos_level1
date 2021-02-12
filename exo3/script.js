/* On va créer une fonction displayArray() avec le paramètre 'arr' qui va récupérer les éléments contenu dans le tableau entré en paramètre et les afficher comme une phrase dans la console.

exemple :
pour le tableau ['le', 'chat', 'est', 'blanc'], on obtient dans la console : 'le chat est blanc'.

bonus : on affiche le résultat dans la balise h1 du DOM
*/

function displayArray(arr) {
    // on initialise la variable result1 avec la valeur "" avant de lancer la boucle
    let result1 = "";
    console.log(arr.length);

    for (let i = 0;
        i < arr.length;
        // on va boucler jusqu'au dernier élément de 'arr' qui porte l'index ('longueur de arr' -1)
        i = i+1) {

            let arrElement = arr[i];

            result1 += arrElement + " ";
            // équivalent de result1 = result1 + arrElement + " ";
        }
    console.log(result1);
    return result1;
}

// bonus : on créé la fonction displayArrayInDom() pour afficher le résultat de displayArr() dans le DOM
function displayArrayInDom(result1) {

    let result1Element = document.querySelector('#result');
    result1Element.innerHTML = result1;
}


let tableau = ['le', 'chat', 'est', 'blanc', 'et noir'];
let x = displayArray(tableau);

// 
displayArrayInDom(x);
