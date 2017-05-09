var menuCreditsState = {

	create: function() {
		
		menumusic.mute = true;

		game.add.sprite(0, 0, 'backgroundTietoa');

		game.load.image(game.world.width / 2-95, 175, 'information' );
		// game.load.image(game.world.width / 2-95, 175, 'more');

		buttonInstructions = game.add.button(20, 420, 'ui-cross', this.menu, this, 2, 1, 0);
		buttonInstructions = game.add.button(game.world.width / 2-101, 380, 'more', this.link, this, 2, 1, 0);

	},

	menu: function() {
		game.state.start('menu');
	},

	link: function() {
		window.open("http://www.lvm.fi", "_blank");
	}

	
}