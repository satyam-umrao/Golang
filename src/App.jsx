import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TableOfContentsGrid from './components/TableOfContentsGrid';
import AllComponentsGrid from './components/AllComponentsGrid';
import SetupSection from './components/SetupSection';
import InteractivePlayground from './components/InteractivePlayground';
import ProgramDetailPage from './components/ProgramDetailPage';
import SearchModal from './components/SearchModal';
import Footer from './components/Footer';
import { golangPrograms } from './data/golangPrograms';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchModalInitialQuery, setSearchModalInitialQuery] = useState('');
  const [activeSection, setActiveSection] = useState('hero');

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchModalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const handleOpenSearchModal = (initialQ = '') => {
    setSearchModalInitialQuery(initialQ);
    setSearchModalOpen(true);
  };

  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    setSelectedProgram(null);
    setTimeout(() => {
      const element = document.getElementById('programs-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleNavigate = (section) => {
    setActiveSection(section);
    setSelectedProgram(null); // return to page if modal is open
    const map = {
      hero: 'hero-section',
      programs: 'programs-section',
      setup: 'setup-section',
      playground: 'playground-section'
    };
    const id = map[section];
    if (id) {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  const handleScrollToSetup = () => {
    handleNavigate('setup');
  };

  return (
    <div className="corona-app">
      {/* 1. Header / Navbar */}
      <Navbar
        onOpenSearch={handleOpenSearchModal}
        onSelectCategory={handleSelectCategory}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main>
        {/* 2. Hero Section with Crimson Banner & Stat Cards */}
        <HeroSection onGetStarted={() => handleNavigate('programs')} />

        {/* 3. Table of Contents Grid (3 quick cards) */}
        <TableOfContentsGrid
          onSelectCategory={handleSelectCategory}
          onScrollToSetup={handleScrollToSetup}
        />

        {/* 4. All 25 Programs & Exercises Gallery */}
        <AllComponentsGrid
          programs={golangPrograms}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSelectProgram={setSelectedProgram}
        />

        {/* 5. Dual Environment Setup Section (Side-by-side Go CLI vs Docker) */}
        <SetupSection />

        {/* 6. Live Interactive Browser Playground */}
        <InteractivePlayground />
      </main>

      {/* 7. Footer */}
      <Footer 
        onSelectCategory={handleSelectCategory} 
        onScrollToSetup={handleScrollToSetup} 
      />

      {/* Program Detail View / Modal */}
      {selectedProgram && (
        <ProgramDetailPage
          program={selectedProgram}
          onClose={() => setSelectedProgram(null)}
          onSelectProgram={setSelectedProgram}
          allPrograms={golangPrograms}
        />
      )}

      {/* Global Ctrl+K Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        programs={golangPrograms}
        onSelectProgram={setSelectedProgram}
        initialQuery={searchModalInitialQuery}
      />
    </div>
  );
}
