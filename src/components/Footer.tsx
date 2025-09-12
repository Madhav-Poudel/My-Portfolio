import logo from '../assets/logo.png';

// Add Google Fonts link for Merienda
if (typeof document !== 'undefined') {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-charcoal border-t border-portfolio-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="text-3xl font-bold text-portfolio-accent">
              <span className="text-4xl text-portfolio-accent drop-shadow-lg" style={{ fontFamily: 'Merienda, cursive' }}>Madhav Poudel</span>
            </div>
            <p className="text-portfolio-text-muted leading-relaxed">
              Full-stack developer crafting exceptional digital experiences with modern technologies and clean, scalable solutions.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-portfolio-text relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-portfolio-accent"></div>
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-300 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-300 text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-300 text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-300 text-left"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-portfolio-text relative">
              Get In Touch
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-portfolio-accent"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-portfolio-text-muted">
                <div className="w-10 h-10 bg-portfolio-accent/10 border border-portfolio-accent/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-portfolio-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>official.madhavpoudel@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-portfolio-text-muted">
                <div className="w-10 h-10 bg-portfolio-accent/10 border border-portfolio-accent/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-portfolio-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <span>Butwal, Rupandehi Nepal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-portfolio-accent/20 mb-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <div className="text-portfolio-text-muted text-sm">
            © {currentYear} Madhav Poudel. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;