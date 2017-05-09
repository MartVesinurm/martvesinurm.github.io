
var game = new Phaser.Game(720, 480, Phaser.AUTO, '', { preload: preload, create: create, update: update });


function preload() {
	game.load.image('background1', 'assets/pictures/background1.png');
	game.load.image('background2', 'assets/pictures/background2.png');
	game.load.image('background3', 'assets/pictures/background3.png');
	
    game.load.image('energyDrink', 'assets/pictures/möfö.png');
	game.load.image('SpeedSign', 'assets/pictures/nopeusmerkki.png');

	game.load.image('pothole', 'assets/pictures/pothole.png');
	
    game.load.image('car11', 'assets/pictures/cars/car1_1.png');
    game.load.image('car12', 'assets/pictures/cars/car1_2.png');

    game.load.image('car21', 'assets/pictures/cars/car2_1.png');
    game.load.image('car22', 'assets/pictures/cars/car2_2.png');

    game.load.image('car31', 'assets/pictures/cars/car3_1.png');
    game.load.image('car32', 'assets/pictures/cars/car3_2.png');

    game.load.image('car41', 'assets/pictures/cars/car4_1.png');
    game.load.image('car42', 'assets/pictures/cars/car4_2.png');
	
	game.load.image('car51', 'assets/pictures/cars/car5_1.png');
    game.load.image('car52', 'assets/pictures/cars/car5_2.png');

    game.load.image('car61', 'assets/pictures/cars/car6_1.png');
    game.load.image('car62', 'assets/pictures/cars/car6_2.png');

    game.load.image('car71', 'assets/pictures/cars/car7_1.png');
    game.load.image('car72', 'assets/pictures/cars/car7_2.png');

    game.load.image('car81', 'assets/pictures/cars/car8_1.png');
    game.load.image('car82', 'assets/pictures/cars/car8_2.png');
	
	game.load.image('menubg', 'assets/pictures/menu/menu.png');
	game.load.image('ohjeet', 'assets/pictures/menu/OHJEET.png');
	game.load.image('pelaa', 'assets/pictures/menu/PELAA.png');
	game.load.image('tietoa', 'assets/pictures/menu/TIETOA.png');
	
	
    game.load.spritesheet('dude', 'assets/pictures/character.png', 32, 32);
}

var cars;
var potholes;
var marks;
var drinks;
var player;
var playerSpeed = 150;
var carSpeedRight = 40;
var carSpeedLeft = -40;
var potholesRepaired = 0;
var timeInterval = 3500;



function create() {	
	
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	game.add.sprite(0, 0, 'background1');
	cars = game.add.group();
	potholes = game.add.group();
	cars.enableBody = true;
	
	player = game.add.sprite(game.world.width / 2, game.world.height / 2, 'dude');
	game.physics.arcade.enable(player);
	player.body.collideWorldBounds = true;
	
	player.animations.add('up', [104, 105, 106, 107, 108, 109, 110, 111, 112], 10, true);
    player.animations.add('right', [143, 144, 145, 146, 147, 148, 149, 150, 151], 10, true);
	player.animations.add('left', [117, 118, 119, 120, 121, 122, 123, 124, 125], 10, true);
	player.animations.add('down', [130, 131, 132, 133, 134, 135, 136, 137, 138], 10, true);

	drinks = game.add.group();
	marks = game.add.group();

	marks.enableBody = true;
	drinks.enableBody = true;

	text = game.add.text(665, 24, "Score: 0", {
        font: "24px Arial",
        fill: "#ffffff",
        align: "left"
    });

    text.anchor.setTo(0.5, 0.5);

    timer = game.time.events.loop(timeInterval, addCars, this); 
    potholeTimer = game.time.events.loop(5000, addPotholes, this); 
    powerupTimer = game.time.events.loop(8000, addPowerups, this);
	
	drawMenu()

}
	
	function addOneCar(x, y, sprite, carDir) {
	    // Create a pipe at the position x and y
	    var carToAdd = game.add.sprite(x, y, sprite);

	    // Add the pipe to our previously created group
	    cars.add(carToAdd);

	    // Enable physics on the pipe 
	    game.physics.arcade.enable(carToAdd);

	    // Add velocity to the pipe to make it move left
	    if(carDir === 1 || carDir === 2){
	    	carToAdd.body.velocity.x = carSpeedRight;
		}else{
			carToAdd.body.velocity.x = carSpeedLeft;
		}


	    // Automatically kill the pipe when it's no longer visible 
	    carToAdd.checkWorldBounds = true;
	    carToAdd.outOfBoundsKill = true;
	}

	function addCars() {
	    // Randomly pick a number between 1 and 4
	    // This will be the direction car enters
	    var dir = Math.floor(Math.random() * 4) + 1;

	    // Add the car
	    // addOneCar(0, 159)

	    if(dir == 1){
			addOneCar(0, 161, 'car11', dir)
		}else if(dir == 2){
			addOneCar(0, 290, 'car11', dir)
		}else if(dir == 3){
			addOneCar(720, 130, 'car12', dir)
		}else{
			addOneCar(720, 322, 'car12', dir)
		}

	     
	}


	function addPothole(x, y) {
	    // Create a pothole at the position x and y
	    var potholeToAdd = game.add.sprite(x, y, 'pothole');

	    // Add the pothole to our previously created group
	    potholes.add(potholeToAdd);

	    // Enable physics on the pothole
	    game.physics.arcade.enable(potholeToAdd);

	}

	function addPotholes() {
	    // Randomly pick a number between 1 and 2
	    // This will select upper or lower road
	    var upOrDown = game.rnd.integerInRange(0,1);

	    if(upOrDown >= 0.5){
	    	addPothole(game.rnd.integerInRange(10,690), game.rnd.integerInRange(130,170) )
	    }else{
	    	addPothole(game.rnd.integerInRange(10,690), game.rnd.integerInRange(290,300) )
	    }
	     
	}

	function addPowerup(x,y,type){
		if(type == 'SpeedSign'){
			if(marks.length < 2) {
			var mark = game.add.sprite(x, y, 'SpeedSign');
			marks.add(mark);
			}
		}else if(type == 'energyDrink'){
			if(drinks.length < 2) {
			var drink = game.add.sprite(x, y, 'energyDrink')
			drinks.add(drink);
			}
		}

	}

	function addPowerups(){
		var choose = game.rnd.integerInRange(0,1);

		if(choose >= 0.5){
	    	addPowerup(game.rnd.integerInRange(10,690), game.rnd.integerInRange(10,460), 'SpeedSign' )
	    }else{
	    	addPowerup(game.rnd.integerInRange(10,690), game.rnd.integerInRange(10,460), 'energyDrink');

		};
	};


	function direction(){
		return Math.floor(Math.random() * 4) + 1;
	};

	function randSpeed(){
		return Math.floor(Math.random() * 30) + 30
	}

	function checkPos(car) {
		if(car.x > 760){
			car.x = -32
		}else if(car.x < -40){
			car.x = 752
		}
	}


function update() {
	
	var cursors = game.input.keyboard.createCursorKeys();
	
	player.body.velocity.x = 0;
	player.body.velocity.y = 0;

	cars.forEach(checkPos, this);
	
	if (cursors.left.isDown)
    {
        player.body.velocity.x = -playerSpeed;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = playerSpeed;

        player.animations.play('right');
    }
	 else if (cursors.up.isDown)
    {
        player.body.velocity.y = -playerSpeed;

        player.animations.play('up');
    }
	 else if (cursors.down.isDown)
    {
        player.body.velocity.y = playerSpeed;

        player.animations.play('down');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 26;
    }


    game.world.bringToTop(cars);
    updateText();
	
	game.physics.arcade.overlap(player, drinks, energyBoost, null, this);
	game.physics.arcade.overlap(player, marks, speedAlert, null, this);
	game.physics.arcade.overlap(player, cars, die, null, this);
	game.physics.arcade.overlap(player, potholes, updateScore, null, this)
	game.physics.arcade.collide(cars, cars)
	game.physics.arcade.overlap(cars, potholes, reduceScore, null, this)


}

function die(player, car) {
	player.frame = 278;
	player.body.velocity.x = 150;
	player.body.x = game.world.width / 2;
	player.body.y = game.world.height / 2;
	potholesRepaired = 0;
	cars.forEach(function(item) {
		item.kill();
	});
	marks.forEach(function(item) {
		item.kill();
	});
	drinks.forEach(function(item) {
		item.kill();
	});
	potholes.forEach(function(item) {
		item.kill();
	});
};

function energyBoost(player, drink) {
	drink.kill()
	if(playerSpeed == 150) {
	playerSpeed = playerSpeed * 2;

	this.time.events.add(2000, function() {
		playerSpeed = playerSpeed * 0.5;
	});
	}
}

function speedAlert(player, mark) {
	mark.kill()
	cars.forEach(function(item) {
		if(item.body.velocity.x < 0){
			item.body.velocity.x = carSpeedLeft / 2
		}else{
			item.body.velocity.x = carSpeedRight / 2
		}
	})

	this.time.events.add(2000, function() {
		cars.forEach(function(item) {
			if(item.body.velocity.x < 0){
				item.body.velocity.x = carSpeedLeft;
			}else{
				item.body.velocity.x = carSpeedRight;
			};
		});
	});
}


function reduceScore(car, pothole) {
	potholesRepaired -= 0.5
}
function updateScore(player, pothole){
	pothole.kill()
	potholesRepaired += 50
}


function updateText() {

    text.setText("Score: " + Math.floor(potholesRepaired));

}


//Testi funktio
function dieAll() {
	cars.forEach(function(item) {
		item.kill();
	});
}

var buttons;
buttons = game.add.group();

function drawMenu() {
	game.add.sprite(0,0, 'menubg')
	buttons = game.add.button(game.world.centerX - 95, 150, 'pelaa', dieAll, this, 2, 1, 0);
	buttons = game.add.button(game.world.centerX - 95, 250, 'ohjeet', die, this, 2, 1, 0);
	buttons = game.add.button(game.world.centerX - 95, 350, 'tietoa', die, this, 2, 1, 0);
}
