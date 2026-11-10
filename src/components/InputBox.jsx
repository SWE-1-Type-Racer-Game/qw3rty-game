import '../styling/InputBox.css'

export function InputBox({ onChange, value, disabled = false}) {

    return (
        <div className="input-box">
            <textarea
                onChange={onChange}
                value={value}
                disabled={disabled}
                maxLength={200}
                placeholder="Type here..."
                rows={1}
            />
        </div>
    )
}