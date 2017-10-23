import game from '../main'

const gameState = {}
gameState.state1 = function(){

};

gameState.state1.prototype = {
  preload: function(){
  },
  create: function(){
    game.stage.backgroundColor = '#83aff7'
  },
  update: function(){}
}


export default gameState