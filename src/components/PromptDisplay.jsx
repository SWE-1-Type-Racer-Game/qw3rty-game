import '../styling/PromptDisplay.css'

export function PromptDisplay({ prompt, correct, incorrect, isIncorrect }) {
    return (
        <div>
            <p className="prompt-display">
            {prompt.split("").map((char, index) => (
                <span
                key={index}
                style={{
                    color: index < correct ? "green" : index === incorrect && isIncorrect ? "red" : "white",
                    fontFamily: "Courier New, monospace"
                }}
                >
                {char}
                </span>
            ))}
            </p>
        </div>
    )
}