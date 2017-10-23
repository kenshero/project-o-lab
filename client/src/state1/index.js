import game from '../main'

const gameState = {}
gameState.state1 = function(){

};

gameState.state1.prototype = {
  preload: function(){
    game.load.image('startButton', 'assets/images/playgame.png')
  },
  create: function(){
    game.stage.backgroundColor = '#83aff7'
    const startBtn = game.add.button(game.world.centerX, game.world.centerY, 'startButton')
    startBtn.anchor.setTo(0.5)
    startBtn.onInputDown.add(this.startGame)
  },
  update: function(){},
  startGame: function(){
    console.log("Start !");
    game.state.start('state2')
  }
}

export default gameState