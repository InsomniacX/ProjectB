projectb.screens["game-screen"] = (function(){
	var game=projectb.game;
	var dom=projectb.dom;
	var firstRun=true;
	
	function setup(){
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