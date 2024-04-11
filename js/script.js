let MouseX=432;
let MouseY=1325;

let vitesse=0.05;

let perso=document.querySelector(".corp");
let plateau=document.querySelector(".plateau_jeu");

let translationY = window.innerHeight - 1368;
let translationX = 0;

if (window.innerWidth<850) {
    translationX = (window.innerWidth * 0.5) - 432;
}

let maxtranslate = window.innerWidth- 1800;
let maxtranslateY = translationY;

window.addEventListener("resize",()=> {
    translationY = window.innerHeight - 1368;
    translationX = 0;
    if (window.innerWidth<850) {
      translationX = (window.innerWidth * 0.5) - 432;
    }

    maxtranslate = window.innerWidth- 1800;
    maxtranslateY = translationY;
    console.log(translationX, translationY);
});

  console.log(translationX, translationY);
  
  let rondX=432;
  let rondY=1326;
  
  //window.requestAnimationFrame(deplacementPerso);
  deplacementPerso();
  
  document.addEventListener("mousemove", positionMouse)
  
  
  function positionMouse(event){
      MouseX= event.pageX - translationX;
      MouseY= event.pageY - translationY;
  }

  document.addEventListener('touchmove',positionDoigt);

  function positionDoigt(event){
    event.preventDefault();

    var touch = event.touches[0];

    MouseX= touch.clientX - translationX;
    MouseY= touch.clientY - translationY;
}
  
  function deplacementPerso(){

        //Déplacement sur X et Y
        let MouseVX= (MouseX-rondX)*vitesse;
        let MouseVY=(MouseY-rondY)*vitesse;

        let Xsuivant=rondX+ MouseVX;
        let Ysuivant=rondY+ MouseVY;
        let Xpresent=rondX;
        let Ypresent=rondY;

        /* let translationX = ;
        let translationY = ; */
        //InPieceCoffre(Xpresent,Ypresent);

        if((Xpresent<=186)&&(Ypresent<=186)){
            document.querySelector(".plateau_jeu>img").style.transform=`translateX(900px) translateY(650px) scale(2)`;
            document.querySelector(".plateau_jeu>.corp>img").style.transform=`translateX(100px) translateY(100px) scale(2)`;
            setTimeout(pagesuivante, 800);
            
        }else{
            bougerY(Xpresent,Ysuivant,MouseVY);
            bougerX(Xsuivant,Ypresent,MouseVX);
        }

        //rondX+= MouseVX;
        //rondY+= MouseVY;

        //Rotation
        var angleRadians = Math.atan2(MouseY - rondY, MouseX - rondX);
        var angleDegrees = (angleRadians * 180) / Math.PI;
    
        if(rondX+translationX>(window.innerWidth-150)){
            if (translationX>maxtranslate){
            translationX -= MouseVX;
            }
        }
        if((rondX+translationX)<150){
            if (translationX<0){
            translationX -= MouseVX;
            }
        }
// probleme ****************************************
        if(rondY+translationY>(window.innerHeight-150)){
            if (translationY>maxtranslateY){
                translationY -= MouseVY;
            }
        }
// *************************************************
        if((rondY+translationY)<150){
            if (translationY<0){
                translationY -= MouseVY;
            }
        }

        if(translationX>0){
            translationX = 0;
        }

        if(translationX<maxtranslate){
            translationX = maxtranslate;
        }

        if(translationY>0){
            translationY = 0;
        }

        if(translationY<maxtranslateY){
            translationY = maxtranslateY;
        }

        plateau.style.transform=`translateX(${translationX }px) translateY(${translationY }px)`;

        /* plateau.style.transform=`translate(${rondX-36}px, ${rondY-36}px)`; */
        
        perso.style.transform=`translate(${rondX-36}px, ${rondY-36}px) rotate(${90+angleDegrees}deg)`;



        //nouvel appel de la fonction

        window.requestAnimationFrame(deplacementPerso);
    

      
  }

function pagesuivante(){
    document.location.href="../pages/coffre.html";
}

function bougerY(variableX,variableY,MouseVY){
            // ***** Nouvelle formule *****************************************************************************

                //salle coffre
                if ( (102<variableX)&&(variableX<186)&&(102<variableY)&&(variableY<186)) {
                    rondY+= MouseVY;
                }

                if ( (186<=variableX)&&(variableX<=318)&&(174<variableY)&&(variableY<186)) {
                    rondY+= MouseVY;
                }

                if ( (318<variableX)&&(variableX<402)&&(102<variableY)&&(variableY<258)) {
                    rondY+= MouseVY;
                }

                if ( (402<=variableX)&&(variableX<=534)&&(102<variableY)&&(variableY<114)) {
                    rondY+= MouseVY;
                }

                if ( (534<variableX)&&(variableX<978)&&(102<variableY)&&(variableY<124)) {
                    rondY+= MouseVY;
                }

                if ( (956<variableX)&&(variableX<978)&&(124<=variableY)&&(variableY<=244)) {
                    rondY+= MouseVY;
                }

                if ( (534<variableX)&&(variableX<978)&&(244<variableY)&&(variableY<258)) {
                    rondY+= MouseVY;
                }

                if ( (606<variableX)&&(variableX<618)&&(258<=variableY)&&(variableY<=390)) {
                    rondY+= MouseVY;
                }

                if ( (606<variableX)&&(variableX<630)&&(390<variableY)&&(variableY<=451)) {
                    rondY+= MouseVY;
                }

                if ( (606<variableX)&&(variableX<=738)&&(451<variableY)&&(variableY<474)) {
                    rondY+= MouseVY;
                }

                if ( (738<variableX)&&(variableX<834)&&(390<variableY)&&(variableY<474)) {
                    rondY+= MouseVY;
                }

                if ( (834<=variableX)&&(variableX<=1110)&&(390<variableY)&&(variableY<402)) {
                    rondY+= MouseVY;
                }

                //ambranchement qui descend

                if ( (1038<variableX)&&(variableX<1050)&&(402<=variableY)&&(variableY<=534)) {
                    rondY+= MouseVY;
                }

                if ( (966<variableX)&&(variableX<1194)&&(534<variableY)&&(variableY<557)) {
                    rondY+= MouseVY;
                }

                //retour couloire
                if ( (1110<variableX)&&(variableX<1194)&&(102<variableY)&&(variableY<402)) {
                    rondY+= MouseVY;
                }

                if ( (1194<=variableX)&&(variableX<1348)&&(102<variableY)&&(variableY<186)) {
                    rondY+= MouseVY;
                }

                //devant chaise couloire haut

                if ( (1348<=variableX)&&(variableX<=1460)&&(102<variableY)&&(variableY<124)) {
                    rondY+= MouseVY;
                }

                //angle couloire haut et droit
                if ( (1460<variableX)&&(variableX<=1614)&&(102<variableY)&&(variableY<186)) {
                    rondY+= MouseVY;
                }

                if ( (1614<variableX)&&(variableX<1698)&&(((102<variableY)&&(variableY<834))||((966<variableY)&&(variableY<1266)))) {
                    rondY+= MouseVY;
                }

                //piece chaise éparpillé - haut vers bas
                if ( (1326<variableX)&&(variableX<1338)&&(186<=variableY)&&(variableY<=318)) {
                    rondY+= MouseVY;
                }

                if ( (1326<variableX)&&(variableX<1482)&&(((318<variableY)&&(variableY<331))||((451<variableY)&&(variableY<476))||((596<variableY)&&(variableY<690))||((822<variableY)&&(variableY<978)))) {
                    rondY+= MouseVY;
                }

                if ( (1460<variableX)&&(variableX<1482)&&(331<=variableY)&&(variableY<=451)) {
                    rondY+= MouseVY;
                }

                if ( (1388<variableX)&&(variableX<1420)&&(476<=variableY)&&(variableY<=596)) {
                    rondY+= MouseVY;
                }

                if ( (1482<=variableX)&&(variableX<=1614)&&(((606<variableY)&&(variableY<618))||((822<variableY)&&(variableY<834))||((1254<variableY)&&(variableY<1266)))) {
                    rondY+= MouseVY;
                }

                if ( (1194<=variableX)&&(variableX<=1326)&&(678<variableY)&&(variableY<690)) {
                    rondY+= MouseVY;
                }

                //grande piece poto + chaise

                if ( (1110<variableX)&&(variableX<1194)&&(677<variableY)&&(variableY<700)) {
                    rondY+= MouseVY;
                }

                if ( (1060<=variableX)&&(variableX<=1326)&&(822<variableY)&&(variableY<834)) {
                    rondY+= MouseVY;
                }

                if ( (966<variableX)&&(variableX<1060)&&(750<variableY)&&(variableY<834)) {  
                    rondY+= MouseVY;
                }

                if ( (966<variableX)&&(variableX<978)&&(676<variableY)&&(variableY<=750)) {  
                    rondY+= MouseVY;
                }

                if ( (834<=variableX)&&(variableX<=966)&&(((750<variableY)&&(variableY<762))||((966<variableY)&&(variableY<978))||((1182<variableY)&&(variableY<1194)))) {
                    rondY+= MouseVY;
                }

                //piece B à gauche des chaises

                if ( (678<variableX)&&(variableX<834)&&(((606<variableY)&&(variableY<762))||((894<variableY)&&(variableY<978))||((1110<variableY)&&(variableY<1266)))) {
                    rondY+= MouseVY;
                }

                //sortie haut gauche de la piece B
                if ( (258<=variableX)&&(variableX<=678)&&(606<variableY)&&(variableY<618)) {
                    rondY+= MouseVY;
                }

                //placard haut
                if ( (462<variableX)&&(variableX<474)&&(474<=variableY)&&(variableY<=606)) {
                    rondY+= MouseVY;
                }

                if ( (390<variableX)&&(variableX<474)&&(390<variableY)&&(variableY<474)) {
                    rondY+= MouseVY;
                }

                //piece gauche avec une chaise
                if ( (196<=variableX)&&(variableX<258)&&(390<variableY)&&(variableY<486)) {
                    rondY+= MouseVY;
                }

                if ( (102<variableX)&&(variableX<196)&&(390<variableY)&&(variableY<618)) {
                    rondY+= MouseVY;
                }

                if ( (102<variableX)&&(variableX<186)&&(318<variableY)&&(variableY<=390)) {
                    rondY+= MouseVY;
                }

                if ( (196<=variableX)&&(variableX<258)&&(594<variableY)&&(variableY<618)) {
                    rondY+= MouseVY;
                }

                //sortie bas gauche de la piece B
                if ( (546<=variableX)&&(variableX<=678)&&(((750<variableY)&&(variableY<762))||((1182<variableY)&&(variableY<1194)))) {
                    rondY+= MouseVY;
                }

                //grande pièce vide
                if ( (318<variableX)&&(variableX<546)&&(((750<variableY)&&(variableY<906))||((1182<variableY)&&(variableY<1266)))) {
                    rondY+= MouseVY;
                }

                if ( (186<=variableX)&&(variableX<=318)&&(822<variableY)&&(variableY<834)) {
                    rondY+= MouseVY;
                }

                //couloire bas gauche
                if ( (102<variableX)&&(variableX<114)&&(618<=variableY)&&(variableY<=750)) {
                    rondY+= MouseVY;
                }

                if ( (102<variableX)&&(variableX<186)&&(((750<variableY)&&(variableY<918))||((1026<variableY)&&(variableY<1266)))) {
                    rondY+= MouseVY;
                }

                if ( (102<variableX)&&(variableX<125)&&(918<=variableY)&&(variableY<=1026)) {
                    rondY+= MouseVY;
                }

                if ( (186<=variableX)&&(variableX<=390)&&(1038<variableY)&&(variableY<1050)) {
                    rondY+= MouseVY;
                }

                //pièce de départ
                if ( (390<variableX)&&(variableX<546)&&(1038<variableY)&&(variableY<=1182)) {
                    rondY+= MouseVY;
                }

                if ( (390<variableX)&&(variableX<474)&&(1266<=variableY)&&(variableY<1368)) {
                    rondY+= MouseVY;
                }

                //2ème pèce à droite
                if ( (966<variableX)&&(variableX<1122)&&(((966<variableY)&&(variableY<1050))||((1182<variableY)&&(variableY<1266)))) {
                    rondY+= MouseVY;
                }

                if ( (1038<variableX)&&(variableX<1122)&&(1050<=variableY)&&(variableY<=1182)) {
                    rondY+= MouseVY;
                }

                if ( (1122<=variableX)&&(variableX<1194)&&(966<variableY)&&(variableY<978)) {
                    rondY+= MouseVY;
                }

                //couloire bas droit
                if ( (1122<=variableX)&&(variableX<=1254)&&(1110<variableY)&&(variableY<1122)) {
                    rondY+= MouseVY;
                }

                if ( (((1254<variableX)&&(variableX<1266))||((1398<variableX)&&(variableX<1482)))&&(1110<variableY)&&(variableY<1266)) {
                    rondY+= MouseVY;
                }

                if ( (1266<=variableX)&&(variableX<=1398)&&(1254<variableY)&&(variableY<1266)) {
                    rondY+= MouseVY;
                }
}


function bougerX(variableX,variableY,MouseVX){
    // ***** Nouvelle formule *****************************************************************************

        //salle coffre
        if ( (102<variableX)&&(variableX<186)&&(102<variableY)&&(variableY<186)) {
            rondX+= MouseVX;
        }

        if ( (186<=variableX)&&(variableX<=318)&&(174<variableY)&&(variableY<186)) {
            rondX+= MouseVX;
        }

        if ( (318<variableX)&&(variableX<402)&&(102<variableY)&&(variableY<258)) {
            rondX+= MouseVX;
        }

        if ( (402<=variableX)&&(variableX<=534)&&(102<variableY)&&(variableY<114)) {
            rondX+= MouseVX;
        }

        if ( (534<variableX)&&(variableX<978)&&(102<variableY)&&(variableY<124)) {
            rondX+= MouseVX;
        }

        if ( (956<variableX)&&(variableX<978)&&(124<=variableY)&&(variableY<=244)) {
            rondX+= MouseVX;
        }

        if ( (534<variableX)&&(variableX<978)&&(244<variableY)&&(variableY<258)) {
            rondX+= MouseVX;
        }

        if ( (606<variableX)&&(variableX<618)&&(258<=variableY)&&(variableY<=390)) {
            rondX+= MouseVX;
        }

        if ( (606<variableX)&&(variableX<630)&&(390<variableY)&&(variableY<=451)) {
            rondX+= MouseVX;
        }

        if ( (606<variableX)&&(variableX<=738)&&(451<variableY)&&(variableY<474)) {
            rondX+= MouseVX;
        }

        if ( (738<variableX)&&(variableX<834)&&(390<variableY)&&(variableY<474)) {
            rondX+= MouseVX;
        }

        if ( (834<=variableX)&&(variableX<=1110)&&(390<variableY)&&(variableY<402)) {
            rondX+= MouseVX;
        }

        //ambranchement qui descend

        if ( (1038<variableX)&&(variableX<1050)&&(402<=variableY)&&(variableY<=534)) {
            rondX+= MouseVX;
        }

        if ( (966<variableX)&&(variableX<1194)&&(534<variableY)&&(variableY<557)) {
            rondX+= MouseVX;
        }

        //retour couloire
        if ( (1110<variableX)&&(variableX<1194)&&(102<variableY)&&(variableY<402)) {
            rondX+= MouseVX;
        }

        if ( (1194<=variableX)&&(variableX<1348)&&(102<variableY)&&(variableY<186)) {
            rondX+= MouseVX;
        }

        //devant chaise couloire haut

        if ( (1348<=variableX)&&(variableX<=1460)&&(102<variableY)&&(variableY<124)) {
            rondX+= MouseVX;
        }

        //angle couloire haut et droit
        if ( (1460<variableX)&&(variableX<=1614)&&(102<variableY)&&(variableY<186)) {
            rondX+= MouseVX;
        }

        if ( (1614<variableX)&&(variableX<1698)&&(((102<variableY)&&(variableY<834))||((966<variableY)&&(variableY<1266)))) {
            rondX+= MouseVX;
        }

        //piece chaise éparpillé - haut vers bas
        if ( (1326<variableX)&&(variableX<1338)&&(186<=variableY)&&(variableY<=318)) {
            rondX+= MouseVX;
        }

        if ( (1326<variableX)&&(variableX<1482)&&(((318<variableY)&&(variableY<331))||((451<variableY)&&(variableY<476))||((596<variableY)&&(variableY<690))||((822<variableY)&&(variableY<978)))) {
            rondX+= MouseVX;
        }

        if ( (1460<variableX)&&(variableX<1482)&&(331<=variableY)&&(variableY<=451)) {
            rondX+= MouseVX;
        }

        if ( (1388<variableX)&&(variableX<1420)&&(476<=variableY)&&(variableY<=596)) {
            rondX+= MouseVX;
        }

        if ( (1482<=variableX)&&(variableX<=1614)&&(((606<variableY)&&(variableY<618))||((822<variableY)&&(variableY<834))||((1254<variableY)&&(variableY<1266)))) {
            rondX+= MouseVX;
        }

        if ( (1194<=variableX)&&(variableX<=1326)&&(678<variableY)&&(variableY<690)) {
            rondX+= MouseVX;
        }

        //grande piece poto + chaise

        if ( (1110<variableX)&&(variableX<1194)&&(677<variableY)&&(variableY<700)) {
            rondX+= MouseVX;
        }

        if ( (1060<=variableX)&&(variableX<=1326)&&(822<variableY)&&(variableY<834)) {
            rondX+= MouseVX;
        }

        if ( (966<variableX)&&(variableX<1060)&&(750<variableY)&&(variableY<834)) {
            rondX+= MouseVX;
        }

        if ( (966<variableX)&&(variableX<978)&&(676<variableY)&&(variableY<=750)) {  
            rondX+= MouseVX;
        }

        if ( (834<=variableX)&&(variableX<=966)&&(((750<variableY)&&(variableY<762))||((966<variableY)&&(variableY<978))||((1182<variableY)&&(variableY<1194)))) {
            rondX+= MouseVX;
        }

        //piece B à gauche des chaises

        if ( (678<variableX)&&(variableX<834)&&(((606<variableY)&&(variableY<762))||((894<variableY)&&(variableY<978))||((1110<variableY)&&(variableY<1266)))) {
            rondX+= MouseVX;
        }

        //sortie haut gauche de la piece B
        if ( (258<=variableX)&&(variableX<=678)&&(606<variableY)&&(variableY<618)) {
            rondX+= MouseVX;
        }

        //placard haut
        if ( (462<variableX)&&(variableX<474)&&(474<=variableY)&&(variableY<=606)) {
            rondX+= MouseVX;
        }

        if ( (390<variableX)&&(variableX<474)&&(390<variableY)&&(variableY<474)) {
            rondX+= MouseVX;
        }

        //piece gauche avec une chaise
        if ( (196<=variableX)&&(variableX<258)&&(390<variableY)&&(variableY<486)) {
            rondX+= MouseVX;
        }

        if ( (102<variableX)&&(variableX<196)&&(390<variableY)&&(variableY<618)) {
            rondX+= MouseVX;
        }

        if ( (102<variableX)&&(variableX<186)&&(318<variableY)&&(variableY<=390)) {
            rondX+= MouseVX;
        }

        if ( (196<=variableX)&&(variableX<258)&&(594<variableY)&&(variableY<618)) {
            rondX+= MouseVX;
        }

        //sortie bas gauche de la piece B
        if ( (546<=variableX)&&(variableX<=678)&&(((750<variableY)&&(variableY<762))||((1182<variableY)&&(variableY<1194)))) {
            rondX+= MouseVX;
        }

        //grande pièce vide
        if ( (318<variableX)&&(variableX<546)&&(((750<variableY)&&(variableY<906))||((1182<variableY)&&(variableY<1266)))) {
            rondX+= MouseVX;
        }

        if ( (186<=variableX)&&(variableX<=318)&&(822<variableY)&&(variableY<834)) {
            rondX+= MouseVX;
        }

        //couloire bas gauche
        if ( (102<variableX)&&(variableX<114)&&(618<=variableY)&&(variableY<=750)) {
            rondX+= MouseVX;
        }

        if ( (102<variableX)&&(variableX<186)&&(((750<variableY)&&(variableY<918))||((1026<variableY)&&(variableY<1266)))) {
            rondX+= MouseVX;
        }

        if ( (102<variableX)&&(variableX<125)&&(918<=variableY)&&(variableY<=1026)) {
            rondX+= MouseVX;
        }

        if ( (186<=variableX)&&(variableX<=390)&&(1038<variableY)&&(variableY<1050)) {
            rondX+= MouseVX;
        }

        //pièce de départ
        if ( (390<variableX)&&(variableX<546)&&(1038<variableY)&&(variableY<=1182)) {
            rondX+= MouseVX;
        }

        if ( (390<variableX)&&(variableX<474)&&(1266<=variableY)&&(variableY<1368)) {
            rondX+= MouseVX;
        }

        //2ème pèce à droite
        if ( (966<variableX)&&(variableX<1122)&&(((966<variableY)&&(variableY<1050))||((1182<variableY)&&(variableY<1266)))) {
            rondX+= MouseVX;
        }

        if ( (1038<variableX)&&(variableX<1122)&&(1050<=variableY)&&(variableY<=1182)) {
            rondX+= MouseVX;
        }

        if ( (1122<=variableX)&&(variableX<1194)&&(966<variableY)&&(variableY<978)) {
            rondX+= MouseVX;
        }

        //couloire bas droit
        if ( (1122<=variableX)&&(variableX<=1254)&&(1110<variableY)&&(variableY<1122)) {
            rondX+= MouseVX;
        }

        if ( (((1254<variableX)&&(variableX<1266))||((1398<variableX)&&(variableX<1482)))&&(1110<variableY)&&(variableY<1266)) {
            rondX+= MouseVX;
        }

        if ( (1266<=variableX)&&(variableX<=1398)&&(1254<variableY)&&(variableY<1266)) {
            rondX+= MouseVX;
        }
}

//zoom sur coffre
function InPieceCoffre(Xpresent,Ypresent){
    if((Xpresent<=186)&&(Ypresent<=186)){
        document.querySelector(".plateau_jeu>img").style.transform=`translateX(900px) translateY(650px) scale(2)`;
        //document.location.href="../page.html";
    }
}

  