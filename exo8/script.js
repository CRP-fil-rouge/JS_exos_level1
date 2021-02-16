/**
 * Une fonction qui va retourner dans la console la longueur de chaque élément d'un tableau 
 */

function fonction1(arr) {

    // on teste auparavant que le paramètre "arr" est bien un tableau (de type objet en JS)
    if (typeof(arr) != "object") {
        console.error('données invalides')
    
    } else {

        // on va boucler sur le tableau entré en paramètre avec l'instruction for...of
        for(let element of arr) {

            // on teste si chaque élément de "arr" est une string
            if(typeof(element) == "string") {

                // si c'est le cas...
                let message = element + " : " + element.length;
                console.log(message);
            
            } else {

                // sinon...
                console.error("l\'élément n\'est pas une string");
            }
        }

    }


    
}

let arr1 = ['pomme', 'poire', 569, 'banane', 'clementine']

fonction1(arr1);
