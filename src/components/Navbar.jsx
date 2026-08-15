import React, { useState } from 'react';
import { Search, Menu, X, Terminal, ExternalLink, Sparkles, BookOpen, Layers, PlayCircle, Wrench } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Navbar({ onOpenSearch, onSelectCategory, activeSection, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileSearchQuery, setMobileSearchQuery] = useState('');

  const handleMobileSearchSubmit = (e) => {
    e.preventDefault();
    if (mobileSearchQuery.trim()) {
      onOpenSearch(mobileSearchQuery);
      setMobileSearchOpen(false);
      setMobileSearchQuery('');
    }
  };

  return (
    <header className="corona-navbar">
      <div className="corona-container corona-navbar-inner">
        {/* Brand */}
        <div className="corona-brand" onClick={() => onNavigate('hero')}>
          <div className="corona-brand-logo">
            <span>GO</span>
          </div>
          <div className="corona-brand-title">
            GoDoc<span>Hub</span>
          </div>
          <span className="corona-version-badge">v1.26 Native</span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="corona-nav-links" style={{ display: window.innerWidth < 1024 ? 'none' : 'flex' }}>
          <button 
            className={`corona-nav-link ${activeSection === 'hero' ? 'active' : ''}`}
            onClick={() => onNavigate('hero')}
          >
            Overview
          </button>
          <button 
            className={`corona-nav-link ${activeSection === 'programs' ? 'active' : ''}`}
            onClick={() => onNavigate('programs')}
          >
            All Programs (25)
          </button>
          <button 
            className={`corona-nav-link ${activeSection === 'setup' ? 'active' : ''}`}
            onClick={() => onNavigate('setup')}
          >
            Toolchain Setup
          </button>
          <button 
            className={`corona-nav-link ${activeSection === 'playground' ? 'active' : ''}`}
            onClick={() => onNavigate('playground')}
          >
            Live Playground
          </button>
        </nav>

        {/* Desktop Search Trigger */}
        <div 
          className="corona-search-pill" 
          onClick={() => onOpenSearch()}
          style={{ display: window.innerWidth < 768 ? 'none' : 'flex' }}
        >
          <Search size={14} />
          <span>Quick search docs...</span>
          <kbd>CTRL K</kbd>
        </div>

        {/* Actions & Mobile Toggles */}
        <div className="corona-nav-actions">
          <a 
            href="https://github.com/satyam-umrao/Golang" 
            target="_blank" 
            rel="noreferrer"
            className="corona-btn-outline"
            style={{ display: window.innerWidth < 640 ? 'none' : 'inline-flex' }}
          >
            <GithubIcon size={15} />
            <span>GitHub</span>
          </a>

          <button 
            className="corona-btn-primary"
            onClick={() => onNavigate('playground')}
            style={{ display: window.innerWidth < 768 ? 'none' : 'inline-flex' }}
          >
            <PlayCircle size={15} />
            <span>Try Go Online</span>
          </button>

          {/* Mobile Search Toggle */}
          <button 
            className="corona-btn-icon"
            onClick={() => {
              setMobileSearchOpen(!mobileSearchOpen);
              if (mobileMenuOpen) setMobileMenuOpen(false);
            }}
            style={{ display: window.innerWidth >= 768 ? 'none' : 'flex' }}
            title="Search"
          >
            <Search size={18} />
          </button>

          {/* Mobile Hamburger */}
          <button 
            className="corona-btn-icon"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              if (mobileSearchOpen) setMobileSearchOpen(false);
            }}
            style={{ display: window.innerWidth >= 1024 ? 'none' : 'flex' }}
            title="Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Search Bar */}
      {mobileSearchOpen && (
        <form className="corona-mobile-search-bar" onSubmit={handleMobileSearchSubmit}>
          <Search size={18} color="#6c7293" />
          <input 
            type="text"
            className="corona-mobile-search-input"
            placeholder="Search all 25 Go programs, packages..."
            value={mobileSearchQuery}
            onChange={(e) => setMobileSearchQuery(e.target.value)}
            autoFocus
          />
          <button type="submit" className="corona-btn-primary" style={{ padding: '8px 14px' }}>
            Go
          </button>
          <button 
            type="button" 
            className="corona-btn-icon" 
            onClick={() => setMobileSearchOpen(false)}
          >
            <X size={18} />
          </button>
        </form>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="corona-mobile-drawer">
          <a 
            href="#hero-section" 
            className="corona-mobile-drawer-link"
            onClick={() => { setMobileMenuOpen(false); onNavigate('hero'); }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Sparkles size={18} color="#e44c65" />
              <span>Overview & Metrics</span>
            </span>
            <ExternalLink size={14} color="#6c7293" />
          </a>

          <a 
            href="#programs-section" 
            className="corona-mobile-drawer-link"
            onClick={() => { setMobileMenuOpen(false); onNavigate('programs'); }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <BookOpen size={18} color="#00d25b" />
              <span>All 25 Go Programs</span>
            </span>
            <span className="corona-index-badge">25</span>
          </a>

          <a 
            href="#setup-section" 
            className="corona-mobile-drawer-link"
            onClick={() => { setMobileMenuOpen(false); onNavigate('setup'); }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Wrench size={18} color="#00ADD8" />
              <span>Dual Toolchain Setup</span>
            </span>
            <ExternalLink size={14} color="#6c7293" />
          </a>

          <a 
            href="#playground-section" 
            className="corona-mobile-drawer-link"
            onClick={() => { setMobileMenuOpen(false); onNavigate('playground'); }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <PlayCircle size={18} color="#8f5fe8" />
              <span>Live Go Playground</span>
            </span>
            <span className="corona-stat-badge purple">Live</span>
          </a>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a 
              href="https://github.com/satyam-umrao/Golang" 
              target="_blank" 
              rel="noreferrer"
              className="corona-btn-outline" 
              style={{ justifyContent: 'center', padding: '12px' }}
            >
              <GithubIcon size={18} />
              <span>Star on GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
