var canvas;
var ctx;
var highscore;
var count = 0;
var spirtex;
var spirtey;

window.onload = function () {

// Create the canvas
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
highscore = 0;
document.body.appendChild(canvas);
	

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "background.png";


// Fruit image
var fruitReady = false;
var fruitImage = new Image();
fruitImage.onload = function () {
	fruitReady = true;
};
fruitImage.src = "banana.png";
	
// Car image


// Game objects
var hero = new player(canvas.width / 2, canvas.height / 2, 120);
	
var car1 = new car(-75, 140, 120);
var car2 = new car(500, 75, 150);	
var car3 = new car(-75, 355, 90);	
var car4 = new car(500, 295, 170);
	
		//x=-75, 500      y = 75, 140, 295, 355

var fruit = {};
var score = 0;

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a fruit
var reset = function () {

	// Throw the fruit somewhere on the screen randomly
	if(highscore < score) highscore = score;
	fruit.x = 32 + (Math.random() * (canvas.width - 64));
	fruit.y = 32 + (Math.random() * (canvas.height - 64));
};

// Update game objects

var direction;
var update = function (modifier) {
	
	car1.x += car1.speed * modifier
	car2.x -= car2.speed * modifier
	car3.x += car3.speed * modifier
	car4.x -= car4.speed * modifier
		
	if (38 in keysDown) { // Player holding up
		hero.speed = 120;
		direction = 0
	}
	if (40 in keysDown) { // Player holding down
		hero.speed = 120;
		direction = 1
	}
	if (37 in keysDown) { // Player holding left
		hero.speed = 120;
		direction = 2
	}
	if (39 in keysDown) { // Player holding right
		hero.speed = 120;
		direction = 3
	}
	if(direction == 0) {
		hero.y -= hero.speed * modifier;
	}
	if(direction == 1) {
		hero.y += hero.speed * modifier;
	}
	if(direction == 2) {
		hero.x -= hero.speed * modifier;
	}
	if(direction == 3) {
		hero.x += hero.speed * modifier;
	}

	
	//Autojen ja apinan osuminen
	
	if(((hero.y +32 > car1.y && hero.y < car1.y + 43)&&(hero.x +32> car1.x && hero.x < car1.x + 77)
	   ||(hero.y +32> car2.y && hero.y < car2.y + 43)&&(hero.x +32> car2.x && hero.x < car2.x + 77)
	   ||(hero.y +32> car3.y && hero.y < car3.y + 43)&&(hero.x +32> car3.x && hero.x < car3.x + 77)
	   ||(hero.y +32> car4.y && hero.y < car4.y + 43)&&(hero.x +32> car4.x && hero.x < car4.x + 77)
	  )) {
		hero.x = canvas.width / 2;
		hero.y = canvas.height / 2;
		hero.speed = 0;
		score = 0;
		reset();
	}

	//apina löytää banaanin
	
	if (
		hero.x <= (fruit.x + 32)
		&& fruit.x <= (hero.x + 32)
		&& hero.y <= (fruit.y + 32)
		&& fruit.y <= (hero.y + 32)
	) {
		++score;
		reset();
	}
	
	//Apina menossa yli rajan 
	
		if(hero.x >= canvas.width - 30) {
			direction = 2;
		};
		if(hero.x <= 0) {
			direction = 3;
		};
		if(hero.y <= 0) {
			direction = 1;
		};
		if(hero.y >= canvas.height - 30) {
			direction = 0;
		};
	
	if(car1.x > 500) car1.x = -75
	if(car2.x < -75) car2.x = 500
	if(car3.x > 500) car3.x = -75
	if(car4.x < -75) car4.x = 500

};

var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		spritex = (count % 4) * 390;
		spritey = 0;
		if(hero.speed == 0) count = 1;
		
		else if(direction == 2) spritey = 2 *600;
		else if(direction == 0) spritey = 1 *600;
		else if(direction == 3) spritey = 3 *600;
		else if(direction == 4) spritey = 4 *600;
		
		ctx.drawImage(heroImage,spritex, spritey, 390, 600, hero.x, hero.y, 30, 34);// y38, 32x
		 count++
	}

	if (fruitReady) {
		ctx.drawImage(fruitImage, fruit.x, fruit.y);
	}
	if (carReady) {
		ctx.drawImage(carImage, car1.x, car1.y);
		ctx.drawImage(carImage1, car2.x, car2.y);
		ctx.drawImage(carImage, car3.x, car3.y);
		ctx.drawImage(carImage1, car4.x, car4.y);
	}
	
	
	//x=-75, 500      y = 75, 140, 295, 355

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Comic Sans";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Score: " + score, 32, 32);
	ctx.textAlign = "right";
	ctx.textBaseline = "top";
	ctx.fillText("Highscore: " + highscore, 480, 32);
};
//Alkusijoitus
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;
	hero.speed = 0;
	
document.getElementById('nappula1').onclick = function() {speedUpAll()};
document.getElementById('nappula2').onclick = function() {slowDownAll()};
	
function speedUpAll() {
	car1.speedUp(50);
	car2.speedUp(50);
	car3.speedUp(50);
	car4.speedUp(50);
}

function slowDownAll() {
	car1.speedUp(-50);
	car2.speedUp(-50);
	car3.speedUp(-50);
	car4.speedUp(-50);
}
	

var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	requestAnimationFrame(main);
};
	
	

	


var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now();
reset();
main();
}

