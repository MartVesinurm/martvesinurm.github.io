var loseState = {

	create: function() {
		level1music.mute = true;
		level2music.mute = true;
		level3music.mute = true;
		winmusic.mute = true;
		
		losemusic = game.add.audio('lose');
		losemusic.play();
		
		var winLabel = game.add.text(89, 89, 'YOU LOST!',
									{font: '50px Arial', fill: '#00FF00'} );


		game.add.sprite(0, 0, 'loseScreen');

		var startLabel = game.add.text(game.world.width/ 2 - 120, 10,
									   'klikkaa ruutua jatkaaksesi',
									   {font: '25px Arial', fill: '#ffffff'});

		game.input.onTap.add(this.restart, this);
	},

	restart: function() {
		game.state.start('menu');
	},
};