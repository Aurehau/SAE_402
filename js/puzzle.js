const lignes = 3; 
const colonnes = 3;

let caseSelectionnee; // case selectionnée pour déplacement
let caseDeposee; // case dans laquelle on dépose

const puzzleOrdre = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; // Tableau du puzzle dans l'ordre
let casesDesordre = ["1", "2", "6", "4", "5", "3", "7", "8", "9"];  // Tableau des carreaux dans le désordre
const puzzleMelange = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; // Tableau du puzzle dans l'ordre

window.onload = () => { // fonction quand la page est chargée
    for (let l = 0; l < lignes; l++) {
        for (let c = 0; c < colonnes; c++) {

            const caseJeu = document.createElement("img"); // créer un element image pour chaque case
            caseJeu.id = `${l.toString()}-${c.toString()}`; // on donne à chaque case un id
            caseJeu.src = `../imagesPuzzle/${casesDesordre.shift()}.jpg`; // on donne à chaque case une image

            // gestion d'événement pour le cliquer déposer

            caseJeu.addEventListener("dragstart", dragStart); //mousedown mouseup touchdown 
            caseJeu.addEventListener("dragover", dragOver);
            caseJeu.addEventListener("drop", dragDrop);
            caseJeu.addEventListener("dragend", dragEnd);

            caseJeu.addEventListener("touchstart", dragStart, false);
            caseJeu.addEventListener("touchmove", dragOver, false);
            caseJeu.addEventListener("touchend", touchDrop, false);

            document.getElementById("jeu").append(caseJeu);

        }
    }

    // Sélectionner le bouton "Mélanger le puzzle"
    const boutonMelanger = document.querySelector(".boutonPuzzle");

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
            const caseJeu = document.getElementById(`${l}-${c}`);
            caseJeu.src = `../imagesPuzzle/${casesDesordre.shift()}.jpg`;
        }
    }
}

function positionsActuellesCases() { // Récupère les positions actuelles des cases dans un tableau

    const positionsActuelles = [];
    for (let l = 0; l < lignes; l++) {
        for (let c = 0; c < colonnes; c++) {
            const caseJeu = document.getElementById(`${l.toString()}-${c.toString()}`); // selectionne chaque case
            const srcImage = caseJeu.src.substring(caseJeu.src.lastIndexOf('/') + 1); // recupère le nom de l'image
            positionsActuelles.push(srcImage); // ajoute le nom de l'image au tableau
        }
    }
    return positionsActuelles; // retourne tableau des positions des cases
}


function gagne() {
    for (let l = 0; l < lignes; l++) {
        for (let c = 0; c < colonnes; c++) {
            const caseActuelle = document.getElementById(`${l}-${c}`);
            const numeroImageAttendu = `${puzzleOrdre[l * colonnes + c]}.jpg`;
            if (caseActuelle.src.endsWith(numeroImageAttendu) === false) {
                return false; // Si une case est mal placée, retourne false
            }
        }
    }
    return true; // Si toutes les cases sont bien placées, retourne true
}


function dragStart() { // selection du cliquer déposer
    caseSelectionnee = this;
}

function dragOver(e) { // lorsque souris survole une autre case pour y déposer sa case
    e.preventDefault();
}

function dragDrop() { // relachage d'une case pendant le cliquer déposer
    caseDeposee = this;
}

function touchDrop(e) { // relachage d'une case pendant la touch
    const img = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    caseDeposee = img;
    dragEnd();
}


function dragEnd() { // cliquer déposer terminé
    if (!caseDeposee.src.includes("3.jpg")) {
        return;
    }

    const coordonneesActuelles = caseSelectionnee.id.split("-"); // coordonées de la case selectionnée
    const l = Number.parseInt(coordonneesActuelles[0]);
    const c = Number.parseInt(coordonneesActuelles[1]);

    const autreCoordonnees = caseDeposee.id.split("-"); // coordonées de la case lorsqu'elle est déposée dans sa nouvelle case
    const l2 = Number.parseInt(autreCoordonnees[0]);
    const c2 = Number.parseInt(autreCoordonnees[1]);

    // détermine si le déplacement de la case sélectionnée est possible à gauche, droite, haut ou bas
    const deplacementGauche = l === l2 && c2 === c - 1;
    const deplacementDroite = l === l2 && c2 === c + 1;
    const deplacementHaut = c === c2 && l2 === l - 1;
    const deplacementBas = c === c2 && l2 === l + 1;

    // si le déplacement est valide dans une des 4 directions, échanger les cases
    const estDeplacementValide = deplacementGauche || deplacementDroite || deplacementHaut || deplacementBas;

    if (estDeplacementValide) {
        const imgActuelle = caseSelectionnee.src;
        const autreImg = caseDeposee.src;

        caseSelectionnee.src = autreImg;
        caseDeposee.src = imgActuelle;

        if (gagne()) { // message gain si le puzzle est dans l'ordre
            alert("Félicitations ! Vous avez résolu le puzzle !"); /****** Renvoyer à la page suivant ******/
        }
        
    }
}