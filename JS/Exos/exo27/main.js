const result = document.querySelector('.result');

let affichage = "",
    mb = 0,
    etudiants = [
        {
            prenom: "José",
            nom: "Garcia",
            matieres: {
                francais: 16,
                anglais: 7,
                humour: 14,
            }
        },
        {
            prenom: "Antoine",
            nom: "De Caunes",
            matieres: {
                francais: 15,
                anglais: 6,
                humour: 16,
                informatique: 4,
                sport: 10,
            }
        }
    ];
affichage += `<h2>Notes des étudiants</h2>`;

for (let etudiant of etudiants) {
    affichage += `<b>${etudiant.prenom}</b> <b>${etudiant.nom}</b></br>`;
    let mb = 0;
    let nbmat = 0;
    for (let matiere in etudiant.matieres) {
        affichage += `<li> ${matiere} : <b> ${etudiant.matieres[matiere]}/20</b></li>`;
        mb += etudiant.matieres[matiere];
        nbmat++;
    }
    affichage += `<br> Moyenne générale : <b>${Math.round((mb / nbmat) * 10) / 10}/20</b><hr>`;
}

result.innerHTML += `${affichage}`; 
