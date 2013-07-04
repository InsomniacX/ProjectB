projectb.game = (function(){
	var dom=projectb.dom;
	var $ = dom.$;
	
	function showScreen(screenId) {
			var activeScreen = $("#game .screen.active")[0],
				screen = $("#" + screenId)[0];
			if (activeScreen) {
				dom.removeClass(activeScreen, "active");
			}
			
			// extract screen parameters from arguments
			var args = Array.prototype.slice.call(arguments, 1);
			// run the screen module
			projectb.screens[screenId].run.apply(
				projectb.screens[screenId], args
			);

			// display the screen html
			dom.addClass(screen, "active");
	}
	
	return{
		showScreen: showScreen
	}

})();