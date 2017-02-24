$(document).ready(function(){


    var chosenOpponent;
    var enemies = [];
    var opponent = [];
    var playerpics = [1,2,3,4];
    var healthPoints = 0;
    var attackPower = 0;
    var baseAttackPower = 0;
    var counterAttackPower = 0;

    function character(name, healthPoints, attackPower, baseAttackPower, counterAttackPower) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.attackPower = attackPower;
        this.counterAttackPower = counterAttackPower;
    }

    var character1 = new character("Ned",120,8,8,8); 
    var character2 = new character("Lou",100,5,5,5);
    var character3 = new character("Chris",150,20,5,10); 
    var character4 = new character("Lance",180,25,0,25);  

    // console.log(character1.name);
    // console.log(character2.attackPower);


    // store characters in an array called players
    var players = [character1,character2,character3,character4];

    //console.log(players);

    // Assoicates object data like name and healthPoints to player  
    $("#p1_name").html(character1.name);
    $("#p1_health").append(character1.healthPoints);
    $("#p2_name").html(character2.name);
    $("#p2_health").append(character2.healthPoints);
    $("#p3_name").html(character3.name);
    $("#p3_health").append(character3.healthPoints);
    $("#p4_name").html(character4.name);
    $("#p4_health").append(character4.healthPoints);



// ****************************************Code from Tuesday*******************************************************************

    // // When the game starts, the player will choose a character by clicking on the fighter's picture. 
    // // The player will fight as that character for the rest of the game.
    // $(".enemy").on("click", function(){
    // 	//when player thumbnail is clicked character is assigned to chosenPlayer
    // 	chosenPlayer = $(this).attr("value");    	
    // 	console.log(players[chosenPlayer]);

    // 	$("#your_snowman").append(this)
    // 	//remove enemy class from chosenPlayer 
    // 	$(this).removeClass("enemy");

    // 	//removes chosenPlayer from players array and remaining player objects are assigned as enemies
    // 	players.splice(chosenPlayer,1);
    // 	enemies = players;
    // 	console.log(enemies);

    // 	var a = $(".enemy").addClass("enemiesAvailable")
    // 	$(".enemiesAvailable").detach();
    // 	$("#enemies_available").append(a);
    	
    	
    // 	// grab each enemy from the array and place them into the 'available to fight' area

    		

    // 	//turn this on function off 
    // 	$(this).off();
    // });



    // $(".enemyAvailable").on("click", function(){
    // 	$("#defender_area").append(this);
    // 	//find index of clicked item
    // 	// chosenOpponent = $(this).index(enemies);
    // 	// console.log("Index of chosen opponent: " + chosenOpponent)

    // 	// enemies.splice(chosenOpponent,1);
    // 	// console.log("Enemies available to attack: " + enemies);

    // 	// var c = $(".enemiesAvailable").detach();
    // 	// $("#fightZone").prepend(c);
    // })

// *****************************************Code from Tuesday End******************************************************************

//******************************************Code from Thursday*****************************************************************

// $(function(){
// 	var chosenPlayer; 

// 	$(".players").on("click", function(){
// 		//The chosen player is selected and assigned to the variable
// 		chosenPlayer = $(this);
// 		console.log(chosenPlayer);
// 		//The unclicked players are moved to zone2
// 		$("#zone1").append(chosenPlayer.siblings().addClass("enemies").removeClass("players"));
// 		// 
// 		//The chosen player is sent to zone1 and the player class i
// 		// $("#zone1").append(chosenPlayer.addClass("chosen").removeClass("players"));		

// 		$(this).off("click");
// 	});
// });
// 	//When the user clicks on a snowman, that snowman becomes their chosen player
	
// $(function(){
// 	var chosenOpponent;

// 	$(".enemies").on("click", function(){

// 		chosenOpponent = $(this);
// 		console.log(chosenOpponent);
// 		$("#zone2").append(chosenOpponet);
	
// 	});
// });


    //The user clicks on an enemy to fight from zone2 
        //The chosen player is moved to the zone3


//***************************************^^^Code from Thursday END****************
	
//**************************************Code from Friday Begin***********************

    
    // Add an on click listener to all elements that have the class "player"
    $(".players").on("click", function() {
        // Check if we've already chosen our player
        
       
        chosenPlayer = $(this);
        console.log(chosenPlayer);
        
        $("#zone2").append(chosenPlayer.siblings().removeClass("players").addClass(enemies));
        $("#zone1").append(chosenPlayer);

        // Add unselected players to enemies 

    });



    // $(".enemies").on("click", function(){
        

    //     chosenOpponent = $(this);
        
    //     $("#zone3").append(chosenOpponent);

    // });

    
    	
    

});





// ◦The player must then defeat all of the remaining fighters. 
// remaining choices become enemies




// ◦Once the player selects an opponent, that enemy is moved to a defender area. 

// opponent is moved to #defender_area


// ◦The player will now be able to click the  attack  button.
// Attack button is unlocked when opponet is in #defender_area 

// ◾Whenever the player clicks  attack , their character damages the defender. The opponent will lose  HP  (health points). These points are displayed at the bottom of the defender's picture. 
// ◾The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their  HP . These points are shown at the bottom of the player character's picture.

// displays message describing health point damage to each player

// 3.The player will keep hitting the attack button in an effort to defeat their opponent.
// ◦When the defender's  HP  is reduced to zero or below, remove the enemy from the  defender area . 
//The player character can now choose a new opponent.


// 4.The player wins the game by defeating all enemy characters. 
// The player loses the game the game if their character's  HP  falls to zero or below.


// •Each character in the game has 3 attributes:  Health Points ,  Attack Power  and  Counter Attack Power .


// •Each time the player attacks, their character's Attack Power increases by its base Attack Power. 
// ◦For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).


// •The enemy character only has  Counter Attack Power . 
// ◦Unlike the player's  Attack Points ,  Counter Attack Power  never changes.


// •The  Health Points ,  Attack Power  and  Counter Attack Power  of each character must differ.


// •No characters in the game can heal or recover Health Points. 
// ◦A winning player must pick their characters wisely by first fighting an enemy with low  Counter Attack Power . This will allow them to grind  Attack Power  and to take on enemies before they lose all of their  Health Points . Healing options would mess with this dynamic.


// •Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player.

