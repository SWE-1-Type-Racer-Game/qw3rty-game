import { useEffect, useRef, useState } from 'react'
import '../styling/AnswerBox.css'

export function AnswerBox({ isComplete, userAnswer, answer, onChange, onCorrect, onClear }) {
    const textareaRef = useRef(null);
    const isCorrect = userAnswer.trim().toLowerCase() === answer.trim().toLowerCase();
    // result of the last Enter press only: 'correct' | 'incorrect' | null
    const [result, setResult] = useState(null);


    // move the cursor into the answer box once the prompt has been fully typed
    useEffect(() => {
        if (isComplete) textareaRef.current?.focus();
    }, [isComplete]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (isCorrect) {
                setResult('correct');
                onCorrect?.();
            } else {
                setResult('incorrect');
                onClear?.();
            }
        }
    };

    return (
        <div className="answer-box">
            {isComplete && (
                <>
                    <textarea
                        ref={textareaRef}
                        onChange={onChange}
                        onKeyDown={handleKeyDown}
                        value={userAnswer}
                        disabled={result === 'correct'}
                        maxLength={10}
                        placeholder="Type your answer..."
                        rows={1}
                    />
                    {result === 'correct' && (
                        <p className="correct-answer">Correct! The answer is: {answer}</p>
                    )}
                    {result === 'incorrect' && (
                        <p className="incorrect-answer">Incorrect! Please try again.</p>
                    )}
                </>
            )}
        </div>
    );
}