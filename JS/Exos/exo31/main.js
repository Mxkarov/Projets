const result = document.querySelector('.result');

var affichage = "";
let contact = [
    {
        prenom : "Jean",
        nom : "Dupont",
        age : "15"
    },
    {
        prenom : "Pierre",
        nom : "Durant",
        age : "16"
    },
    {
        prenom : "Jean",
        nom : "Martin",
        age : "17"
    }
]
affichage += `<h2>Liste de contact</h2>`
affichage += `<table><thead><tr><th>Prénom</th><th>Nom</th><th>Age</th> </thead>`
for(let ppl of contact){
    affichage += `<tbody><tr><td>${ppl.prenom}</td> <td>${ppl.nom}</td> <td>${ppl.age}</td></tr>`;
}

affichage += `</tbody></table><br>La personne à la deuxième position de l'annuaire est : <b>${contact[1].prenom} ${contact[1].nom}</b>`;

result.innerHTML += `${affichage}`; 