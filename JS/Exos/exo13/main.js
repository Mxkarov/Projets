const result = document.querySelector('.result');

var age,
    cat,
    affichage = "";

age = prompt("Entrez l'âge de votre enfant");

if (age < 3) {

}
else if (age >= 3 && age <= 6) {
    cat = "Baby";
}

else if (age >= 7 && age <= 8) {
    cat = "Poussin";
}

else if (age >= 9 && age <= 10) {
    cat = "Pupille";
}

else if (age >= 11 && age <= 12) {
    cat = "Minime";
}

else if (age >= 13 && age <= 18) {
    cat = "Cadet";
}

else if (age > 18) {
    cat = "adulte car ce n'est plus enfant."
}

affichage += `<p>Votre enfant peut obtenir une licence de catégorie ${cat}</p>`


result.innerHTML = `${affichage}`;