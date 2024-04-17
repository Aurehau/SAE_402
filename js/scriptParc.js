/************************************************** Formulaire vérification musée des beaux arts **************************************************/

document.getElementById("destinationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var userInput = document.getElementById("destination").value.toLowerCase(); 
    var correctAnswer = "musée des beaux arts";

    if (userInput === correctAnswer.toLowerCase()) {
        document.getElementById("result").innerHTML = "Bravo ! Direction le musée des beaux-arts !"; /****** Renvoyer à la page suivant ******/
        document.getElementById("result").classList.add("success-message"); 
        setTimeout(function() {
            document.getElementById("result").classList.remove("success-message"); 
        }, 500);
    } else {
        document.getElementById("result").innerHTML = "Désolé, mauvaise réponse. Veuillez réessayer.";
        document.getElementById("result").classList.add("error-message"); // Ajouter la classe pour l'animation
        setTimeout(function() {
            document.getElementById("result").classList.remove("error-message"); // Supprimer la classe après l'animation
        }, 500);
    }
});

/*************************************************************************************************************************************************/
