    var soundOn = true;
    var musicOn = true;
    var musicToggle;

var menuState = {

	create: function() {
		
		game.add.sprite(0, 0, 'backgroundMenu');

		//Adding audio for all states
		level1music = game.add.audio('level1');
		level2music = game.add.audio('level2');
		level3music = game.add.audio('level3');
		winmusic = game.add.audio('win');
		losemusic = game.add.audio('lose');
		hitmusic = game.add.audio('hit');
		menumusic = game.add.audio('level_menu');
		drinkmusic = game.add.audio('drink');
		markmusic = game.add.audio('mark');

		menumusic.loopFull();
			
		potholesRepaired = 0;	

	    //Adding the mute-button
	    this.musicToggle = this.game.add.button(this.game.world.width - 70, 420, 'soundOnOff', this.toggleMusic, this);
	    
	    //Changing the correct frame of the mute-buttons spritesheet.
	    if (this.game.sound.mute) {
	      this.musicToggle.frame = 1;
	    } else {
	      this.musicToggle.frame = 0;
	    }

		game.load.image(game.world.width / 2-95, 175, 'playGame' );
		game.load.image(game.world.width / 2-95, 250, 'instructions' );
		game.load.image(game.world.width / 2-95, 325, 'information' );

		buttonPlay = game.add.button(game.world.width / 2-95 , 175, 'playGame', this.start, this, 2, 1, 0);
		buttonInstructions = game.add.button(game.world.width / 2-95 , 250, 'instructions', this.help, this, 2, 1, 0);
		buttonInfo = game.add.button(game.world.width / 2-95 , 325, 'information', this.info, this, 2, 1, 0);

	},
  
	toggleMusic: function() {	
	        	if (this.game.sound.mute) {
	        		this.game.sound.mute = false;
	        		this.musicToggle.frame = 0;
	        	} else {
	        		this.game.sound.mute = true;
	        		this.musicToggle.frame = 1;
	        	}
	},

	start: function() {
		game.state.start('level1');
	},

	help: function() {
		game.state.start('menuHelp');
	},

	info: function()  {
		game.state.start('menuCredits');
	},
	
};    var soundOn = true;
    var musicOn = true;
    var musicToggle;

var menuState = {

	create: function() {
		
		game.add.sprite(0, 0, 'backgroundMenu');

		level1music = game.add.audio('level1');
		level2music = game.add.audio('level2');
		level3music = game.add.audio('level3');
		winmusic = game.add.audio('win');
		losemusic = game.add.audio('lose');
		hitmusic = game.add.audio('hit');
		menumusic = game.add.audio('level_menu');
		drinkmusic = game.add.audio('drink');
		markmusic = game.add.audio('mark');
	
		menumusic.loopFull();
		
		potholesRepaired = 0;

    //Adding the mute-button
    this.musicToggle = this.game.add.button(this.game.world.width - 70, 420, 'soundOnOff', this.toggleMusic, this);
    
    //Changing the correct frame of the mute-buttons spritesheet.
    if (this.game.sound.mute) {
      this.musicToggle.frame = 1;
    } else {
      this.musicToggle.frame = 0;
    }

	game.load.image(game.world.width / 2-95, 175, 'playGame' );
	game.load.image(game.world.width / 2-95, 250, 'instructions' );
	game.load.image(game.world.width / 2-95, 325, 'information' );

	buttonPlay = game.add.button(game.world.width / 2-95 , 175, 'playGame', this.start, this, 2, 1, 0);
	buttonInstructions = game.add.button(game.world.width / 2-95 , 250, 'instructions', this.help, this, 2, 1, 0);
	buttonInfo = game.add.button(game.world.width / 2-95 , 325, 'information', this.info, this, 2, 1, 0);

	},
  
	toggleMusic: function() {	
	        	if (this.game.sound.mute) {
	        		this.game.sound.mute = false;
	        		this.musicToggle.frame = 0;
	        	} else {
	        		this.game.sound.mute = true;
	        		this.musicToggle.frame = 1;
	        	}
	},

	start: function() {
		game.state.start('level1');
	},

	help: function() {
		game.state.start('menuHelp');
	},

	info: function()  {
		game.state.start('menuCredits');
	},
	
};