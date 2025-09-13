import presidentPortrait from '../assets/president.jpg';
import Particles from 'react-tsparticles';
import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down more than 300px
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden w-full">
      {/* Particle Effect Background */}
      <div className="absolute inset-0 z-0">
        {/* Pure Dark Matrix Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-slate-950"></div>
        
        {/* Minimal Dark Grid (hidden on small screens for performance) */}
        <div className="absolute inset-0 hidden sm:block">
          <svg className="absolute inset-0 w-full h-full opacity-15">
            <defs>
              <pattern id="darkGrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="transparent"/>
                <path d="M100,0 L0,0 L0,100" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.1"/>
                <circle cx="0" cy="0" r="1" fill="#ffffff" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#darkGrid)"/>
          </svg>
        </div>
        
        {/* Subtle Dark Streams (hidden on small screens) */}
        <div className="absolute inset-0 hidden sm:block overflow-hidden">
          <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-0 left-[60%] w-px h-full bg-gradient-to-b from-transparent via-gray-400/15 to-transparent animate-pulse delay-2000"></div>
          <div className="absolute top-0 left-[80%] w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse delay-500"></div>
        </div>
        
        {/* Simple Code Box */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Code Box - Top center */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 translate-x-[500px] p-4 bg-black/95 border border-gray-600/20 rounded-lg backdrop-blur-sm text-xs opacity-20">
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
        
        {/* Dark Particles */}
        <div className="absolute inset-0 hidden sm:block">
          <div className="absolute top-32 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-ping delay-1000"></div>
          <div className="absolute top-64 right-1/3 w-1 h-1 bg-gray-400/30 rounded-full animate-ping delay-2000"></div>
          <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-white/30 rounded-full animate-ping delay-3000"></div>
          <div className="absolute bottom-24 right-1/4 w-1 h-1 bg-gray-300/40 rounded-full animate-ping delay-4000"></div>
        </div>
        
        {/* Simple Static Elements */}
        <div className="absolute inset-0">
          {/* Minimal static design elements */}
        </div>
        
        {/* Static Dark Elements - No Movement */}
        <div className="absolute inset-0">
          {/* Simple static particles */}
        </div>
        
        {/* Dark Professional Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/40 via-transparent to-black/60"></div>
        {/* 3D Tech Elements Animated Background */}
        <svg className="absolute inset-0 w-full h-full z-20" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="techGradient" x1="0" y1="0" x2="1440" y2="800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00D2FF" />
              <stop offset="0.5" stopColor="#3A7BD5" />
              <stop offset="1" stopColor="#1E3A8A" />
            </linearGradient>
            <linearGradient id="accentGradient" x1="0" y1="0" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06B6D4" />
              <stop offset="1" stopColor="#0891B2" />
            </linearGradient>
            <linearGradient id="codeGradient" x1="0" y1="0" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10B981" />
              <stop offset="1" stopColor="#059669" />
            </linearGradient>
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="40%">
              <stop offset="0%" stopColor="#3A7BD5" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00D2FF" stopOpacity="0" />
            </radialGradient>
            <filter id="techGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="shadow3D" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="4" dy="4" stdDeviation="3" floodColor="#1E3A8A" floodOpacity="0.3"/>
            </filter>
          </defs>
          
          {/* 3D Cube Elements */}
          <g transform="translate(200,150)" filter="url(#shadow3D)">
            <polygon points="0,0 40,0 60,20 20,20" fill="url(#techGradient)" opacity="0.8"/>
            <polygon points="40,0 40,40 60,60 60,20" fill="url(#accentGradient)" opacity="0.6"/>
            <polygon points="0,0 0,40 20,60 20,20" fill="url(#codeGradient)" opacity="0.7"/>
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" values="0 30 30;360 30 30" dur="15s" repeatCount="indefinite"/>
          </g>
          
          <g transform="translate(1100,500)" filter="url(#shadow3D)">
            <polygon points="0,0 30,0 45,15 15,15" fill="url(#techGradient)" opacity="0.7"/>
            <polygon points="30,0 30,30 45,45 45,15" fill="url(#accentGradient)" opacity="0.5"/>
            <polygon points="0,0 0,30 15,45 15,15" fill="url(#codeGradient)" opacity="0.6"/>
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" values="0 22.5 22.5;-360 22.5 22.5" dur="20s" repeatCount="indefinite"/>
          </g>

          {/* Circuit Board Patterns */}
          <g opacity="0.3" filter="url(#techGlow)">
            <path d="M100,300 L200,300 L200,350 L250,350" stroke="url(#accentGradient)" strokeWidth="3" fill="none" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite"/>
            </path>
            <circle cx="200" cy="300" r="8" fill="url(#codeGradient)">
              <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="200" cy="350" r="6" fill="url(#accentGradient)"/>
            <circle cx="250" cy="350" r="8" fill="url(#techGradient)">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
            </circle>
          </g>

          <g opacity="0.4" filter="url(#techGlow)">
            <path d="M1200,200 L1300,200 L1300,120 L1350,120" stroke="url(#codeGradient)" strokeWidth="2" fill="none" strokeDasharray="3,3">
              <animate attributeName="stroke-dashoffset" values="0;-6" dur="3s" repeatCount="indefinite"/>
            </path>
            <rect x="1295" y="195" width="10" height="10" fill="url(#accentGradient)" rx="2">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
            </rect>
            <rect x="1345" y="115" width="10" height="10" fill="url(#techGradient)" rx="2"/>
          </g>

          {/* Binary Code Rain */}
          <g opacity="0.2" fill="url(#codeGradient)" fontSize="12" fontFamily="monospace">
            <text x="300" y="100">01001001</text>
            <text x="300" y="130">11010101</text>
            <text x="300" y="160">00110011</text>
            <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0,0;0,800" dur="12s" repeatCount="indefinite"/>
          </g>
          
          <g opacity="0.15" fill="url(#accentGradient)" fontSize="10" fontFamily="monospace">
            <text x="800" y="50">function()</text>
            <text x="800" y="70">const x = y</text>
            <text x="800" y="90">return true;</text>
            <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0,0;0,700" dur="15s" repeatCount="indefinite"/>
          </g>

          {/* 3D Hexagonal Tech Nodes */}
          <g transform="translate(500,250)" filter="url(#shadow3D)">
            <polygon points="30,0 60,17.5 60,52.5 30,70 0,52.5 0,17.5" fill="url(#techGradient)" opacity="0.6" stroke="url(#accentGradient)" strokeWidth="2"/>
            <polygon points="30,8 52,21 52,47 30,60 8,47 8,21" fill="url(#codeGradient)" opacity="0.4"/>
            <circle cx="30" cy="35" r="8" fill="url(#accentGradient)" opacity="0.8">
              <animate attributeName="r" values="8;12;8" dur="4s" repeatCount="indefinite"/>
            </circle>
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" values="0 30 35;360 30 35" dur="25s" repeatCount="indefinite"/>
          </g>

          <g transform="translate(900,400)" filter="url(#shadow3D)">
            <polygon points="25,0 50,14.4 50,43.3 25,57.7 0,43.3 0,14.4" fill="url(#accentGradient)" opacity="0.5" stroke="url(#techGradient)" strokeWidth="1.5"/>
            <polygon points="25,6 42,17.3 42,39.4 25,50.8 8,39.4 8,17.3" fill="url(#codeGradient)" opacity="0.3"/>
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" values="0 25 28.8;-360 25 28.8" dur="18s" repeatCount="indefinite"/>
          </g>

          {/* Floating Tech Icons */}
          <g transform="translate(150,600)" opacity="0.4" filter="url(#techGlow)">
            <rect x="0" y="0" width="30" height="20" rx="3" fill="none" stroke="url(#accentGradient)" strokeWidth="2"/>
            <rect x="5" y="5" width="20" height="10" rx="1" fill="url(#codeGradient)" opacity="0.6"/>
            <line x1="8" y1="8" x2="22" y2="8" stroke="url(#techGradient)" strokeWidth="1"/>
            <line x1="8" y1="12" x2="18" y2="12" stroke="url(#techGradient)" strokeWidth="1"/>
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="5s" repeatCount="indefinite"/>
            <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0,0;0,-20;0,0" dur="8s" repeatCount="indefinite"/>
          </g>

          <g transform="translate(1250,100)" opacity="0.3" filter="url(#techGlow)">
            <circle cx="15" cy="15" r="12" fill="none" stroke="url(#techGradient)" strokeWidth="2"/>
            <polygon points="15,8 20,13 15,18 10,13" fill="url(#accentGradient)"/>
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="6s" repeatCount="indefinite"/>
            <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0,0;0,20;0,0" dur="10s" repeatCount="indefinite"/>
          </g>

          {/* Central Tech Core */}
          <g transform="translate(720,400)" filter="url(#techGlow)">
            <circle cx="0" cy="0" r="80" fill="url(#centerGlow)" opacity="0.2">
              <animate attributeName="r" values="80;100;80" dur="8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="0" cy="0" r="40" fill="none" stroke="url(#techGradient)" strokeWidth="2" opacity="0.4" strokeDasharray="10,5">
              <animate attributeName="stroke-dashoffset" values="0;-15" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="0" cy="0" r="25" fill="none" stroke="url(#accentGradient)" strokeWidth="1" opacity="0.6" strokeDasharray="5,3">
              <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite"/>
            </circle>
          </g>

          {/* Grid Network Lines */}
          <defs>
            <pattern id="techGrid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="url(#techGradient)" strokeWidth="0.5" opacity="0.1"/>
              <circle cx="0" cy="0" r="2" fill="url(#accentGradient)" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#techGrid)"/>

          {/* Additional Animated Elements */}
          
          {/* Floating Data Streams */}
          <g opacity="0.3">
            <path d="M50,200 Q200,100 350,200 Q500,300 650,200" stroke="url(#accentGradient)" strokeWidth="2" fill="none" strokeDasharray="8,4">
              <animate attributeName="stroke-dashoffset" values="0;-24" dur="4s" repeatCount="indefinite"/>
            </path>
            <circle cx="50" cy="200" r="4" fill="url(#codeGradient)">
              <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="350" cy="200" r="3" fill="url(#techGradient)">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="650" cy="200" r="5" fill="url(#accentGradient)">
              <animate attributeName="r" values="5;10;5" dur="2.5s" repeatCount="indefinite"/>
            </circle>
          </g>

          {/* Orbiting Satellites */}
          <g transform="translate(400,500)">
            <circle cx="0" cy="0" r="60" fill="none" stroke="url(#techGradient)" strokeWidth="1" opacity="0.2" strokeDasharray="3,3"/>
            <g>
              <circle cx="60" cy="0" r="6" fill="url(#accentGradient)" filter="url(#techGlow)"/>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" values="0;360" dur="8s" repeatCount="indefinite"/>
            </g>
            <g>
              <circle cx="-60" cy="0" r="4" fill="url(#codeGradient)" filter="url(#techGlow)"/>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" values="0;-360" dur="6s" repeatCount="indefinite"/>
            </g>
          </g>

          <g transform="translate(1000,300)">
            <circle cx="0" cy="0" r="80" fill="none" stroke="url(#accentGradient)" strokeWidth="1" opacity="0.15" strokeDasharray="5,5"/>
            <g>
              <circle cx="80" cy="0" r="5" fill="url(#techGradient)" filter="url(#techGlow)"/>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" values="0;360" dur="12s" repeatCount="indefinite"/>
            </g>
            <g>
              <circle cx="0" cy="80" r="3" fill="url(#codeGradient)" filter="url(#techGlow)"/>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" values="0;360" dur="10s" repeatCount="indefinite"/>
            </g>
          </g>

          {/* Pulsing Tech Rings */}
          <g transform="translate(300,600)" opacity="0.4">
            <circle cx="0" cy="0" r="30" fill="none" stroke="url(#techGradient)" strokeWidth="2">
              <animate attributeName="r" values="30;50;30" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.4;0.1;0.4" dur="4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="0" cy="0" r="20" fill="none" stroke="url(#accentGradient)" strokeWidth="1">
              <animate attributeName="r" values="20;35;20" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="0" cy="0" r="10" fill="url(#codeGradient)" opacity="0.8">
              <animate attributeName="r" values="10;15;10" dur="2s" repeatCount="indefinite"/>
            </circle>
          </g>

          {/* Scanning Lines */}
          <g opacity="0.3">
            <line x1="0" y1="150" x2="1440" y2="150" stroke="url(#accentGradient)" strokeWidth="1">
              <animate attributeName="y1" values="150;800;150" dur="10s" repeatCount="indefinite"/>
              <animate attributeName="y2" values="150;800;150" dur="10s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="10s" repeatCount="indefinite"/>
            </line>
            <line x1="0" y1="600" x2="1440" y2="600" stroke="url(#codeGradient)" strokeWidth="1">
              <animate attributeName="y1" values="600;0;600" dur="12s" repeatCount="indefinite"/>
              <animate attributeName="y2" values="600;0;600" dur="12s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="12s" repeatCount="indefinite"/>
            </line>
          </g>

          {/* Matrix Code Columns */}
          <g opacity="0.2" fill="url(#codeGradient)" fontSize="10" fontFamily="monospace">
            <g>
              <text x="150" y="0">1</text>
              <text x="150" y="20">0</text>
              <text x="150" y="40">1</text>
              <text x="150" y="60">1</text>
              <text x="150" y="80">0</text>
              <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0,0;0,800" dur="8s" repeatCount="indefinite"/>
            </g>
            <g>
              <text x="600" y="0">0</text>
              <text x="600" y="20">1</text>
              <text x="600" y="40">0</text>
              <text x="600" y="60">0</text>
              <text x="600" y="80">1</text>
              <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0,-100;0,900" dur="10s" repeatCount="indefinite"/>
            </g>
            <g>
              <text x="1000" y="0">1</text>
              <text x="1000" y="20">1</text>
              <text x="1000" y="40">0</text>
              <text x="1000" y="60">1</text>
              <text x="1000" y="80">0</text>
              <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0,-200;0,1000" dur="12s" repeatCount="indefinite"/>
            </g>
          </g>

          {/* Floating Tech Symbols */}
          <g transform="translate(800,150)" opacity="0.4" filter="url(#techGlow)">
            <path d="M0,10 L10,0 L20,10 L10,20 Z" fill="none" stroke="url(#accentGradient)" strokeWidth="2"/>
            <circle cx="10" cy="10" r="3" fill="url(#codeGradient)">
              <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite"/>
            </circle>
            <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0,0;0,-50;0,0" dur="6s" repeatCount="indefinite"/>
          </g>

          <g transform="translate(200,400)" opacity="0.3" filter="url(#techGlow)">
            <polygon points="10,0 20,5 15,15 5,15 0,5" fill="none" stroke="url(#techGradient)" strokeWidth="1.5"/>
            <line x1="10" y1="5" x2="10" y2="10" stroke="url(#accentGradient)" strokeWidth="1"/>
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" values="0 10 7.5;360 10 7.5" dur="8s" repeatCount="indefinite"/>
            <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0,0;50,0;0,0" dur="12s" repeatCount="indefinite" additive="sum"/>
          </g>

          {/* Data Packets */}
          <g opacity="0.5">
            <rect x="100" y="350" width="15" height="8" rx="2" fill="url(#accentGradient)" filter="url(#techGlow)">
              <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0,0;1340,0;0,0" dur="15s" repeatCount="indefinite"/>
            </rect>
            <rect x="50" y="450" width="12" height="6" rx="1" fill="url(#codeGradient)" filter="url(#techGlow)">
              <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0,0;1390,0;0,0" dur="18s" repeatCount="indefinite"/>
            </rect>
            <rect x="200" y="500" width="18" height="10" rx="3" fill="url(#techGradient)" filter="url(#techGlow)">
              <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0,0;1240,0;0,0" dur="12s" repeatCount="indefinite"/>
            </rect>
          </g>

          {/* Holographic Panels */}
          <g transform="translate(1200,400)" opacity="0.3" filter="url(#techGlow)">
            <rect x="0" y="0" width="80" height="50" rx="5" fill="none" stroke="url(#accentGradient)" strokeWidth="1"/>
            <line x1="10" y1="10" x2="70" y2="10" stroke="url(#codeGradient)" strokeWidth="1" opacity="0.6"/>
            <line x1="10" y1="20" x2="50" y2="20" stroke="url(#codeGradient)" strokeWidth="1" opacity="0.4"/>
            <line x1="10" y1="30" x2="60" y2="30" stroke="url(#codeGradient)" strokeWidth="1" opacity="0.5"/>
            <circle cx="65" cy="40" r="3" fill="url(#techGradient)">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
            </circle>
            <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0,0;0,-30;0,0" dur="8s" repeatCount="indefinite"/>
          </g>

          {/* Energy Waves */}
          <g opacity="0.2">
            <ellipse cx="720" cy="400" rx="200" ry="50" fill="none" stroke="url(#accentGradient)" strokeWidth="1">
              <animate attributeName="rx" values="200;400;200" dur="6s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="6s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="720" cy="400" rx="150" ry="30" fill="none" stroke="url(#techGradient)" strokeWidth="1">
              <animate attributeName="rx" values="150;300;150" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite"/>
            </ellipse>
          </g>
        </svg>
        <div className="absolute inset-0 pointer-events-none z-30">
          <Particles
            id="tsparticles"
            options={{
              background: { color: { value: "transparent" } },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onHover: { enable: true, mode: "repulse" },
                  resize: true
                },
                modes: {
                  repulse: { distance: 100, duration: 0.4 }
                }
              },
              particles: {
                color: { value: "#00D2FF" },
                links: {
                  color: "#3A7BD5",
                  distance: 150,
                  enable: true,
                  opacity: 0.3,
                  width: 1
                },
                collisions: { enable: false },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: { default: "bounce" },
                  random: false,
                  speed: 1.5,
                  straight: false
                },
                number: { density: { enable: true, area: 800 }, value: 60 },
                opacity: { value: 0.7 },
                shape: { type: "circle" },
                size: { value: { min: 2, max: 4 } }
              },
              detectRetina: true
            }}
          />
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-40">
        {/* Left Content (text) - on small screens show first, on large keep as left column */}
        <div className="hero-text-slide mt-32 sm:mt-40 lg:mt-32 flex flex-col items-start justify-center text-left order-1 lg:order-1 w-full">
          <div className="mb-3 sm:mb-4 text-lg sm:text-xl lg:text-2xl xl:text-3xl text-portfolio-accent font-bold">Hey,</div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 leading-tight text-left">
            <span className="text-portfolio-text block">I build thoughtful web products.</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-portfolio-text-muted mb-6 sm:mb-8 leading-relaxed text-left max-w-lg">
            Full-Stack Developer crafting exceptional digital experiences with modern technologies and clean, scalable code.
          </p>

          {/* Status Indicator */}
          <div className="mt-4 sm:mt-6 mb-6 sm:mb-8">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/40 rounded-full backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
              <div className="relative">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="ml-2 sm:ml-3 text-green-300 font-semibold text-xs sm:text-sm tracking-wide group-hover:text-green-200 transition-colors duration-300">
                Available for new projects
              </span>
              <div className="ml-2 w-1 h-1 bg-green-400 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
  {/* Right Content - Portrait (on small screens comes after text) */}
  <div className="flex justify-center lg:justify-end relative z-10 order-2 lg:order-2 w-full">
          <div className="hero-image-rise relative flex flex-col items-center justify-center mt-8 sm:mt-12 lg:mt-20 xl:mt-28 lg:mr-16 xl:mr-24">
            <div className="relative flex items-center justify-center">
              {/* Epic rotating outer rings - responsive */}
              <div className="absolute w-56 h-56 sm:w-64 sm:h-64 lg:w-64 lg:h-64 xl:w-72 xl:h-72 border-2 border-cyan-400/20 rounded-full animate-spin opacity-30" style={{animationDuration: '20s'}}></div>
              <div className="absolute w-52 h-52 sm:w-60 sm:h-60 lg:w-60 lg:h-60 xl:w-68 xl:h-68 border border-purple-400/25 rounded-full animate-spin opacity-40" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
              
              {/* Holographic energy field - responsive */}
              <div className="absolute w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-88 xl:h-88"
                   style={{
                     background: 'conic-gradient(from 0deg, rgba(6, 182, 212, 0.1), rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))',
                     clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                     animation: 'spin 8s linear infinite'
                   }}>
              </div>
              
              {/* Dynamic particle swarm - responsive */}
              <div className="absolute w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                <div className="absolute top-8 left-12 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-100"></div>
                <div className="absolute top-16 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-300"></div>
                <div className="absolute top-24 left-8 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-500"></div>
                <div className="absolute bottom-16 right-12 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-700"></div>
                <div className="absolute bottom-8 left-16 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-900"></div>
                <div className="absolute bottom-20 right-8 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-1100"></div>
                <div className="absolute top-12 left-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1300"></div>
                <div className="absolute bottom-12 left-1/2 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-1500"></div>
              </div>
              
              {/* Outer octagon frame with energy pulse - responsive */}
              <div className="absolute w-52 h-52 sm:w-60 sm:h-60 lg:w-64 lg:h-64 xl:w-72 xl:h-72 border-2 border-cyan-400/40"
                   style={{
                     clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                     boxShadow: '0 0 40px rgba(6, 182, 212, 0.5), inset 0 0 20px rgba(147, 51, 234, 0.3)',
                     animation: 'pulse 2s ease-in-out infinite'
                   }}>
              </div>
              
              {/* Middle frame with holographic gradient - responsive */}
              <div className="absolute w-48 h-48 sm:w-56 sm:h-56 lg:w-60 lg:h-60 xl:w-68 xl:h-68 border border-purple-400/50"
                   style={{
                     clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                     background: 'linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))',
                     backgroundSize: '400% 400%',
                     animation: 'gradient 4s ease infinite'
                   }}>
              </div>
              
              {/* Outer lines on octagon angled cuts - responsive */}
              <div className="absolute w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-84 xl:h-84">
                {/* Top left angled cut */}
                <div className="absolute top-2 left-8 w-12 h-0.5 bg-cyan-400/80 animate-pulse transform rotate-45"></div>
                {/* Top right angled cut */}
                <div className="absolute top-2 right-8 w-12 h-0.5 bg-blue-400/80 animate-pulse delay-500 transform -rotate-45"></div>
                {/* Bottom left angled cut */}
                <div className="absolute bottom-2 left-8 w-12 h-0.5 bg-blue-400/80 animate-pulse delay-1000 transform -rotate-45"></div>
                {/* Bottom right angled cut */}
                <div className="absolute bottom-2 right-8 w-12 h-0.5 bg-cyan-400/80 animate-pulse delay-1500 transform rotate-45"></div>
                {/* Left top angled cut */}
                <div className="absolute top-8 left-2 w-0.5 h-12 bg-cyan-400/80 animate-pulse delay-2000 transform rotate-45"></div>
                {/* Left bottom angled cut */}
                <div className="absolute bottom-8 left-2 w-0.5 h-12 bg-blue-400/80 animate-pulse delay-3000 transform -rotate-45"></div>
                {/* Right top angled cut */}
                <div className="absolute top-8 right-2 w-0.5 h-12 bg-blue-400/80 animate-pulse delay-2500 transform -rotate-45"></div>
                {/* Right bottom angled cut */}
                <div className="absolute bottom-8 right-2 w-0.5 h-12 bg-cyan-400/80 animate-pulse delay-3500 transform rotate-45"></div>
              </div>
              
              {/* Scanning beam effect - responsive */}
              <div className="absolute w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 overflow-hidden"
                   style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
                     style={{animation: 'scan 3s linear infinite'}}>
                </div>
              </div>
              
              {/* Main image container with epic effects - responsive */}
              <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 overflow-hidden shadow-2xl bg-transparent flex items-center justify-center relative z-20 border-2 border-cyan-400/80"
                   style={{
                     clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                     boxShadow: '0 0 50px rgba(6, 182, 212, 0.6), inset 0 0 25px rgba(147, 51, 234, 0.3), 0 0 100px rgba(59, 130, 246, 0.4)',
                     filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.8))'
                   }}>
                <img 
                  src={presidentPortrait}
                  alt="Madhav Poudel - Professional Portrait"
                  className="w-full h-full object-cover scale-110"
                  style={{filter: 'contrast(1.1) brightness(1.05) saturate(1.1)'}}
                  onContextMenu={e => e.preventDefault()}
                  onDragStart={e => e.preventDefault()}
                />
              </div>

              {/* image and frame only in this relative block */}
            </div>

            {/* Ultimate Holographic Card */}
            <div className="mt-4 lg:mt-6 relative z-10 transform translate-x-0 lg:translate-x-2 xl:translate-x-4 flex justify-center">
              {/* Particle field - simplified colors */}
              <div className="absolute w-80 h-28">
                <div className="absolute top-2 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-100"></div>
                <div className="absolute top-6 right-8 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-500"></div>
                <div className="absolute bottom-4 left-12 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
                <div className="absolute bottom-2 right-4 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-1500"></div>
                <div className="absolute top-4 left-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-700"></div>
              </div>
              
              {/* Holographic main card */}
              <div className="absolute w-80 h-28">
                <div className="w-full h-full backdrop-blur-lg relative overflow-hidden"
                     style={{
                       background: 'rgba(0, 0, 0, 0.3)',
                       boxShadow: '0 0 40px rgba(0, 255, 255, 0.3), inset 0 0 40px rgba(255, 0, 255, 0.1)',
                       clipPath: 'polygon(10% 0%, 90% 0%, 100% 25%, 95% 75%, 85% 100%, 15% 100%, 5% 75%, 0% 25%)',
                       animation: 'hologramShift 4s ease-in-out infinite'
                     }}>
                  
                  {/* Holographic scan lines */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute w-full h-px bg-cyan-400/50 top-2 animate-pulse"></div>
                    <div className="absolute w-full h-px bg-cyan-400/50 top-6 animate-pulse delay-300"></div>
                    <div className="absolute w-full h-px bg-cyan-400/50 top-10 animate-pulse delay-600"></div>
                    <div className="absolute w-full h-px bg-cyan-400/50 bottom-6 animate-pulse delay-900"></div>
                    <div className="absolute w-full h-px bg-cyan-400/50 bottom-2 animate-pulse delay-1200"></div>
                  </div>
                  
                  {/* Holographic grid overlay */}
                  <div className="absolute inset-0 opacity-20"
                       style={{
                         backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,255,255,0.3) 1px, transparent 0)',
                         backgroundSize: '20px 20px'
                       }}>
                  </div>
                </div>
              </div>
              
              {/* Name content */}
              <div className="relative z-10 px-8 py-5 w-80 h-28 flex flex-col justify-center items-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 relative"
                    style={{
                      textShadow: '0 0 15px rgba(59, 130, 246, 0.6)'
                    }}>
                  Madhav Poudel
                  {/* Simple underline */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-blue-400"></div>
                </h3>
                {/* Simple Title */}
                <div className="relative">
                  <p className="text-blue-400 text-sm lg:text-base font-medium tracking-wider"
                    style={{
                       textShadow: '0 0 15px rgba(96, 165, 250, 0.8)',
                       fontWeight: '500',
                       letterSpacing: '2px'
                     }}>
                    Full Stack Developer
                  </p>
                  {/* Available for new projects badge - solid, no gradient */}
                  {/* Available for new projects badge */}
                  {/* Decorative dots */}
                  <div className="flex justify-center space-x-1 mt-1">
                    <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
                    <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-700"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* small spacer so layout below doesn't collide */}
            <div className="mt-20" />

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-portfolio-accent/10 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-portfolio-accent/20 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      {/* Arrow at bottom removed as requested */}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-cyan-400/20 hover:bg-cyan-400/30 border-2 border-cyan-400/40 hover:border-cyan-400/60 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 group"
          style={{
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)'
          }}
        >
          <svg 
            className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </section>
  );
};


export default HeroSection;
