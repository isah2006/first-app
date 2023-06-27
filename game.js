// Create a Phaser game instance
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-container', {
  preload: preload,
  create: create,
  update: update
});

// Preload game assets
function preload() {
  game.load.image('player', 'assets/player.png');
  game.load.image('enemy', 'assets/enemy.png');
}

// Create game objects
var player;
var enemies;

function create() {
  // Set up player
  player = game.add.sprite(400, 300, 'player');
  game.physics.arcade.enable(player);
  player.body.collideWorldBounds = true;

  // Set up enemies
  enemies = game.add.group();
  enemies.enableBody = true;
  createEnemies();
}

// Create a random number of enemies
function createEnemies() {
  var numEnemies = game.rnd.integerInRange(5, 10);
  for (var i = 0; i < numEnemies; i++) {
    var x = game.rnd.integerInRange(0, game.width);
    var y = game.rnd.integerInRange(0, game.height);
    var enemy = enemies.create(x, y, 'enemy');
  }
}

// Game update loop
function update() {
  // Player movement
  player.body.velocity.x = 0;
  player.body.velocity.y = 0;
  if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
    player.body.velocity.x = -150;
  } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
    player.body.velocity.x = 150;
  }
  if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
    player.body.velocity.y = -150;
  } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
    player.body.velocity.y = 150;
  }

  // Collision detection
  game.physics.arcade.overlap(player, enemies, gameOver, null, this);
}

// Game over function
function gameOver() {
  game.state.restart();
}
