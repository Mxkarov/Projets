const result = document.querySelector('.result');

var nb1,
    nb2,
    affichage;

    nb1 = Number(prompt("Saisir un nombre"))
    nb2 = Number(prompt("Saisir un deuxième nombre"))

    if((nb1 % nb2) == 0 ){
        affichage += `<p>Le nombre <b>${nb1}</b> est divisible par <b>${nb2}</b></p>`
    } else{
        affichage += `<p>Le nombre <b>${nb1}</b> n'est pas divisible par <b>${nb2}</b></p>`
    }






result.innerHTML = `${affichage}`;