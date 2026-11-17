import '../styling/InputBox.css'
import { useEffect, useRef } from 'react'

export function InputBox({ onChange, value, disabled = false}) {
    const textareaRef = useRef(null);

    const block = (e) => e.preventDefault();

    useEffect(() => {
        if (disabled === false){
            textareaRef.current?.focus();
        }
    }, [disabled]);

    return (
        <div className="input-box">
            <textarea
                ref={textareaRef}
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