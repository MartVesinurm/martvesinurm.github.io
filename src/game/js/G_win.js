var winState = {

	create: function() {
		
		level3music.mute = true;
		winmusic.mute = false;
		winmusic.loopFull();
		var winLabel = game.add.text(89, 89, 'YOU WON!',
									{font: '50px Arial', fill: '#00FF00'} );


		game.add.sprite(0, 0, 'winScreen');

		var startLabel = game.add.text(game.world.width/ 2 - 130, 10,
									   'klikkaa ruutua jatkaaksesi',
									   {font: '25px Arial', fill: '#ffffff'});

		game.input.onTap.add(this.restart, this);
	},

	restart: function() {
		winmusic.mute = true;
		game.state.start('menu');
	},
};