projectb.resources = {
	
	SPADE: 0,
	CLUB: 1,
	HEART: 2,
	DIAMOND: 3,
	TRADE: 4
}

projectb.board = (function (){

	var quadrants,
		playerLocs,
		resources,
		players,
		numPlayers,
		victoryTarget,
		currentPlayer;
		
		
	function initialize(){
	
		resources = projectb.resources;
		quadrants = [ 	
						[resources.SPADE, resources.HEART, resources.CLUB],
						[resources.DIAMOND, resources.TRADE, resources.DIAMOND],
						[resources.CLUB, resources.HEART, resources.SPADE]
					];
		playerLocs = [
						[[], [], []],
						[[], [], []],
						[[], [], []]
					]; // Location of each player. Array indexes as x,y coordinates, z index is array of players at that square. Usually will just be z-index 0, unless at the trading post or other circumstances
					
		numPlayers = 2; // Probably shouldn't be hardcoded.
		victoryTarget = 15; // Probably shouldn't be hardcoded either.
		players = [];
		for (var i = 0; i < numPlayers; i++){
		
			// Initialize players
			// players[i] = projectb.player?
			// Then set the fields for players[i]
			// playerLocs[1][1][i] = players[i].getID(); - All players start at the trading post
		}
		
		currentPlayer = Math.Floor(Math.Random(numPlayers * 100) + 1);
	}

	// Moves the player. Call this after combats or only after move is verified as valid
	function movePlayer(playerID, oldX, oldY, newX, newY){
	
		playerLocs[oldX][oldY].splice(playerLocs[oldX][oldY].indexOf(playerID), 1);
		playerLocs[newX][oldY].push(playerID);
	}

})();