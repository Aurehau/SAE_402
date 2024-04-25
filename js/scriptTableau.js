/***************************************** Formulaire vérification date du tableau *******************************************/

document.getElementById("tableauForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var userInput = document.getElementById("date").value; 
    var correctAnswer = "1871"; // Date correcte du tableau

    if (userInput === correctAnswer) {
        document.getElementById("result").innerHTML = "Congratulations! You found the right painting!";
        document.getElementById("result").classList.add("success-message"); 
        setTimeout(function() {
            document.getElementById("result").classList.remove("success-message"); 
            // Animation de célébration
            confetti();
            // Redirection vers la page de récompense 
            setTimeout(function() {
                window.location.href = "recompense1.html";
            }, 2000); // Attendre 2 secondes avant de rediriger
        }, 500);
    } else {
        document.getElementById("result").innerHTML = "Sorry, wrong date. Please try again.";
        document.getElementById("result").classList.add("error-message"); 
        setTimeout(function() {
            document.getElementById("result").classList.remove("error-message"); 
        }, 500);
    }
});

/***************************************** Animation confetti *******************************************/

// function confetti() {
//     var confettiCount = 400; // Nombre de confettis à lancer
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
    var confettiCount = 400; // Nombre de confettis à lancer
    var confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);

    // Lancé de confettis
    for (var i = 0; i < confettiCount; i++) {
        var confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = Math.random() * -100 + 'vh'; // Position initiale aléatoire en haut de l'écran
        confetti.style.animationDelay = Math.random() + 's';
        confettiContainer.appendChild(confetti);
    }

    // Suppression conteneur après l'animation
    setTimeout(function () {
        document.body.removeChild(confettiContainer);
    }, 3000);
}