const lignes = 3; 
const colonnes = 3;

let caseSelectionnee; // case selectionnée pour déplacement
let caseDeposee; // case dans laquelle on dépose

const puzzleOrdre = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; // Tableau du puzzle dans l'ordre
let casesDesordre = ["1", "7", "6", "3", "2", "9", "4", "8", "5"];  // Tableau des carreaux dans le désordre
const puzzleMelange = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; // Tableau du puzzle dans l'ordre (que l'on va mélanger et comparer au tableau puzzleOrdre)

/************************* quand la page est chargée : *************************/

window.onload = () => {
    for (let l = 0; l < lignes; l++) {
        for (let c = 0; c < colonnes; c++) {

            const caseJeu = document.createElement("img"); // créer un element image pour chaque case
            caseJeu.id = `${l.toString()}-${c.toString()}`; // on donne à chaque case un id
            caseJeu.src = `../imagesPuzzle/${casesDesordre.shift()}.jpg`; // on donne à chaque case une image

            // gestion d'événement pour le cliquer déposer

            caseJeu.addEventListener("dragstart", dragStart);
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

    // Ajouter un gestionnaire d'événements au clic sur ce bouton
    boutonMelanger.addEventListener("click", melangerPuzzle);
}

/************************* fonction pour mélanger le puzzle au clic sur le bouton *************************/

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

/************************* récupère les positions actuelles des cases dans un tableau *************************/

function positionsActuellesCases() { 

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

/************************* fonction de victoire, vérifie si le tableau est dans l'ordre *************************/

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

/************************* Gestion des cliquer déposer *************************/

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

        if (gagne()) { // Vérifie si le puzzle est dans l'ordre
            confetti(); // Lance l'animation de confettis
            setTimeout(function() {
                window.location.href = "page14.html"; // Redirige vers la page14.html
            }, 2000); // Attendre 2 secondes avant de rediriger
        }        
    }
}


/***************************************** Animation confetti *******************************************/

// function confetti() {
//     var confettiCount = 300; // Nombre de confettis à lancer
//     var confettiContainer = document.createElement('div');
//     confettiContainer.classList.add('confetti-container');
//     document.body.appendChild(confettiContainer); 

//     // Lancé de confettis
//     for (var i = 0; i < confettiCount; i++) {
//         var confetti = document.createElement('div');
//         confetti.classList.add('confetti');
//         confetti.style.left = Math.random() * 100 + '%'; 
//         confetti.style.animationDelay = Math.random() * 3 + 's'; 
//         confettiContainer.appendChild(confetti); 
//     }

//     // Supression conteneur après l'animation
//     setTimeout(function() {
//         document.body.removeChild(confettiContainer);
//     }, 3000);
// }

function confetti() {
    var confettiCount = 300; 
    var confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);

    // Lancé de confettis
    for (var i = 0; i < confettiCount; i++) {
        var confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = Math.random() * -100 + 'vh'; 
        confetti.style.animationDelay = Math.random() * 0.3 + 's'; 
        confetti.style.animationDuration = '1s';
        confettiContainer.appendChild(confetti);
    }

    // Suppression conteneur après un court délai
    setTimeout(function () {
        document.body.removeChild(confettiContainer);
    }, 1500); // Délai avant la suppression des confettis
}

/*************************************************************************************************************************************************/