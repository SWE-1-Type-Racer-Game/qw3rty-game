import { useState } from 'react'

const createInitialRace = () => ({
	status: 'idle',
	correctCharacters: 0,
	typoCount: 0,
	elapsedSeconds: 0,
	score: 0,
	startedAt: null,
})

export function useRace() {
	const [race, setRace] = useState(createInitialRace)

	const calculateScore = (correctCharacters, typoCount, elapsedSeconds, answerBonus = 0) => {
		if (elapsedSeconds <= 0) return answerBonus

		const totalCharacters = correctCharacters + typoCount
		const accuracy = totalCharacters === 0 ? 0 : correctCharacters / totalCharacters

		return Math.round((correctCharacters / elapsedSeconds) * 60 * accuracy + answerBonus)
	}

	const startRace = () => {
		setRace({ ...createInitialRace(), status: 'running', startedAt: Date.now() })
	}

	const pauseRace = () => {
		setRace((currentRace) => {
			if (currentRace.status !== 'running') return currentRace

			return {
				...currentRace,
				status: 'paused',
				elapsedSeconds: currentRace.elapsedSeconds + (Date.now() - currentRace.startedAt) / 1000,
				startedAt: null,
			}
		})
	}

	const resumeRace = () => {
		setRace((currentRace) => {
			if (currentRace.status !== 'paused') return currentRace

			return { ...currentRace, status: 'running', startedAt: Date.now() }
		})
	}

	const endRace = (answerBonus = 0) => {
		setRace((currentRace) => {
			if (currentRace.status !== 'running' && currentRace.status !== 'paused') return currentRace

			const elapsedSeconds = currentRace.elapsedSeconds + (
				currentRace.status === 'running'
					? (Date.now() - currentRace.startedAt) / 1000
					: 0
			)

			return {
				...currentRace,
				status: 'finished',
				elapsedSeconds,
				score: calculateScore(
					currentRace.correctCharacters,
					currentRace.typoCount,
					elapsedSeconds,
					answerBonus,
				),
				startedAt: null,
			}
		})
	}

	const resetRace = () => setRace(createInitialRace())

	const incrementCharacterCount = (amount = 1) => {
		setRace((currentRace) => currentRace.status === 'running'
			? { ...currentRace, correctCharacters: currentRace.correctCharacters + amount }
			: currentRace)
	}

	const incrementTypoCount = (amount = 1) => {
		setRace((currentRace) => currentRace.status === 'running'
			? { ...currentRace, typoCount: currentRace.typoCount + amount }
			: currentRace)
	}

	return {
		...race,
		startRace,
		endRace,
		pauseRace,
		resumeRace,
		resetRace,
		incrementCharacterCount,
		incrementTypoCount,
		calculateScore: (answerBonus = 0) => calculateScore(
			race.correctCharacters,
			race.typoCount,
			race.elapsedSeconds + (
				race.status === 'running' ? (Date.now() - race.startedAt) / 1000 : 0
			),
			answerBonus,
		),
	}
}