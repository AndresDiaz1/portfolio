import React from 'react'
import Phaser from 'phaser'
import MainScene from '../game/MainScene'

type AppProps = {}
type AppState = {}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    const game = new Phaser.Game({
      parent: 'game-root',
      type: Phaser.AUTO,
      width: 300,
      height: 500,
      scene: [MainScene]
    })
  }

  render() {
    return <>
      <div id="game-root"></div>
      This is React
    </>
  }
}

export default App