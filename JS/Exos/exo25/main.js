const result = document.querySelector('.result');

var affichage,
    nb,
    y,
    ligne = "";



affichage = `<h2>Liste d'entiers chaînés</h2>`


nb = Number(prompt("Donnez un nombre entier"));
    for(x = 1; x < (nb/2); x++ ){
        y = 0;
        ligne = `<li> ${nb} = ${x}`;
        
        for(j = x ; y < nb; j++){
            if(j != x) ligne += ` + ${j}`;
            y += j;
        }

        if(y == nb){
            affichage += `${ligne}</li>`;
        }
    }


result.innerHTML += `${affichage}`; 