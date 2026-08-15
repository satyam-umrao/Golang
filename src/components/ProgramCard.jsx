import React from 'react';
import { ChevronRight, Terminal, Code2 } from 'lucide-react';

export default function ProgramCard({ program, onSelect }) {
  // Extract a preview line of code (skip package and imports if possible)
  const codeLines = program.code.split('\n');
  let previewCode = program.cliCommand;
  for (const line of codeLines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('package') && !trimmed.startsWith('import') && !trimmed.startsWith('//') && !trimmed.startsWith('/*')) {
      previewCode = trimmed;
      break;
    }
  }

  return (
    <div className="corona-program-card" onClick={() => onSelect(program)}>
      <div className="corona-card-top">
        <span className="corona-index-badge">#{program.badge}</span>
        <span className="corona-category-tag">{program.category}</span>
      </div>

      <h3 className="corona-card-title">{program.title}</h3>
      <p className="corona-card-tagline">{program.tagline}</p>

      <div className="corona-card-snippet">
        <code>$ {program.cliCommand}</code>
      </div>

      <div className="corona-card-footer">
        <div className="corona-card-native-badge">
          <span className="dot" />
          <span>Go 1.26 Native</span>
        </div>
        <div className="corona-card-action">
          <span>Docs & Run</span>
          <ChevronRight size={15} />
        </div>
      </div>
    </div>
  );
}
