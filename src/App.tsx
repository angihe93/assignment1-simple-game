import { useState } from 'react'
// import './App.css'
import { initialGameState, move, type CellPosition } from './game/game'

function App() {
  const [game, setGame] = useState(initialGameState())
  const cellClick = (position: CellPosition) => {
    if (game.endState) return; // game is over, do nothing
    setGame(game => move(game, position))
  }

  return (
    <>
      <h1>Connect 4</h1>
      <div>Player: {game.currentPlayer}</div>
      {game.grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <span key={colIndex} style={{ margin: '1rem' }} onClick={() => cellClick([rowIndex, colIndex])}>
              {cell || 'empty'}
            </span>
          ))}
        </div>
      )
      )}
  </>
  )

}
export default App
