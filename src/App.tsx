import { useEffect, useState } from 'react'
import './App.css'
import { initialGameState, move, type ChosenCol } from './game/game'

function App() {
  const [game, setGame] = useState(initialGameState())
  const colClick = (col: ChosenCol) => {
    if (game.endState) return; // game is over, do nothing
    const audio = new Audio('/mixkit-video-game-retro-click-237.wav');
    audio.play();
    setGame(game => move(game, col))
  }
  const capitalizeString = (str: string): string => {
    return str[0].toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    if (game.endState) {
      const audio = new Audio('/mixkit-final-level-bonus-2061.wav');
      audio.play();
    }
  }, [game])

  return (
    <div className="app">
      <h1>Connect 4</h1>

      {!game.endState && <div style={{ margin: '1rem' }}>Player: {capitalizeString(game.currentPlayer)}'s turn</div>}
      {game.endState === 'yellow' || game.endState === 'red' ?
        <div style={{ margin: '1rem' }}>Winner: {capitalizeString(game.endState)} 🎉</div> :
        game.endState === 'draw' ?
          <div style={{ margin: '1rem' }}>Draw</div> : ''}

      <table>
        <tr className="row">
          {[0, 1, 2, 3, 4, 5, 6].map(
            (col) => <th style={{ margin: '1rem' }} className="cell"
              onClick={() => colClick(col as ChosenCol)}>
              {col}</th>
          )}
        </tr>
        {game.grid.map((row, rowIndex) => (
          <tr key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <td key={colIndex} style={{ margin: '1rem' }} className="cell">
                {cell === 'red' ? '🔴' : cell === 'yellow' ? '🟡' : ' '}
              </td>
            ))}
          </tr>
        )
        )}
      </table>

      <button onClick={() => setGame(initialGameState())} style={{ margin: '1rem' }}>Reset</button>
    </div>
  )

}
export default App
