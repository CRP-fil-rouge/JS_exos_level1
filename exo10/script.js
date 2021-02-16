/**
 * une fonction qui teste si une string "str1" contient une string "str2" ou une string "str3" et qui affiche, dans la console, un message en fonction du résultat
 */

function fonction1(str1, str2, str3) {

    // on teste que le paramètre est du bon type
    if (typeof(str1) == "string" && typeof(str2) == "string" && typeof(str3 == "string")) {

        // on utilise la fonction includes() pour tester si le paramètre "str1" comporte le paramètre "str2"
        if(str1.includes(str2) || str1.includes(str3)) {
            console.log('la chaîne de caractères contient ' + str2 + " ou " + str3);
        } else {
            console.error('la chaîne ne contient ni ' + str2 + ", ni " + str3)
        }

    // si le paramètre n'est pas du bon type, alors :
    } else {
        console.error('données invalides');
    }
    
}

str1 = "hello@world.com";
str2 = "hello !";
str3 = "z";


fonction1(str1,str2,str3);
