import { useState } from 'react'

export function useTyping(prompt) {
    const [inputValue, setInputValue] = useState('')
    
    const handleInputChange = (e) => {setInputValue(e.target.value)}

    let correct = 0;
    while(correct < inputValue.length && correct < prompt.length && inputValue[correct] === prompt[correct]) {
        correct++;
    }
    return { inputValue, handleInputChange, correct };
}