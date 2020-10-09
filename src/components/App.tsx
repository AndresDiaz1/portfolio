import React from 'react'
import Phaser from 'phaser'
import MainScene from '../game/MainScene'


const App: React.FC = () => {
    const game = new Phaser.Game({
      parent: 'game-root',
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
      },
      scene: [MainScene]
    });

    return (
    <>
      <div id="game-root"></div>
      This is React
    </>
    )
}

export default App