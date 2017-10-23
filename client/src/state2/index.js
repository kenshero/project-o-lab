import game from '../main'

var socket = io.connect('localhost:3000');
let player, speed = 4;

socket.on('connect', function(data) {
  // socket.emit('join', 'Hello World from client');
});

socket.on('walk_right', function(data) {
  console.log(data);
  player.x += speed
  player.animations.play('walk_right', 14, true)
});

const gameState = {}
gameState.state2 = function(){

};

gameState.state2.prototype = {
  preload: function(){
    game.load.spritesheet('player', 'assets/images/arshes13.png', 55, 55, 16)
  },
  create: function(){
    game.stage.backgroundColor = '#83aff7'
    player = game.add.sprite(game.world.centerX, game.world.centerY, 'player')
    player.animations.add('walk_down', [0, 1, 2, 3])
    player.animations.add('walk_up', [12, 13, 14, 15])
    player.animations.add('walk_left', [4, 5, 6, 7])
    player.animations.add('walk_right', [8, 9, 10, 11])
  },
  update: function(){
    if(game.input.keyboard.isDown(Phaser.Keyboard.D)) {
      socket.emit('walk_right', 'walk_right');
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.A)) {
      player.x -= speed
      player.animations.play('walk_left', 14, true)
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.W)) {
      player.y -= speed
      player.animations.play('walk_up', 14, true)
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.S)) {
      player.y += speed
      player.animations.play('walk_down', 14, true)
    }
    else {
      player.animations.stop('walk_right')
      player.animations.stop('walk_left')
      player.animations.stop('walk_up')
      player.animations.stop('walk_down')
      player.frame = 0
    }
  }
}


export default gameState