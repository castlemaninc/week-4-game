


$(function(){
	var chosenPlayer;
	var playerId;
	var bool = false;
	// var chosenEnemy;
	var $players = $('#zone0 .players');
	// var $enemies = $('#zone1 .enemies');

	$players.on('click', function(){
		chosenPlayer = $(this);
		bool = true;
		playerId = chosenPlayer.id;
		console.log(chosenPlayer);
		$("#zone2").append(chosenPlayer.siblings().addClass("enemies").removeClass("players"));
		if (bool){
			$("#zone1").append(chosenPlayer);
		}
		})
		$players.off('click');
		return;
	});

	// $enemies.on('click', function(){
	// 	chosenEnemy = this;
	// 	console.log(chosenEnemy);

	// })


$(function(){
	var chosenEnemy;
	var $enemies = $('#zone2 .enemies');

	$enemies.on('click', function(){
		chosenEnemy= $(this);
		console.log(chosenEnemy);

	})
})