const result = document.querySelector('.result');

var taille,
poids,
cat,
affichage;

taille = prompt("Entrez votre taille en cm");
poids = prompt("Entrez votre poids en kg");
affichage = `Pour <b>${taille}cm</b> et <b>${poids}kg</b> : `;


if(
    taille < 145 || taille > 183 || poids > 77 || poids < 43
){
    affichage += `<p><li>Aucune taille disponible désolé</li></p>`;
}
else if(
    taille >= 145 && taille <= 160 && poids >=43 && poids <= 65 
){
    cat = "Taille 1";
    affichage += `<p><li>Prenez la ${cat}</li></p>`;
}
else if(
    taille >= 163 && taille <= 169 && poids >=43 && poids <= 47 
){
    cat = "Taille 1";
    affichage += `<p><li>Prenez la ${cat}</li></p>`;
}
else if(
    taille >= 163 && taille <= 166 && poids >=48 && poids <= 53 
){
    cat = "Taille 1";
    affichage += `<p><li>Prenez la ${cat}</li></p>`;
}
else if(
    taille == 163  && poids >=54 && poids <= 59 
){
    cat = "Taille 1";
    affichage += `<p><li>Prenez la ${cat}</li></p>`;
}
else if(
    taille >= 169 && taille <= 178 && poids >=48 && poids <= 53 
){
    cat = "Taille 2";
    affichage += `<p><li>Prenez la ${cat}</li></p>`;
}
else if(
    taille >= 166 && taille <= 175 && poids >= 54 && poids <= 59 
){
    cat = "Taille 2";
    affichage += `<p><li>Prenez la ${cat}</li></p>`;
}
else if(
    taille >= 163 && taille <= 172 && poids >= 60 && poids <= 65 
){
    cat = "Taille 2";
    affichage += `<p><li>Prenez la ${cat}</li></p>`;
}
else if(
    taille >= 160 && taille <= 169 && poids >= 66 && poids <= 71
){
    cat = "Taille 2";
    affichage += `<p><li>Prenez la ${cat}</li></p>`;
}
else if(
    taille >= 178 && taille <= 183 && poids >= 54 && poids <= 59 
){
    cat = "Taille 3";
    affichage += `<p><li>Prenez la ${cat}</li></p>`;
}
else if(
    taille >= 175 && taille <= 183 && poids >= 60 && poids <= 65
){
    cat = "Taille 3";
    affichage += `<p><li>Prenez la ${cat}</li></p>`;
}
else if(
    taille >= 172 && taille <= 183 && poids >= 66 && poids <= 71 
){
    cat = "Taille 3";
    affichage += `<p><li>Prenez la ${cat}</li></p>`;
}
else if(
    taille >= 163 && taille <= 183 && poids >= 72 && poids <= 77 
){
    cat = "Taille 3";
    affichage += `<p><li>Prenez la ${cat}</li></p>`;
}
else if(
    taille >= 172 && taille <= 183 && poids >= 43 && poids <= 47 
){
    affichage += `<p><li>Aucune taille disponible, désolé.</li></p>`;
}
else if(
    taille == 183 && poids >= 48 && poids <= 53
){
    affichage += `<p><li>Aucune taille disponible, désolé.</li></p>`;
}
else if(
    taille >= 145 && taille <= 157 && poids >= 66 && poids <= 71 
){
    affichage += `<p><li>Aucune taille disponible, désolé.</li></p>`;
}
else if(
    taille >= 145 && taille <= 160 && poids >= 72 && poids <= 77 
){
    affichage += `<p><li>Aucune taille disponible, désolé.</li></p>`;
}

affichage += `<p><li>Prenez la ${cat}</li></p>`;

result.innerHTML = `${affichage}`;