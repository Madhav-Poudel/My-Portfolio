import { useState } from 'react';
import logo from '../assets/logo.png';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/98 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl">
  <div className="w-full max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Clean Professional Logo */}
          <button 
            className="text-2xl font-bold text-white cursor-pointer hover:text-cyan-400 transition-all duration-300"
            onClick={() => scrollToSection('hero')}
            aria-label="Home"
          >
            <img src={logo} alt="Logo" className="h-8 w-8 sm:h-12 sm:w-12 object-contain" onContextMenu={e => e.preventDefault()} onDragStart={e => e.preventDefault()} />
          </button>
          
          {/* Clean Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-2 lg:space-x-4">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="relative px-4 py-2.5 text-sm lg:text-base text-slate-300 hover:text-white transition-all duration-300 font-medium group"
            >
              <span className="relative block">
                Home
                <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-cyan-400 rounded transition-all duration-300 group-hover:w-8" style={{transform: 'translateX(-50%)'}}></span>
              </span>
            </button>
            
            <button 
              onClick={() => scrollToSection('about')} 
              className="relative px-4 py-2.5 text-sm lg:text-base text-slate-300 hover:text-white transition-all duration-300 font-medium group"
            >
              <span className="relative block">
                About
                <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-cyan-400 rounded transition-all duration-300 group-hover:w-8" style={{transform: 'translateX(-50%)'}}></span>
              </span>
            </button>
            
            <button 
              onClick={() => scrollToSection('projects')} 
              className="relative px-4 py-2.5 text-sm lg:text-base text-slate-300 hover:text-white transition-all duration-300 font-medium group"
            >
              <span className="relative block">
                Projects
                <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-cyan-400 rounded transition-all duration-300 group-hover:w-8" style={{transform: 'translateX(-50%)'}}></span>
              </span>
            </button>
            
            <button 
              onClick={() => scrollToSection('skills')} 
              className="relative px-4 py-2.5 text-sm lg:text-base text-slate-300 hover:text-white transition-all duration-300 font-medium group"
            >
              <span className="relative block">
                Skills
                <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-cyan-400 rounded transition-all duration-300 group-hover:w-8" style={{transform: 'translateX(-50%)'}}></span>
              </span>
            </button>
            
            <button 
              onClick={() => scrollToSection('experience')} 
              className="relative px-4 py-2.5 text-sm lg:text-base text-slate-300 hover:text-white transition-all duration-300 font-medium group"
            >
              <span className="relative block">
                Experience
                <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-cyan-400 rounded transition-all duration-300 group-hover:w-8" style={{transform: 'translateX(-50%)'}}></span>
              </span>
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')} 
              className="relative px-4 py-2.5 text-sm lg:text-base text-slate-300 hover:text-white transition-all duration-300 font-medium group"
            >
              <span className="relative block">
                Contact
                <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-cyan-400 rounded transition-all duration-300 group-hover:w-8" style={{transform: 'translateX(-50%)'}}></span>
              </span>
            </button>

            <a
              href="/CV-Madhav.pdf"
              download
              className="inline-flex items-center space-x-2 px-4 py-2 text-sm text-white bg-slate-600 hover:bg-slate-700 rounded-full shadow-sm transition-colors duration-200 ml-2"
              aria-label="Download CV"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m7-7H5" />
              </svg>
              <span>Download CV</span>
            </a>
          </div>

          {/* Clean Mobile Menu Button */}
          <div className="sm:hidden">
            <button 
              className="relative p-2.5 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Clean Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden border-t border-slate-700/50 bg-slate-950/98 backdrop-blur-xl mt-4">
            <div className="px-4 py-6 space-y-2">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="block w-full text-left px-4 py-3 text-base text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all duration-300 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block w-full text-left px-4 py-3 text-base text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all duration-300 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="block w-full text-left px-4 py-3 text-base text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all duration-300 font-medium"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="block w-full text-left px-4 py-3 text-base text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all duration-300 font-medium"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('experience')} 
                className="block w-full text-left px-4 py-3 text-base text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all duration-300 font-medium"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-left px-4 py-3 text-base text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all duration-300 font-medium"
              >
                Contact
              </button>
              <a
                href="/CV-Madhav.pdf"
                download
                className="flex items-center space-x-2 px-3 py-2 text-sm text-white bg-slate-600 hover:bg-slate-700 rounded-full shadow-sm transition-colors duration-200 mt-2"
                aria-label="Download CV"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m7-7H5" />
                </svg>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;