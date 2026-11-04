import '../styling/PromptDisplay.css'

export function PromptDisplay({ prompt, correct }) {
    return (
        <div>
            <p className="prompt-display">
            {prompt.split("").map((word, index) => (
                <span
                key={index}
                style={{
                    color: index < correct ? "green" : "white",
                    fontFamily: "Courier New, monospace"
                }}
                >
                {word}
                </span>
            ))}
            </p>
        </div>
    )
}