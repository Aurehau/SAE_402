  let MouseX=396;
  let MouseY=1296;
  
  let vitesse=0.05;
  
  let perso=document.querySelector(".corp");
  
  let rondX=396;
  let rondY=1296;
  
  //window.requestAnimationFrame(deplacementPerso);
  deplacementPerso();
  
  document.addEventListener("mousemove", positionMouse)
  
  
  function positionMouse(event){
      MouseX= event.pageX;
      MouseY= event.pageY;

      objectifAngle=calculerAngle();
  }
  
  function deplacementPerso(){

        //Déplacement sur X et Y
        let MouseVX= (MouseX-rondX)*vitesse;
        let MouseVY=(MouseY-rondY)*vitesse;

        let Xsuivant=rondX+ MouseVX;
        let Ysuivant=rondY+ MouseVY;

        if ((Xsuivant>(72+30))&& (Xsuivant<(1728-30))&&((Ysuivant>(1296-25))&&(Xsuivant>(360+30))&&(Xsuivant<(504-30)))) {
            rondX+= MouseVX;
        }

        if ((Ysuivant>(72+25))&&(Ysuivant<(1296-25))) {
            rondY+= MouseVY;
        }

        if ((Ysuivant>(1296-25))&&(Xsuivant>(360+25))&&(Xsuivant<(504-25))) {
            rondY+= MouseVY;
        }


        //2ème ligne
        if (((1296)>Ysuivant)&&(Ysuivant>(1224))&&((Xsuivant>(72+30)&&(Xsuivant<(216-25)))||((Xsuivant>(298+20))&&(Xsuivant<(576-30)))||((Xsuivant>(648+20))&&(Xsuivant<(864-30)))||((Xsuivant>(936+20))&&(Xsuivant<(1152-30)))||((Xsuivant>(1224+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 

        if (((1224)>Ysuivant)&&(Ysuivant>(1152))&&((Xsuivant>(72+30)&&(Xsuivant<(216-25)))||((Xsuivant>(298+20))&&(Xsuivant<(1152-30)))||((Xsuivant>(1224+30))&&(Xsuivant<(1296-30)))||((Xsuivant>(1368+30))&&(Xsuivant<(1512-30)))||((Xsuivant>(1584+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 

        if (((1152)>Ysuivant)&&(Ysuivant>(1080))&&((Xsuivant>(72+30)&&(Xsuivant<(216-25)))||((Xsuivant>(360+20))&&(Xsuivant<(576-30)))||((Xsuivant>(648+20))&&(Xsuivant<(864-30)))||((Xsuivant>(1008+20))&&(Xsuivant<(1296-30)))||((Xsuivant>(1368+30))&&(Xsuivant<(1512-30)))||((Xsuivant>(1584+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 

        if (((1080)>Ysuivant)&&(Ysuivant>(1008))&&((Xsuivant>(72+30)&&(Xsuivant<(576-30))||((Xsuivant>(936+20))&&(Xsuivant<(1152-30)))||((Xsuivant>(1584+30))&&(Xsuivant<(1728-30)))))) {
            rondX+= MouseVX;
        } 

        if (((1008)>Ysuivant)&&(Ysuivant>(936))&&((Xsuivant>(72+30)&&(Xsuivant<(144-25)))||((Xsuivant>(648+30))&&(Xsuivant<(1224-30)))||((Xsuivant>(1296+30))&&(Xsuivant<(1512-30)))||((Xsuivant>(1584+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 

        if (((936)>Ysuivant)&&(Ysuivant>(864))&&((Xsuivant>(72+30)&&(Xsuivant<(216-25)))||((Xsuivant>(298+20))&&(Xsuivant<(576-30)))||((Xsuivant>(648+20))&&(Xsuivant<(864-30)))||((Xsuivant>(1296+30))&&(Xsuivant<(1512-30))))) {
            rondX+= MouseVX;
        } 

        if (((864)>Ysuivant)&&(Ysuivant>(792))&&((Xsuivant>(72+30)&&(Xsuivant<(576-30))||((Xsuivant>(936+20))&&(Xsuivant<(1728-30)))))) {
            rondX+= MouseVX;
        }

        if (((792)>Ysuivant)&&(Ysuivant>(720))&&((Xsuivant>(72+30)&&(Xsuivant<(216-25)))||((Xsuivant>(298+20))&&(Xsuivant<(1080-30)))||((Xsuivant>(1584+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 

        if (((720)>Ysuivant)&&(Ysuivant>(648))&&((Xsuivant>(72+30)&&(Xsuivant<(144-25)))||((Xsuivant>(648+30))&&(Xsuivant<(864-30)))||((Xsuivant>(936+30))&&(Xsuivant<(1008-30)))||((Xsuivant>(1080+30))&&(Xsuivant<(1512-30)))||((Xsuivant>(1584+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 

        if (((648)>Ysuivant)&&(Ysuivant>(576))&&((Xsuivant>(72+30)&&(Xsuivant<(864-25)))||((Xsuivant>(1296+20))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 

        if (((576)>Ysuivant)&&(Ysuivant>(504))&&((Xsuivant>(72+30)&&(Xsuivant<(216-25)))||((Xsuivant>(432+20))&&(Xsuivant<(504-30)))||((Xsuivant>(936+20))&&(Xsuivant<(1224-30)))||((Xsuivant>(1368+20))&&(Xsuivant<(1440-30)))||((Xsuivant>(1584+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 

        if (((504)>Ysuivant)&&(Ysuivant>(432))&&((Xsuivant>(72+30)&&(Xsuivant<(288-25)))||((Xsuivant>(360+20))&&(Xsuivant<(504-30)))||((Xsuivant>(576+20))&&(Xsuivant<(864-30)))||((Xsuivant>(1008+20))&&(Xsuivant<(1080-30)))||((Xsuivant>(1296+20))&&(Xsuivant<(1512-30)))||((Xsuivant>(1584+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 

        if (((432)>Ysuivant)&&(Ysuivant>(360))&&((Xsuivant>(72+30)&&(Xsuivant<(288-25)))||((Xsuivant>(360+20))&&(Xsuivant<(504-30)))||((Xsuivant>(576+20))&&(Xsuivant<(648-30)))||((Xsuivant>(720+20))&&(Xsuivant<(1224-30)))||((Xsuivant>(1440+20))&&(Xsuivant<(1512-30)))||((Xsuivant>(1584+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        }
        
        if (((360)>Ysuivant)&&(Ysuivant>(288))&&((Xsuivant>(72+30)&&(Xsuivant<(216-25)))||((Xsuivant>(576+20))&&(Xsuivant<(648-30)))||((Xsuivant>(1080+20))&&(Xsuivant<(1224-30)))||((Xsuivant>(1296+20))&&(Xsuivant<(1512-30)))||((Xsuivant>(1584+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 

        if (((288)>Ysuivant)&&(Ysuivant>(216))&&((Xsuivant>(288+30)&&(Xsuivant<(432-25)))||((Xsuivant>(504+20))&&(Xsuivant<(1008-30)))||((Xsuivant>(1080+20))&&(Xsuivant<(1224-30)))||((Xsuivant>(1296+20))&&(Xsuivant<(1368-30)))||((Xsuivant>(1584+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 

        if (((216)>Ysuivant)&&(Ysuivant>(144))&&((Xsuivant>(72+30)&&(Xsuivant<(432-25)))||((Xsuivant>(936+20))&&(Xsuivant<(1008-30)))||((Xsuivant>(1080+20))&&(Xsuivant<(1368-30)))||((Xsuivant>(1440+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 

        if (((144)>Ysuivant)&&(Ysuivant>(72))&&((Xsuivant>(72+30)&&(Xsuivant<(216-25)))||((Xsuivant>(288+20))&&(Xsuivant<(1008-30)))||((Xsuivant>(1080+20))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 
    
        //rondX+= MouseVX;
        //rondY+= MouseVY;

        //Rotation
        var angleRadians = Math.atan2(MouseY - rondY, MouseX - rondX);
        var angleDegrees = (angleRadians * 180) / Math.PI;
    
        perso.style.transform=`translate(${rondX-36}px, ${rondY-36}px) rotate(${90+angleDegrees}deg)`;


        //nouvel appel de la fonction

        window.requestAnimationFrame(deplacementPerso);
    

      
  }


  function calculerAngle() {
    // Calculer la différence en X et en Y entre les points B et A
    var deltaX = MouseX - rondX;
    var deltaY = MouseY - rondY;
  
    // Utiliser atan2 pour trouver l'angle en radians
    var angleRadians = Math.atan2(deltaY, deltaX);
  
    // Convertir l'angle en degrés
    var angleDegrees = angleRadians * (180 / Math.PI);
  
    // Ajouter 360 degrés et prendre le modulo 360 pour obtenir un angle positif
    angleDegrees = (angleDegrees + 360) % 360;
  
    return angleDegrees;
  }

  //console.log(calculerAngle());
  