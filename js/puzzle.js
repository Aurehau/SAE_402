// var lignes = 3; 
// var colonnes = 3;

// var caseSelectionnee; // case selectionnée pour déplacement
// var caseDeposee; // case dans laquelle on dépose

// var puzzleOrdre = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; // Tableau du puzzle dans l'ordre
// var casesDesordre = ["1", "2", "6", "4", "5", "3", "7", "8", "9"];  // Tableau des carreaux dans le désordre
// var puzzleMelange = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; // Tableau du puzzle dans l'ordre

// window.onload = function() { // fonction quand la page est chargée
//     for (let l = 0; l < lignes; l++) {
//         for (let c = 0; c < colonnes; c++) {

//             let caseJeu = document.createElement("img"); // créer un element image pour chaque case
//             caseJeu.id = l.toString() + "-" + c.toString(); // on donne à chaque case un id
//             caseJeu.src = "../imagesPuzzle/" + casesDesordre.shift() + ".jpg"; // on donne à chaque case une image

//             // gestion d'événement pour le cliquer déposer

//             caseJeu.addEventListener("dragstart", dragStart); //mousedown mouseup touchdown 
//             caseJeu.addEventListener("dragover", dragOver);
//             caseJeu.addEventListener("drop", dragDrop);
//             caseJeu.addEventListener("dragend", dragEnd);

//             document.getElementById("jeu").append(caseJeu);

//         }
//     }

//     // Sélectionner le bouton "Mélanger le puzzle"
//     var boutonMelanger = document.querySelector(".boutonPuzzle");

//     // Ajouter un gestionnaire d'événements au clic sur le bouton
//     boutonMelanger.addEventListener("click", melangerPuzzle);
// }

// function melangerPuzzle() {
//     // Mélanger l'ordre du puzzle
//     puzzleMelange.sort(() => Math.random() - 0.3);

//     // Réorganiser les cases désordonnées en fonction du nouvel ordre du puzzle
//     casesDesordre = [...puzzleMelange];

//     // Mettre à jour les images des cases avec le nouvel ordre
//     for (let l = 0; l < lignes; l++) {
//         for (let c = 0; c < colonnes; c++) {
//             let caseJeu = document.getElementById(l + "-" + c);
//             caseJeu.src = "../imagesPuzzle/" + casesDesordre.shift() + ".jpg";
//         }
//     }
// }

// function positionsActuellesCases() { // Récupère les positions actuelles des cases dans un tableau

//     var positionsActuelles = [];
//     for (let l = 0; l < lignes; l++) {
//         for (let c = 0; c < colonnes; c++) {
//             let caseJeu = document.getElementById(l.toString() + "-" + c.toString()); // selectionne chaque case
//             let srcImage = caseJeu.src.substring(caseJeu.src.lastIndexOf('/') + 1); // recupère le nom de l'image
//             positionsActuelles.push(srcImage); // ajoute le nom de l'image au tableau
//         }
//     }
//     return positionsActuelles; // retourne tableau des positions des cases
// }


// function gagne() {
//     for (let l = 0; l < lignes; l++) {
//         for (let c = 0; c < colonnes; c++) {
//             let caseActuelle = document.getElementById(l + "-" + c);
//             let numeroImageAttendu = puzzleOrdre[l * colonnes + c] + ".jpg";
//             if (caseActuelle.src.endsWith(numeroImageAttendu) === false) {
//                 return false; // Si une case est mal placée, retourne false
//             }
//         }
//     }
//     return true; // Si toutes les cases sont bien placées, retourne true
// }


// function dragStart() { // selection du cliquer déposer
//     caseSelectionnee = this;
// }

// function dragOver(e) { // lorsque souris survole une autre case pour y déposer sa case
//     e.preventDefault();
// }

// function dragDrop() { // relachage d'une case pendant le cliquer déposer
//     caseDeposee = this;
// }

// function dragEnd() { // cliquer déposer terminé
//     if (!caseDeposee.src.includes("3.jpg")) {
//         return;
//     }

//     let coordonneesActuelles = caseSelectionnee.id.split("-"); // coordonées de la case selectionnée
//     let l = parseInt(coordonneesActuelles[0]);
//     let c = parseInt(coordonneesActuelles[1]);

//     let autreCoordonnees = caseDeposee.id.split("-"); // coordonées de la case lorsqu'elle est déposée dans sa nouvelle case
//     let l2 = parseInt(autreCoordonnees[0]);
//     let c2 = parseInt(autreCoordonnees[1]);

//     // détermine si le déplacement de la case sélectionnée est possible à gauche, droite, haut ou bas
//     let deplacementGauche = l == l2 && c2 == c - 1;
//     let deplacementDroite = l == l2 && c2 == c + 1;
//     let deplacementHaut = c == c2 && l2 == l - 1;
//     let deplacementBas = c == c2 && l2 == l + 1;

//     // si le déplacement est valide dans une des 4 directions, échanger les cases
//     let estDeplacementValide = deplacementGauche || deplacementDroite || deplacementHaut || deplacementBas;

//     if (estDeplacementValide) {
//         let imgActuelle = caseSelectionnee.src;
//         let autreImg = caseDeposee.src;

//         caseSelectionnee.src = autreImg;
//         caseDeposee.src = imgActuelle;

//         if (gagne()) { // message gain si le puzzle est dans l'ordre
//             alert("Félicitations ! Vous avez résolu le puzzle !");
//         }
        
//     }
// }

var lignes = 3; 
var colonnes = 3;

var caseSelectionnee; // Case sélectionnée pour le déplacement
var caseDeposee; // Case où la tuile est déposée

var puzzleOrdre = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; // Tableau du puzzle dans l'ordre
var casesDesordre = ["1", "2", "6", "4", "5", "3", "7", "8", "9"]; // Tableau des carreaux dans le désordre
var puzzleMelange = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; // Tableau du puzzle dans l'ordre

window.onload = function() { // fonction appelée lorsque la page est chargée
    for (let l = 0; l < lignes; l++) {
        for (let c = 0; c < colonnes; c++) {

            let caseJeu = document.createElement("img"); // créer un élément image pour chaque case
            caseJeu.id = l.toString() + "-" + c.toString(); // attribuer un ID à chaque case
            caseJeu.src = "../imagesPuzzle/" + casesDesordre.shift() + ".jpg"; // attribuer une image à chaque case

            // Gestion des événements pour le clic et le toucher
            caseJeu.addEventListener("mousedown", grabStart);
            caseJeu.addEventListener("touchstart", grabStart);
            caseJeu.addEventListener("mouseup", grabEnd);
            caseJeu.addEventListener("touchend", grabEnd);

            document.getElementById("jeu").append(caseJeu);

        }
    }

    // Sélectionner le bouton "Mélanger le puzzle"
    var boutonMelanger = document.querySelector(".boutonPuzzle");

    // Ajouter un gestionnaire d'événements au clic sur le bouton
    boutonMelanger.addEventListener("click", melangerPuzzle);
}

function melangerPuzzle() {
    // Mélanger l'ordre du puzzle
    puzzleMelange.sort(() => Math.random() - 0.3);

    // Réorganiser les images des cases en fonction du nouvel ordre
    for (let l = 0; l < lignes; l++) {
        for (let c = 0; c < colonnes; c++) {
            let caseJeu = document.getElementById(l + "-" + c);
            caseJeu.src = "../imagesPuzzle/" + puzzleMelange.shift() + ".jpg";
        }
    }
}

function grabStart(event) { // fonction appelée lorsque le clic ou le toucher sur une case
    caseSelectionnee = this; // Sélectionner la case
    event.preventDefault(); // Empêcher le comportement par défaut du navigateur
}

function grabEnd(event) { // fonction appelée lorsque le clic ou le toucher est terminé
    caseDeposee = this; // Enregistrer la case où la tuile est déposée

    // Échanger les images des cases si une autre case est déposée
    let imgActuelle = caseSelectionnee.src;
    caseSelectionnee.src = caseDeposee.src;
    caseDeposee.src = imgActuelle;

    caseSelectionnee = null; // Réinitialiser la case sélectionnée
    caseDeposee = null; // Réinitialiser la case déposée
    event.preventDefault(); // Empêcher le comportement par défaut du navigateur
}


// https://github.com/SebL68/Scodoc_Notes/blob/main/html/absences/index.php rechercher sliderStart