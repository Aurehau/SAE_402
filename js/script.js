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
  }
  
  function deplacementPerso(){

        //Déplacement sur X et Y
        let MouseVX= (MouseX-rondX)*vitesse;
        let MouseVY=(MouseY-rondY)*vitesse;

        let Xsuivant=rondX+ MouseVX;
        let Ysuivant=rondY+ MouseVY;
        let Xpresent=rondX;
        let Ypresent=rondY;

        bougerY(Xpresent,Ysuivant,MouseVY);
        bougerX(Xsuivant,Ypresent,MouseVX);

/*         if ((Xsuivant>(72+30))&& (Xsuivant<(1728-30))&&((Ysuivant>(1296-25))&&(Xsuivant>(360+30))&&(Xsuivant<(504-30)))) {
            rondX+= MouseVX;
        } */

       /*  if ((Ysuivant>(72+25))&&(Ysuivant<(1296-25))) {
            rondY+= MouseVY;
        }
 */
       /*  if ((Ysuivant>(1296-25))&&(Xsuivant>(360+25))&&(Xsuivant<(504-25))) {
            rondY+= MouseVY;
        }


        //2ème ligne

        if (((1296)>Ysuivant)&&(Ysuivant>(1224))&&((Xsuivant>(72+30)&&(Xsuivant<(216-30)))||((Xsuivant>(288+30))&&(Xsuivant<(576-30)))||((Xsuivant>(648+30))&&(Xsuivant<(864-30)))||((Xsuivant>(936+30))&&(Xsuivant<(1152-30)))||((Xsuivant>(1224+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 
        //3
        if (((1224)>Ysuivant)&&(Ysuivant>(1152))&&((Xsuivant>(72+30)&&(Xsuivant<(216-30)))||((Xsuivant>(288+30))&&(Xsuivant<(1152-30)))||((Xsuivant>(1224+30))&&(Xsuivant<(1296-30)))||((Xsuivant>(1368+30))&&(Xsuivant<(1512-30)))||((Xsuivant>(1584+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 
        //4
        if (((1152)>Ysuivant)&&(Ysuivant>(1080))&&((Xsuivant>(72+30)&&(Xsuivant<(216-30)))||((Xsuivant>(360+30))&&(Xsuivant<(576-30)))||((Xsuivant>(648+30))&&(Xsuivant<(864-30)))||((Xsuivant>(1008+30))&&(Xsuivant<(1296-30)))||((Xsuivant>(1368+30))&&(Xsuivant<(1512-30)))||((Xsuivant>(1584+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 
        //5
        if (((1080)>Ysuivant)&&(Ysuivant>(1008))&&((Xsuivant>(72+30)&&(Xsuivant<(576-30))||((Xsuivant>(936+30))&&(Xsuivant<(1152-30)))||((Xsuivant>(1584+30))&&(Xsuivant<(1728-30)))))) {
            rondX+= MouseVX;
        } 
        //6
        if (((1008)>Ysuivant)&&(Ysuivant>(936))&&((Xsuivant>(72+30)&&(Xsuivant<(144-30)))||((Xsuivant>(648+30))&&(Xsuivant<(1224-30)))||((Xsuivant>(1296+30))&&(Xsuivant<(1512-30)))||((Xsuivant>(1584+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 
        //7
        if (((936)>Ysuivant)&&(Ysuivant>(864))&&((Xsuivant>(72+30)&&(Xsuivant<(216-30)))||((Xsuivant>(288+30))&&(Xsuivant<(576-30)))||((Xsuivant>(648+30))&&(Xsuivant<(864-30)))||((Xsuivant>(1296+30))&&(Xsuivant<(1512-30))))) {
            rondX+= MouseVX;
        } 
        //8
        if (((864)>Ysuivant)&&(Ysuivant>(792))&&((Xsuivant>(72+30)&&(Xsuivant<(576-30))||((Xsuivant>(936+30))&&(Xsuivant<(1728-30)))))) {
            rondX+= MouseVX;
        }
        //9
        if (((792)>Ysuivant)&&(Ysuivant>(720))&&((Xsuivant>(72+30)&&(Xsuivant<(216-30)))||((Xsuivant>(288+30))&&(Xsuivant<(1080-30)))||((Xsuivant>(1584+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 
        //10
        if (((720)>Ysuivant)&&(Ysuivant>(648))&&((Xsuivant>(72+30)&&(Xsuivant<(144-30)))||((Xsuivant>(648+30))&&(Xsuivant<(864-30)))||((Xsuivant>(936+30))&&(Xsuivant<(1008-30)))||((Xsuivant>(1080+30))&&(Xsuivant<(1512-30)))||((Xsuivant>(1584+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 
        //11
        if (((648)>Ysuivant)&&(Ysuivant>(576))&&((Xsuivant>(72+30)&&(Xsuivant<(864-30)))||((Xsuivant>(1296+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 
        //12
        if (((576)>Ysuivant)&&(Ysuivant>(504))&&((Xsuivant>(72+30)&&(Xsuivant<(216-30)))||((Xsuivant>(432+30))&&(Xsuivant<(504-30)))||((Xsuivant>(936+30))&&(Xsuivant<(1224-30)))||((Xsuivant>(1368+30))&&(Xsuivant<(1440-30)))||((Xsuivant>(1584+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 
        //13
        if (((504)>Ysuivant)&&(Ysuivant>(432))&&((Xsuivant>(72+30)&&(Xsuivant<(288-30)))||((Xsuivant>(360+30))&&(Xsuivant<(504-30)))||((Xsuivant>(576+30))&&(Xsuivant<(864-30)))||((Xsuivant>(1008+30))&&(Xsuivant<(1080-30)))||((Xsuivant>(1296+30))&&(Xsuivant<(1512-30)))||((Xsuivant>(1584+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 
        //14
        if (((432)>Ysuivant)&&(Ysuivant>(360))&&((Xsuivant>(72+30)&&(Xsuivant<(288-30)))||((Xsuivant>(360+30))&&(Xsuivant<(504-30)))||((Xsuivant>(576+30))&&(Xsuivant<(648-30)))||((Xsuivant>(720+30))&&(Xsuivant<(1224-30)))||((Xsuivant>(1440+30))&&(Xsuivant<(1512-30)))||((Xsuivant>(1584+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        }
        //15
        if (((360)>Ysuivant)&&(Ysuivant>(288))&&((Xsuivant>(72+30)&&(Xsuivant<(216-30)))||((Xsuivant>(576+30))&&(Xsuivant<(648-30)))||((Xsuivant>(1080+30))&&(Xsuivant<(1224-30)))||((Xsuivant>(1296+30))&&(Xsuivant<(1512-30)))||((Xsuivant>(1584+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 
        //16
        if (((288)>Ysuivant)&&(Ysuivant>(216))&&((Xsuivant>(288+30)&&(Xsuivant<(432-30)))||((Xsuivant>(504+30))&&(Xsuivant<(1008-30)))||((Xsuivant>(1080+30))&&(Xsuivant<(1224-30)))||((Xsuivant>(1296+30))&&(Xsuivant<(1368-30)))||((Xsuivant>(1584+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 
        //17
        if (((216)>Ysuivant)&&(Ysuivant>(144))&&((Xsuivant>(72+30)&&(Xsuivant<(432-30)))||((Xsuivant>(936+30))&&(Xsuivant<(1008-30)))||((Xsuivant>(1080+30))&&(Xsuivant<(1368-30)))||((Xsuivant>(1440+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 
        //18
        if (((144)>Ysuivant)&&(Ysuivant>(72))&&((Xsuivant>(72+30)&&(Xsuivant<(216-30)))||((Xsuivant>(288+30))&&(Xsuivant<(1008-30)))||((Xsuivant>(1080+30))&&(Xsuivant<(1728-30))))) {
            rondX+= MouseVX;
        } 



        //axe Y

        //1

        if (((144-30)>Xsuivant)&&(Xsuivant>(72))&&((Ysuivant>(72+30)&&(Ysuivant<(216-30)))||((Ysuivant>(288+30))&&(Ysuivant<(1296-30))))) {
            rondY+= MouseVY;
        } 

        if (((144)>Xsuivant)&&(Xsuivant>(144-30))&&((Ysuivant>(72+0)&&(Ysuivant<(216-0)))||((Ysuivant>(288+0))&&(Ysuivant<(1296-0))))) {
            rondY+= MouseVY;
        } 
        //2
        if (((216)>Xsuivant)&&(Xsuivant>(144))&&((Ysuivant>(72+30)&&(Ysuivant<(216-30)))||((Ysuivant>(288+30))&&(Ysuivant<(648-30)))||((Ysuivant>(720+30))&&(Ysuivant<(936-30)))||((Ysuivant>(1008+30))&&(Ysuivant<(1296-30))))) {
            rondY+= MouseVY;
        } 
        //3
        if (((288)>Xsuivant)&&(Xsuivant>(216))&&((Ysuivant>(144+30)&&(Ysuivant<(216-30)))||((Ysuivant>(360+30))&&(Ysuivant<(504-30)))||((Ysuivant>(576+30))&&(Ysuivant<(648-30)))||((Ysuivant>(792+30))&&(Ysuivant<(864-30)))||((Ysuivant>(1008+30))&&(Ysuivant<(1080-30))))) {
            rondY+= MouseVY;
        } 
        //4
        if (((360)>Xsuivant)&&(Xsuivant>(288))&&((Ysuivant>(72+30)&&(Ysuivant<(288-30)))||((Ysuivant>(576+30))&&(Ysuivant<(648-30)))||((Ysuivant>(720+30))&&(Ysuivant<(936-30)))||((Ysuivant>(1008+30))&&(Ysuivant<(1080-30)))||((Ysuivant>(1152+30))&&(Ysuivant<(1296-30))))) {
            rondY+= MouseVY;
        } 
        //5
        if (((432)>Xsuivant)&&(Xsuivant>(360))&&((Ysuivant>(72+30)&&(Ysuivant<(288-30)))||((Ysuivant>(360+30))&&(Ysuivant<(504-30)))||((Ysuivant>(576+30))&&(Ysuivant<(642-30)))||((Ysuivant>(720+30))&&(Ysuivant<(936-30)))||(Ysuivant>(1008+30)))) {
            rondY+= MouseVY;
        } 
        //6
        if (((504)>Xsuivant)&&(Xsuivant>(432))&&((Ysuivant>(72+30)&&(Ysuivant<(144-30)))||((Ysuivant>(360+30))&&(Ysuivant<(642-30)))||((Ysuivant>(720+30))&&(Ysuivant<(936-30)))||(Ysuivant>(1008+30)))) {
            rondY+= MouseVY;
        }
        //7
        if (((576)>Xsuivant)&&(Xsuivant>(504))&&((Ysuivant>(72+30)&&(Ysuivant<(144-30)))||(Ysuivant>(216+30)&&(Ysuivant<(288-30)))||((Ysuivant>(576+30))&&(Ysuivant<(642-30)))||((Ysuivant>(720+30))&&(Ysuivant<(936-30)))||((Ysuivant>(1008+30))&&(Ysuivant<(1296-30))))) {
            rondY+= MouseVY;
        }
        //8
        if (((648)>Xsuivant)&&(Xsuivant>(576))&&((Ysuivant>(72+30)&&(Ysuivant<(144-30)))||(Ysuivant>(216+30)&&(Ysuivant<(504-30)))||((Ysuivant>(576+30))&&(Ysuivant<(642-30)))||((Ysuivant>(720+30))&&(Ysuivant<(792-30)))||((Ysuivant>(1152+30))&&(Ysuivant<(1224-30))))) {
            rondY+= MouseVY;
        }
        //9
        if (((720)>Xsuivant)&&(Xsuivant>(648))&&((Ysuivant>(72+30)&&(Ysuivant<(144-30)))||(Ysuivant>(216+30)&&(Ysuivant<(288-30)))||(Ysuivant>(432+30)&&(Ysuivant<(504-30)))||((Ysuivant>(576+30))&&(Ysuivant<(792-30)))||((Ysuivant>(864+30))&&(Ysuivant<(1008-30)))||((Ysuivant>(1080+30))&&(Ysuivant<(1296-30))))) {
            rondY+= MouseVY;
        }
        //10
        if (((792)>Xsuivant)&&(Xsuivant>(720))&&((Ysuivant>(72+30)&&(Ysuivant<(144-30)))||(Ysuivant>(216+30)&&(Ysuivant<(288-30)))||(Ysuivant>(360+30)&&(Ysuivant<(504-30)))||((Ysuivant>(576+30))&&(Ysuivant<(792-30)))||((Ysuivant>(864+30))&&(Ysuivant<(1008-30)))||((Ysuivant>(1080+30))&&(Ysuivant<(1296-30))))) {
            rondY+= MouseVY;
        }
        //11
        if (((864)>Xsuivant)&&(Xsuivant>(792))&&((Ysuivant>(72+30)&&(Ysuivant<(144-30)))||(Ysuivant>(216+30)&&(Ysuivant<(288-30)))||(Ysuivant>(360+30)&&(Ysuivant<(504-30)))||((Ysuivant>(576+30))&&(Ysuivant<(792-30)))||((Ysuivant>(864+30))&&(Ysuivant<(1008-30)))||((Ysuivant>(1080+30))&&(Ysuivant<(1296-30))))) {
            rondY+= MouseVY;
        }
        //12
        if (((936)>Xsuivant)&&(Xsuivant>(864))&&((Ysuivant>(72+30)&&(Ysuivant<(144-30)))||(Ysuivant>(216+30)&&(Ysuivant<(288-30)))||(Ysuivant>(360+30)&&(Ysuivant<(432-30)))||((Ysuivant>(720+30))&&(Ysuivant<(792-30)))||((Ysuivant>(936+30))&&(Ysuivant<(1008-30)))||((Ysuivant>(1152+30))&&(Ysuivant<(1224-30))))) {
            rondY+= MouseVY;
        }
        //13
        if (((1008)>Xsuivant)&&(Xsuivant>(936))&&((Ysuivant>(72+30)&&(Ysuivant<(288-30)))||(Ysuivant>(360+30)&&(Ysuivant<(432-30)))||(Ysuivant>(504+30)&&(Ysuivant<(576-30)))||((Ysuivant>(648+30))&&(Ysuivant<(864-30)))||((Ysuivant>(936+30))&&(Ysuivant<(1080-30)))||((Ysuivant>(1152+30))&&(Ysuivant<(1296-30))))) {
            rondY+= MouseVY;
        }
        //14
        if (((1080)>Xsuivant)&&(Xsuivant>(1008))&&((Ysuivant>(360+30)&&(Ysuivant<(576-30)))||((Ysuivant>(720+30))&&(Ysuivant<(864-30)))||((Ysuivant>(936+30))&&(Ysuivant<(1296-30))))) {
            rondY+= MouseVY;
        }
        //15
        if (((1152)>Xsuivant)&&(Xsuivant>(1080))&&((Ysuivant>(72+30)&&(Ysuivant<(432-30)))||(Ysuivant>(504+30)&&(Ysuivant<(576-30)))||((Ysuivant>(648+30))&&(Ysuivant<(720-30)))||((Ysuivant>(792+30))&&(Ysuivant<(864-30)))||((Ysuivant>(936+30))&&(Ysuivant<(1296-30))))) {
            rondY+= MouseVY;
        }
        //16
        if (((1224)>Xsuivant)&&(Xsuivant>(1152))&&((Ysuivant>(72+30)&&(Ysuivant<(432-30)))||(Ysuivant>(504+30)&&(Ysuivant<(576-30)))||((Ysuivant>(648+30))&&(Ysuivant<(720-30)))||((Ysuivant>(792+30))&&(Ysuivant<(864-30)))||((Ysuivant>(936+30))&&(Ysuivant<(1008-30)))||((Ysuivant>(1080+30))&&(Ysuivant<(1152-30))))) {
            rondY+= MouseVY;
        }
        //17
        if (((1296)>Xsuivant)&&(Xsuivant>(1224))&&((Ysuivant>(72+30)&&(Ysuivant<(216-30)))||(Ysuivant>(648+30)&&(Ysuivant<(720-30)))||((Ysuivant>(792+30))&&(Ysuivant<(864-30)))||((Ysuivant>(1080+30))&&(Ysuivant<(1296-30))))) {
            rondY+= MouseVY;
        }
        //18
        if (((1368)>Xsuivant)&&(Xsuivant>(1296))&&((Ysuivant>(72+30)&&(Ysuivant<(360-30)))||(Ysuivant>(432+30)&&(Ysuivant<(504-30)))||((Ysuivant>(576+30))&&(Ysuivant<(720-30)))||((Ysuivant>(792+30))&&(Ysuivant<(1008-30)))||((Ysuivant>(1224+30))&&(Ysuivant<(1296-30))))) {
            rondY+= MouseVY;
        }
        //19
        if (((1440)>Xsuivant)&&(Xsuivant>(1368))&&((Ysuivant>(72+30)&&(Ysuivant<(144-30)))||(Ysuivant>(288+30)&&(Ysuivant<(360-30)))||((Ysuivant>(432+30))&&(Ysuivant<(720-30)))||((Ysuivant>(792+30))&&(Ysuivant<(1008-30)))||((Ysuivant>(1080+30))&&(Ysuivant<(1296-30))))) {
            rondY+= MouseVY;
        }
        //20
        if (((1512)>Xsuivant)&&(Xsuivant>(1440))&&((Ysuivant>(72+30)&&(Ysuivant<(216-30)))||(Ysuivant>(288+30)&&(Ysuivant<(504-30)))||((Ysuivant>(576+30))&&(Ysuivant<(720-30)))||((Ysuivant>(792+30))&&(Ysuivant<(1008-30)))||((Ysuivant>(1080+30))&&(Ysuivant<(1296-30))))) {
            rondY+= MouseVY;
        }
        //21
        if (((1584)>Xsuivant)&&(Xsuivant>(1512))&&((Ysuivant>(72+30)&&(Ysuivant<(216-30)))||(Ysuivant>(576+30)&&(Ysuivant<(648-30)))||((Ysuivant>(792+30))&&(Ysuivant<(864-30)))||((Ysuivant>(1224+30))&&(Ysuivant<(1296-30))))) {
            rondY+= MouseVY;
        }
        //22
        if (((1656)>Xsuivant)&&(Xsuivant>(1584))&&((Ysuivant>(72+30)&&(Ysuivant<(864-30)))||((Ysuivant>(936+30))&&(Ysuivant<(1296-30))))) {
            rondY+= MouseVY;
        }
        //23
        if (((1728)>Xsuivant)&&(Xsuivant>(1656))&&((Ysuivant>(72+30)&&(Ysuivant<(864-30)))||((Ysuivant>(936+30))&&(Ysuivant<(1296-30))))) {
            rondY+= MouseVY;
        } */

/* 
        //coin axe Y

                //1

                if (((144)>Xsuivant)&&(Xsuivant>(72))&&((Ysuivant>(72+30)&&(Ysuivant<(216-30)))||((Ysuivant>(288+30))&&(Ysuivant<(1296-30))))) {
                    rondY+= MouseVY;
                } 
                //2
                if (((216)>Xsuivant)&&(Xsuivant>(144))&&((Ysuivant>(72+30)&&(Ysuivant<(216-30)))||((Ysuivant>(288+30))&&(Ysuivant<(648-30)))||((Ysuivant>(720+30))&&(Ysuivant<(936-30)))||((Ysuivant>(1008+30))&&(Ysuivant<(1296-30))))) {
                    rondY+= MouseVY;
                } 
                //3
                if (((288)>Xsuivant)&&(Xsuivant>(216))&&((Ysuivant>(144+30)&&(Ysuivant<(216-30)))||((Ysuivant>(360+30))&&(Ysuivant<(504-30)))||((Ysuivant>(576+30))&&(Ysuivant<(648-30)))||((Ysuivant>(792+30))&&(Ysuivant<(864-30)))||((Ysuivant>(1008+30))&&(Ysuivant<(1080-30))))) {
                    rondY+= MouseVY;
                } 
                //4
                if (((360)>Xsuivant)&&(Xsuivant>(288))&&((Ysuivant>(72+30)&&(Ysuivant<(288-30)))||((Ysuivant>(576+30))&&(Ysuivant<(648-30)))||((Ysuivant>(720+30))&&(Ysuivant<(936-30)))||((Ysuivant>(1008+30))&&(Ysuivant<(1080-30)))||((Ysuivant>(1152+30))&&(Ysuivant<(1296-30))))) {
                    rondY+= MouseVY;
                } 
                //5
                if (((432)>Xsuivant)&&(Xsuivant>(360))&&((Ysuivant>(72+30)&&(Ysuivant<(288-30)))||((Ysuivant>(360+30))&&(Ysuivant<(504-30)))||((Ysuivant>(576+30))&&(Ysuivant<(642-30)))||((Ysuivant>(720+30))&&(Ysuivant<(936-30)))||(Ysuivant>(1008+30)))) {
                    rondY+= MouseVY;
                } 
                //6
                if (((504)>Xsuivant)&&(Xsuivant>(432))&&((Ysuivant>(72+30)&&(Ysuivant<(144-30)))||((Ysuivant>(360+30))&&(Ysuivant<(642-30)))||((Ysuivant>(720+30))&&(Ysuivant<(936-30)))||(Ysuivant>(1008+30)))) {
                    rondY+= MouseVY;
                }
                //7
                if (((576)>Xsuivant)&&(Xsuivant>(504))&&((Ysuivant>(72+30)&&(Ysuivant<(144-30)))||(Ysuivant>(216+30)&&(Ysuivant<(288-30)))||((Ysuivant>(576+30))&&(Ysuivant<(642-30)))||((Ysuivant>(720+30))&&(Ysuivant<(936-30)))||((Ysuivant>(1008+30))&&(Ysuivant<(1296-30))))) {
                    rondY+= MouseVY;
                }
                //8
                if (((648)>Xsuivant)&&(Xsuivant>(576))&&((Ysuivant>(72+30)&&(Ysuivant<(144-30)))||(Ysuivant>(216+30)&&(Ysuivant<(504-30)))||((Ysuivant>(576+30))&&(Ysuivant<(642-30)))||((Ysuivant>(720+30))&&(Ysuivant<(792-30)))||((Ysuivant>(1152+30))&&(Ysuivant<(1224-30))))) {
                    rondY+= MouseVY;
                }
                //9
                if (((720)>Xsuivant)&&(Xsuivant>(648))&&((Ysuivant>(72+30)&&(Ysuivant<(144-30)))||(Ysuivant>(216+30)&&(Ysuivant<(288-30)))||(Ysuivant>(432+30)&&(Ysuivant<(504-30)))||((Ysuivant>(576+30))&&(Ysuivant<(792-30)))||((Ysuivant>(864+30))&&(Ysuivant<(1008-30)))||((Ysuivant>(1080+30))&&(Ysuivant<(1296-30))))) {
                    rondY+= MouseVY;
                }
                //10
                if (((792)>Xsuivant)&&(Xsuivant>(720))&&((Ysuivant>(72+30)&&(Ysuivant<(144-30)))||(Ysuivant>(216+30)&&(Ysuivant<(288-30)))||(Ysuivant>(360+30)&&(Ysuivant<(504-30)))||((Ysuivant>(576+30))&&(Ysuivant<(792-30)))||((Ysuivant>(864+30))&&(Ysuivant<(1008-30)))||((Ysuivant>(1080+30))&&(Ysuivant<(1296-30))))) {
                    rondY+= MouseVY;
                }
                //11
                if (((864)>Xsuivant)&&(Xsuivant>(792))&&((Ysuivant>(72+30)&&(Ysuivant<(144-30)))||(Ysuivant>(216+30)&&(Ysuivant<(288-30)))||(Ysuivant>(360+30)&&(Ysuivant<(504-30)))||((Ysuivant>(576+30))&&(Ysuivant<(792-30)))||((Ysuivant>(864+30))&&(Ysuivant<(1008-30)))||((Ysuivant>(1080+30))&&(Ysuivant<(1296-30))))) {
                    rondY+= MouseVY;
                }
                //12
                if (((936)>Xsuivant)&&(Xsuivant>(864))&&((Ysuivant>(72+30)&&(Ysuivant<(144-30)))||(Ysuivant>(216+30)&&(Ysuivant<(288-30)))||(Ysuivant>(360+30)&&(Ysuivant<(432-30)))||((Ysuivant>(720+30))&&(Ysuivant<(792-30)))||((Ysuivant>(936+30))&&(Ysuivant<(1008-30)))||((Ysuivant>(1152+30))&&(Ysuivant<(1224-30))))) {
                    rondY+= MouseVY;
                }
                //13
                if (((1008)>Xsuivant)&&(Xsuivant>(936))&&((Ysuivant>(72+30)&&(Ysuivant<(288-30)))||(Ysuivant>(360+30)&&(Ysuivant<(432-30)))||(Ysuivant>(504+30)&&(Ysuivant<(576-30)))||((Ysuivant>(648+30))&&(Ysuivant<(864-30)))||((Ysuivant>(936+30))&&(Ysuivant<(1080-30)))||((Ysuivant>(1152+30))&&(Ysuivant<(1296-30))))) {
                    rondY+= MouseVY;
                }
                //14
                if (((1080)>Xsuivant)&&(Xsuivant>(1008))&&((Ysuivant>(360+30)&&(Ysuivant<(576-30)))||((Ysuivant>(720+30))&&(Ysuivant<(864-30)))||((Ysuivant>(936+30))&&(Ysuivant<(1296-30))))) {
                    rondY+= MouseVY;
                }
                //15
                if (((1152)>Xsuivant)&&(Xsuivant>(1080))&&((Ysuivant>(72+30)&&(Ysuivant<(432-30)))||(Ysuivant>(504+30)&&(Ysuivant<(576-30)))||((Ysuivant>(648+30))&&(Ysuivant<(720-30)))||((Ysuivant>(792+30))&&(Ysuivant<(864-30)))||((Ysuivant>(936+30))&&(Ysuivant<(1296-30))))) {
                    rondY+= MouseVY;
                }
                //16
                if (((1224)>Xsuivant)&&(Xsuivant>(1152))&&((Ysuivant>(72+30)&&(Ysuivant<(432-30)))||(Ysuivant>(504+30)&&(Ysuivant<(576-30)))||((Ysuivant>(648+30))&&(Ysuivant<(720-30)))||((Ysuivant>(792+30))&&(Ysuivant<(864-30)))||((Ysuivant>(936+30))&&(Ysuivant<(1008-30)))||((Ysuivant>(1080+30))&&(Ysuivant<(1152-30))))) {
                    rondY+= MouseVY;
                }
                //17
                if (((1296)>Xsuivant)&&(Xsuivant>(1224))&&((Ysuivant>(72+30)&&(Ysuivant<(216-30)))||(Ysuivant>(648+30)&&(Ysuivant<(720-30)))||((Ysuivant>(792+30))&&(Ysuivant<(864-30)))||((Ysuivant>(1080+30))&&(Ysuivant<(1296-30))))) {
                    rondY+= MouseVY;
                }
                //18
                if (((1368)>Xsuivant)&&(Xsuivant>(1296))&&((Ysuivant>(72+30)&&(Ysuivant<(360-30)))||(Ysuivant>(432+30)&&(Ysuivant<(504-30)))||((Ysuivant>(576+30))&&(Ysuivant<(720-30)))||((Ysuivant>(792+30))&&(Ysuivant<(1008-30)))||((Ysuivant>(1224+30))&&(Ysuivant<(1296-30))))) {
                    rondY+= MouseVY;
                }
                //19
                if (((1440)>Xsuivant)&&(Xsuivant>(1368))&&((Ysuivant>(72+30)&&(Ysuivant<(144-30)))||(Ysuivant>(288+30)&&(Ysuivant<(360-30)))||((Ysuivant>(432+30))&&(Ysuivant<(720-30)))||((Ysuivant>(792+30))&&(Ysuivant<(1008-30)))||((Ysuivant>(1080+30))&&(Ysuivant<(1296-30))))) {
                    rondY+= MouseVY;
                }
                //20
                if (((1512)>Xsuivant)&&(Xsuivant>(1440))&&((Ysuivant>(72+30)&&(Ysuivant<(216-30)))||(Ysuivant>(288+30)&&(Ysuivant<(504-30)))||((Ysuivant>(576+30))&&(Ysuivant<(720-30)))||((Ysuivant>(792+30))&&(Ysuivant<(1008-30)))||((Ysuivant>(1080+30))&&(Ysuivant<(1296-30))))) {
                    rondY+= MouseVY;
                }
                //21
                if (((1584)>Xsuivant)&&(Xsuivant>(1512))&&((Ysuivant>(72+30)&&(Ysuivant<(216-30)))||(Ysuivant>(576+30)&&(Ysuivant<(648-30)))||((Ysuivant>(792+30))&&(Ysuivant<(864-30)))||((Ysuivant>(1224+30))&&(Ysuivant<(1296-30))))) {
                    rondY+= MouseVY;
                }
                //22
                if (((1656)>Xsuivant)&&(Xsuivant>(1584))&&((Ysuivant>(72+30)&&(Ysuivant<(864-30)))||((Ysuivant>(936+30))&&(Ysuivant<(1296-30))))) {
                    rondY+= MouseVY;
                }
                //23
                if (((1728)>Xsuivant)&&(Xsuivant>(1656))&&((Ysuivant>(72+30)&&(Ysuivant<(864-30)))||((Ysuivant>(936+30))&&(Ysuivant<(1296-30))))) {
                    rondY+= MouseVY;
                } */
                

        //rondX+= MouseVX;
        //rondY+= MouseVY;

        //Rotation
        var angleRadians = Math.atan2(MouseY - rondY, MouseX - rondX);
        var angleDegrees = (angleRadians * 180) / Math.PI;
    
        perso.style.transform=`translate(${rondX-36}px, ${rondY-36}px) rotate(${90+angleDegrees}deg)`;


        //nouvel appel de la fonction

        window.requestAnimationFrame(deplacementPerso);
    

      
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

  