/************************************************** Formulaire vérification musée des beaux arts **************************************************/

document.getElementById("destinationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var userInput = document.getElementById("destination").value.toLowerCase(); 
    var correctAnswers = ["musée des beaux arts", "musée des beaux-arts", "musee des beaux arts", "musee des beaux-arts", "beaux arts", "beaux-arts", "bo zar", "musee des bo zar", "musée des bo zar", "musée des bo-zar", "musee des bo-zar"]; // Différentes réponses correctes
    
    if (correctAnswers.includes(userInput)) { // Vérifie si la réponse de l'utilisateur est dans la liste des réponses correctes
        document.getElementById("result").innerHTML = "Congratulations! Head for the 'Musée des Beaux-Arts!'";
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
        document.getElementById("result").innerHTML = "Sorry, wrong answer. Please try again.";
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