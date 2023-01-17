const result = document.querySelector('.result');

var HT,
    TVA,
    MTVA,
    TTC,
    affichage;

    HT = Number(prompt("Entrez le montant Hors Taxe de l'article "));
    TVA = Number(prompt("Indiquez le taux de TVA en %"));
    affichage =`<p>Le prixH.T de l'objet étant de <b>${HT}€</b>, avec un taux de T.V.A applicable de <b>${TVA}%</b>,</p>`
    MTVA = HT * TVA/100;
    affichage += `<p><li>Le montant de la T.V.A s'élèvera à <b>${MTVA}€</b></li></p>`;
    TTC = HT + MTVA;
    affichage += `<p><li>Le prix T.T.C de l'article sera de <b>${TTC}€</b></li></p>`;


result.innerHTML = `${affichage}`;