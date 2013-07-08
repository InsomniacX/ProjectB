projectb.screens["hotSeatMenu1"] = (function(){
	var game=projectb.game;
	var dom=projectb.dom;
	var firstRun=true;
	
	function setup(){
		dom.bind("#hotSeatMenu1 ul.menu", "click", function(e) {
            if (e.target.nodeName.toLowerCase() === "button") {
                var action = e.target.getAttribute("name");
                if (action=="2p"){
					game.showScreen("hotSeatMenu2", 2);
				}else if (action=="3p"){
					game.showScreen("hotSeatMenu2", 3);
				}else if (action=="4p"){
					game.showScreen("hotSeatMenu2", 4);
				}else if (action=="back"){
					game.showScreen("mainMenu");
				}else{
					alert("hotSeatMenu1: something weird happened");
					game.showScreen("mainMenu");
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