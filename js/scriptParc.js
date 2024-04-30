/************************************************** Formulaire vérification musée des beaux arts **************************************************/

document.getElementById("destinationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var userInput = document.getElementById("destination").value.toLowerCase(); 
    var correctAnswers = ["musée des beaux arts", "musée des beaux-arts", "musee des beaux arts", "musee des beaux-arts", "beaux arts", "beaux-arts", "bo zar", "musee des bo zar", "musée des bo zar", "musée des bo-zar", "musee des bo-zar", "museum beaux-arts", "Museum beaux-arts","museum beaux arts", "Museum beaux arts",]; // Différentes réponses correctes
    
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