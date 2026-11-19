import { InputBox } from './InputBox.jsx'
import '../styling/GameScreen.css'
import { PromptDisplay } from './PromptDisplay.jsx'
import { useTyping } from '../hooks/useTyping.js'
import { useRace } from '../hooks/useRace.js'
import { useTimer } from '../hooks/useTimer.js'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Prompt } from '../classes/Prompt.js'
import { AnswerBox } from './AnswerBox.jsx';
import { useSubmit } from '../hooks/useSubmit.js';
import { ProgressBar } from './ProgressBar.jsx';
import { PauseModal } from './PauseModal.jsx'

export function GameScreen({ onQuit, onViewLeaderboard }) {
    const prompt = new Prompt("Joe has 5 apples. Joe eats 2 apples. How many apples does Joe have left?", "3", "Math", false);
    const typing = useTyping(prompt)
    const race = useRace()
    const timer = useTimer()
    const { userAnswer, handleSubmit, clearAnswer } = useSubmit()

    const { status, score, startRace, pauseRace, resumeRace, endRace, resetRace, incrementCharacterCount, incrementTypoCount } = race
    const {elapsedSeconds, startTimer, pauseTimer, resumeTimer, endTimer, resetTimer} = timer

    const handleStart = () => {
        typing.resetTyping()
        clearAnswer()
        startRace()
        resetTimer()
        startTimer()
    }

    const handlePause = () => {
        pauseRace()
        pauseTimer()
    }

    const handleResume = () => {
        resumeRace()
        resumeTimer()
    }

    const handleQuit = () => {
        handleReset()
        onQuit()
    }

    const handleReset = () => {
        typing.resetTyping()
        clearAnswer()
        resetRace()
        resetTimer()
    }

    
    const handleChange = (event) => {
        if (status !== 'running' || typing.isComplete) return

        const nextValue = event.target.value
        const previousValue = typing.inputValue
        const isAdding = nextValue.length > previousValue.length

        // useTyping accepts one incorrect character, then blocks additions.
        const isNewTypo = isAdding && !typing.isIncorrect && !prompt.text.startsWith(nextValue)

        if (isNewTypo) {
            incrementTypoCount()
        }

        typing.handleInputChange(event)
    }
    
    const handleCorrectAnswer = () => {
        if (status !== 'running' || !typing.isComplete) return

        incrementCharacterCount(prompt.text.length)
        endRace()
        endTimer()
    }

    const handleViewLeaderboard = () => {
        handleReset()
        onViewLeaderboard()
    }
    
    return (
        <div className="game-screen">
            <h1 className="game-title">Qw3rty</h1>

            <ProgressBar
                progress={typing.correct}
                total={prompt.text.length}
            />

            <p className="time-left">
                Time elapsed: <span className="time-left-value">{elapsedSeconds}s</span>
            </p>

            <PromptDisplay
                prompt={prompt.text}
                correct={typing.correct}
                incorrect={typing.incorrect}
                isIncorrect={typing.isIncorrect}
            />

            <InputBox
                onChange={handleChange}
                value={typing.inputValue}
                disabled={
                    status !== 'running' ||
                    typing.isComplete
                }
            />

            {status === 'running' && (
                <AnswerBox
                    isComplete={typing.isComplete}
                    userAnswer={userAnswer}
                    answer={prompt.correctAnswer}
                    onChange={handleSubmit}
                    onClear={clearAnswer}
                    onCorrect={handleCorrectAnswer}
                />
            )}

            

            {/* Status buttons */}
            {status === 'idle' && (<button onClick={handleStart}>Start Race</button>)}
            {status === 'running' && (<button onClick={handlePause}>Pause</button>)}
            {status === 'paused' && (
                <PauseModal onResume={handleResume}
                onRestart={handleReset}
                onQuit={handleQuit} 
                />
            )}

            {status === 'finished' && (
                <div className="results">
                    <h2>Results!</h2>
                    <p>Score: {score}</p>
                    <p>Typos: {race.typoCount}</p>
                    <button onClick={handleReset}>Play Again</button>
                    <button onClick={handleViewLeaderboard}>View Leaderboard</button>
                    <button onClick={handleQuit}>Quit</button>
                </div>
            )}

            <ToastContainer position="top-center" autoClose={3000} />
        </div>
    )
}