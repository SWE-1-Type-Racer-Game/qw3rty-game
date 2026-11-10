import { useState } from 'react';
import InstructionsModal from './InstructionsModal.jsx';
import '../styling/MainMenu.css';

const MainMenu = ({ onStart, onViewLeaderboard }) => {
  // private state (diagram: -showInstructions: boolean)
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <div className="main-menu">
      <h1>Qw3rty</h1>
      <div className="main-menu-buttons">
        {/* props from App (diagram: +onStart, +onViewLeaderboard) */}
        <button onClick={onStart}>Start Race</button>
        <button onClick={onViewLeaderboard}>Leaderboard</button>
        <button onClick={() => setShowInstructions(true)}>Instructions</button>
      </div>

      {/* renders 0..1 InstructionsModal */}
      {showInstructions && (
        <InstructionsModal onClose={() => setShowInstructions(false)} />
            )}
    </div>
  );
};

export default MainMenu;