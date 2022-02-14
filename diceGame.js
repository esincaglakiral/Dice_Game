var firstDice = document.getElementById("firstPlayerToPlay").children[3];
var firstShake = document.getElementById("firstPlayerToPlay").children[6];
var firstScore = document.getElementById("firstScore").children[3];

var secondDice = document.getElementById("secondPlayerToPlay").children[3];
var secondShake = document.getElementById("secondPlayerToPlay").children[6];
var secondScore = document.getElementById("secondScore").children[3];


secondShake.disabled = true;


var putInOrder = 0;
var rdn = 0;
var firstscr = 0, secondscr = 0;
var finishGame = false;

function Shake(player){
    if(!finishGame){
        putInOrder = player;
        diceShake = setInterval(dice,10);
    }

// The function we want it to shake the dice every 10 milliseconds
// rolls the dice until the game is over


}

var dice = function(){
   
    rdn = Math.ceil(Math.random()*6); /* We should use the Math.ceil method to round the integer up. */

    if(putInOrder === 1){
        firstShake.disabled = true;

        switch(rdn){
            case 1:
                firstDice.src = "Dice Pictures/dice"+1+".jpg";
                break;
    
            case 2:
                firstDice.src = "Dice Pictures/dice"+2+".jpg";
                break;
        
            case 3:
                firstDice.src = "Dice Pictures/dice"+3+".jpg";
                break;
    
            case 4:
                firstDice.src = "Dice Pictures/dice"+4+".jpg";
                break;
    
            case 5:
                firstDice.src = "Dice Pictures/dice"+5+".jpg";
                break;
    
            case 6:
                firstDice.src = "Dice Pictures/dice"+6+".jpg";
                break;
    
      }

    }

    if(putInOrder === 2){
       secondShake.disabled = true;

        switch(rdn){
            case 1:
                secondDice.src = "Dice Pictures/dice"+1+".jpg";
                break;
    
            case 2:
                secondDice.src = "Dice Pictures/dice"+2+".jpg";
                break;
        
            case 3:
                secondDice.src = "Dice Pictures/dice"+3+".jpg";
                break;
    
            case 4:
                secondDice.src = "Dice Pictures/dice"+4+".jpg";
                break;
    
            case 5:
                secondDice.src = "Dice Pictures/dice"+5+".jpg";
                break;
    
            case 6:
                secondDice.src = "Dice Pictures/dice"+6+".jpg";
                break;
    
      }

    }
}



//the function we will create to roll the dice

function roll(){
    clearInterval(diceShake);

    if( putInOrder === 1){
        firstscr += rdn;
        firstScore.innerHTML = firstscr;

        if(firstscr >= 50){
            finishGame = true;
            alert("Congratulations!! First Player won :)");
        }
        else{
            secondShake.disabled = false;
        }

    }
    if( putInOrder === 2){
        secondscr += rdn;
        secondScore.innerHTML = secondscr;
        if(secondscr >= 50){
            finishGame = true;
            alert("Congratulations!! Second Player won :)");
        }
        else{
            firstShake.disabled = false;
        }
        
    }
}