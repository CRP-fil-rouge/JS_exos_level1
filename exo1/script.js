/* on va créer une fonction operation() avec le parametre number
 la fonction me retourne le paramètre multiplié par 2
*/

function operation(number) {

    if ( isNaN(parseFloat(number)) ){
        
        console.error("donnée invalide");
        window.alert("donnée invalide");

    } else {
        
        let result = number*2;
        console.log(result);

    }
}

let x = window.prompt("donnez une valeur :");
operation(x);
