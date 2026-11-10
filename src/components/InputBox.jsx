import '../styling/InputBox.css'

export function InputBox({ onChange, value, disabled = false}) {

    const block = (e) => e.preventDefault();

    return (
        <div className="input-box">
            <textarea
                onCopy={block}
                onPaste={block}
                onCut={block}
                onDrag={block}
                onDrop={block}
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