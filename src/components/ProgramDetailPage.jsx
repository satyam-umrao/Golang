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

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {prevProgram && (
              <button 
                className="corona-term-btn-secondary"
                onClick={() => onSelectProgram(prevProgram)}
                title={prevProgram.title}
              >
                ← #{prevProgram.badge}
              </button>
            )}
            {nextProgram && (
              <button 
                className="corona-term-btn-secondary"
                onClick={() => onSelectProgram(nextProgram)}
                title={nextProgram.title}
              >
                #{nextProgram.badge} →
              </button>
            )}
            <button 
              className="corona-modal-close-btn"
              onClick={onClose}
              title="Close modal (Esc)"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body: Two-Column Split Layout */}
        <div className="corona-modal-body">
          {/* Left Column: Documentation & Source Code */}
          <div className="corona-detail-left">
            <div className="corona-detail-badge-row">
              <span className="corona-index-badge">#{program.badge}</span>
              <span className="corona-category-tag">{program.category}</span>
              <span className="corona-stat-badge blue">{program.level}</span>
            </div>

            <h1 className="corona-detail-title">{program.title}</h1>
            <p className="corona-detail-tagline">{program.tagline}</p>

            {/* CLI Command Pill */}
            <div className="corona-detail-cli-pill">
              <code>$ {program.cliCommand}</code>
              <span style={{ color: 'var(--color-corona-muted)', fontSize: '0.74rem' }}>{program.folder}/{program.filename}</span>
            </div>

            {/* Deep Dive Description */}
            <div>
              <h3 className="corona-section-heading">
                <BookOpen size={16} color="#00ADD8" />
                <span>Concept & Architectural Overview</span>
              </h3>
              <p className="corona-deepdive-text">{program.description}</p>
            </div>

            {/* Key Go Concepts Table */}
            {program.concepts && program.concepts.length > 0 && (
              <div>
                <h3 className="corona-section-heading">
                  <Zap size={16} color="#00d25b" />
                  <span>Key Language Mechanics</span>
                </h3>
                <table className="corona-concepts-table">
                  <thead>
                    <tr>
                      <th style={{ width: '38%' }}>Concept / Construct</th>
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
            )}

            {/* Production Code Example */}
            <div>
              <h3 className="corona-section-heading">
                <Code2 size={16} color="#8f5fe8" />
                <span>Production Source Code ({program.filename})</span>
              </h3>
              <CodeBlock 
                code={program.code} 
                filename={`${program.folder}/${program.filename}`}
                language="go"
              />
            </div>

            {/* Real-World Use Cases */}
            {program.useCases && program.useCases.length > 0 && (
              <div>
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
          </div>

          {/* Right Column: Live Terminal & Output Simulator */}
          <div className="corona-detail-right">
            <h3 className="corona-section-heading" style={{ margin: 0 }}>
              <Terminal size={16} color="#00d25b" />
              <span>Interactive Go Runtime Simulator</span>
            </h3>
            <TerminalSimulator program={program} />

            {/* Quick Tips Box */}
            <div style={{
              backgroundColor: 'var(--color-corona-surface)',
              border: '1px solid var(--color-corona-border)',
              borderRadius: 'var(--radius-md)',
              padding: '16px',
              marginTop: '8px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#ffab00', fontWeight: '700', fontSize: '0.86rem' }}>
                <Zap size={14} />
                <span>Pro Tip for {program.filename}</span>
              </div>
              <p style={{ color: 'var(--color-corona-text-secondary)', fontSize: '0.84rem', lineHeight: '1.5' }}>
                You can run this program directly on your local machine using Go 1.18+ by typing <code style={{ color: '#00ADD8' }}>{program.cliCommand}</code> in your terminal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
