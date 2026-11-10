import '../styling/ProgressBar.css';

export function ProgressBar({ progress, total }) {
    const percentage = total > 0
        ? Math.min(100, Math.max(0, (progress / total) * 100))
        : 0;

    return (
        <div className="progress-container">
            <div className="progress-label">
                <span>Race Progress</span>
                <span>{Math.round(percentage)}%</span>
            </div>

            <div
                className="progress-track"
                role="progressbar"
                aria-label="Typing progress"
                aria-valuenow={Math.round(percentage)}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div
                    className="progress-fill"
                    style={{ width: `${percentage}%` }}
                />
            </div>

            <p className="progress-count">
                {progress} / {total} characters
            </p>
        </div>
    );
}
