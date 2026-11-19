const InstructionsModal = ({ onClose }) => {
  return (
    <div className="instructions-modal">
      <h2>How to Play</h2>
      <ol>
        <li>
          Click <strong>Begin Racing!</strong>, then <strong>Start Race</strong>. The timer starts right away.
        </li>
        <li>
          Type the word problem shown on screen exactly as written. Mistakes are highlighted, and you
          need to fix a typo before you can keep typing. Copy and paste are disabled.
        </li>
        <li>
          Once the prompt is typed correctly, an answer box appears. Enter the correct answer to the
          math problem to move on to the next prompt.
        </li>
        <li>
          Complete all 10 prompts to finish the race and see your results: score and number of typos.
        </li>
        <li>
          From the results screen you can <strong>Play Again</strong>, <strong>View Leaderboard</strong>,
          or <strong>Quit</strong> to the main menu.
        </li>
      </ol>
      <p>You can <strong>Pause</strong> at any time during a race to resume, restart or quit.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default InstructionsModal;
