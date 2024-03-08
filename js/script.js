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

        if ((rondX+ MouseVX)>(72+30)&&(rondX+ MouseVX)<(1728-30)) {
            rondX+= MouseVX;
        }

        if (((rondY+ MouseVY)>(72+25))&&((rondY+ MouseVY)<(1296-25))) {
            rondY+= MouseVY;
        }

        if (((rondY+ MouseVY)>(1296-25))&&((rondX+ MouseVX)>(360-30))) {
            rondY+= MouseVY;
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
  