(function () {
	var ship=new projectb.spaceship();
	var stage=new projectb.stages();
	
	//attack ship
	ship.setName("Attack Ship");
	ship.setNumStages(3);
	ship.setPower(2);
	ship.setDefense(-2);
	//aship stage 1
	stage.harvestAfterAttack=true;
	ship.setStage(0, stage);
	//aship stage 2
	stage=new projectb.stages();
	stage.stealResourcesAttack=true;
	ship.setStage(1, stage);
	//aship stage 3
	stage=new projectb.stages();
	stage.setAttackMod(1);
	stage.setDefenseMod(-1);
	ship.setStage(2, stage);
	
	
    projectb.allShips.push(ship);
	
	//defense ship
	ship=new projectb.spaceship();
	ship.setName("Defense Ship");
	ship.setNumStages(3);
	ship.setPower(-2);
	ship.setDefense(2);
	//dship stage 1
	stage=new projectb.stages();
	stage.zoneDefend=true;
	ship.setStage(0, stage);
	//dship stage 2
	stage=new projectb.stages();
	stage.stealResourceDefend=true;
	ship.setStage(1, stage);
	//dship stage 3
	stage=new projectb.stages();
	stage.setAttackMod(-1);
	stage.setDefenseMod(1);
	ship.setStage(2, stage);
	
	projectb.allShips.push(ship);
	
	//vp rush ship
	ship=new projectb.spaceship();
	ship.setName("VP Rush Ship");
	ship.setNumStages(3);
	ship.setPower(-1);
	ship.setDefense(1);
	//vprship stage 1
	stage=new projectb.stages();
	stage.setVP(5);
	stage.vpDiscard=true;
	ship.setStage(0, stage);
	//vprship stage 2
	stage=new projectb.stages();
	stage.setVP(5);
	stage.vpWinAttack=true;
	ship.setStage(1, stage);
	//vprship stage 3
	stage=new projectb.stages();
	stage.setVP(5);
	stage.vpLoseDefend=true
	ship.setStage(2, stage);
	
	projectb.allShips.push(ship);
	
	//resource hoarder ship
	ship=new projectb.spaceship();
	ship.setName("Resource Hoarder Ship");
	ship.setNumStages(3);
	ship.setPower(-1);
	ship.setDefense(1);
	//rhship stage 1
	stage=new projectb.stages();
	stage.doubleHarvest=true;
	ship.setStage(0, stage);
	//rhship stage 2
	stage=new projectb.stages();
	stage.burstOfSpeed=true;
	ship.setStage(1, stage);
	//rhship stage 3
	stage=new projectb.stages();
	stage.handLimitIncrease=true;
	ship.setStage(2, stage);
	
	projectb.allShips.push(ship);
	
	
}());