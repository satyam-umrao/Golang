import React, { useEffect } from 'react';
import { X, ArrowLeft, Terminal, CheckCircle2, BookOpen, Layers, Zap, Code2, Cpu } from 'lucide-react';
import CodeBlock from './CodeBlock';
import TerminalSimulator from './TerminalSimulator';

export default function ProgramDetailPage({ program, onClose, onSelectProgram, allPrograms }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!program) return null;

  // Find next and previous programs for navigation
  const currentIndex = allPrograms.findIndex(p => p.id === program.id);
  const prevProgram = currentIndex > 0 ? allPrograms[currentIndex - 1] : null;
  const nextProgram = currentIndex < allPrograms.length - 1 ? allPrograms[currentIndex + 1] : null;

  return (
    <div className="corona-modal-backdrop" onClick={onClose}>
      <div className="corona-modal-window" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="corona-modal-header">
          <div className="corona-breadcrumb">
            <button 
              onClick={onClose}
              style={{ background: 'none', border: 'none', color: 'var(--color-corona-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <ArrowLeft size={14} />
              <span>Back</span>
            </button>
            <span>/</span>
            <span>Programs</span>
            <span>/</span>
            <span className="active">{program.title}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button 
              className="corona-modal-close-btn"
              onClick={onClose}
              title="Close modal (Esc)"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="corona-modal-body-scrollable">
          {/* Header Title, Badges & CLI Command */}
          <div className="corona-detail-top-section">
            <div className="corona-detail-badge-row">
              <span className="corona-index-badge">#{program.badge}</span>
              <span className="corona-category-tag">{program.category}</span>
              <span className="corona-stat-badge blue">{program.level}</span>
              <span className="corona-stat-badge green">Go 1.26 Validated</span>
            </div>

            <h1 className="corona-detail-title">{program.title}</h1>
            <p className="corona-detail-tagline">{program.tagline}</p>

            {/* CLI Command Pill */}
            <div className="corona-detail-cli-pill">
              <code>$ {program.cliCommand}</code>
              <span style={{ color: 'var(--color-corona-muted)', fontSize: '0.76rem' }}>{program.folder}/{program.filename}</span>
            </div>
          </div>

          {/* MAIN SECTION: Side-by-Side Code & Interactive Simulator Workbench (ALWAYS VISIBLE ON ALL SCREENS) */}
          <div className="corona-workbench-section" id="program-workbench">
            <div className="corona-workbench-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cpu size={18} color="#00ADD8" />
                <h2 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Program Workbench & Live Execution</h2>
              </div>
              <span className="corona-stat-badge purple">
                Source Code & Live Simulator
              </span>
            </div>

            <div className="corona-workbench-grid">
              {/* Left Pane: Production Source Code */}
              <div className="corona-workbench-pane">
                <div className="corona-pane-title">
                  <Code2 size={16} color="#8f5fe8" />
                  <span>Production Source Code ({program.filename})</span>
                </div>
                <CodeBlock 
                  code={program.code} 
                  filename={`${program.folder}/${program.filename}`}
                  language="go"
                />
              </div>

              {/* Right Pane: Interactive Go Runtime Simulator */}
              <div className="corona-workbench-pane">
                <div className="corona-pane-title">
                  <Terminal size={16} color="#00d25b" />
                  <span>Interactive Go Runtime Simulator</span>
                </div>
                <TerminalSimulator program={program} />
              </div>
            </div>
          </div>

          {/* Overview & Key Language Mechanics Section */}
          <div className="corona-overview-grid">
            {/* Deep Dive Description */}
            <div className="corona-overview-card">
              <h3 className="corona-section-heading">
                <BookOpen size={16} color="#00ADD8" />
                <span>Concept & Architectural Overview</span>
              </h3>
              <p className="corona-deepdive-text">{program.description}</p>
            </div>

            {/* Key Go Concepts Table */}
            {program.concepts && program.concepts.length > 0 && (
              <div className="corona-overview-card">
                <h3 className="corona-section-heading">
                  <Zap size={16} color="#00d25b" />
                  <span>Key Language Mechanics</span>
                </h3>
                <div style={{ overflowX: 'auto', width: '100%' }}>
                  <table className="corona-concepts-table">
                    <thead>
                      <tr>
                        <th style={{ width: '40%' }}>Concept / Construct</th>
                        <th>Go Specification & Behavior</th>
                      </tr>
                    </thead>
                    <tbody>
                      {program.concepts.map((concept, i) => (
                        <tr key={i}>
                          <td><code>{concept.name}</code></td>
                          <td>{concept.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Real-World Use Cases & Pro Tips Section */}
          <div className="corona-bottom-grid">
            {/* Real-World Use Cases */}
            {program.useCases && program.useCases.length > 0 && (
              <div className="corona-usecases-card">
                <h3 className="corona-section-heading">
                  <CheckCircle2 size={16} color="#00d25b" />
                  <span>Real-World Production Use Cases</span>
                </h3>
                <ul className="corona-usecase-list">
                  {program.useCases.map((useCase, idx) => (
                    <li key={idx} className="corona-usecase-item">
                      <CheckCircle2 size={14} />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quick Pro Tip */}
            <div className="corona-tip-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', color: '#ffab00', fontWeight: '700', fontSize: '0.9rem' }}>
                <Zap size={16} />
                <span>CLI Execution Shortcut for {program.filename}</span>
              </div>
              <p style={{ color: 'var(--color-corona-text-secondary)', fontSize: '0.86rem', lineHeight: '1.6', marginBottom: '12px' }}>
                Execute this file natively on your machine with Go 1.18+ or Go 1.26:
              </p>
              <div style={{
                backgroundColor: '#000000',
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-corona-border)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: 'var(--color-corona-green)',
                wordBreak: 'break-all'
              }}>
                $ {program.cliCommand}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
