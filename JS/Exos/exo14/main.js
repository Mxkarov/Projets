const result = document.querySelector('.result');

var AB,
BC,
AC,
affichage = "<p>";

AB = prompt("Saisir la longueur de AB (en cm)");
BC = prompt("Saisir la longueur de BC (en cm)");
AC = prompt("Saisir la longueur de AC (en cm)");

if(AB == BC && AB == AC){
    affichage += `Le triangle est équilatéral`;
}
else if (AC == BC && AB != AC){
    affichage +=`Le triangle est isocèle en C mais n'est pas équilatéral`;
}
else if (AB == BC && AB != AC){
    affichage +=`Le triangle est isocèle en B mais n'est pas équilatéral`;
}
else if (AB == AC && AB != BC){
    affichage +=`Le triangle est isocèle en A mais n'est pas équilatéral`;
}
else if (AC == BC && AC != AB){
    affichage +=`Le triangle est isocèle en C mais n'est pas équilatéral`;
}
else if (AB != BC && AB != AC){
    affichage +=`Le triangle n'est isocèle ni en A ni en B ni en C`;
}
affichage += "</p>"



result.innerHTML = `${affichage}`;