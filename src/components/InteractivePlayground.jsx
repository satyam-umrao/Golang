import React, { useState } from 'react';
import { Play, RotateCcw, Copy, Check, Terminal, Code2, Sparkles } from 'lucide-react';
import { golangPrograms } from '../data/golangPrograms';

export default function InteractivePlayground() {
  const [selectedExampleId, setSelectedExampleId] = useState("01");
  const [userCode, setUserCode] = useState(golangPrograms[0].code);
  const [output, setOutput] = useState(golangPrograms[0].output);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSelectExample = (id) => {
    setSelectedExampleId(id);
    const prog = golangPrograms.find(p => p.id === id);
    if (prog) {
      setUserCode(prog.code);
      setOutput(prog.output);
    }
  };

  const handleRun = () => {
    setIsRunning(true);
    setOutput('Compiling Go code in browser sandbox...\n');

    setTimeout(() => {
      // Basic simulation output
      const prog = golangPrograms.find(p => p.id === selectedExampleId);
      if (prog && userCode === prog.code) {
        setOutput(prog.output);
      } else {
        // Dynamic simulated output
        setOutput(`[Go Playground Simulation]\nExecuting custom code...\nProgram compiled successfully!\n\nStandard Output:\n=== RUN main ===\nHello from Go 1.26 interactive sandbox!\n\n[Process completed in ${(Math.random() * 2 + 2).toFixed(2)}ms with exit code 0]`);
      }
      setIsRunning(false);
    }, 400);
  };

  const handleReset = () => {
    const prog = golangPrograms.find(p => p.id === selectedExampleId);
    if (prog) {
      setUserCode(prog.code);
      setOutput(prog.output);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(userCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="corona-playground-section" id="playground-section">
      <div className="corona-container">
        <div className="corona-section-head">
          <div className="corona-section-title-wrap">
            <span className="corona-stat-badge purple" style={{ marginBottom: '8px' }}>
              <Sparkles size={12} />
              <span>LIVE BROWSER PLAYGROUND</span>
            </span>
            <h2>Interactive Go Code Runner & Scratchpad</h2>
            <p>
              Load any of the 25 Go exercises, modify the code inline, and simulate runtime execution instantly.
            </p>
          </div>

          <div className="corona-playground-template-wrap">
            <label className="corona-template-label">Load Template:</label>
            <select
              value={selectedExampleId}
              onChange={(e) => handleSelectExample(e.target.value)}
              className="corona-template-select"
            >
              {golangPrograms.map(p => (
                <option key={p.id} value={p.id}>
                  #{p.badge} - {p.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Playground Split Card */}
        <div className="corona-playground-card">
          {/* Left Editor */}
          <div className="corona-playground-editor-wrap">
            <div className="corona-playground-editor-header">
              <div className="corona-traffic-lights">
                <span className="corona-traffic-dot red" />
                <span className="corona-traffic-dot yellow" />
                <span className="corona-traffic-dot green" />
              </div>
              <span className="corona-codeblock-filename">scratchpad.go</span>
              <button 
                className={`corona-codeblock-copy ${copied ? 'copied' : ''}`}
                onClick={handleCopy}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <textarea
              className="corona-playground-textarea"
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              spellCheck="false"
            />
          </div>

          {/* Right Output Console */}
          <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#000000' }}>
            <div className="corona-terminal-header">
              <div className="corona-terminal-title">
                <Terminal size={14} color="#00d25b" />
                <span>Go Stdout & Runtime Output</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  className="corona-run-btn"
                  onClick={handleRun}
                  disabled={isRunning}
                  style={{ padding: '4px 12px', fontSize: '0.78rem' }}
                >
                  <Play size={12} fill="#000" />
                  <span>{isRunning ? 'Running...' : 'Run Code'}</span>
                </button>
                <button 
                  className="corona-term-btn-secondary"
                  onClick={handleReset}
                  style={{ padding: '4px 8px' }}
                >
                  <RotateCcw size={12} />
                </button>
              </div>
            </div>

            <div className="corona-terminal-output" style={{ flex: 1, minHeight: '360px' }}>
              <div className="prompt-line">$ go run scratchpad.go</div>
              <div className="info-line">=== COMPILE & EXECUTE (Go 1.26) ===</div>
              <div className="success-line" style={{ marginTop: '10px' }}>
                {output}
              </div>
            </div>

            <div className="corona-terminal-metrics">
              <span>Status: Ready</span>
              <span>Memory: 1.2 MB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
