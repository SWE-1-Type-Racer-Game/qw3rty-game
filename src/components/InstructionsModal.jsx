const InstructionsModal = ({ onClose }) => {
  return (
    <div className="instructions-modal">
      <h2>How to Play</h2>
      <p>Type the prompt shown on screen as fast and accurately as you can.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default InstructionsModal;