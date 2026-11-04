import '../styling/InputBox.css'

export function InputBox({ onChange, value}) {

    return (
        <div className="input-box">
            <textarea
                onChange={onChange}
                value={value}
                maxLength={200}
                placeholder="Type here..."
                rows={1}
            />
        </div>
    )
}