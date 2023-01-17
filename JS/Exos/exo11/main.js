const result = document.querySelector('.result');

var lettre,

    affichage;

    lettre = prompt("Veuillez saisir une lettre");

    if(lettre == "a" || lettre == "e" || lettre == "i" || lettre == "o" || lettre == "u" || lettre == "y"){
        affichage +=`<p>La lettre ${lettre} est une voyelle</p>`
    } else {
        affichage+= `<p>La lettre ${lettre} n'est pas une voyelle</p>`
    }




result.innerHTML = `${affichage}`;