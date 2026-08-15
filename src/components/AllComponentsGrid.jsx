import React from 'react';
import { Search, X, Layers, Filter } from 'lucide-react';
import ProgramCard from './ProgramCard';
import { categories } from '../data/golangPrograms';

export default function AllComponentsGrid({
  programs,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onSelectProgram
}) {
  const filteredPrograms = programs.filter(p => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCat;
    const matchesSearch = (
      p.title.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.filename.toLowerCase().includes(q) ||
      p.folder.toLowerCase().includes(q) ||
      p.code.toLowerCase().includes(q)
    );
    return matchesCat && matchesSearch;
  });

  return (
    <section className="corona-gallery-section" id="programs-section">
      <div className="corona-container">
        {/* Section Header */}
        <div className="corona-section-head">
          <div className="corona-section-title-wrap">
            <h2>All Go Programs & Modules</h2>
            <p>
              Interactive catalog of {programs.length} programs with syntax breakdowns, concept specs, and live runtime terminals.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="corona-stat-badge green">
              {filteredPrograms.length} {filteredPrograms.length === 1 ? 'Program' : 'Programs'} Found
            </span>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="corona-filters-bar">
          <div className="corona-filter-top-row">
            {/* Search Box */}
            <div className="corona-search-box-large">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search programs by name, keyword, standard library package (fmt, bufio, net/http)..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
              {searchQuery && (
                <button 
                  className="corona-search-clear-btn"
                  onClick={() => onSearchChange('')}
                  title="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Horizontally Scrollable Category Pills */}
          <div className="corona-category-pills">
            {categories.map(cat => (
              <button
                key={cat}
                className={`corona-category-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => onSelectCategory(cat)}
              >
                {selectedCategory === cat && <Filter size={12} />}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="corona-cards-grid">
            {filteredPrograms.map(program => (
              <ProgramCard
                key={program.id}
                program={program}
                onSelect={onSelectProgram}
              />
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            backgroundColor: 'var(--color-corona-surface)',
            border: '1px solid var(--color-corona-border)',
            borderRadius: 'var(--radius-lg)'
          }}>
            <Layers size={40} color="#6c7293" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>No matching Go programs found</h3>
            <p style={{ color: 'var(--color-corona-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
              Try searching with a different keyword or select the "All" category.
            </p>
            <button
              className="corona-btn-primary"
              onClick={() => {
                onSelectCategory('All');
                onSearchChange('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
