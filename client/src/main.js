import gameState1 from './state1'
import gameState2 from './state2'

const gameConstructor = new Phaser.Game(1024, 628, Phaser.CANVAS)


gameConstructor.state.add('state1', gameState1.state1)
gameConstructor.state.add('state2', gameState2.state2)

gameConstructor.state.start('state1')

export default gameConstructor
