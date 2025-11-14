import presidentPortrait from '../assets/president.jpg';
import Particles from 'react-tsparticles';
import React from "react";

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Particle Effect Background */}
      <div className="absolute inset-0 z-0">
        {/* Dark overlay above SVG background */}
        <div className="absolute inset-0 z-10 bg-black" style={{opacity:0.55}}></div>
        {/* Enhanced Tech Web SVG Animated Background */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" style={{zIndex:0}}>
          <defs>
            <linearGradient id="techGradient" x1="0" y1="0" x2="1440" y2="800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00B4D8" />
              <stop offset="1" stopColor="#3A0CA3" />
            </linearGradient>
            <radialGradient id="radial" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3A0CA3" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#00B4D8" stopOpacity="0" />
            </radialGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="12" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {/* Animated central circle */}
          <circle cx="720" cy="400" r="320" fill="url(#radial)" filter="url(#glow)">
            <animate attributeName="r" values="320;340;320" dur="6s" repeatCount="indefinite" />
          </circle>
          {/* Animated tech lines */}
          <path d="M0,400 Q720,0 1440,400 Q720,800 0,400 Z" stroke="url(#techGradient)" strokeWidth="8" fill="none" opacity="0.3">
            <animate attributeName="d" values="M0,400 Q720,0 1440,400 Q720,800 0,400 Z;M0,420 Q720,40 1440,420 Q720,780 0,420 Z;M0,400 Q720,0 1440,400 Q720,800 0,400 Z" dur="8s" repeatCount="indefinite" />
          </path>
          <path d="M200,200 Q720,600 1240,200" stroke="url(#techGradient)" strokeWidth="4" fill="none" opacity="0.2">
            <animate attributeName="d" values="M200,200 Q720,600 1240,200;M220,220 Q720,580 1220,220;M200,200 Q720,600 1240,200" dur="7s" repeatCount="indefinite" />
          </path>
          {/* Multiple animated circles */}
          <circle cx="400" cy="200" r="40" stroke="url(#techGradient)" strokeWidth="3" fill="none" opacity="0.3">
            <animate attributeName="r" values="40;50;40" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="1000" cy="600" r="30" stroke="url(#techGradient)" strokeWidth="3" fill="none" opacity="0.4">
            <animate attributeName="r" values="30;40;30" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="600" r="25" stroke="url(#techGradient)" strokeWidth="2" fill="none" opacity="0.2">
            <animate attributeName="r" values="25;35;25" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle cx="1340" cy="300" r="35" stroke="url(#techGradient)" strokeWidth="2" fill="none" opacity="0.3">
            <animate attributeName="r" values="35;45;35" dur="5.5s" repeatCount="indefinite" />
          </circle>
          {/* Tech grid overlay */}
          <g opacity="0.1">
            {Array.from({length: 10}).map((_, i) => (
              <line 
                key={`v-${i}`}
                x1={i * 144} 
                y1="0" 
                x2={i * 144} 
                y2="800" 
                stroke="url(#techGradient)" 
                strokeWidth="1"
              />
            ))}
            {Array.from({length: 6}).map((_, i) => (
              <line 
                key={`h-${i}`}
                x1="0" 
                y1={i * 133} 
                x2="1440" 
                y2={i * 133} 
                stroke="url(#techGradient)" 
                strokeWidth="1"
              />
            ))}
          </g>
          {/* Floating tech symbols */}
          <g stroke="url(#techGradient)" strokeWidth="2" fill="none" opacity="0.2">
            <rect x="300" y="150" width="40" height="40" rx="8">
              <animateTransform attributeName="transform" type="rotate" values="0 320 170;360 320 170" dur="20s" repeatCount="indefinite" />
            </rect>
            <polygon points="800,100 830,140 770,140">
              <animateTransform attributeName="transform" type="rotate" values="0 800 120;360 800 120" dur="15s" repeatCount="indefinite" />
            </polygon>
            <circle cx="1200" cy="150" r="20">
              <animateTransform attributeName="transform" type="rotate" values="0 1200 150;360 1200 150" dur="18s" repeatCount="indefinite" />
            </circle>
            <rect x="150" y="500" width="30" height="30" rx="5">
              <animateTransform attributeName="transform" type="rotate" values="0 165 515;360 165 515" dur="12s" repeatCount="indefinite" />
            </rect>
            <polygon points="1100,650 1130,690 1070,690">
              <animateTransform attributeName="transform" type="rotate" values="0 1100 670;360 1100 670" dur="16s" repeatCount="indefinite" />
            </polygon>
          </g>
        </svg>
        {/* Particle System */}
        <Particles
          id="tsparticles"
          style={{position: 'absolute', width: '100%', height: '100%', zIndex: 5}}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#00B4D8",
              },
              links: {
                color: "#00B4D8",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent animate-fade-in">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Sandesh Tamang
              </span>
            </h1>
                  {/* Available for new projects badge - solid, no gradient */}
                  <div className="w-fit mb-6 animate-fade-in-delay flex items-center gap-2">
                    <span className="px-4 py-2 rounded-lg bg-white/80 border border-green-500 text-green-700 font-semibold shadow flex items-center gap-2">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-500"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#22c55e"/><path stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4"/></svg>
                      Available for new projects
                    </span>
                  </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
              Full Stack Developer & Computer Science Student
            </p>
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-delay-2">
              <button 
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                View My Work
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Download CV
              </button>
            </div>
          </div>

          {/* Image and React code box on right */}
          <div className="flex flex-col items-end animate-fade-in-delay-3">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <img 
                src={presidentPortrait} 
                alt="Sandesh Tamang" 
                className="relative w-80 h-80 object-cover rounded-full border-4 border-cyan-400 shadow-2xl hover:scale-105 transition-transform duration-300"
                style={{ WebkitUserDrag: 'none' }}
                draggable={false}

              />
            </div>
            {/* React code box moved to right side */}
            <div className="w-fit bg-black/90 border border-gray-600/30 rounded-lg backdrop-blur-sm text-xs p-4 shadow-lg" style={{marginRight: 0}}>
              <div className="text-gray-400 font-mono space-y-1">
                <div className="text-cyan-300">const data = await fetch('/api/users');</div>
                <div className="text-yellow-300">if (data.ok) &#123;</div>
                <div className="text-green-300 ml-2">console.log('Success');</div>
                <div className="text-purple-300 ml-2">updateUI(data.json());</div>
                <div className="text-yellow-300">&#125;</div>
                <div className="text-orange-300">export default App;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
