import { useEffect, useRef } from 'react';
import csitanWebsite from '../assets/csitan-website.png';
import hiresphere from '../assets/hiresphere.png';
import ecommerce from '../assets/E-Commerce.jpg';
import hamrocsit from '../assets/hamrocsit.png';

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "CSITAN Rupandehi Website",
      description: "Official website for CSIT Association of Nepal - Rupandehi, a non-profit organization dedicated to bridging the gap between CSIT students, universities, and the industry. Features member testimonials, event management, team profiles, and community engagement tools.",
      tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
      github: "#",
      live: "https://rupandehi.csitan.org.np/",
      image: csitanWebsite
    },
    {
      title: "HireSphere - Job Portal",
      description: "A comprehensive job portal platform where job seekers can find their dream jobs and companies can hire talent. Features include user profiles, skill management, resume building, job applications, and admin job postings with 10K+ users successfully placed.",
      tech: ["React","Java", "SpringBoot", "MongoDB", "Express"],
      github: "#",
      live: "https://hire-sphere-rouge.vercel.app/",
      image: hiresphere
    },
    {
      title: "Spring Boot E-commerce Platform",
      description: "A comprehensive e-commerce platform built with Spring Boot featuring user authentication, product catalog management, shopping cart functionality, order processing, and admin dashboard for inventory management.",
      tech: ["Spring Boot", "Java", "MySQL", "Thymeleaf", "Bootstrap"],
      github: "https://github.com/Madhav-Poudel/Spring-boot-Ecommerce",
      live: "https://e-commerce-murex-ten-62.vercel.app/",
      image: ecommerce
    },
    {
      title: "HamroCSIT Clone",
      description: "A comprehensive educational platform for B.Sc. CSIT students featuring semester-wise notes, question banks, entrance preparation materials, and interactive study resources with user-friendly navigation.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      github: "https://github.com/username/hamrocsit-clone",
      live: "https://hamrocsitclone-phi.vercel.app/",
      image: hamrocsit
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Projects Background */}
      <div className="absolute inset-0 z-0">
        
        {/* Project Development Flow Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Dev Icons */}
          <div className="absolute top-16 left-[8%] text-blue-400/25 text-4xl animate-bounce" style={{animationDuration: '3s'}}>
            <div>⚛️</div>
          </div>
          <div className="absolute top-24 right-[12%] text-green-400/30 text-3xl animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
            <div>🔧</div>
          </div>
          <div className="absolute bottom-20 left-[15%] text-purple-400/25 text-3xl animate-bounce" style={{animationDuration: '3.5s', animationDelay: '2s'}}>
            <div>🚀</div>
          </div>
          <div className="absolute bottom-28 right-[18%] text-cyan-400/30 text-4xl animate-bounce" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}>
            <div>💻</div>
          </div>
          <div className="absolute top-1/2 left-[5%] text-yellow-400/25 text-3xl animate-bounce" style={{animationDuration: '4.5s', animationDelay: '1.5s'}}>
            <div>⚡</div>
          </div>
          <div className="absolute top-1/3 right-[8%] text-red-400/25 text-3xl animate-bounce" style={{animationDuration: '3.8s', animationDelay: '2.5s'}}>
            <div>🎯</div>
          </div>
        </div>

        {/* Code Repository Streams */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-12 left-[20%] text-green-400/20 font-mono text-lg animate-pulse" style={{animationDuration: '2s'}}>
            <div className="space-y-2">
              <div>git init</div>
              <div>git add .</div>
              <div>git commit -m "feat"</div>
              <div>git push origin</div>
            </div>
          </div>
          
          <div className="absolute top-32 right-[25%] text-blue-400/25 font-mono text-base animate-pulse" style={{animationDuration: '3s', animationDelay: '1s'}}>
            <div className="space-y-2">
              <div>npm create react-app</div>
              <div>npm install</div>
              <div>npm run build</div>
              <div>deployment ✓</div>
            </div>
          </div>
          
          <div className="absolute bottom-16 left-[22%] text-purple-400/20 font-mono text-base animate-pulse" style={{animationDuration: '2.8s', animationDelay: '2s'}}>
            <div className="space-y-2">
              <div>const project = &#123;</div>
              <div>  tech: ['React'],</div>
              <div>  status: 'completed'</div>
              <div>&#125;;</div>
            </div>
          </div>
          
          <div className="absolute bottom-32 right-[20%] text-cyan-400/25 font-mono text-base animate-pulse" style={{animationDuration: '3.5s', animationDelay: '1.5s'}}>
            <div className="space-y-2">
              <div>// Project Features</div>
              <div>✓ Responsive Design</div>
              <div>✓ Modern UI/UX</div>
              <div>✓ Performance Optimized</div>
            </div>
          </div>
        </div>

        {/* Tech Stack Orbital Animation */}
        <div className="absolute inset-0">
          {/* Large orbital rings */}
          <div className="absolute top-20 left-20 w-64 h-64 border border-blue-400/20 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
          <div className="absolute top-28 left-28 w-48 h-48 border border-cyan-400/15 rounded-full animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
          <div className="absolute bottom-16 right-16 w-72 h-72 border border-purple-400/15 rounded-full animate-spin" style={{animationDuration: '35s'}}></div>
          <div className="absolute bottom-24 right-24 w-56 h-56 border border-green-400/20 rounded-full animate-spin" style={{animationDuration: '28s', animationDirection: 'reverse'}}></div>
          
          {/* Small tech dots on orbits */}
          <div className="absolute top-32 left-[200px] w-3 h-3 bg-blue-400/40 rounded-full animate-pulse"></div>
          <div className="absolute top-[140px] left-[160px] w-2 h-2 bg-cyan-400/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-[100px] right-[180px] w-4 h-4 bg-purple-400/35 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-[140px] right-[140px] w-3 h-3 bg-green-400/45 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>

        {/* Development Workflow Connections */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-15">
            <defs>
              <linearGradient id="projectFlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
                <stop offset="25%" stopColor="#06b6d4" stopOpacity="0.6"/>
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.7"/>
                <stop offset="75%" stopColor="#10b981" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.6"/>
              </linearGradient>
            </defs>
            
            {/* Project workflow paths */}
            <path d="M100,80 Q400,40 700,80 T1300,80" fill="none" stroke="url(#projectFlow)" strokeWidth="4">
              <animate attributeName="d" values="M100,80 Q400,40 700,80 T1300,80;M100,120 Q400,80 700,120 T1300,120;M100,80 Q400,40 700,80 T1300,80" dur="8s" repeatCount="indefinite"/>
            </path>
            <path d="M0,180 Q500,130 1000,180 T2000,180" fill="none" stroke="url(#projectFlow)" strokeWidth="3">
              <animate attributeName="d" values="M0,180 Q500,130 1000,180 T2000,180;M0,150 Q500,100 1000,150 T2000,150;M0,180 Q500,130 1000,180 T2000,180" dur="10s" repeatCount="indefinite"/>
            </path>
            <path d="M150,280 Q350,230 550,280 T950,280" fill="none" stroke="url(#projectFlow)" strokeWidth="3.5">
              <animate attributeName="d" values="M150,280 Q350,230 550,280 T950,280;M150,320 Q350,270 550,320 T950,320;M150,280 Q350,230 550,280 T950,280" dur="7s" repeatCount="indefinite"/>
            </path>
            
            {/* Data flow nodes */}
            <circle cx="400" cy="80" r="6" fill="#3b82f6" opacity="0.8">
              <animate attributeName="r" values="6;12;6" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="700" cy="180" r="5" fill="#06b6d4" opacity="0.7">
              <animate attributeName="r" values="5;10;5" dur="4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="350" cy="280" r="7" fill="#8b5cf6" opacity="0.6">
              <animate attributeName="r" values="7;14;7" dur="2.5s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>

        {/* Floating Tech Badges */}
        <div className="absolute inset-0">
          <div className="absolute top-[15%] left-[70%] px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-mono animate-pulse" style={{animationDuration: '3s'}}>
            React
          </div>
          <div className="absolute top-[25%] right-[15%] px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm font-mono animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}>
            Node.js
          </div>
          <div className="absolute bottom-[30%] left-[65%] px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-mono animate-pulse" style={{animationDuration: '3.5s', animationDelay: '2s'}}>
            MongoDB
          </div>
          <div className="absolute bottom-[20%] right-[25%] px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-mono animate-pulse" style={{animationDuration: '2.8s', animationDelay: '0.5s'}}>
            TypeScript
          </div>
        </div>
        
        {/* Subtle overlay for content readability */}
        <div className="absolute inset-0 bg-gray-900/75"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text mb-6">
            Featured <span className="text-portfolio-accent">Projects</span>
          </h2>
          {/* Decorative line */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gray-600 flex-1 max-w-16"></div>
            <div className="mx-4 w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="h-px bg-cyan-400 flex-1 max-w-24"></div>
            <div className="mx-4 w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="h-px bg-gray-600 flex-1 max-w-16"></div>
          </div>
          <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto">
            A showcase of my recent work, featuring full-stack applications 
            built with modern technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={project.title} className="project-card group">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  onContextMenu={e => e.preventDefault()}
                  onDragStart={e => e.preventDefault()}
                />
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-portfolio-text mb-3 group-hover:text-portfolio-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-portfolio-text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech?.map((tech, techIndex) => (
                  <span key={tech} className="skill-badge text-sm">
                    {tech}
                  </span>
                )) || null}
              </div>

              <div className="flex gap-4">
                <a 
                  href={project.github}
                  className="inline-flex items-center text-portfolio-text-muted hover:text-portfolio-accent transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Code
                </a>
                <a 
                  href={project.live}
                  className="inline-flex items-center text-portfolio-text-muted hover:text-portfolio-accent transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;