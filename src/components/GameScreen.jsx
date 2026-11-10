import { InputBox } from './InputBox.jsx'
import '../styling/GameScreen.css'
import { useEffect } from 'react'
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


export function GameScreen() {
    const prompt = new Prompt("test", "5", "Math", false);
    const typing = useTyping(prompt)
    const race = useRace()
    const timer = useTimer(60)
    const { userAnswer, handleSubmit, clearAnswer } = useSubmit()

    const { status, score, startRace, pauseRace, resumeRace, endRace, resetRace, incrementCharacterCount, incrementTypoCount } = race
    const { timeLeft, isFinished, startTimer, pauseTimer, resumeTimer, endTimer, resetTimer } = timer

    // Finish the race when the countdown reaches zero.
    useEffect(() => {
        if (isFinished && status === 'running') {
            // Credit the correct text remaining when time expires.
            incrementCharacterCount(typing.correct)
            endRace()
        }
    }, [isFinished, status, typing.correct, incrementCharacterCount, endRace])

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

    const handleReset = () => {
        typing.resetTyping()
        clearAnswer()
        resetRace()
        resetTimer()
    }

    const handleChange = (event) => {
        if (status !== 'running' || isFinished || typing.isComplete) return

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
        if (status !== 'running' || isFinished) return

        incrementCharacterCount(prompt.text.length)
        endRace()
        endTimer()
    }
    
    return (
        <div className="game-screen">
            <ProgressBar
                progress={typing.correct}
                total={prompt.text.length}
            />

            <h1 className="game-title">Qw3rty</h1>

            <p>Time left: {timeLeft}s</p>

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
                    isFinished ||
                    typing.isComplete
                }
            />

            {status === 'running' && !isFinished && (
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
            {status === 'paused' && (<button onClick={handleResume}>Resume</button>)}

            {status === 'finished' && (
                <div>
                    <h2>Results!</h2>
                    <p>Score: {score}</p>
                    <p>Typos: {race.typoCount}</p>
                    <button onClick={handleReset}>Play Again</button>
                </div>
            )}

            <ToastContainer position="top-center" autoClose={3000} />
        </div>
    )
}