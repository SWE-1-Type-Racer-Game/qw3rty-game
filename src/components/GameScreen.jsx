import { InputBox } from './InputBox.jsx'
import '../styling/GameScreen.css'
import { PromptDisplay } from './PromptDisplay.jsx'
import { useTyping } from '../hooks/useTyping.js'

export function GameScreen() {

const prompt = "Type the following text as fast as you can!"
const { inputValue, handleInputChange, correct } = useTyping(prompt);

    return (
        <div className="game-screen">
            <h1 className="game-title">
                Qw4rty
            </h1>
            <PromptDisplay 
                prompt={prompt}
                correct={correct} />
            <InputBox
                onChange={handleInputChange}
                value={inputValue}
            />
        </div>
    )
}