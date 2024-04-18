/***************************************** Formulaire vérification date du tableau *******************************************/

document.getElementById("tableauForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var userInput = document.getElementById("date").value; 
    var correctAnswer = "1920"; // Date correcte du tableau

    if (userInput === correctAnswer) {
        document.getElementById("result").innerHTML = "Bravo ! Vous avez trouvé le bon tableau !";
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
        document.getElementById("result").innerHTML = "Désolé, mauvaise date. Veuillez réessayer.";
        document.getElementById("result").classList.add("error-message"); 
        setTimeout(function() {
            document.getElementById("result").classList.remove("error-message"); 
        }, 500);
    }
});

/***************************************** Animation confetti *******************************************/

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
        confetti.style.animationDelay = Math.random() * 3 + 's'; 
        confettiContainer.appendChild(confetti); 
    }

    // Supression conteneur après l'animation
    setTimeout(function() {
        document.body.removeChild(confettiContainer);
    }, 3000);
}