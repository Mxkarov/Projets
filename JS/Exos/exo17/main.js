const result = document.querySelector('.result');

var montantnetb = 0,
    montantnet = 0,
    nbadult = 0,
    nbkid = 0,
    impot = 0,
    part = 0,
    tximpot = 0,
    tximpot11 = 0,
    tximpot30 = 0,
    tximpot41 = 0,
    affichage;

montantnetb = Number(prompt("Saisissez votre montant net imposable"));
nbadult = Number(prompt("Saisir le nombre d'adultes au sein le foyer"));
nbkid = Number(prompt("Saisir le nombre d'enfants au sein du foyer"));


part = (nbadult) + (nbkid * 0.5);
if (nbkid >= 3) {
    part = ((nbadult * 1) + ((2 * 0.5) + ((nbkid - 2) * 1)));
}

montantnet = montantnetb / part;

if (montantnet < 10226) {
    impot = 0;
}

else if (montantnet >= 10226 && montantnet <= 26070) {

    tximpot = 0.11;
    montantnet = (montantnet - 10226);
    montantnet = (montantnet * tximpot);
    impot = (montantnet * part);


}

else if (montantnet >= 26071 && montantnet <= 74545) {

    tximpot = 0.3;
    tximpot11 = ((26071 - 10226) * 0.11);
    montantnet = (montantnet - 26071) * tximpot;
    montantnet = (montantnet + tximpot11);
    impot = (montantnet * part);


}

else if (montantnet >= 74546 && montantnet <= 160336) {
    tximpot = 0.41;
    tximpot11 = ((26071 - 10226) * 0.11);
    tximpot30 = ((74545 - 26071) * 0.3);
    montantnet = (montantnet - 74546) * tximpot;
    montantnet = (montantnet + tximpot11 + tximpot30);
    impot = (montantnet * part);


}

else if (montantnet > 160336) {
    tximpot = 0.45;
    tximpot11 = ((26071 - 10226) * 0.11);
    tximpot30 = ((74546 - 26071) * 0.3);
    tximpot41 = ((160336 - 74545) * 0.41);
    montantnet = (montantnet - 160336) * tximpot;
    montantnet = (montantnet + tximpot11 + tximpot30 + tximpot41);
    impot = (montantnet * part);

}

affichage = `Le montant de l'impôt sur le revenu pour un foyer composé de <b>${nbadult} adulte(s)</b> et de <b>${nbkid} enfant(s)</b> ,avec un revenu fiscal de <b>${montantnetb}€</b> s'élève à <b> ${Math.round(impot)}€</b>`;




result.innerHTML = `${affichage}`;