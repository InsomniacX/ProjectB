projectb.screens["mainMenu"] = (function(){
	var game=projectb.game;
	var dom=projectb.dom;
	var firstRun=true;
	
	function setup(){
		dom.bind("#mainMenu ul.menu", "click", function(e) {
            if (e.target.nodeName.toLowerCase() === "button") {
                var action = e.target.getAttribute("name");
                if (action=="hotSeat"){
					game.showScreen("hotSeatMenu1")
				}else if (action=="multiplayer"){
					alert("Not yet implemented");
				}else if (action=="about"){
					alert("Not yet implemented");
				}else{
					alert("Menu1: something weird happened");
				}
            }
        });
	}
	
	function run(){
		if (firstRun){
			firstRun=false;
			setup();
		}
	}
	
	return {
		run: run
	}
	
})();