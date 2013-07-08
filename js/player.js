projectb.player = function() {
	var id=0;
	var name = "";
	var cards=[];
	var ship;//=0;
	var vp=0;
	var tokenImage;
	var x;
	var y;
	
	
	function getId(){
		return id;
	}
	
	function setId(newID){
		id=newID;
	}
	
	function getName(){
		return name;
	}
	
	function setName(newName){
		name=newName;
	}
	
	function getCards(){
		return cards;
	}
	
	function addCard(newCard){
		cards.push(newCard);
	}
	
	function removeCard(index){
		cards.splice(index,1);
	}
	
	function getShip(){
		return ship;
	}
	
	function setShip(newShip){
		ship=newShip;
	}
	
	function getVP(){
		return vp;
	}
	
	function setVP(newVP){
		vp=newVP;
	}
	
	function setPlayerLocation(newX, newY){
		x=newX;
		y=newY;
	}
	
	function getPlayerX(){
		return x;
	}
	
	function getPlayerY(){
		return y;
	}
	
	//note passing a negative number will subtract VP
	function addVP(numToAdd){
		vp+=numToAdd;
	}
	
	function getTokenImage(){
		return tokenImage;
	}
	
	function setTokenImage(newTokenImage){
		tokenImage=newTokenImage;
	}
	
	return{
		getId: getId,
		setId: setId,
		getName: getName,
		setName: setName,
		getCards: getCards,
		addCard: addCard,
		removeCard: removeCard,
		getShip: getShip,
		setShip: setShip,
		getVP: getVP,
		setVP: setVP,
		addVP: addVP,
		getTokenImage: getTokenImage,
		setTokenImage: setTokenImage,
		setPlayerLocation: setPlayerLocation,
		getPlayerX: getPlayerX,
		getPlayerY: getPlayerY
	}
}