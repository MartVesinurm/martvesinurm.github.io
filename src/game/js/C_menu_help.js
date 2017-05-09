var menuHelpState = {

	create: function() {

		menumusic.mute = true;
		
		game.add.sprite(0, 0, 'backgroundOhjeet');

		game.load.image(game.world.width / 2-95, 175, 'instructions' );

		buttonInstructions = game.add.button(20, 420, 'ui-cross', this.menu, this, 2, 1, 0);

	},

	menu: function() {
		game.state.start('menu');
	},

	
};