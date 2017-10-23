import gameState1 from './state1'
const gameConstructor = new Phaser.Game(1024, 628, Phaser.CANVAS)


gameConstructor.state.add('state1', gameState1.state1)
gameConstructor.state.start('state1')

export default gameConstructor