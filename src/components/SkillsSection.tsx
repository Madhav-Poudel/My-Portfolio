import { useEffect, useRef, useState } from 'react';
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiVuedotjs,
  SiNodedotjs, 
  SiPython, 
  SiExpress, 
  SiFastapi, 
  SiPostgresql,
  SiMongodb, 
  SiRedis, 
  SiDocker, 
  SiAmazon, 
  SiGit,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiSpring,
  SiMysql,
  SiPostman,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [projectCount, setProjectCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [creativeHours, setCreativeHours] = useState(0);
  const [technologiesCount, setTechnologiesCount] = useState(0);

  // Counter animation function
  const animateCounter = (target: number, setter: React.Dispatch<React.SetStateAction<number>>, duration: number = 2000) => {
    let start = 0;
    const increment = target / (duration / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(Math.floor(start));
      }
    }, 50);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-fade-in');
            if (!hasAnimated) {
              setHasAnimated(true);
              // Start counter animations
              setTimeout(() => {
                animateCounter(3, setExperienceCount, 1500);
                animateCounter(50, setProjectCount, 2000);
                animateCounter(200, setCreativeHours, 2500);
                animateCounter(25, setTechnologiesCount, 1800);
              }, 500);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const skills = [
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Java", icon: DiJava, color: "#ED8B00" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "AWS", icon: SiAmazon, color: "#FF9900" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
    { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-portfolio-dark relative overflow-hidden">
      {/* Animated Skills Background */}
      <div className="absolute inset-0 z-0">
        
  {/* Floating Tech Icons Animation (hide on small screens) */}
  <div className="absolute inset-0 hidden sm:block overflow-hidden">
          {/* Large floating tech symbols */}
          <div className="absolute top-16 left-[10%] text-orange-400/20 text-6xl animate-bounce" style={{animationDuration: '4s'}}>
            <div>⚛️</div>
          </div>
          <div className="absolute top-24 right-[15%] text-blue-400/25 text-5xl animate-bounce" style={{animationDuration: '3.5s', animationDelay: '1s'}}>
            <div>💻</div>
          </div>
          <div className="absolute bottom-20 left-[12%] text-green-400/20 text-5xl animate-bounce" style={{animationDuration: '3s', animationDelay: '2s'}}>
            <div>🌐</div>
          </div>
          <div className="absolute bottom-28 right-[18%] text-purple-400/25 text-6xl animate-bounce" style={{animationDuration: '4.5s', animationDelay: '0.5s'}}>
            <div>🛠️</div>
          </div>
          <div className="absolute top-1/2 left-[8%] text-yellow-400/20 text-5xl animate-bounce" style={{animationDuration: '3.8s', animationDelay: '1.5s'}}>
            <div>⚡</div>
          </div>
          <div className="absolute top-1/3 right-[12%] text-cyan-400/25 text-5xl animate-bounce" style={{animationDuration: '3.2s', animationDelay: '2.5s'}}>
            <div>🔧</div>
          </div>
        </div>

        {/* Tech Skills Code Snippets */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-12 left-[25%] text-blue-400/15 font-mono text-base animate-pulse" style={{animationDuration: '2.5s'}}>
            <div className="space-y-2">
              <div>const skills = [</div>
              <div>  'React', 'Node.js',</div>
              <div>  'TypeScript', 'AWS'</div>
              <div>];</div>
            </div>
          </div>
          
          <div className="absolute top-32 right-[30%] text-green-400/20 font-mono text-sm animate-pulse" style={{animationDuration: '3s', animationDelay: '1s'}}>
            <div className="space-y-2">
              <div>// Frontend Technologies</div>
              <div>HTML5, CSS3, JavaScript</div>
              <div>React, Vue.js, Next.js</div>
              <div>Bootstrap, Tailwind CSS</div>
            </div>
          </div>
          
          <div className="absolute bottom-16 left-[30%] text-purple-400/15 font-mono text-sm animate-pulse" style={{animationDuration: '2.8s', animationDelay: '2s'}}>
            <div className="space-y-2">
              <div>// Backend & Database</div>
              <div>Node.js, Express.js</div>
              <div>MongoDB, PostgreSQL</div>
              <div>Spring Boot, Java</div>
            </div>
          </div>
          
          <div className="absolute bottom-32 right-[25%] text-cyan-400/20 font-mono text-sm animate-pulse" style={{animationDuration: '3.5s', animationDelay: '1.5s'}}>
            <div className="space-y-2">
              <div>// DevOps & Tools</div>
              <div>Docker, AWS, Git</div>
              <div>Postman, Figma</div>
              <div>Photoshop, Illustrator</div>
            </div>
          </div>
        </div>

        {/* Technology Constellation */}
        <div className="absolute inset-0">
          {/* Tech constellation circles */}
          <div className="absolute top-20 left-20 w-80 h-80 border border-blue-400/15 rounded-full animate-spin" style={{animationDuration: '40s'}}></div>
          <div className="absolute top-28 left-28 w-64 h-64 border border-cyan-400/20 rounded-full animate-spin" style={{animationDuration: '35s', animationDirection: 'reverse'}}></div>
          <div className="absolute top-36 left-36 w-48 h-48 border border-purple-400/15 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
          
          <div className="absolute bottom-16 right-16 w-72 h-72 border border-green-400/15 rounded-full animate-spin" style={{animationDuration: '45s'}}></div>
          <div className="absolute bottom-24 right-24 w-56 h-56 border border-orange-400/20 rounded-full animate-spin" style={{animationDuration: '38s', animationDirection: 'reverse'}}></div>
          
          {/* Tech skill nodes */}
          <div className="absolute top-32 left-[240px] w-4 h-4 bg-blue-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-[160px] left-[180px] w-3 h-3 bg-cyan-400/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-[120px] left-[320px] w-5 h-5 bg-purple-400/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-[100px] right-[200px] w-4 h-4 bg-green-400/35 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-[160px] right-[160px] w-3 h-3 bg-orange-400/40 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        {/* Skills Network Connections */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <defs>
              <linearGradient id="skillsNetwork" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6"/>
                <stop offset="20%" stopColor="#06b6d4" stopOpacity="0.7"/>
                <stop offset="40%" stopColor="#8b5cf6" stopOpacity="0.5"/>
                <stop offset="60%" stopColor="#10b981" stopOpacity="0.6"/>
                <stop offset="80%" stopColor="#f59e0b" stopOpacity="0.7"/>
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.5"/>
              </linearGradient>
            </defs>
            
            {/* Skill network paths */}
            <path d="M120,100 Q400,60 680,100 T1200,100" fill="none" stroke="url(#skillsNetwork)" strokeWidth="3">
              <animate attributeName="d" values="M120,100 Q400,60 680,100 T1200,100;M120,140 Q400,100 680,140 T1200,140;M120,100 Q400,60 680,100 T1200,100" dur="9s" repeatCount="indefinite"/>
            </path>
            <path d="M0,200 Q300,160 600,200 T1200,200" fill="none" stroke="url(#skillsNetwork)" strokeWidth="4">
              <animate attributeName="d" values="M0,200 Q300,160 600,200 T1200,200;M0,170 Q300,130 600,170 T1200,170;M0,200 Q300,160 600,200 T1200,200" dur="11s" repeatCount="indefinite"/>
            </path>
            <path d="M200,300 Q500,250 800,300 T1400,300" fill="none" stroke="url(#skillsNetwork)" strokeWidth="2.5">
              <animate attributeName="d" values="M200,300 Q500,250 800,300 T1400,300;M200,340 Q500,290 800,340 T1400,340;M200,300 Q500,250 800,300 T1400,300" dur="8s" repeatCount="indefinite"/>
            </path>
            <path d="M50,400 Q350,350 650,400 T1050,400" fill="none" stroke="url(#skillsNetwork)" strokeWidth="3.5">
              <animate attributeName="d" values="M50,400 Q350,350 650,400 T1050,400;M50,370 Q350,320 650,370 T1050,370;M50,400 Q350,350 650,400 T1050,400" dur="10s" repeatCount="indefinite"/>
            </path>
            
            {/* Skill connection nodes */}
            <circle cx="400" cy="100" r="8" fill="#3b82f6" opacity="0.6">
              <animate attributeName="r" values="8;16;8" dur="4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="600" cy="200" r="6" fill="#06b6d4" opacity="0.7">
              <animate attributeName="r" values="6;12;6" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="500" cy="300" r="7" fill="#8b5cf6" opacity="0.5">
              <animate attributeName="r" values="7;14;7" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="350" cy="400" r="9" fill="#10b981" opacity="0.6">
              <animate attributeName="r" values="9;18;9" dur="2.5s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>

        {/* Floating Skill Categories */}
        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[75%] px-4 py-2 bg-blue-500/15 border border-blue-400/25 rounded-lg text-blue-300 text-sm font-semibold animate-pulse" style={{animationDuration: '3s'}}>
            Frontend
          </div>
          <div className="absolute top-[35%] right-[10%] px-4 py-2 bg-green-500/15 border border-green-400/25 rounded-lg text-green-300 text-sm font-semibold animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}>
            Backend
          </div>
          <div className="absolute bottom-[35%] left-[70%] px-4 py-2 bg-purple-500/15 border border-purple-400/25 rounded-lg text-purple-300 text-sm font-semibold animate-pulse" style={{animationDuration: '3.5s', animationDelay: '2s'}}>
            Database
          </div>
          <div className="absolute bottom-[25%] right-[20%] px-4 py-2 bg-orange-500/15 border border-orange-400/25 rounded-lg text-orange-300 text-sm font-semibold animate-pulse" style={{animationDuration: '2.8s', animationDelay: '0.5s'}}>
            DevOps
          </div>
          <div className="absolute top-[50%] left-[5%] px-4 py-2 bg-cyan-500/15 border border-cyan-400/25 rounded-lg text-cyan-300 text-sm font-semibold animate-pulse" style={{animationDuration: '4.2s', animationDelay: '1.5s'}}>
            Design
          </div>
        </div>
        
        {/* Subtle overlay for content readability */}
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text mb-8">
            Skills & <span className="text-portfolio-accent">Technologies</span>
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
          <div className="text-center">
            <h3 className="text-2xl font-bold text-portfolio-text mb-8">
              Technical Expertise
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div 
                    key={skill.name} 
                    className="group relative bg-gradient-to-br from-slate-800 to-slate-900 text-white px-4 py-3 rounded-lg text-center font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 border border-slate-700 hover:border-cyan-400 cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <IconComponent 
                        className="text-2xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1" 
                        style={{ color: skill.color }}
                      />
                      <span className="relative z-10 text-xs sm:text-sm font-medium transition-all duration-300">{skill.name}</span>
                    </div>
                    
                    {/* Simple glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Stats Counter Section */}
          <div className="mt-16 pt-12 border-t border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center p-4 bg-slate-800 rounded-lg border border-slate-600 hover:border-cyan-400 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">
                  {experienceCount}+
                </div>
                <div className="text-gray-300 text-xs md:text-sm font-medium">
                  Years Experience
                </div>
              </div>
              
              <div className="text-center p-4 bg-slate-800 rounded-lg border border-slate-600 hover:border-cyan-400 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">
                  {projectCount}+
                </div>
                <div className="text-gray-300 text-xs md:text-sm font-medium">
                  Projects Completed
                </div>
              </div>
              
              <div className="text-center p-4 bg-slate-800 rounded-lg border border-slate-600 hover:border-cyan-400 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">
                  {creativeHours}+
                </div>
                <div className="text-gray-300 text-xs md:text-sm font-medium">
                  Creative Hours
                </div>
              </div>
              
              <div className="text-center p-4 bg-slate-800 rounded-lg border border-slate-600 hover:border-cyan-400 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">
                  {technologiesCount}+
                </div>
                <div className="text-gray-300 text-xs md:text-sm font-medium">
                  Technologies
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
