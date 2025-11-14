import { useEffect, useRef } from 'react';
import nepathonLogo from '../assets/NepathonImg.png';
import csitanLogo from '../assets/rupandehi.png';
import emonicsLogo from '../assets/Emonics.png';
import coderawlingoLogo from '../assets/coderawlingo.png';
import bootwalLogo from '../assets/bootwal.png';
import nepathyaLogo from '../assets/nepathya.png';

const ExperienceSection = () => {
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

  const experiences = [
    {
      title: "President",
      company: "CSIT Association of Nepal-Rupandehi",
      period: "2024 - Present",
      description: "Leading the CSIT Association of Nepal-Rupandehi, organizing events, managing teams, and representing the association at various platforms. Promoting technology education and collaboration among students.",
      technologies: ["Leadership", "Event Management", "Teamwork", "Public Speaking"],
      type: "Leadership",
      logo: csitanLogo
    },
    {
      title: "Event Lead",
      company: "Nepathon Vol. 1",
      period: "October 28 - November 03, 2025",
      description: "Led the organization and execution of Nepathon Vol. 1, a national-level 48-hour hackathon by FusionStack and Nepathya College. Coordinated event logistics, managed 100+ participants, and supervised technical competitions to facilitate innovative real-world solutions.",
      technologies: ["Event Management", "Leadership", "Team Coordination", "Technical Supervision", "Project Management"],
      type: "Leadership",
      logo: nepathonLogo
    },
    {
      title: "Full Stack Developer",
      company: "Emonics Technologies",
      period: "2025 - Present",
      description: "Developing modern web applications using React, Node.js, and cloud technologies. Leading a team of 3 developers and implementing best practices.",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
      type: "Part-time",
      logo: emonicsLogo
    },
    {
      title: "Full Stack Developer",
      company: "CodeRawLingo",
      period: "2024 - 2025",
      description: "Developing full-stack web applications using React for frontend and Java Spring Boot for backend. Working with PostgreSQL databases and implementing RESTful APIs for various client projects.",
      technologies: ["React", "Java", "Spring Boot", "PostgreSQL"],
      type: "Full-time",
      logo: coderawlingoLogo
    },
    {
      title: "Junior Frontend Developer",
      company: "Bootwal R & D Company",
      period: "2023 - 2024",
      description: "Developed responsive user interfaces using HTML, CSS, and React. Collaborated with the development team to create user-friendly web applications and gained hands-on experience in modern frontend technologies.",
      technologies: ["HTML", "CSS", "React"],
      type: "Full-time",
      logo: bootwalLogo
    },
    {
      title: "Computer Science Student",
      company: "Nepathya College (Affiliated to Tribhuvan University)",
      period: "2022 - Present",
      description: "Currently pursuing Bachelor's degree in Computer Science with focus on software engineering, algorithms, and database systems. Learning programming fundamentals and object-oriented programming concepts.",
      technologies: ["Java", "C++", "Data Structures", "C#"],
      type: "Education",
      logo: nepathyaLogo
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-portfolio-charcoal relative overflow-hidden">
      {/* Animated Professional Experience Background */}
      <div className="absolute inset-0 z-0">
        
        {/* Career Journey Timeline Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Professional Icons */}
          <div className="absolute top-16 left-[8%] text-blue-400/25 text-5xl animate-bounce" style={{animationDuration: '4s'}}>
            <div>💼</div>
          </div>
          <div className="absolute top-24 right-[12%] text-green-400/30 text-4xl animate-bounce" style={{animationDuration: '3.5s', animationDelay: '1s'}}>
            <div>🏢</div>
          </div>
          <div className="absolute bottom-20 left-[15%] text-purple-400/25 text-4xl animate-bounce" style={{animationDuration: '3s', animationDelay: '2s'}}>
            <div>🎯</div>
          </div>
          <div className="absolute bottom-28 right-[18%] text-cyan-400/30 text-5xl animate-bounce" style={{animationDuration: '4.5s', animationDelay: '0.5s'}}>
            <div>📈</div>
          </div>
          <div className="absolute top-1/2 left-[5%] text-yellow-400/25 text-4xl animate-bounce" style={{animationDuration: '3.8s', animationDelay: '1.5s'}}>
            <div>🚀</div>
          </div>
          <div className="absolute top-1/3 right-[8%] text-orange-400/25 text-4xl animate-bounce" style={{animationDuration: '3.2s', animationDelay: '2.5s'}}>
            <div>⭐</div>
          </div>
        </div>

        {/* Professional Development Code Snippets */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-12 left-[25%] text-blue-400/15 font-mono text-sm animate-pulse" style={{animationDuration: '2.5s'}}>
            <div className="space-y-2">
              <div>class Developer &#123;</div>
              <div>  experience: '3+ years'</div>
              <div>  expertise: 'Full Stack'</div>
              <div>  growth: 'continuous'</div>
              <div>&#125;</div>
            </div>
          </div>
          
          <div className="absolute top-32 right-[28%] text-green-400/20 font-mono text-sm animate-pulse" style={{animationDuration: '3s', animationDelay: '1s'}}>
            <div className="space-y-2">
              <div>{/* Career Progression */}</div>
              <div>Junior → Mid → Senior</div>
              <div>Frontend → Full Stack</div>
              <div>Individual → Team Lead</div>
            </div>
          </div>
          
          <div className="absolute bottom-16 left-[28%] text-purple-400/15 font-mono text-sm animate-pulse" style={{animationDuration: '2.8s', animationDelay: '2s'}}>
            <div className="space-y-2">
              <div>const achievements = [</div>
              <div>  'Led 3+ dev teams',</div>
              <div>  'Deployed 50+ projects',</div>
              <div>  'Mentored 10+ devs'</div>
              <div>];</div>
            </div>
          </div>
          
          <div className="absolute bottom-32 right-[25%] text-cyan-400/20 font-mono text-sm animate-pulse" style={{animationDuration: '3.5s', animationDelay: '1.5s'}}>
            <div className="space-y-2">
              <div>{/* Professional Skills */}</div>
              <div>Leadership ✓</div>
              <div>Problem Solving ✓</div>
              <div>Project Management ✓</div>
              <div>Team Collaboration ✓</div>
            </div>
          </div>
        </div>

        {/* Corporate Network Visualization */}
        <div className="absolute inset-0">
          {/* Company ecosystem circles */}
          <div className="absolute top-20 left-20 w-96 h-96 border border-blue-400/12 rounded-full animate-spin" style={{animationDuration: '50s'}}></div>
          <div className="absolute top-32 left-32 w-72 h-72 border border-cyan-400/15 rounded-full animate-spin" style={{animationDuration: '45s', animationDirection: 'reverse'}}></div>
          <div className="absolute top-44 left-44 w-48 h-48 border border-purple-400/12 rounded-full animate-spin" style={{animationDuration: '40s'}}></div>
          
          <div className="absolute bottom-16 right-16 w-80 h-80 border border-green-400/12 rounded-full animate-spin" style={{animationDuration: '55s'}}></div>
          <div className="absolute bottom-28 right-28 w-64 h-64 border border-orange-400/15 rounded-full animate-spin" style={{animationDuration: '48s', animationDirection: 'reverse'}}></div>
          
          {/* Career milestone nodes */}
          <div className="absolute top-36 left-[280px] w-5 h-5 bg-blue-400/25 rounded-full animate-pulse"></div>
          <div className="absolute top-[180px] left-[220px] w-4 h-4 bg-cyan-400/35 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-[140px] left-[360px] w-6 h-6 bg-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-[120px] right-[240px] w-5 h-5 bg-green-400/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-[180px] right-[180px] w-4 h-4 bg-orange-400/35 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        {/* Professional Growth Pathways */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-8">
            <defs>
              <linearGradient id="careerPath" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4"/>
                <stop offset="25%" stopColor="#06b6d4" stopOpacity="0.5"/>
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3"/>
                <stop offset="75%" stopColor="#10b981" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.5"/>
              </linearGradient>
            </defs>
            
            {/* Career progression paths */}
            <path d="M150,120 Q450,80 750,120 T1350,120" fill="none" stroke="url(#careerPath)" strokeWidth="4">
              <animate attributeName="d" values="M150,120 Q450,80 750,120 T1350,120;M150,160 Q450,120 750,160 T1350,160;M150,120 Q450,80 750,120 T1350,120" dur="12s" repeatCount="indefinite"/>
            </path>
            <path d="M0,220 Q400,180 800,220 T1600,220" fill="none" stroke="url(#careerPath)" strokeWidth="5">
              <animate attributeName="d" values="M0,220 Q400,180 800,220 T1600,220;M0,190 Q400,150 800,190 T1600,190;M0,220 Q400,180 800,220 T1600,220" dur="14s" repeatCount="indefinite"/>
            </path>
            <path d="M250,320 Q550,270 850,320 T1450,320" fill="none" stroke="url(#careerPath)" strokeWidth="3">
              <animate attributeName="d" values="M250,320 Q550,270 850,320 T1450,320;M250,360 Q550,310 850,360 T1450,360;M250,320 Q550,270 850,320 T1450,320" dur="10s" repeatCount="indefinite"/>
            </path>
            <path d="M100,420 Q400,370 700,420 T1300,420" fill="none" stroke="url(#careerPath)" strokeWidth="3.5">
              <animate attributeName="d" values="M100,420 Q400,370 700,420 T1300,420;M100,390 Q400,340 700,390 T1300,390;M100,420 Q400,370 700,420 T1300,420" dur="11s" repeatCount="indefinite"/>
            </path>
            
            {/* Career milestone indicators */}
            <circle cx="450" cy="120" r="10" fill="#3b82f6" opacity="0.5">
              <animate attributeName="r" values="10;20;10" dur="5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="800" cy="220" r="8" fill="#06b6d4" opacity="0.6">
              <animate attributeName="r" values="8;16;8" dur="4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="550" cy="320" r="12" fill="#8b5cf6" opacity="0.4">
              <animate attributeName="r" values="12;24;12" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="400" cy="420" r="9" fill="#10b981" opacity="0.5">
              <animate attributeName="r" values="9;18;9" dur="4.5s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>

        {/* Floating Experience Badges */}
        <div className="absolute inset-0">
          <div className="absolute top-[18%] left-[72%] px-4 py-2 bg-blue-500/12 border border-blue-400/20 rounded-lg text-blue-300 text-sm font-semibold animate-pulse" style={{animationDuration: '3s'}}>
            Leadership
          </div>
          <div className="absolute top-[32%] right-[8%] px-4 py-2 bg-green-500/12 border border-green-400/20 rounded-lg text-green-300 text-sm font-semibold animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}>
            Full Stack
          </div>
          <div className="absolute bottom-[38%] left-[68%] px-4 py-2 bg-purple-500/12 border border-purple-400/20 rounded-lg text-purple-300 text-sm font-semibold animate-pulse" style={{animationDuration: '3.5s', animationDelay: '2s'}}>
            Team Lead
          </div>
          <div className="absolute bottom-[22%] right-[22%] px-4 py-2 bg-orange-500/12 border border-orange-400/20 rounded-lg text-orange-300 text-sm font-semibold animate-pulse" style={{animationDuration: '2.8s', animationDelay: '0.5s'}}>
            3+ Years
          </div>
          <div className="absolute top-[48%] left-[3%] px-4 py-2 bg-cyan-500/12 border border-cyan-400/20 rounded-lg text-cyan-300 text-sm font-semibold animate-pulse" style={{animationDuration: '4.2s', animationDelay: '1.5s'}}>
            Mentor
          </div>
        </div>
        
        {/* Professional overlay for content readability */}
        <div className="absolute inset-0 bg-slate-900/85"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text mb-8">
            Professional <span className="text-portfolio-accent">Experience</span>
          </h2>
          {/* Decorative line */}
          <div className="flex items-center justify-center">
            <div className="h-px bg-gray-600 flex-1 max-w-16"></div>
            <div className="mx-4 w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="h-px bg-cyan-400 flex-1 max-w-24"></div>
            <div className="mx-4 w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="h-px bg-gray-600 flex-1 max-w-16"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative mb-12 last:mb-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-4 top-16 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-transparent"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-2 top-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-portfolio-charcoal"></div>
              
              {/* Experience card */}
              <div className="ml-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center gap-4">
                    {exp.logo && (
                      <img src={exp.logo} alt={exp.company + ' logo'} className={`w-12 h-12 object-contain rounded-full border border-gray-700 p-1 ${exp.logo === nepathonLogo ? 'bg-black' : 'bg-white'}`} />
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-cyan-400 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-2 md:mt-0">
                    <span className="text-gray-400 text-sm">{exp.period}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      exp.type === 'Full-time' ? 'bg-green-500/20 text-green-400' :
                      exp.type === 'Contract' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {exp.type}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700 text-cyan-300 rounded-md text-sm font-medium border border-slate-600 hover:border-cyan-400 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
