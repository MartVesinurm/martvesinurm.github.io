
var bootState = {

	preload: function() {
			game.load.image('loadpic', 'assets/pictures/load.png');
	},

	create: function() {
			game.physics.startSystem(Phaser.Physics.ARCADE);
			game.state.start('load');
	}
}