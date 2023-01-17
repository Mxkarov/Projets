/**
 * EXERCICE03
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('.result');
// Declaration des variables
var diametre = 0,
    perimetre = 0,
    aire = 0,
    rayon = 0,
    pi = Math.PI,
    affichage;


affichage = "<h3>Utilisation des fonctions() de l'objet math</h3>";
affichage += "<p>Utilisation de la constante π(pi) </p>";

affichage += `<p> la valeur de <b>π </b> est : ${pi}</p>`;
affichage +=`<h3> Calcul du périmètre (d x π ) et de l'aire (π  * r²) d'un cercle</h3> `;



// Récupération et stockage des saisies utilisateur
diametre = Number(prompt("Saisir le diametre :"));
affichage += `<p>diamètre = <b>${diametre} cm</b> <br> </p>`;
perimetre = diametre * pi;
affichage += `<p> Perimètre = ${perimetre} cm </p>`;
rayon = diametre/2;

aire = pi * (rayon*rayon);
affichage += `<p>Aire = ${aire} cm² </p>`;
affichage += `<p>Périmètre(arrondi) = ${Math.round(perimetre)} cm </p>`;
affichage += `<p>Aire(arrondi) = ${Math.round(aire)} cm² </p>`;



// Injection du résultat dans l'element HTML .result
result.innerHTML = `${affichage}`;