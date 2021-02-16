/**
 * une fonction qui teste si une string contient le caractère "@" et qui affiche, dans la console, un message en fonction du résultat
 */

function fonction1(str) {

    // on teste que le paramètre est du bon type
    if (typeof(str) == "string") {

        // on utilise la fonction includes() pour tester si le paramètre "str" comporte "@"
        if(str.includes('@')) {
            console.log('la chaîne de caractères contient @');
        } else {
            console.error('la chaîne ne contient pas @')
        }
    // si le paramètre n'est pas du bon type, alors :
    } else {
        console.error(typeof(str) + ' : données invalide');
    }
}

str1 = "hello@world.com";

fonction1(str1);
