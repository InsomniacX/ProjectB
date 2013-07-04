projectb.spaceship = function() {
	var name = "";
	var numStages=0;
	var stagesBuilt=[];
	var stages=[];
	var power=0;
	var defense=0;
	var boardImage;
	
	function getName(){
		return name;
	}
	
	function setName(newName){
		name=newName;
	}
	
	function getNumStages(){
		return numStages;
	}
	
	function setNumStages(newNumStages){
		numStages=newNumStages;
		stagesBuilt=[];
		for (var i=0; i<newNumStages; i++){
			stagesBuilt.push(false);
			if (i>=stages.length){
				stages.push(new projectb.stages());
			}
		}
	}
	
	function getStagesBuilt(){
		return stagesBuilt;
	}
	
	function setStageBuilt(stageNum, newBoolValue){
		if (stageNum>=numStages){
			setNumStages(stageNum);
		}
		stagesBuilt[stageNum]=newBoolValue;
	}
	
	function getStageBuilt(stageNum){
		return stagesBuilt[stageNum];
	}
	
	function getStages(){
		return stages;
	}
	
	function getStage(stageNum){
		return stages[stageNum];
	}
	
	function setStage(stageNum, newStage){
		if (stageNum>=numStages){
			setNumStages(stageNum);
		}
		stages[stageNum]=newStage;
	}
		
	function getPower(){
		return power;
	}
	
	function setPower(newPower){
		power=newPower;
	}
	
	function getDefense(){
		return defense;
	}
	
	function setDefense(newDefense){
		defense=newDefense;
	}
	
	function getBoardImage(){
		return boardImage;
	}
	
	function setBoardImage(newImage){
		boardImage=newImage;
	}
	
	function hasFlag(stringFlag){
		for (var i=0; i<numStages; i++){
			if (stagesBuilt[i]){
				if (stages[i].hasFlag(stringFlag)){
					return true;
				}
			}
		}
		return false;
	}
	
	 return {
		getName : getName,
		setName : setName,
        getNumStages : getNumStages,
        setNumStages : setNumStages,
        getStagesBuilt : getStagesBuilt,
        setStageBuilt : setStageBuilt,
        getStageBuilt : getStageBuilt,
		getStages: getStages,
		getStage: getStage,
		setStage: setStage,
        getPower : getPower,
        setPower : setPower,
        getDefense : getDefense,
		setDefense : setDefense,
		getBoardImage : getBoardImage,
		setBoardImage : setBoardImage,
		hasFlag : hasFlag
    }
}