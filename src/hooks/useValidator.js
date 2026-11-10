import { useState } from 'react'

export function useValidator(expectedAnswer) {
    const [result, setResult] = useState(null)

    const validateAnswer = (answer) => {
        const isCorrect =
            String(answer).trim() === String(expectedAnswer).trim()

        setResult(isCorrect ? 'correct' : 'incorrect')
        return isCorrect
    }

    const resetValidation = () => setResult(null)

    return {
        validateAnswer,
        isCorrect: result === 'correct',
        isIncorrect: result === 'incorrect',
        resetValidation,
    }
}