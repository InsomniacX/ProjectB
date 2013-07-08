projectb.screens["shipSelectScreen"] = (function(){
	var game=projectb.game;
	var dom=projectb.dom;
	var $=dom.$;
	var firstRun=true;
	var playerNames=[];
	var currPlayer=0;
	var nextInvis=true;
	
	function setup(){
		currPlayer=1;
		$("#shipSelectPlayerName")[0].innerHTML=playerNames[0]+" please pick a ship";
		dom.addClass($("#ssNextButton")[0], "invisible");
		dom.bind("#ssAShipButton", "click", selectShipHandler);
		dom.bind("#ssDShipButton", "click", selectShipHandler);
		dom.bind("#ssRHShipButton", "click", selectShipHandler);
		dom.bind("#ssVPShipButton", "click", selectShipHandler);
		dom.bind($('#ssNextButton')[0], "click", nextButtonHandler);
	}
	
	function run(playerNamesArg){
		if (firstRun){
			if (Object.prototype.toString.apply(playerNamesArg) == "[object Array]"){
				for (var i=0; i<playerNamesArg.length; i++){
					playerNames.push(playerNamesArg[i]);
				}
			}
			firstRun=false;
			setup();
		}
	}
	
	function selectShipHandler(e){
		var classCheck="ShipSelectPlayer"+currPlayer;
		var selected=$("."+classCheck)[0];
		if (selected){
			dom.removeClass(selected, classCheck);
			dom.bind(selected, "click", selectShipHandler);
		}
		dom.unbind(this, "click", selectShipHandler);
		dom.addClass(this, classCheck);
		if (nextInvis){
			nextInvis=false;
			dom.removeClass($("#ssNextButton")[0], "invisible");
		}
	}
	
	function nextButtonHandler(e){
		currPlayer++;
		if ((currPlayer>4) || (playerNames[currPlayer-1]=="")){
			game.showScreen("game-screen");
		}else{
			$("#shipSelectPlayerName")[0].innerHTML=playerNames[currPlayer-1]+" please pick a ship";
			nextInvis=true;
			dom.addClass(this, "invisible");
		}
	}
	
	return {
		run: run
	}
	
})();