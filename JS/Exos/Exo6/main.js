const result = document.querySelector('.result');

var cote = 0,
    long = 0,
    larg = 0,
    perimetre = 0,
    aire = 0,
    perim = 0,
    aire2 = 0,
    affichage;

affichage = "<h3>Calcul de l'aire et du périmètre d'un carré</h3>"

cote = prompt("Entrez la longeurs des côtés du carré");
affichage += `<p>Les longueurs des côtés du carré étant de <b>${cote}cm </b></p>`
perimetre = 4 * cote
affichage += `<p><li>Le périmètre de ce carré est de <b>${perimetre}cm</b></li></p>`
aire = cote * cote 
affichage += `<p><li>L'aire de ce carré est de <b>${aire}cm</b></li></p><hr>`



affichage += "<h3>Calcul de l'aire et du périmètre d'un rectangle</h3>"

long = prompt("Entrez la longeur du rectangle");
larg = prompt("Entrez la largeur du rectangle");
affichage += `<p>Les longueurs des côtés du rectangle étant de <b>${long}cm </b> pour la longueur et de <b>${larg}cm</b> pour la largeur</p>`
perim = larg*2 + long*2
affichage += `<p><li>Le périmètre de ce rectangle est de <b>${perim}cm</b></li></p>`
aire2 = long * larg 
affichage += `<p><li>L'aire de ce carré est de <b>${aire2}cm</b></li></p>`



result.innerHTML = `${affichage}`;