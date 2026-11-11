import '../styling/PromptDisplay.css'

export function PromptDisplay({ prompt, correct, incorrect, isIncorrect }) {
    return (
        <div>
            <p className="prompt-display">
            {prompt.split("").map((char, index) => (
                <span
                key={index}
                style={{
                    color: index < correct ? "green" : index === incorrect && isIncorrect ? "red" : "var(--text-h)",
                }}
                >
                {char}
                </span>
            ))}
            </p>
        </div>
    )
}