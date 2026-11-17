import '../styling/PauseModal.css';

export function PauseModal({ onResume, onRestart, onQuit }) {
  return (
    <div className="pause-overlay">
      <div
        className="pause-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pause-title"
      >
        <h2 id="pause-title">Game Paused</h2>

        <p>Take a break! Your race is paused.</p>

        <div className="pause-modal-buttons">
          <button
            className="pause-resume-button"
            onClick={onResume}
          >
            Resume
          </button>

          <button
            className="pause-restart-button"
            onClick={onRestart}
          >
            Restart
          </button>

          <button
            className="pause-quit-button"
            onClick={onQuit}
          >
            Quit to Main Menu
          </button>
        </div>
      </div>
    </div>
  );
}
