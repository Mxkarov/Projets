const result = document.querySelector('.result');

var affichage = "";

for (var i = 1; i <= 10; i++){
affichage += `<li><b>${i}</b></li>`;
}

affichage += `Bravo vous avez compté jusqu'à 10 !`



result.innerHTML += `${affichage}`;