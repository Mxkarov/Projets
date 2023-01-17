const result = document.querySelector('.result');

var text,
    textmin,
    tab,
    affichage;

affichage = "<h3>Traitement d'une chaine de caractères</h3>";
text = prompt("Entrez une phrase");
affichage += `<p>Vous avez saisi : <b>${text}</b></p>`;
textmin = text.toLowerCase('');
affichage += `<p>La chaîne en mininuscule : <b>${textmin}</b></p>`;
tab = textmin.split('').slice('');
affichage += `<p>Mise en tableau : <b>${tab}</b></p>`;

const roar = text;
const textmaj = roar.split(' ');

for(let i = 0; i < textmaj.length; i++){
    textmaj[i] = textmaj[i].charAt(0).toUpperCase() + textmaj[i].slice(1);

}
const textmajn = textmaj.join(' ');
affichage += `<p>La chaîne après traitement : <b>${textmajn}</b></p>`;

result.innerHTML = `${affichage}`;