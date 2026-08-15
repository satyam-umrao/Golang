import React from 'react';
import { Sparkles, Terminal, Layers, Cpu, CheckCircle2, Zap, ArrowRight, BookOpen } from 'lucide-react';
import { projectStats } from '../data/golangPrograms';

export default function HeroSection({ onGetStarted }) {
  return (
    <section className="corona-hero-section" id="hero-section">
      <div className="corona-container">
        {/* Crimson Announcement Banner Tile */}
        <div className="corona-hero-banner">
          <div className="corona-banner-left">
            <div className="corona-banner-icon">
              <Sparkles size={24} />
            </div>
            <div>
              <div className="corona-banner-title">
                Interactive Go 1.26 Documentation & Practice Hub
              </div>
              <div className="corona-banner-desc">
                Explore 25 production-ready Go programs ranging from foundational syntax to memory pointers, deferred cleanup, JSON serialization, and full CRUD HTTP networking.
              </div>
            </div>
          </div>
          <button className="corona-banner-btn" onClick={onGetStarted}>
            Explore Programs <ArrowRight size={14} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }} />
          </button>
        </div>

        {/* Metric Stat Cards Grid */}
        <div className="corona-stats-grid">
          {/* Stat 1: 25 Programs */}
          <div className="corona-stat-card">
            <div className="corona-stat-info">
              <span className="corona-stat-label">Production Programs</span>
              <div className="corona-stat-value">{projectStats.totalPrograms}</div>
              <span className="corona-stat-badge green">
                <CheckCircle2 size={12} />
                <span>+100% Validated</span>
              </span>
            </div>
            <div className="corona-stat-icon-box green">
              <Terminal size={22} />
            </div>
          </div>

          {/* Stat 2: 2 Toolchains */}
          <div className="corona-stat-card">
            <div className="corona-stat-info">
              <span className="corona-stat-label">Execution Environments</span>
              <div className="corona-stat-value">2</div>
              <span className="corona-stat-badge blue">
                <span>Bare CLI & Docker</span>
              </span>
            </div>
            <div className="corona-stat-icon-box blue">
              <Cpu size={22} />
            </div>
          </div>

          {/* Stat 3: Go 1.26 Native */}
          <div className="corona-stat-card">
            <div className="corona-stat-info">
              <span className="corona-stat-label">Runtime Engine</span>
              <div className="corona-stat-value">Go 1.26</div>
              <span className="corona-stat-badge gold">
                <span>Stdlib Native</span>
              </span>
            </div>
            <div className="corona-stat-icon-box gold">
              <Zap size={22} />
            </div>
          </div>

          {/* Stat 4: 8 Categorized Modules */}
          <div className="corona-stat-card">
            <div className="corona-stat-info">
              <span className="corona-stat-label">Domain Modules</span>
              <div className="corona-stat-value">{projectStats.categoriesCount}</div>
              <span className="corona-stat-badge purple">
                <span>Interactive Live Runner</span>
              </span>
            </div>
            <div className="corona-stat-icon-box purple">
              <Layers size={22} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
