import { useEffect, useState } from 'react'

export function useTimer() {
    const [elapsedSeconds, setElapsedSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

	useEffect(() => {
		if (!isRunning) return

		const intervalId = setInterval(() => {
			setElapsedSeconds((prev) => prev + 1)
		}, 1000)

		return () => clearInterval(intervalId)
	}, [isRunning])

	const startTimer = () => setIsRunning(true)
	const endTimer = () => setIsRunning(false)
	const pauseTimer = () => setIsRunning(false)
	const resumeTimer = () => setIsRunning(true)

	const resetTimer = () => {
		setElapsedSeconds(0)
	 	setIsRunning(false)
	}

	return {
		elapsedSeconds,
		isRunning,
		startTimer,
		endTimer,
		pauseTimer,
		resumeTimer,
		resetTimer,
	}
}