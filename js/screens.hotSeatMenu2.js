projectb.screens["hotSeatMenu2"] = (function(){
	var game=projectb.game;
	var dom=projectb.dom;
	var $=dom.$
	var firstRun=true;
	
	var numPlayers=2;
	var visible3=true;
	var visible4=true;
	
	function setup(numPlayers){
		this.numPlayers=numPlayers;
		if (numPlayers<4){
			var domLiReference=$("#hsMenu2Item4")[0];
			var classVis=$("#hsMenu2Item4.visible-block")[0];
			if (classVis){
				dom.removeClass(domLiReference, "visible-block");
			}
			dom.addClass(domLiReference, "invisible");
		}else{
			var domLiReference=$("#hsMenu2Item4")[0];
			var classVis=$("#hsMenu2Item4.invisible")[0];
			if (classVis){
				dom.removeClass(domLiReference, "invisible");
			}
			dom.addClass(domLiReference, "visible-block");
		}
		
		if (numPlayers<3){
			var domLiReference=$("#hsMenu2Item3")[0];
			var classVis=$("#hsMenu2Item3.visible-block")[0];
			if (classVis){
				dom.removeClass(domLiReference, "visible-block");
			}
			dom.addClass(domLiReference, "invisible");
		}else{
			var domLiReference=$("#hsMenu2Item3")[0];
			var classVis=$("#hsMenu2Item3.invisible")[0];
			if (classVis){
				dom.removeClass(domLiReference, "invisible");
			}
			dom.addClass(domLiReference, "visible-block");
		}
	
		if (firstRun){
			dom.bind("#hotSeatMenu2 ul.menu", "click", function(e) {
				if (e.target.nodeName.toLowerCase() === "button") {
					var action = e.target.getAttribute("name");
					if (action=="back"){
						game.showScreen("hotSeatMenu1");
					}else if (action=="next"){
						if (validateInput()){
							var playerNames=[];
							var p1N=$("#pname1")[0].value;
							var p2N=$("#pname2")[0].value;
							var p3N=$("#pname3")[0].value;
							var p4N=$("#pname4")[0].value;
							playerNames.push(p1N);
							playerNames.push(p2N);
							playerNames.push(p3N);
							playerNames.push(p4N);
							game.showScreen("shipSelectScreen", playerNames);
						}else{
							alert("must fill in all fields");
						}
					}else{
						alert("hotSeatMenu2: something weird happened");
						game.showScreen("mainMenu");
					}
					
				}
			});
			this.firstRun=false;
		}
	}
	
	function run(numPlayers){
		setup(numPlayers);
	}
	
	function validateInput(){
		var p1N=$("#pname1")[0].value;
		var p2N=$("#pname2")[0].value;
		var p3N=$("#pname3")[0].value;
		var p4N=$("#pname4")[0].value;
		var returnValue=true;
		returnValue=((returnValue) && (p1N!=""));
		returnValue=((returnValue) && (p2N!=""));
		if (numPlayers>2){
			returnValue=((returnValue) && (p3N!=""));
		}
		if (numPlayers>3){
			returnValue=((returnValue) && (p4N!=""));
		}
		return returnValue;
	}
	
	return {
		run: run
	}
	
})();