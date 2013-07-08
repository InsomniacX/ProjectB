var projectb = {
	allShips : [],
	screens: []
};


Modernizr.load([{
	load : [
		"js/sizzle.js",
		"js/dom.js",
		"js/resources.js",
		"js/stages.js",
		"js/spaceship.js",
		"js/initSpaceships.js",
        "js/player.js",
		"js/board.js",
		"js/game.js",
		"js/turnStructure.js",
		"js/screens.MainMenu.js",
		"js/screens.hotSeatMenu1.js",
		"js/screens.hotSeatMenu2.js",
		"js/screens.shipSelectScreen.js",
		"js/screens.game-screen.js"
	]
},{
	complete: function() {
		projectb.game.showScreen("mainMenu");
	}
}
]);
