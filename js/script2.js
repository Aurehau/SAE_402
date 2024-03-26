document.querySelector(".Binfo").addEventListener("click",afficheInfo);
document.querySelector(".croix").addEventListener("click",afficheInfo);

function afficheInfo(){
    document.querySelector(".pop-up").classList.toggle("pop-existe");
    document.querySelector(".pop-up>.bull").classList.toggle("pop-it");
    document.querySelector(".pop-up>.croix").classList.toggle("turncroix");
}


