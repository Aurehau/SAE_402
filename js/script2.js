document.querySelector(".Binfo").addEventListener("click",afficheInfo);

function afficheInfo(){
    document.querySelector(".pop-up").classList.toggle("pop-existe");
    document.querySelector(".pop-up>.bull").classList.toggle("pop-it");
}
