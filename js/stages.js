projectb.stages = function() {

	var stageFlags = {
		harvestAfterAttack: "harvestAfterAttack",
		stealResourceAttack: "stealResourceAttack",
		doubleHarvest: "doubleHarvest",
		handLimitIncrease: "handLimitIncrease",
		burstOfSpeed: "burstOfSpeed",
		stealResourceDefend: "stealResourceDefend",
		zoneDefend: "zoneDefend",
		vpDiscard: "vpDiscard",
		vpWinAttack: "vpWinAttack",
		vpLoseDefend: "vpLoseDefend"
	};

	var attackMod=0;
	var defenseMod=0;
	var vp=0;
	var resourceCost=[];

	//attack ship
	var harvestAfterAttack=false;
	var stealResourceAttack=false;
	
	//resource hoarder
	var doubleHarvest=false;
	var handLimitIncrease=false;
	var burstOfSpeed=false;
	
	//defense ship
	var stealResourceDefend=false;
	var zoneDefend=false;
	
	//vp rush
	var vpDiscard=false;
	var vpWinAttack=false;
	var vpLoseDefend=false;

	function getAttackMod(){
		return attackMod;
	}
	
	function setAttackMod(newAttackMod){
		attackMod=newAttackMod;
	}

	function getDefenseMod(){
		return defenseMod;
	}
	
	function setDefenseMod(newDefenseMod){
		defenseMod=newDefenseMod;
	}
	
	function getVP(){
		return vp;
	}
	
	function setVP(newVP){
		vp=newVP;
	}
	
	function getCost(){
		return resourceCost;
	}
	
	function setCost(newCost){
		if (newCost instanceof Array){
			resourceCost=newCost;
		}else{
			throw "setCost needs Array";
		}
	}
	
	function hasFlag(stringFlag){
		var rv=false;
		switch(stringFlag){
			case stageFlags.harvestAfterAttack:
				rv=this.harvestAfterAttack;
				break;
			case stageFlags.stealResourceAttack:
				rv=this.stealResourceattack;
				break;
			case stageFlags.doubleHarvest:
				rv=this.doubleHarvest;
				break;
			case stageFlags.handLimitIncrease:
				rv=this.handLimitIncrease;
				break;
			case stageFlags.burstOfSpeed:
				rv=this.burstOfSpeed;
				break;
			case stageFlags.stealResourceDefend:
				rv=this.stealResourceDefend;
				break;
			case stageFlags.zoneDefend:
				rv=this.zoneDefend;
				break;
			case stageFlags.vpDiscard:
				rv=this.vpDiscard;
				break;
			case stageFlags.vpWinAttack:
				rv=this.vpWinAttack;
				break;
			case stageFlags.vpLoseDefend:
				rv=this.vpLoseDefend;
				break;
			default:
				rv=false;
		}
		return rv;
	}
	
	return{
		getAttackMod: getAttackMod,
		setAttackMod: setAttackMod,
		getDefenseMod: getDefenseMod,
		setDefenseMod: setDefenseMod,
		getVP: getVP,
		setVP: setVP,
		harvestAfterAttack: harvestAfterAttack,
	    stealResourceAttack: stealResourceAttack,
	    doubleHarvest: doubleHarvest,
	    handLimitIncrease: handLimitIncrease,
	    burstOfSpeed: burstOfSpeed,
	    stealResourceDefend: stealResourceDefend,
	    zoneDefend: zoneDefend,
	    vpDiscard: vpDiscard,
	    vpWinAttack: vpWinAttack,
	    vpLoseDefend: vpLoseDefend,
		stageFlags: stageFlags,
		hasFlag: hasFlag
	}
}