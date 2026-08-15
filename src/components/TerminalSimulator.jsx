import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Copy, Check, Terminal, Clock, Cpu, HardDrive } from 'lucide-react';

export default function TerminalSimulator({ program }) {
  const [isRunning, setIsRunning] = useState(false);
  const [customInput, setCustomInput] = useState(program.defaultInput || '');
  const [output, setOutput] = useState('');
  const [executionTime, setExecutionTime] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Reset state when program changes
    setCustomInput(program.defaultInput || '');
    setOutput(program.output);
    setExecutionTime((Math.random() * 2.5 + 1.2).toFixed(2));
  }, [program]);

  const handleRun = () => {
    setIsRunning(true);
    setOutput('Compiling and executing ' + program.filename + ' with Go 1.26 runtime...\n');

    setTimeout(() => {
      let finalOut = program.output;

      // If program has input, simulate dynamic output based on custom input
      if (program.hasInput && customInput) {
        const lines = customInput.split('\n');
        const name = lines[0] || 'Gopher';
        const age = lines[1] || '20';
        finalOut = `What is your name: ${name}\nHello, ${name}\n\nEnter your age: ${age}\nYou are ${age} years old.\n\n[Process completed in ${(Math.random() * 2 + 3).toFixed(2)}ms with exit code 0]`;
      }

      setOutput(finalOut);
      setExecutionTime((Math.random() * 3 + 1.8).toFixed(2));
      setIsRunning(false);
    }, 450);
  };

  const handleReset = () => {
    setCustomInput(program.defaultInput || '');
    setOutput(program.output);
  };

  const handleCopyOutput = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="corona-terminal-card">
      <div className="corona-terminal-header">
        <div className="corona-traffic-lights">
          <span className="corona-traffic-dot red" />
          <span className="corona-traffic-dot yellow" />
          <span className="corona-traffic-dot green" />
        </div>
        <div className="corona-terminal-title">
          <Terminal size={14} color="#00d25b" />
          <span>Interactive Go Terminal</span>
        </div>
        <button 
          className="corona-term-btn-secondary" 
          onClick={handleCopyOutput}
          title="Copy output"
        >
          {copied ? <Check size={12} color="#00d25b" /> : <Copy size={12} />}
          <span>{copied ? 'Copied' : 'Output'}</span>
        </button>
      </div>

      <div className="corona-terminal-controls">
        <button 
          className="corona-run-btn"
          onClick={handleRun}
          disabled={isRunning}
        >
          <Play size={14} fill="#000000" />
          <span>{isRunning ? 'Running...' : 'Run Program'}</span>
        </button>

        <button 
          className="corona-term-btn-secondary"
          onClick={handleReset}
        >
          <RotateCcw size={12} />
          <span>Reset Output</span>
        </button>
      </div>

      {program.hasInput && (
        <div className="corona-terminal-input-wrap">
          <label>STDIN Interactive Mock Input (name / age per line):</label>
          <textarea
            className="corona-terminal-input-field"
            rows={2}
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder="Type input here..."
          />
        </div>
      )}

      <div className="corona-terminal-output">
        <div className="prompt-line">$ {program.cliCommand}</div>
        <div className="info-line">=== RUN {program.filename} ===</div>
        <div className="success-line" style={{ marginTop: '8px' }}>
          {output}
        </div>
      </div>

      <div className="corona-terminal-metrics">
        <div style={{ display: 'flex', gap: '14px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={12} color="#00ADD8" />
            <span>{executionTime || '2.40'}ms</span>
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Cpu size={12} color="#8f5fe8" />
            <span>Go runtime (gc)</span>
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <HardDrive size={12} color="#ffab00" />
          <span>Exit Code: 0</span>
        </div>
      </div>
    </div>
  );
}
