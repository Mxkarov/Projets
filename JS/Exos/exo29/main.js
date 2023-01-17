const result = document.querySelector('.result');

var affichage = "",
    nb,
    y,
    ligne = "",
    i = 0,
    j = 0;



affichage = `<h2>Liste d'entiers chaînés</h2>`;


while(isNaN(nb) || nb < 0) nb = Number(prompt("Donnez un nombre entier"));
affichage += `Vous avez saisi le nombre <b>${nb}</b><br>`;
affichage += `Voici la liste d'entiers chaînés dont la somme est égal à <b>${nb}</b>`;


while( i < (nb/2)){
i++;
y = i; 
ligne = `<li> ${nb} = ${i}`;
j = i;
while(y < nb){
    j++;
    ligne += ` + ${j}`;
    y += j;
}
if(y == nb) affichage += `${ligne}</li>`;
}

result.innerHTML += `${affichage}`; 