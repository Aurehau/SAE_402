var lignes = 3;
var colonnes = 3;
var emptyIndex = 2;  // '3.jpg' est considéré comme la case vide
var puzzle = [];

window.onload = function() {
    const jeu = document.getElementById("jeu");
    for (let i = 0; i < lignes * colonnes; i++) {
        let img = document.createElement("img");
        img.src = `../imagesPuzzle/${i + 1}.jpg`;
        img.id = `piece-${i}`;
        img.addEventListener("pointerdown", startMove);
        if (i === emptyIndex) {
            img.classList.add('empty');
        }
        jeu.appendChild(img);
    }
    document.querySelector(".boutonPuzzle").addEventListener("click", melangerPuzzle);
};

function startMove(event) {
    const img = event.target;
    if (img.classList.contains('empty')) return;  // Ne pas déplacer la case vide

    img.setPointerCapture(event.pointerId);
    let startX = event.clientX;
    let startY = event.clientY;

    const onPointerMove = (e) => {
        handleMovement(e, img, startX, startY);
        img.releasePointerCapture(e.pointerId);
    };

    img.addEventListener("pointermove", onPointerMove);
    img.addEventListener("pointerup", () => {
        img.removeEventListener("pointermove", onPointerMove);
    });
}

function handleMovement(e, img, startX, startY) {
    let dx = e.clientX - startX;
    let dy = e.clientY - startY;
    moveAccordingToGesture(dx, dy, img);
}

function moveAccordingToGesture(dx, dy, img) {
    let currentRow = Math.floor(Array.from(img.parentNode.children).indexOf(img) / colonnes);
    let currentCol = Array.from(img.parentNode.children).indexOf(img) % colonnes;
    let targetRow = currentRow + (Math.abs(dy) > Math.abs(dx) ? (dy > 0 ? 1 : -1) : 0);
    let targetCol = currentCol + (Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 1 : -1) : 0);
    let targetIndex = targetRow * colonnes + targetCol;

    if (targetRow >= 0 && targetRow < lignes && targetCol >= 0 && targetCol < colonnes) {
        let targetImg = document.getElementById(`piece-${targetIndex}`);
        if (targetImg && targetImg.classList.contains('empty')) {
            swapImages(img, targetImg);
        }
    }
}

function swapImages(img1, img2) {
    let temp = img1.src;
    img1.src = img2.src;
    img2.src = temp;
    img2.classList.remove('empty');
    img1.classList.add('empty');
}

function melangerPuzzle() {
    let indices = Array.from({length: lignes * colonnes}, (_, i) => i);
    do {
        indices.sort(() => Math.random() - 0.5);
    } while (!isSolvable(indices));

    indices.forEach((index, i) => {
        let img = document.getElementById(`piece-${i}`);
        img.src = `../imagesPuzzle/${index + 1}.jpg`;
        img.classList.remove('empty');
        if (index === emptyIndex) {
            img.classList.add('empty');
        }
    });
}

function isSolvable(indices) {
    let inversions = 0;
    for (let i = 0; i < indices.length; i++) {
        for (let j = i + 1; j < indices.length; j++) {
            if (indices[i] !== emptyIndex && indices[j] !== emptyIndex && indices[i] > indices[j]) inversions++;
        }
    }
    return inversions % 2 === 0;  // Assuming the empty tile is in the correct position in the solved state
}




// var lignes = 3;
// var colonnes = 3;

// var emptyCell = {row: 2, column: 2}; // Case vide au départ
// var selectedPiece = null; // Pièce sélectionnée pour le déplacement

// window.onload = function() {
//     for (let l = 0; l < lignes; l++) {
//         for (let c = 0; c < colonnes; c++) {
//             let caseJeu = document.createElement("img");
//             caseJeu.id = l + "-" + c;
//             caseJeu.src = "../imagesPuzzle/" + (l * colonnes + c + 1) + ".jpg";
//             caseJeu.addEventListener("mousedown", selectPiece);
//             caseJeu.addEventListener("touchstart", selectPiece);
//             document.getElementById("jeu").appendChild(caseJeu);
//         }
//     }
//     updateEmptyCell();
// }

// function selectPiece(event) {
//     event.preventDefault();
//     selectedPiece = event.target;
//     selectedPiece.style.zIndex = "1"; // Met la pièce sélectionnée au premier plan
//     document.addEventListener("mousemove", movePiece);
//     document.addEventListener("touchmove", movePiece);
//     document.addEventListener("mouseup", releasePiece);
//     document.addEventListener("touchend", releasePiece);
// }

// function movePiece(event) {
//     event.preventDefault();
//     if (!selectedPiece) return;

//     let rect = selectedPiece.getBoundingClientRect();
//     let offsetX = event.clientX - rect.left;
//     let offsetY = event.clientY - rect.top;
//     selectedPiece.style.left = offsetX + "px";
//     selectedPiece.style.top = offsetY + "px";
// }

// function releasePiece(event) {
//     event.preventDefault();
//     if (!selectedPiece) return;

//     let rect = document.getElementById("jeu").getBoundingClientRect();
//     let cellWidth = rect.width / colonnes;
//     let cellHeight = rect.height / lignes;
//     let targetRow = Math.floor((event.clientY - rect.top) / cellHeight);
//     let targetColumn = Math.floor((event.clientX - rect.left) / cellWidth);

//     let selectedCell = {
//         row: parseInt(selectedPiece.id.split("-")[0]),
//         column: parseInt(selectedPiece.id.split("-")[1])
//     };

//     let targetCell = {row: targetRow, column: targetColumn};

//     if (isAdjacent(selectedCell, emptyCell) && isEqual(selectedCell, targetCell)) {
//         swapCells(selectedCell, emptyCell);
//         updateEmptyCell();
//         if (checkVictory()) {
//             alert("Félicitations ! Vous avez résolu le puzzle !");
//         }
//     }

//     selectedPiece.style.left = "";
//     selectedPiece.style.top = "";
//     selectedPiece.style.zIndex = ""; // Remet la pièce à son z-index d'origine
//     selectedPiece = null;

//     document.removeEventListener("mousemove", movePiece);
//     document.removeEventListener("touchmove", movePiece);
//     document.removeEventListener("mouseup", releasePiece);
//     document.removeEventListener("touchend", releasePiece);
// }

// function isAdjacent(cell1, cell2) {
//     return Math.abs(cell1.row - cell2.row) + Math.abs(cell1.column - cell2.column) === 1;
// }

// function isEqual(cell1, cell2) {
//     return cell1.row === cell2.row && cell1.column === cell2.column;
// }

// function swapCells(cell1, cell2) {
//     let tempSrc = document.getElementById(cell1.row + "-" + cell1.column).src;
//     document.getElementById(cell1.row + "-" + cell1.column).src = document.getElementById(cell2.row + "-" + cell2.column).src;
//     document.getElementById(cell2.row + "-" + cell2.column).src = tempSrc;
// }

// function updateEmptyCell() {
//     for (let l = 0; l < lignes; l++) {
//         for (let c = 0; c < colonnes; c++) {
//             let cell = {row: l, column: c};
//             if (isEmpty(cell)) {
//                 emptyCell = cell;
//                 return;
//             }
//         }
//     }
// }

// function isEmpty(cell) {
//     return document.getElementById(cell.row + "-" + cell.column).src.endsWith("9.jpg");
// }

// function checkVictory() {
//     for (let l = 0; l < lignes; l++) {
//         for (let c = 0; c < colonnes; c++) {
//             if (document.getElementById(l + "-" + c).src.endsWith((l * colonnes + c + 1) + ".jpg") === false) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }


// https://github.com/SebL68/Scodoc_Notes/blob/main/html/absences/index.php rechercher sliderStart