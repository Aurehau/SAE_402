
document.querySelector(".Binfo").addEventListener("click",afficheInfo);
document.querySelector(".croix").addEventListener("click",afficheInfo);

function afficheInfo(){
    document.querySelector(".pop-up").classList.toggle("pop-existe");
    document.querySelector(".pop-up>.bull").classList.toggle("pop-it");
    document.querySelector(".pop-up>.croix").classList.toggle("turncroix");
}


function verifierCode() {
    var code = document.getElementById("code").value;
    // Vérifier si le code a exactement 5 chiffres
    if(/^\d{5}$/.test(code)) {
        if(code=="48803"){
            document.location.href="../pages/recompense2.html";
        } else {
            document.getElementById("code").value="";
            alert("The code is not good!");
        }
        
    } else {
        alert("The code must contain exactly 5 digits.");
    }
    // Empêcher le formulaire de se soumettre
    return false;
}
