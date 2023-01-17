const result = document.querySelector('.result');

var affichage = "",
    h = 96809,
    tx = 0.0089,
    n = 0;
    affichage += `En <b>${n+2015}</b> il a été recensé <b>${h} habitants</b>, le taux d'accroissement de la population étant de <b>0.89%</b>. Combien faudra-t-il d'années pour que la population atteigne <b>120 000 habitants</b> ?</br>`;

    for(n = 1; n > 0; n++){
        h = h*(1+tx);
        affichage +=`<hr>En <b>${n+2015}</b> il y aura <b>${Math.round(h)} habitants </b></br>  `;
        if(h > 120000){
        break;
        }
    }
    affichage +=`<hr>Avec un taux d'accroissement de la population de <b>0.89%</b>,en <b>${n+2015}</b>, il y aura <b>${Math.round(h)} habitants</b> dans la ville de Tourcoing. Il aura fallut <b>${n}années</b>.`


result.innerHTML += `${affichage}`;