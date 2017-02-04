var balloon = function(sID){	
	this.oWrapper = document.getElementById("wrapper");
	
	this.oBalloon = {
		obj: document.getElementById(sID),
		x: Math.random() * this.oWrapper.clientWidth,
		y: Math.random() * 100,
		strength: {
			x: 0.02 + Math.random()/10,
			y: 0.5 + Math.random()/2
		},
		amplifier: Math.random()*20,
		angle: 0
	}
	
	this.setTimer();
};

balloon.prototype.setTimer = function(){
	this.move();
	
	var oSelf = this;
	setTimeout(function(){ oSelf.setTimer() }, 50);
};

balloon.prototype.move = function(){
	var oBalloon = this.oBalloon;
	
	oBalloon.y += oBalloon.strength.y;
	
	if(oBalloon.y  + 125 > this.oWrapper.clientHeight ){
		oBalloon.y = 0;
		oBalloon.obj.style.top = 0;
	}

	oBalloon.angle += oBalloon.strength.x;
	oBalloon.obj.style.top = oBalloon.y + "px";
	oBalloon.obj.style.left = oBalloon.x + oBalloon.amplifier * Math.sin(oBalloon.angle)+"px";
};
