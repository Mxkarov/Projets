const result = document.querySelector('.result');

var choix,
    affichage = "",
boisson = "";


choix = Number(prompt
    (`*****DISTRIBUTEUR DE BOISSON*****
            1) Eau
            2) Jus d'orange
            3) Limonade
            4) Café
            5) Thé

            Faites votre choix`));

switch (choix) {
    case 1: boisson += "Votre <b>Eau</b> se prépare..";
        break;
    case 2: boisson += "Votre <b>Jus d'orange</b> se prépare..";
        break;
    case 3: boisson += "Votre <b>Limonade</b> se prépare..";
        break;
    case 4: boisson += "Votre <b>Café</b> se prépare..";
        break;
    case 5: boisson += "Votre <b>Thé</b> se prépare..";
        break;
    default: boisson += " <b>Commande inconnue veuillez réessayez</b> ";
}

affichage +=`<h3> Quelle boisson vais-je prendre ?</h3>`;

affichage += `*****DISTRIBUTEUR DE BOISSON***** </br>
                1) Eau</br>
                2) Jus d'orange</br>
                3) Limonade</br>
                4) Café</br>
                5) Thé</br>
                </br>
        Faites votre choix : <b>${choix}</b></br></br>
        
        ${boisson}`








result.innerHTML += `${affichage}`;