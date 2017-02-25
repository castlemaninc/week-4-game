$(document).ready(function(){

    var randomNum = 0;
    var randomVal;
    var randomVals = [];
    var total;
    var wins = 0;
    var losses = 0;
        

    // Game begins

    var newGame = function(){
        total = 0;
        // console.log(total);
        // Total Score is updated in the webpage 
        $("#tot").html("<h2>" + total + "</h2>");

        // Current win and loss count is updated in the webpage 
        $("#winCount").html("<h2>" + wins + "</h2>");
        $("#lossCount").html("<h2>" + losses + "</h2>"); 

        // Random Number between 19 and 120 is assigned
        randomNum = Math.floor((Math.random() * (120 - 19 + 1)) + 19);
        //console.log(randomNum);

        // Random number is displayed 
        $("#rand").html("<h2>" + randomNum + "</h2>");
        
        // An array of random values is created 
        for (i=0;i<4;i++){
            randomVal = Math.floor((Math.random() * 12) + 1);
            randomVals.push(randomVal);            
        };

        console.log("The crystal values are: " + randomVals);

        // The Random Values are given to each crystal
        $("#crystal_1").attr("value",randomVals[0]);
        $("#crystal_2").attr("value",randomVals[1]);
        $("#crystal_3").attr("value",randomVals[2]);
        $("#crystal_4").attr("value",randomVals[3]);
        
        
    }
    
        

        // When user clicks on a crystal the random value of that crystal is obtained and added to the Total (sum)
        $(".crystal").on("click", function(){

            // gets value of the crystal
            var crystalValue = $(this).attr("value");
            console.log(crystalValue);

             // Total Score is incrased by the value of the crystals
            total += parseInt(crystalValue); 
            console.log(total);

            // Total Score is updated in the webpage 
            $("#tot").html("<h2>" + total + "</h2>");

            console.log("random num is: " + randomNum);

                        
            // If Total Score matches Random Number, Player wins
            if (randomNum === total){
                // Win total increments by 1
                wins++;
                // Game restarts resetting certain values
                newGame();
            } else if (total > randomNum){
                // Loss total increments by 1 
                losses++;
                // Game restarts resetting certain values 
                newGame();
            }
        });

                   
        // Starts game when webpage is opened 
        newGame();
});


