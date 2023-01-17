const result = document.querySelector('.result');

var ancien,
    age = 0,
    salaire = 0,
    indem = 0,
    indems = 0
    bonus = 0,
    affichage = "";

    age = Number(prompt("Quel âge avez-vous ?"));
    ancien = Number(prompt("Combiend d'années d'ancienneté avez-vous ?"));
    salaire = Number(prompt("De combien était votre dernier salaire ?"));


    if(ancien >= 1 && ancien <= 10){
        indems = (salaire/2 * ancien);
        if(age >= 46 && age <= 49){
            bonus = salaire * 2 ;
        } 
        else if(age > 50){
            bonus = salaire * 5;
        }
    }
    else if(ancien > 10){
        indems = (salaire/2 * 10) + (salaire * (ancien - 10));
        if(age >= 46 && age <= 49){
            bonus = salaire * 2 ;
        } 
        else if(age > 50){
            bonus = salaire * 5;
        } 
    }
    else if(ancien < 1){
        bonus = 0;
        indems = 0;
    }

    indem = indems + bonus;
    
    affichage += `<p>Le montant de l'indemnité pour un salarié de <b>${age} ans</b> et avec <b>${ancien}</b> années d'ancienneté s'élève à <b>${indem}€</b></p>`



result.innerHTML = `${affichage}`;