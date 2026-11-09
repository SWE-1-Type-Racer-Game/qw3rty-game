import { InputBox } from './InputBox.jsx'
import '../styling/GameScreen.css'
import { PromptDisplay } from './PromptDisplay.jsx'
import { useTyping } from '../hooks/useTyping.js'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Prompt } from '../classes/Prompt.js'


export function GameScreen() {

const prompt = new Prompt("If Jay has 2 apples, and Joan has 3 apples, how many apples do they have altogether? 3 + 2 = 5", "5", "Math", "", false);
const { inputValue, handleInputChange, correct, incorrect, isIncorrect } = useTyping(prompt);

    return (
        <div className="game-screen">
            <h1 className="game-title">
                Qw4rty
            </h1>
            <PromptDisplay 
                prompt={prompt.text}
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