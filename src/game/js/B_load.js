
var loadState = {


	preload: function() {


		this.logo = this.add.image
		this.add.sprite(0, 0, 'loadpic');

		var loadingLabel = game.add.text(game.world.width / 2 - 150, 430, 'Peliä ladataan...',
											{font: '30px Courier', fill: '#ffffff'});

		//Load game levels
		game.load.image('background1', 'assets/pictures/background1.png');
		game.load.image('background2', 'assets/pictures/background2.png');
		game.load.image('background3', 'assets/pictures/background3.png');


		//Load menu items
		game.load.image('backgroundMenu', 'assets/pictures/menu/menu.png');
		game.load.image('instructions', 'assets/pictures/menu/OHJEET.png');
		game.load.image('playGame', 'assets/pictures/menu/PELAA.png');
		game.load.image('information', 'assets/pictures/menu/TIETOA.png');
		game.load.image('more', 'assets/pictures/menu/more.png')

		game.load.image('backgroundOhjeet', 'assets/pictures/menu/menu_ohjeet.png');
		game.load.image('backgroundTietoa', 'assets/pictures/menu/menu_credits.png');
		game.load.image('pauseMenu', 'assets/pictures/menu/pauseMenu.png')

		//Load lose and win screens
		game.load.image('winScreen', 'assets/pictures/win.png');
		game.load.image('loseScreen', 'assets/pictures/lose.png');

		//Load UI sprites
		game.load.spritesheet('soundOnOff','assets/pictures/UI-sprites/soundOnOff.png', 48, 48, 2, 5, 10);
		game.load.image('ui-pause', 'assets/pictures/UI-sprites/flatDark13.png');
		game.load.image('ui-play', 'assets/pictures/UI-sprites/flatDark15.png');
		game.load.image('ui-settings', 'assets/pictures/UI-sprites/flatDark21.png');
		game.load.image('ui-check', 'assets/pictures/UI-sprites/flatDark22.png');
		game.load.image('ui-menu', 'assets/pictures/UI-sprites/flatDark32.png');
		game.load.image('ui-cross', 'assets/pictures/UI-sprites/flatDark34.png');
		
		
		//Load powerups
	    game.load.image('energyDrink', 'assets/pictures/möfö.png');
		game.load.image('SpeedSign', 'assets/pictures/nopeusmerkki.png');

		//Load potholes and create game character sprite
		game.load.image('pothole', 'assets/pictures/pothole.png');
		game.load.spritesheet('dude', 'assets/pictures/character.png', 32, 32);

		//Load different vehicles
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
		
		game.load.audio('car_pass', 'assets/audio/car_pass.wav');
		game.load.audio('car_whoor', 'assets/audio/car_whoor.wav');
		game.load.audio('fail', 'assets/audio/fail.wav');
		game.load.audio('hit', 'assets/audio/hit.wav');
		game.load.audio('level_menu', 'assets/audio/level_menu_.mp3');
		game.load.audio('level1', 'assets/audio/level1.mp3');
		game.load.audio('level2', 'assets/audio/level2.mp3');
		game.load.audio('level3', 'assets/audio/level3.mp3');
		game.load.audio('lose', 'assets/audio/lose.wav');
		game.load.audio('menu', 'assets/audio/menu.mp3');
		game.load.audio('win', 'assets/audio/win.wav');
		game.load.audio('drink', 'assets/audio/drink.wav');
		game.load.audio('mark', 'assets/audio/mark.wav');

		
	},

	create: function() {
		game.state.start('menu')
	}
};


