const result = document.querySelector('.result');

let affichage="",
    nb,
    note,
    topnote = 0,
    badnote = 20,
    moynote = 0;

    affichage = `<h2> Meilleure note, moins bonne note, moyenne des notes</h2>`;

    nb = Number(prompt("Combien de note voulez-vous entrer ?"));

for(x = 1; x <= nb; x++){
    note = Number(prompt(`Entrez la note de l'élève N°${x}`));
    affichage += `<li>En note <b>${x}</b>, vous avez saisi <b>${note}/20</b></li>`;
    moynote = moynote + note;
    while(isNaN(note) || note < 0 || note > 20){
        note = Number(prompt(`Erreur de saisie, veuillez entrer une note entre 0 et 20.`));
    }
    if(note > topnote ){
        topnote = note;
    }
    if(note < badnote){
        badnote = note;
    }
    console.log(moynote);
}
moynote = moynote / nb;
affichage +=`<hr>Sur l'ensemble des <b>${nb} notes</b> :`;
affichage +=`<li class="bnote">La meilleure note est de <b>${topnote}/20</b></li>`;
affichage +=`<li class="nnote">La moins bonne note est de <b>${badnote}/20</b></li>`;
affichage +=`<li>La moyenne des notes est de <b>${moynote}/20</b></li>`;









result.innerHTML += `${affichage}`; 