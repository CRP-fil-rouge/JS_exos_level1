/*
une fonction qui additionne 1+2+3+4.....+99+100 et qui affiche le résultat dans la console

*/

function fonction1() {
    //on créé le compteur pour le while
    let i = 0;

    //on prévoit une variable qui va stocker le résultat
    let x = 0;

    while(i <= 100) {
        // on va ajouter la valeur "i" à celle de "x"
        x += i;

        //on incrémente "i"
        i++;
    }

    // on affiche le résultat dans la console
    console.log(x);

    
}

fonction1()
