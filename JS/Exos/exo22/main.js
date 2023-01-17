const result = document.querySelector('.result');

var affichage = "";

for(var c = 1; c <= 3; c++){
    affichage += `Chapitre <b>${c}</b></br>`;
    for (var p = 1; p <= 3; p++){
        affichage += `- Partie <b>${c} . ${p}</b></br>`;
    }
}

result.innerHTML += `${affichage}`;