const result = document.querySelector('.result');

var long1,
    long2,
    hypo,
    affichage;

long1 = prompt("Entrez la première longueur");
long2 = prompt("Entrez la deuxième longueur");
affichage = `<p>Les longueurs des cotés adjacents à l'angle droit étant de <b>${long1}cm</b> et de <b>${long2}cm</b>,`

hypo = Math.sqrt(Math.pow(long1,2) + Math.pow(long2,2));
hypo = Math.round(hypo*100)/100
affichage += `<p><li> La longueur de l'hypoténuse est de <b>${hypo}cm</b></li></p>`;






result.innerHTML = `${affichage}`;