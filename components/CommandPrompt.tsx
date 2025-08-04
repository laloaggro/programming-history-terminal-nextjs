import React, { useState, useRef } from 'react';

interface CommandPromptProps {
  onProcessCommand: (command: string) => void;
}

const CommandPrompt = ({ onProcessCommand }: CommandPromptProps) => {
  const [command, setCommand] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onProcessCommand(command);
      setCommand('');
    }
  };

  return (
    <div id="prompt">
      <span>&gt;</span>
      <input
        ref={inputRef}
        type="text"
        id="command-input"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />
      <span className="blink">_</span>
    </div>
  );
};

export default CommandPrompt;