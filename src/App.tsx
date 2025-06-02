import { useState } from 'react'
// import './App.css'
import { initialGameState, move, type ChosenCol } from './game/game'

function App() {
  const [game, setGame] = useState(initialGameState())
  const colClick = (col: ChosenCol) => {
    if (game.endState) return; // game is over, do nothing
    setGame(game => move(game, col))
  }

  return (
    <>
      <h1>Connect 4</h1>
      {!game.endState && <div>Player: {game.currentPlayer}'s turn</div>}
      <div>Winner: {game.endState}</div>
      <div>{[0,1,2,3,4,5,6].map(
        (col)=><span style={{ margin: '1rem' }} 
        onClick={()=>colClick(col as ChosenCol)}>
          {col}</span>
        )}
      </div>
      {game.grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <span key={colIndex} style={{ margin: '1rem' }}>
              {cell || 'empty'}
            </span>
          ))}
        </div>
      )
      )}
      <button onClick={() => setGame(initialGameState())}>Reset</button>
  </>
  )

}
export default App
