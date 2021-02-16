

function fonction1(arr) {

    // on tire un numéro au hasard entre 1 et 10
    let result = Math.trunc(Math.random() * 9 + 1);
    console.log ("résultat : " + result);

    
    // la variable x va servir à comptabiliser les évènements "le tableau contient bien le résultat"
    let x = 0;

    // on va boucler sur le tableau "arr" qui contient les numéros sur lesquels on a parié
    for(let element of arr) {
        if(typeof(element) == "number" && element == result) {
            // on incrémente x de 1 car les conditions sont remplies : element est un nombre ET element = résultat
            x++;
        }
    }
    
    if(x>0){
        // on a au moins une fois le résultat dans le tableau : on a gagné
        console.log("gagné !!");
    } else {
        //sinon : perdu
        console.log("perdu !!");
    }
}

let x = [1]

fonction1(x);
