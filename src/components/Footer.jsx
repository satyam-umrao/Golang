import React from 'react';
import { ExternalLink, Terminal, Heart, BookOpen, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectStats } from '../data/golangPrograms';

export default function Footer({ onSelectCategory, onScrollToSetup }) {
  return (
    <footer className="corona-footer">
      <div className="corona-footer-watermark">GOLANG 1.26</div>
      <div className="corona-container">
        <div className="corona-footer-grid">
          {/* Brand Info */}
          <div className="corona-footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="corona-brand-logo" style={{ width: '30px', height: '30px', fontSize: '0.8rem' }}>
                GO
              </div>
              <div className="corona-brand-title" style={{ fontSize: '1.1rem' }}>
                GoDoc<span>Hub</span>
              </div>
            </div>
            <p>
              An interactive reference, cheat sheet, and execution runner for the 25 Go exercises repository by Satyam Umrao.
            </p>
            <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
              <a 
                href="https://github.com/satyam-umrao/Golang" 
                target="_blank" 
                rel="noreferrer"
                className="corona-btn-outline"
                style={{ padding: '6px 14px', fontSize: '0.8rem' }}
              >
                <GithubIcon size={14} />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

          {/* Column 1: Core Topics */}
          <div className="corona-footer-col">
            <h4>Topics & Modules</h4>
            <ul className="corona-footer-links">
              <li><a href="#programs-section" onClick={() => onSelectCategory('Basics & Syntax')}>01. Syntax & Entry</a></li>
              <li><a href="#programs-section" onClick={() => onSelectCategory('Variables & Types')}>02. Variables & Types</a></li>
              <li><a href="#programs-section" onClick={() => onSelectCategory('Data Structures')}>07. Slices & Dynamic Arrays</a></li>
              <li><a href="#programs-section" onClick={() => onSelectCategory('Memory & Structs')}>12. Structs & Pointers</a></li>
              <li><a href="#programs-section" onClick={() => onSelectCategory('Web & Networking')}>20. Web Requests & JSON</a></li>
            </ul>
          </div>

          {/* Column 2: Ecosystem & Standard Lib */}
          <div className="corona-footer-col">
            <h4>Standard Library</h4>
            <ul className="corona-footer-links">
              <li><a href="https://pkg.go.dev/fmt" target="_blank" rel="noreferrer">fmt package <ExternalLink size={11} style={{ display: 'inline' }} /></a></li>
              <li><a href="https://pkg.go.dev/net/http" target="_blank" rel="noreferrer">net/http client <ExternalLink size={11} style={{ display: 'inline' }} /></a></li>
              <li><a href="https://pkg.go.dev/encoding/json" target="_blank" rel="noreferrer">encoding/json <ExternalLink size={11} style={{ display: 'inline' }} /></a></li>
              <li><a href="https://pkg.go.dev/time" target="_blank" rel="noreferrer">time package <ExternalLink size={11} style={{ display: 'inline' }} /></a></li>
              <li><a href="https://go.dev/tour/" target="_blank" rel="noreferrer">A Tour of Go <ExternalLink size={11} style={{ display: 'inline' }} /></a></li>
            </ul>
          </div>

          {/* Column 3: Workflows */}
          <div className="corona-footer-col">
            <h4>Toolchain & CLI</h4>
            <ul className="corona-footer-links">
              <li><a href="#setup-section" onClick={onScrollToSetup}>Local Go CLI (go run)</a></li>
              <li><a href="#setup-section" onClick={onScrollToSetup}>Docker Container Setup</a></li>
              <li><a href="#playground-section">Browser Code Runner</a></li>
              <li><a href="https://go.dev/doc/install" target="_blank" rel="noreferrer">Install Go 1.26 <ExternalLink size={11} style={{ display: 'inline' }} /></a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="corona-footer-bottom">
          <div>
            © {new Date().getFullYear()} Golang Documentation Hub. Licensed under MIT. Built for developers learning Go.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Press</span>
            <kbd style={{ background: '#191c24', border: '1px solid #2c2e33', padding: '2px 6px', borderRadius: '4px', color: '#fff' }}>CTRL + K</kbd>
            <span>anywhere to search</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
