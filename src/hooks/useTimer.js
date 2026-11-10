import { useEffect, useState } from 'react'

export function useTimer(initialSeconds = 60) {
	const [timer, setTimer] = useState({ timeLeft: initialSeconds, isRunning: false })

	useEffect(() => {
		if (!timer.isRunning) return undefined

		const intervalId = setInterval(() => {
			setTimer((currentTimer) => {
				const timeLeft = Math.max(currentTimer.timeLeft - 1, 0)
				return { timeLeft, isRunning: timeLeft > 0 }
			})
		}, 1000)

		return () => clearInterval(intervalId)
	}, [timer.isRunning])

	const startTimer = () => {
		setTimer((currentTimer) => {
			const timeLeft = currentTimer.timeLeft === 0 ? initialSeconds : currentTimer.timeLeft
			return { timeLeft, isRunning: timeLeft > 0 }
		})
	}

	const endTimer = () => setTimer((currentTimer) => ({ ...currentTimer, isRunning: false }))
	const pauseTimer = endTimer
	const resumeTimer = () => {
		setTimer((currentTimer) => ({
			...currentTimer,
			isRunning: currentTimer.timeLeft > 0,
		}))
	}
	const resetTimer = () => {
		setTimer({ timeLeft: initialSeconds, isRunning: false })
	}

	return {
		timeLeft: timer.timeLeft,
		isRunning: timer.isRunning,
		isPaused: !timer.isRunning && timer.timeLeft > 0 && timer.timeLeft < initialSeconds,
		isFinished: timer.timeLeft === 0,
		startTimer,
		endTimer,
		pauseTimer,
		resumeTimer,
		resetTimer,
	}
}