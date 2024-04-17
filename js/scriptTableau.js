// document.getElementById("tableauForm").addEventListener("submit", function(event) {
//     event.preventDefault();
//     var userInput = document.getElementById("date").value; 
//     var correctAnswer = "1920"; // Date correcte du tableau

//     if (userInput === correctAnswer) {
//         document.getElementById("result").innerHTML = "Bravo ! Vous avez trouvé le bon tableau !";
//         document.getElementById("result").classList.add("success-message"); 
//         setTimeout(function() {
//             document.getElementById("result").classList.remove("success-message"); 
//         }, 500);
//         // Redirection vers la page de récompense
//         window.location.href = "recompense.html";
//     } else {
//         document.getElementById("result").innerHTML = "Désolé, mauvaise date. Veuillez réessayer.";
//         document.getElementById("result").classList.add("error-message"); 
//         setTimeout(function() {
//             document.getElementById("result").classList.remove("error-message"); 
//         }, 500);
//     }
// });

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
            // Redirection vers la page de récompense après un court délai
            setTimeout(function() {
                window.location.href = "recompense.html";
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

// Fonction pour l'animation de célébration (confettis)
function confetti() {
    var confettiCount = 100; // Nombre de confettis à lancer
    var confettiContainer = document.createElement('div'); // Créer un conteneur pour les confettis
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer); // Ajouter le conteneur au corps de la page

    // Créer et lancer les confettis
    for (var i = 0; i < confettiCount; i++) {
        var confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%'; // Position aléatoire sur l'axe horizontal
        confetti.style.animationDelay = Math.random() * 3 + 's'; // Décalage aléatoire pour l'animation
        confettiContainer.appendChild(confetti); // Ajouter le confetti au conteneur
    }

    // Supprimer le conteneur après l'animation
    setTimeout(function() {
        document.body.removeChild(confettiContainer);
    }, 3000); // Supprimer après 5 secondes (ajustez si nécessaire)
}
