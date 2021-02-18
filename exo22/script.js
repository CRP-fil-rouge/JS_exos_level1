//? un écouteur d'évènements qui va récupérer les valeurs entrées dans 2 inputs et qui va les afficher dans la balise "#result"

// on sélectionne la balise du formulaire
let formElement = document.querySelector('form');

// on place un écouteur d'évènements sur cette balise avec addEventListener(). Cet écouteur déclenchera la fonction1() lorsque l'on soumettra le formulaire en cliquant sur le bouton "ok" (évènement 'submit')
formElement.addEventListener('input', fonction1);

//! fonction1() doit prendre un argument "event" (on peut choisir un autre nom)
function fonction1(event) {

    //! on commence par bloquer le processus de traitement du formulaire
    event.preventDefault();

    // (1) on récupère l'élément "#input1", dans une variable "input1Element"
    let input1Element = document.querySelector('#input1');

    // pareil pour "#input2"
    let input2Element = document.querySelector('#input2');


    // (2) on récuprère les valeurs des 2 input dans les variables "value1" et "value2". On utilise parseFloat() pour convertir la donnée entrée dans le formulaire qui est au format "string" par défaut. 
    let value1 = parseFloat(input1Element.value);
    let value2 = parseFloat(input2Element.value);

    // (3) on teste value1 et value2 avec isNaN(), et on additionne value1 et value2 si ce sont bien des nombres. On stocke la somme des 2 dans la variable "result", déclarée au préalable (avant la condition if, pour des raisons de portabilité)
    let result;
    if (isNaN(value1) || isNaN(value2)) {
        result = "données invalides"
    } else {
        result = value1 + value2;
    }

    // (4) on affiche 
    console.log(result);

    // (5) on va sélectionner la balise où afficher le résultat :
    let targetElement = document.querySelector("#result");

    // (6) on va insérer "result" dans "targetElement"
    targetElement.innerHTML = result;
}



//! condition1 : color1 = rouge
//? condition2 : color2 = bleu

/* if (color1 = rouge && !color2 = bleu)
il faut que color1 soit rouge ET color2 soit bleu

if (color1 = rouge || color2 = bleu)
il faut que color1 = rouge OU color2 = bleu
color1 = rouge, color 2= jaune c'est ok
color1 = vert, color2 = bleu c'est ok
color1 = jaune, color2 = vert c'est pas bon
color1 = rouge, color2 = bleu c'est ok
*/

