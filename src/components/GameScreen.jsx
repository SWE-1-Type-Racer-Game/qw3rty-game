import { InputBox } from './InputBox.jsx'
import '../styling/GameScreen.css'
import { PromptDisplay } from './PromptDisplay.jsx'
import { useTyping } from '../hooks/useTyping.js'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Prompt } from '../classes/Prompt.js'
import { AnswerBox } from './AnswerBox.jsx';
import { useSubmit } from '../hooks/useSubmit.js';


export function GameScreen() {

const prompt = new Prompt("test", "5", "Math", false);
const { inputValue, handleInputChange, correct, incorrect, isIncorrect, isComplete } = useTyping(prompt);
const { userAnswer, handleSubmit, clearAnswer } = useSubmit();

    return (
        <div className="game-screen">
            <h1 className="game-title">
                Qw3rty
            </h1>
            <PromptDisplay 
                prompt={prompt.text}
                correct={correct}
                incorrect={incorrect}
                isIncorrect={isIncorrect}
             />
             <AnswerBox isComplete={isComplete} userAnswer={userAnswer} answer={prompt.correctAnswer} onChange={handleSubmit} onClear={clearAnswer} />
            <InputBox
                onChange={handleInputChange}
                value={inputValue}
            />
            <ToastContainer position="top-center" autoClose={3000} />
        </div>
    )
}