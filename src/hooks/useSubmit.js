import { useState } from 'react'

export function useSubmit() {
    const [userAnswer, setAnswer] = useState('')

    const handleSubmit = (e) => {
        setAnswer(e.target.value)
    }

    const clearAnswer = () => setAnswer('')


    return { userAnswer, handleSubmit, clearAnswer };
}