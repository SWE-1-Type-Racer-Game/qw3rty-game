import { InputBox } from './InputBox.jsx'
import '../styling/GameScreen.css'
import { PromptDisplay } from './PromptDisplay.jsx'
import { useTyping } from '../hooks/useTyping.js'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export function GameScreen() {

const prompt = "Type the following text as fast as you can!"
const { inputValue, handleInputChange, correct, incorrect, isIncorrect } = useTyping(prompt);

    return (
        <div className="game-screen">
            <h1 className="game-title">
                Qw4rty
            </h1>
            <PromptDisplay 
                prompt={prompt}
                correct={correct}
                incorrect={incorrect}
                isIncorrect={isIncorrect}
             />
            <InputBox
                onChange={handleInputChange}
                value={inputValue}
            />
            <ToastContainer position="top-center" autoClose={3000} />
        </div>
    )
}