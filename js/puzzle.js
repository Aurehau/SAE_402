var lignes = 3; 
var colonnes = 3;

var caseSelectionnee; // case sélectionnée pour le déplacement
var caseDeposee; // case où la tuile est déposée

var puzzleOrdre = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; // Tableau du puzzle dans l'ordre
var casesDesordre = ["1", "4", "6", "8", "5", "2", "7", "3", "9"]; // Tableau des images des cases dans le désordre
var puzzleMelange = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; // Tableau du puzzle dans l'ordre

window.onload = function() { // fonction appelée lorsque la page est chargée
    for (let l = 0; l < lignes; l++) {
        for (let c = 0; c < colonnes; c++) {

            let caseJeu = document.createElement("img"); // créer un élément image pour chaque case
            caseJeu.id = l.toString() + "-" + c.toString(); // attribuer un ID à chaque case
            caseJeu.src = "../imagesPuzzle/" + casesDesordre.shift() + ".jpg"; // attribuer une image à chaque case

            // Gestion des événements pour le glisser-déposer
            caseJeu.addEventListener("mousedown", glisser);
            caseJeu.addEventListener("touchstart", glisser);
            caseJeu.addEventListener("mouseup", deposer);
            caseJeu.addEventListener("touchend", deposer);

            document.getElementById("jeu").append(caseJeu);
        }
    }

    // Sélectionner le bouton "Mélanger le puzzle"
    var boutonMelanger = document.querySelector(".melangerPuzzle");

    // Ajouter un gestionnaire d'événements au clic sur le bouton
    boutonMelanger.addEventListener("click", melangerPuzzle);

}

function melangerPuzzle() {
    // Mélanger l'ordre du puzzle
    puzzleMelange.sort(() => Math.random() - 0.3);

    // Réorganiser les cases désordonnées en fonction du nouvel ordre du puzzle
    casesDesordre = [...puzzleMelange];

    // Mettre à jour les images des cases avec le nouvel ordre
    for (let l = 0; l < lignes; l++) {
        for (let c = 0; c < colonnes; c++) {
            let caseJeu = document.getElementById(l + "-" + c);
            caseJeu.src = "..imagesPuzzle/" + casesDesordre.shift() + ".jpg";
        }
    }
}


function glisser(event) { // fonction appelée lorsque le glisser commence
    caseSelectionnee = this;
    event.preventDefault(); // Empêcher le comportement par défaut du navigateur pour le glisser-déposer
}

function deposer(event) { // fonction appelée lorsque le glisser est terminé
    caseDeposee = this;
    event.preventDefault(); // Empêcher le comportement par défaut du navigateur pour le glisser-déposer

    if (caseSelectionnee !== caseDeposee && caseDeposee) {
        // Échanger les images des cases si une autre case est déposée
        let imgActuelle = caseSelectionnee.src;
        caseSelectionnee.src = caseDeposee.src;
        caseDeposee.src = imgActuelle;

        if (gagne()) { // Vérifier si le puzzle est résolu
            alert("Félicitations ! Vous avez résolu le puzzle !");
        }
    }
}
