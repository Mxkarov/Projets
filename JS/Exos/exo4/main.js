
const result = document.querySelector('.result');

var mot,
    motInverse,
    affichage=" ";

affichage = "<h3> Ce mot est-il un palindrome ? </h3>";
mot = prompt("Entre un mot");
affichage += `<p>Vous avez saisi <b>${mot}</b> </br>`
motInverse = mot.split('').reverse('').join('');
affichage+= `le mot inverse : <b> ${motInverse} </b>`

if(mot == motInverse){
    affichage +=`<p>Le mot <b>${mot}</b> est un palindrome</p>`
}
else{
    affichage += `<p>Le mot <b>${mot}</b> n'est pas un palindrome</p>`
}



result.innerHTML = `${affichage}`;