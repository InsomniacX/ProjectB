projectb.turnStucture = (function(){
	//gather
	function gather(playerTurn, resourceType){
		var tempStage=new projectb.stages();
		//check if double gather
		if (playerTurn.getShip().hasFlag(tempStage.stageFlags.doubleHarvest)){
			//roll to gather two instead of one.
			var tempValue=(Math.random()*6)+1; //probably need to redo with some animation at some point
			if (tempValue>=5){
				playerTurn.addCard(resourceType);
			}
		}
		
		//if didn't move last turn they can gather 2
		if (playerTurn.getMovedLastTurn()){
			playerTurn.addCard(resourceType);
		}
		playerTurn.addCard(resourceType);
		
	}
	
	//move
	function move(playerTurn, xLocation, yLocation, locationChanged){
		//assumed function name. Should this function handle getting player input? validating it?
		playerTurn.setPlayerLocation(playerTurn.getId(), xLocation, yLocation);
		playerTurn.setMovedLastTurn(locationChanged);
	}
	
	//conflict
	function conflict(playerTurn, boardObject, xLocation, yLocation){
		//check for conflict
		if (!(boardObject.isCenterSquare(xLocation, yLocation))){
			if (boardObject.numPlayersInSquare(xLocation, yLocation)>1){
				var temp1Value=(Math.random()*6)+1; //probably need to redo with some animation at some point
				var temp2Value=(Math.random()*6)+1; //probably need to redo with some animation at some point
				
				var defender=boardObject.getOtherPlayers(playerTurn.getId(), xLocation, yLocation)[0];
				var attackValue=temp1Value+playerTurn.getShip().getPower();
				var defenseValue=temp2Value+defender.getShip().getDefense();
				
				var centerX=boardObject.getCenterX();
				var centerY=boardObject.getCenterY();
				
			//both of these need to check for VP ship hooks
				if (attackValue>defenseValue){
					//need to steal a random resource here
					playerTurn.setPlayerLocation(defender, centerX, centerY);
					defender.setMovedLastTurn(true);
				}else{
				//defender wins ties
					playerTurn.setPlayerLocation(playerTurn, centerX, centerY);
					playerTurn.setMovedLastTurn(true);
				}
			}
		}
	}
	//purchase
	//stagesboought is an array containing true or false for each stage the player could have built
	function purchase(playerTurn, vpsBought, stagesBought, cardsSpent){
		this.discard(playerTurn, cardsSpent);
		playerTurn.setVP(playerTurn.getVP()+vpsBought);
		for (var i=0; i<stagesBought.length; i++){
			if (stagesBought[i]){
				playerTurn.getShip.setStageBuilt(i, true);
			}
		}
	}
	
	//discard
	function discardCheck(playerTurn){
		var cardArr=playerTurn.getCards();
		if (cardArr.length>5){
			//6=discard on 1/2, 7/8=1,2,3 9/10=,1,2,3,4 11/12=1,2,3,4,5 13=always discard
			var discardChance = Math.floor((cardArr.length-1)/2);
			var tempRoll=(Math.random()*6)+1;
			
			return (tempRoll<=discardChance);
		}
		return false;
	}
	
	function discard(playerTurn, cardsToDiscard){
		for (var i=0; i<cardsToDiscard.length; i++){
			var currHand=playerTurn.getCards();
			var discardTarget=cardsToDiscard[i];
			playerTurn.removeCard(currHand.indexOf(discardTarget));
		}
	}
})();