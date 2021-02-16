/**
 * jouons au loto
 *  
 */

function fonction1(arrGrille, arrResult) {
    // on créé un compteur initialisé à 0
    let x = 0

    // on boucle avec for...of sur le tableau qui contient les nuémros "joués"
    for (element of arrGrille) {

        //si le numéro "joué" apparaît dans le tirage, on incrémente le compteur de 1, sinon rien ne se passe
        if (arrResult.includes(element)) {
            x++
        }
    }

    //on affiche le compteur, soit, le nombre de fois où un numéro "joué" a été trouvé dans le tirage
    console.log(x);
    return x;
}

function tirageLoto() {
    // on créé un tableau vide qui va contenir le résultat
    let result = [];

    // on créé une boucle qui va tirer 6 numéros entre 1 et 49
    for(let i = 0;
        i<6;
        i++) {
            
            // la formule pour tirer UN numéro entre 1 et 49
            let x = Math.trunc(Math.random() * 49 +1);

            // si le numéro tiré ne l'a pas été auparavant...
            if(!(result.includes(x))){
                // on l'ajoute au tableau "result"
                result.push(x);
            } else {
                // sinon, on "décrémente" et on refait un tirage
                i--;
            }
        }

    console.log(result);
    return result;
}
/*

let grille = [1,2,3,4,5,6];
let resultat = tirageLoto();

fonction1(grille,resultat);

*/

// cette fonction va retourner le nombre de tirages nécessaires pour trouver "x" bons numéros, avec une grille entrée en paramètre "y" dans la fonction


function calculate(x,y) {
    // on initialise le compteur pour le while
    let i = 1;

    // la condition du while est : tant que "nb de bons numéros" < x, on incrémente le compteur "i". Donc, "fonction1()" continuera de s'exécuter tant qu'il retournera un résultat < x. On utilise les fonctions implémentées plus haut...
    while(fonction1(y,tirageLoto()) < x) {
        i++
        }
    
    // on affiche 'i' qui contient le nombre de tirages.
    console.log(i);

}

let x = 2;
let y = [1,2,3,4,5,6];
calculate(x,y);
