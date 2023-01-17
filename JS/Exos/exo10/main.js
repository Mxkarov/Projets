const result = document.querySelector('.result');

var email,
    mdp,
    mdpx = "Zgeg7",
    exemail = "joe@exemple.com",
    affichage;



affichage = "<h3> Test de connection</h3>";

email = prompt("Veuillez saisir votre email");



    if (email == exemail) {
        mdp = prompt ("Entrez votre mot de passe");
        if (mdp == mdpx) {
        affichage += `<p>Bienvenue sur votre espace sécurisé`
        } else {
            alert('Mot de passe invalide');
            affichage += `<p> Veuillez réessayer </p>`
        }
    } else {
        alert('Adresse e-mail non valide');
        affichage += `<p> Veuillez réessayer </p>`
    };






result.innerHTML = `${affichage}`;