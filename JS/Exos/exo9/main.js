const result = document.querySelector('.result');

var capini,
    taux = 0,
    benf = 0,
    total = 0,
    tps,
    affichage;

capini = Number(prompt("Saisir le capital à investir"));
taux = Number(prompt("Saisir le taux d'intérêts (en%)"));
tps = Number(prompt("Saisir le nombre d'années"));

affichage = `<p>Avec un capital initial de <b>${capini}€</b>, placé à <b>${taux}%</b> pendant <b>${tps} année(s)</b>,</p>`;
total = (capini * Math.pow(1 + taux / 100, tps));
total = Math.round(total * 1);
benf = total - capini;
affichage += `<p><li>Le montant total des intérêts s'élèvera à <b>${benf}€</b></p>`;
affichage += `<p><li>Le capital final à l'issue sera de <b>${total}€</b></p>`;




result.innerHTML = `${affichage}`;