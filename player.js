
function player(x, y, speed) {
	this.speed = speed;
	this.speedUp = function(amount) {
		this.speed += amount;
	}
}


function carCollision(heroX, heroY, carX, carY) {
	if((HeroY+32 > carY && heroY < carY + 43)&&(heroX +32> carX && heroX < carX + 77)
	  ) {
		true;
	}
	else false;
}

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
	draw()
};
heroImage.src = "hero.png";
