import { useState } from 'react'
import './styling/App.css'
import { GameScreen } from './components/GameScreen.jsx'
import MainMenu from './components/MainMenu.jsx'
import LeaderboardScreen from './components/LeaderboardScreen.jsx'
import useLeaderboard from './hooks/useLeaderboard.js'

function App() {
  // diagram: -currentScreen: string
  const [currentScreen, setCurrentScreen] = useState('menu')

  const { bestTimes } = useLeaderboard()

  // diagram: +handleStartRace(), +handleQuit(), plus a leaderboard handler
  const handleStartRace = () => setCurrentScreen('game')
  const handleViewLeaderboard = () => setCurrentScreen('leaderboard')
  const handleQuit = () => setCurrentScreen('menu')

  return (
    <div className="App">
      {currentScreen === 'menu' && (
        <MainMenu
          onStart={handleStartRace}
          onViewLeaderboard={handleViewLeaderboard}
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
        <>
          <button className="back-button" onClick={handleQuit}>
            ← Main Menu
          </button>
          <LeaderboardScreen bestTimes={bestTimes} />
        </>
      )}
    </div>
  )
}

export default App
