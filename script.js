let playerOneScore = 0;

document.getElementById("button").addEventListener("click", function() {
    console.log("button clicked");

  
  

    let randomNumber=Math.floor(  Math.random()*6 + 1   );

    playerOneScore = playerOneScore + randomNumber;
    

    if       (randomNumber==1) {
        document.getElementById("image").src  = "./img/1.png";
    }else if (randomNumber==2) {
        document.getElementById("image").src  = "./img/2.png";
    }else if (randomNumber==3) {
        document.getElementById("image").src  = "./img/3.png";
    }else if (randomNumber==4) {
        document.getElementById("image").src  = "./img/4.png";
    }else if (randomNumber==5) {
        document.getElementById("image").src  = "./img/5.png";
    } else {
        document.getElementById("image").src  = "./img/6.png";
    }




    
    if (randomNumber == 1) {
        playerOneScore = 0;
        console.log("Sorry, you lost!!");
      }
        else if (playerOneScore > 20) {
        
        console.log(`You win`);
      }




    console.log(randomNumber);
    document.getElementById("display").textContent=playerOneScore;
});