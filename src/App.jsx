import { useState } from 'react'
import './styling/App.css'
import { GameScreen } from './components/GameScreen.jsx'
import MainMenu from './components/MainMenu.jsx'

function App() {
  // diagram: -currentScreen: string
  const [currentScreen, setCurrentScreen] = useState('menu')

  // diagram: +handleStartRace(), +handleQuit(), plus a leaderboard handler
  const handleStartRace = () => setCurrentScreen('game')
  const handleViewHighScores = () => setCurrentScreen('leaderboard')
  const handleQuit = () => setCurrentScreen('menu')

  return (
    <div className="App">
      {currentScreen === 'menu' && (
        <MainMenu
          onStart={handleStartRace}
          onViewHighScores={handleViewHighScores}
        />
      )}

      {currentScreen === 'game' && (
        <>
          <button className="back-button" onClick={handleQuit}>
            ← Main Menu
          </button>
          <GameScreen />
        </>
      )}

      {currentScreen === 'leaderboard' && (
        <div>
          <h2>High Scores (coming soon)</h2>
          <button onClick={handleQuit}>Back to Menu</button>
        </div>
      )}
    </div>
  )
}

export default App
