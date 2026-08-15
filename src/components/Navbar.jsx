import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Terminal, ExternalLink, Sparkles, BookOpen, Layers, PlayCircle, Wrench, Code2, ShieldCheck, Zap } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Navbar({ onOpenSearch, onSelectCategory, activeSection, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileSearchQuery, setMobileSearchQuery] = useState('');

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setMobileSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMobileSearchSubmit = (e) => {
    e.preventDefault();
    if (mobileSearchQuery.trim()) {
      onOpenSearch(mobileSearchQuery.trim());
      setMobileSearchOpen(false);
      setMobileSearchQuery('');
    }
  };

  const handleNavClick = (section) => {
    setMobileMenuOpen(false);
    setMobileSearchOpen(false);
    onNavigate(section);
  };

  return (
    <header className="corona-navbar">
      <div className="corona-container corona-navbar-inner">
        {/* Brand */}
        <div className="corona-brand" onClick={() => handleNavClick('hero')} role="button" tabIndex={0}>
          <div className="corona-brand-logo">
            <span>GO</span>
          </div>
          <div className="corona-brand-title">
            GoDoc<span>Hub</span>
          </div>
          <span className="corona-version-badge">v1.26</span>
        </div>

        {/* Desktop Nav Links (Controlled via CSS media queries) */}
        <nav className="corona-nav-links">
          <button 
            className={`corona-nav-link ${activeSection === 'hero' ? 'active' : ''}`}
            onClick={() => handleNavClick('hero')}
          >
            Overview
          </button>
          <button 
            className={`corona-nav-link ${activeSection === 'programs' ? 'active' : ''}`}
            onClick={() => handleNavClick('programs')}
          >
            Programs (25)
          </button>
          <button 
            className={`corona-nav-link ${activeSection === 'setup' ? 'active' : ''}`}
            onClick={() => handleNavClick('setup')}
          >
            Toolchain Setup
          </button>
          <button 
            className={`corona-nav-link ${activeSection === 'playground' ? 'active' : ''}`}
            onClick={() => handleNavClick('playground')}
          >
            Live Playground
          </button>
        </nav>

        {/* Desktop Quick Search Pill */}
        <div 
          className="corona-search-pill" 
          onClick={() => onOpenSearch()}
          role="button"
          tabIndex={0}
          title="Search docs (Ctrl + K)"
        >
          <Search size={14} />
          <span>Search 25 programs...</span>
          <kbd>Ctrl K</kbd>
        </div>

        {/* Nav Right Actions */}
        <div className="corona-nav-actions">
          <a 
            href="https://github.com/satyam-umrao/Golang" 
            target="_blank" 
            rel="noreferrer"
            className="corona-btn-outline corona-nav-btn-github"
          >
            <GithubIcon size={15} />
            <span>GitHub</span>
          </a>

          <button 
            className="corona-btn-primary corona-nav-btn-playground"
            onClick={() => handleNavClick('playground')}
          >
            <PlayCircle size={15} />
            <span>Run Go</span>
          </button>

          {/* Mobile Search Icon Button */}
          <button 
            className="corona-btn-icon corona-mobile-search-toggle"
            onClick={() => {
              setMobileSearchOpen(prev => !prev);
              if (mobileMenuOpen) setMobileMenuOpen(false);
            }}
            aria-label="Search"
            title="Search"
          >
            <Search size={18} />
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button 
            className={`corona-btn-icon corona-mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => {
              setMobileMenuOpen(prev => !prev);
              if (mobileSearchOpen) setMobileSearchOpen(false);
            }}
            aria-label="Toggle Navigation Menu"
            title="Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} color="#fc424a" /> : <Menu size={20} />}
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

      {/* Mobile Fullscreen Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="corona-mobile-drawer" onClick={(e) => {
          if (e.target === e.currentTarget) setMobileMenuOpen(false);
        }}>
          <div className="corona-mobile-drawer-inner">
            <div className="corona-mobile-drawer-header">
              <span className="corona-mobile-drawer-label">NAVIGATION MENU</span>
              <span className="corona-stat-badge green">Go 1.26 Ready</span>
            </div>

            <div className="corona-mobile-drawer-links">
              <button 
                className={`corona-mobile-drawer-link ${activeSection === 'hero' ? 'active' : ''}`}
                onClick={() => handleNavClick('hero')}
              >
                <div className="corona-drawer-link-left">
                  <div className="corona-drawer-icon-box pink">
                    <Sparkles size={16} />
                  </div>
                  <div className="corona-drawer-text">
                    <span className="title">Overview & Metrics</span>
                    <span className="desc">Hub statistics, specs and features</span>
                  </div>
                </div>
                <ExternalLink size={14} color="#6c7293" />
              </button>

              <button 
                className={`corona-mobile-drawer-link ${activeSection === 'programs' ? 'active' : ''}`}
                onClick={() => handleNavClick('programs')}
              >
                <div className="corona-drawer-link-left">
                  <div className="corona-drawer-icon-box green">
                    <BookOpen size={16} />
                  </div>
                  <div className="corona-drawer-text">
                    <span className="title">All 25 Go Programs</span>
                    <span className="desc">Explore source code & live execution</span>
                  </div>
                </div>
                <span className="corona-index-badge">25 Exercises</span>
              </button>

              <button 
                className={`corona-mobile-drawer-link ${activeSection === 'setup' ? 'active' : ''}`}
                onClick={() => handleNavClick('setup')}
              >
                <div className="corona-drawer-link-left">
                  <div className="corona-drawer-icon-box cyan">
                    <Wrench size={16} />
                  </div>
                  <div className="corona-drawer-text">
                    <span className="title">Toolchain Setup</span>
                    <span className="desc">Native Go CLI & Docker configurations</span>
                  </div>
                </div>
                <ExternalLink size={14} color="#6c7293" />
              </button>

              <button 
                className={`corona-mobile-drawer-link ${activeSection === 'playground' ? 'active' : ''}`}
                onClick={() => handleNavClick('playground')}
              >
                <div className="corona-drawer-link-left">
                  <div className="corona-drawer-icon-box purple">
                    <PlayCircle size={16} />
                  </div>
                  <div className="corona-drawer-text">
                    <span className="title">Live Go Playground</span>
                    <span className="desc">Interactive runner & code scratchpad</span>
                  </div>
                </div>
                <span className="corona-stat-badge purple">Online</span>
              </button>
            </div>

            {/* Quick Search Button Inside Drawer */}
            <button 
              className="corona-drawer-search-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
            >
              <Search size={16} />
              <span>Search All 25 Go Programs (Ctrl + K)</span>
            </button>

            {/* Mobile Footer CTAs */}
            <div className="corona-mobile-drawer-footer">
              <a 
                href="https://github.com/satyam-umrao/Golang" 
                target="_blank" 
                rel="noreferrer"
                className="corona-btn-outline" 
                style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
              >
                <GithubIcon size={18} />
                <span>View on GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
