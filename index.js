
function myFunction() {
    var randomNumber = Math.random();  
 randomNumber= Math.round(randomNumber*5)+1  ;
randomNumber= "images/dice"+randomNumber+".png";
 document.getElementById("img1").setAttribute("src",randomNumber); 

  randomNumber = Math.random();  
 randomNumber= Math.round(randomNumber*5)+1  ;
randomNumber= "images/dice"+randomNumber+".png";
 
 document.getElementById("img2").setAttribute("src",randomNumber); 

}
 