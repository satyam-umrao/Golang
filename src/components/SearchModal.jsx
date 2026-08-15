import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Terminal, ChevronRight, BookOpen, Layers } from 'lucide-react';

export default function SearchModal({ isOpen, onClose, programs, onSelectProgram, initialQuery = '' }) {
  const [query, setQuery] = useState(initialQuery);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery);
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen, initialQuery]);

  const filtered = programs.filter(p => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      p.title.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.filename.toLowerCase().includes(q) ||
      p.folder.toLowerCase().includes(q) ||
      p.code.toLowerCase().includes(q)
    );
  });

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < filtered.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : filtered.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        onSelectProgram(filtered[selectedIndex]);
        onClose();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="corona-search-modal-backdrop" onClick={onClose}>
      <div className="corona-search-modal" onClick={e => e.stopPropagation()} onKeyDown={handleKeyDown}>
        {/* Input Bar */}
        <div className="corona-search-modal-input-wrap">
          <Search size={20} color="#00ADD8" />
          <input
            ref={inputRef}
            type="text"
            className="corona-search-modal-input"
            placeholder="Type to search 25 Go programs, packages, structs..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
          />
          {query && (
            <button 
              className="corona-search-clear-btn" 
              style={{ position: 'static' }}
              onClick={() => setQuery('')}
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Results List */}
        <div className="corona-search-modal-results">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <div
                key={item.id}
                className={`corona-search-result-item ${selectedIndex === idx ? 'selected' : ''}`}
                onClick={() => {
                  onSelectProgram(item);
                  onClose();
                }}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                <div className="corona-search-result-left">
                  <span className="corona-index-badge">#{item.badge}</span>
                  <div>
                    <div className="corona-search-result-title">{item.title}</div>
                    <div className="corona-search-result-cat">{item.category} • {item.filename}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <code style={{ fontSize: '0.74rem', color: '#6c7293' }}>go run</code>
                  <ChevronRight size={14} color="#6c7293" />
                </div>
              </div>
            ))
          ) : (
            <div style={{ padding: '32px 16px', textAlign: 'center', color: 'var(--color-corona-muted)' }}>
              No Go programs matched "{query}"
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="corona-search-modal-footer">
          <div style={{ display: 'flex', gap: '14px' }}>
            <span><kbd style={{ background: '#000', padding: '2px 5px', borderRadius: '3px' }}>↑</kbd> <kbd style={{ background: '#000', padding: '2px 5px', borderRadius: '3px' }}>↓</kbd> Navigate</span>
            <span><kbd style={{ background: '#000', padding: '2px 5px', borderRadius: '3px' }}>ENTER</kbd> Open Docs</span>
            <span><kbd style={{ background: '#000', padding: '2px 5px', borderRadius: '3px' }}>ESC</kbd> Close</span>
          </div>
          <span>{filtered.length} results</span>
        </div>
      </div>
    </div>
  );
}
