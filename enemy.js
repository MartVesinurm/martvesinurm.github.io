

function car(x, y, speed) {
	this.x = x;
	this.y = y;
	this.speed = speed;
	this.speedUp = function(amount) {
		this.speed += amount;
	}
};

function draw(ctx, x, y, speed) {
	ctx.drawImage(x, y, getImage(speed));
}

function getImage(speed) {
	if(speed < 0) carImage1;
	else carImage;
}	

	var carReady = false;
	var car1Ready = false;

	var carImage1 = new Image();
	var carImage = new Image();

	carImage.onload = function () {
		car1Ready = true;
		carReady = true;
	};
	carImage.src = "car.png";
	carImage1.src = "carx.png";
