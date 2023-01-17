const result = document.querySelector('.result');

var affichage = "";

affichage += `<h1>Les tables de multiplications de 1 à 10</h1>`;

for(var t = 1; t<=10; t++){
    affichage += `<div class="card"> Table de : <b>${t}</b><ul>`;

    for(var m = 1; m<=10; m++){
        affichage += `<li class="tab-25"> ${t} x ${m} = <b>${t*m}</b></li>`
    }
}
affichage += `</ul></div>`

result.innerHTML += `${affichage}`;