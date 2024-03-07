window.onload = function() {
    var canvas = document.getElementById("c");
    var ctx = canvas.getContext("2d");
  
    var image = new Image();
    image.src = "../img/perso.svg";
  
    image.onload = function() {
      // Dessine l'image sur le canvas aux coordonnées x=0, y=0
      ctx.drawImage(image, 1500, 1220);
    };
  };