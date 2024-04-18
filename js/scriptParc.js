/************************************************** Formulaire vérification musée des beaux arts **************************************************/

document.getElementById("destinationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var userInput = document.getElementById("destination").value.toLowerCase(); 
    var correctAnswer = "musée des beaux arts"; // Réponse correcte

    if (userInput === correctAnswer) {
        document.getElementById("result").innerHTML = "Bravo ! Direction le musée des beaux-arts !";
        document.getElementById("result").classList.add("success-message"); 
        setTimeout(function() {
            document.getElementById("result").classList.remove("success-message"); 
            // Animation de célébration
            confetti();
            // Redirection vers le puzzle
            setTimeout(function() {
                window.location.href = "page13.html";
            }, 2000); // Attendre 2 secondes avant de rediriger
        }, 500);
    } else {
        document.getElementById("result").innerHTML = "Désolé, mauvaise réponse. Veuillez réessayer.";
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

/*************************************************************************************************************************************************/