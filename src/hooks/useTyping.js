import { useState, useEffect } from 'react'
import { toast } from "react-toastify";


export function useTyping(prompt) {
    const [inputValue, setInputValue] = useState('')
    const [isIncorrect, setIsIncorrect] = useState(false);
    const [incorrect, setIncorrect] = useState(0); // index of the first incorrect character

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        
        // always allow deleting
        if (newValue.length < inputValue.length) {
            setIsIncorrect(false);
            setInputValue(newValue);
            return;
        }

        // reject anything that isn't a correct prefix of the prompt
        if (!prompt.startsWith(newValue) && isIncorrect === false) {
            setInputValue(newValue); // allow user to type one incorrect character, then flag incorrect
            setIncorrect(newValue.length - 1); // index of the first incorrect character
            setIsIncorrect(true);
            return; // state unchanged, so the input snaps back
        }

        if(!isIncorrect){
            setIsIncorrect(false);
            setInputValue(newValue);
        }
        
    }

    useEffect(() => {
        if (isIncorrect) {
            console.log("Incorrect input detected. Displaying toast notification.");
            toast.error("Incorrect input! Please try again.", {
                position: "top-center",
                autoClose: 3000,
            });
        }
    }, [isIncorrect]);

    // checks how many characters are correct
    let correct = 0;
    while(correct < inputValue.length && correct < prompt.length && inputValue[correct] === prompt[correct]) {
        correct++;
    }
    return { inputValue, handleInputChange, correct, incorrect, isIncorrect };
}