import React from 'react';
import { Wrench, BookOpen, Globe, ArrowRight } from 'lucide-react';

export default function TableOfContentsGrid({ onSelectCategory, onScrollToSetup }) {
  return (
    <section className="corona-toc-section">
      <div className="corona-container">
        <div className="corona-toc-grid">
          {/* Card 1: Setup & Toolchain */}
          <div 
            className="corona-toc-card" 
            style={{ '--toc-accent': 'var(--color-corona-green)' }}
            onClick={onScrollToSetup}
          >
            <div className="corona-toc-header">
              <div className="corona-toc-icon-wrap">
                <Wrench size={20} />
              </div>
              <span className="corona-toc-count">2 Workflows</span>
            </div>
            <h3 className="corona-toc-title">Setup & Environment</h3>
            <p className="corona-toc-desc">
              Get started with the official Go 1.26 CLI toolchain, GOPATH configuration, VS Code extensions, or containerized Docker dev setups.
            </p>
            <div className="corona-toc-footer">
              <span>View Environment Guide</span>
              <ArrowRight size={14} />
            </div>
          </div>

          {/* Card 2: All Go Programs */}
          <div 
            className="corona-toc-card" 
            style={{ '--toc-accent': 'var(--color-corona-blue)' }}
            onClick={() => onSelectCategory('All')}
          >
            <div className="corona-toc-header">
              <div className="corona-toc-icon-wrap">
                <BookOpen size={20} />
              </div>
              <span className="corona-toc-count">25 Programs</span>
            </div>
            <h3 className="corona-toc-title">All Go Programs & Exercises</h3>
            <p className="corona-toc-desc">
              Browse the complete repository of 25 structured examples covering fundamentals, memory pointers, structs, slices, maps, and defer lifecycles.
            </p>
            <div className="corona-toc-footer">
              <span>Explore All Exercises</span>
              <ArrowRight size={14} />
            </div>
          </div>

          {/* Card 3: Web & Networking */}
          <div 
            className="corona-toc-card" 
            style={{ '--toc-accent': 'var(--color-corona-purple)' }}
            onClick={() => onSelectCategory('Web & Networking')}
          >
            <div className="corona-toc-header">
              <div className="corona-toc-icon-wrap">
                <Globe size={20} />
              </div>
              <span className="corona-toc-count">5 Web Modules</span>
            </div>
            <h3 className="corona-toc-title">Web & Standard Library APIs</h3>
            <p className="corona-toc-desc">
              Deep dive into real-world HTTP web requests, URL parameter extraction, JSON marshalling/unmarshalling, and RESTful API CRUD integrations.
            </p>
            <div className="corona-toc-footer">
              <span>Inspect Web & JSON APIs</span>
              <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
