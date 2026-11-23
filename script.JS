//recuperer l'elementde l'ecran une bonne fois pour tout
const ecran=document.getElementById('resultat');

//Afficher le chiffre ou l'operateur sur l'ecran 
function ajouter(valeur) {
    ecran.value += valeur;
}

//Vide completement l'ecran
function effacer() {
    ecran.value = '';
}

//Supprimer les derniers chiffres afficher par l'ecran
function suppdernier() {
    ecran.value = ecran.value.slice(0, -1);
    //.slice(0, -1) : Commencer au debut 0 et arreter juste avant la fin (1)
}
//Calcul l'expresion presente sur l'ecran
function calculer() {
    //Condition : pour voir si l'ecran n'est pas vide?
    if(ecran.value !== "") {
        ecran.value = eval(ecran.value);//si oui, le calcule s'effectue
    } else {
        ecran.value = "";//si l'ecran est vide ou affiche un msg"0"
    }
}