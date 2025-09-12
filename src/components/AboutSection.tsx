import React from 'react';

const AboutSection = () => {
  const traits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding elegant solutions."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
        </svg>
      ),
      title: "Passionate Coder",
      description: "Coding isn't just my job, it's my passion and creative outlet."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Reliable Partner",
      description: "You can count on me to deliver quality work on time, every time."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      ),
      title: "Clean Code Advocate",
      description: "I believe in writing maintainable, scalable, and well-documented code."
    }
  ];

  return (
    <section id="about" className="py-20 pb-8 bg-gray-950 relative overflow-hidden">
      {/* Solid color animated background */}
      <div className="absolute inset-0 z-0">
        {/* Animated solid color lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-[10%] w-0.5 h-full bg-blue-700 opacity-40 animate-pulse" style={{animationDuration: '2s'}}></div>
          <div className="absolute top-0 left-[25%] w-0.5 h-full bg-cyan-700 opacity-30 animate-pulse" style={{animationDuration: '3s', animationDelay: '0.5s'}}></div>
          <div className="absolute top-0 left-[40%] w-0.5 h-full bg-green-700 opacity-30 animate-pulse" style={{animationDuration: '2.5s', animationDelay: '1s'}}></div>
          <div className="absolute top-0 left-[55%] w-0.5 h-full bg-purple-700 opacity-30 animate-pulse" style={{animationDuration: '3.5s', animationDelay: '1.5s'}}></div>
          <div className="absolute top-0 left-[70%] w-0.5 h-full bg-blue-800 opacity-30 animate-pulse" style={{animationDuration: '2.8s', animationDelay: '2s'}}></div>
          <div className="absolute top-0 left-[85%] w-0.5 h-full bg-cyan-800 opacity-30 animate-pulse" style={{animationDuration: '4s', animationDelay: '2.5s'}}></div>
        </div>

        {/* Geometric shapes with solid borders and shadows */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 left-16 w-48 h-48 border-2 border-blue-800 rounded-full shadow-2xl animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute top-24 right-20 w-32 h-32 border-2 border-cyan-800 rounded-full shadow-xl animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
          <div className="absolute bottom-24 left-24 w-56 h-56 border-2 border-purple-800 rounded-full shadow-2xl animate-spin" style={{animationDuration: '25s'}}></div>
          <div className="absolute bottom-16 right-16 w-40 h-40 border-2 border-green-800 rounded-full shadow-xl animate-spin" style={{animationDuration: '18s', animationDirection: 'reverse'}}></div>
          <div className="absolute top-1/3 left-1/3 w-24 h-24 border border-cyan-800 rotate-45 shadow-lg animate-pulse" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-2/3 right-1/4 w-20 h-20 border border-blue-800 rotate-12 shadow-lg animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gray-900/80"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white tracking-tight">About <span className="text-cyan-400">Me</span></h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gray-700 flex-1 max-w-16"></div>
            <div className="mx-4 w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="h-px bg-cyan-700 flex-1 max-w-24"></div>
            <div className="mx-4 w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="h-px bg-gray-700 flex-1 max-w-16"></div>
          </div>
          <div className="mx-auto max-w-2xl bg-gray-900/80 rounded-2xl shadow-2xl p-8 backdrop-blur-md border border-gray-800">
            <p className="text-xl text-gray-200 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise across the entire development lifecycle.<br/>
              From crafting beautiful user experiences to building robust backend systems, I bring ideas to life<br/>
              through clean, efficient code and modern technologies.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {traits.map((trait) => (
            <div
              key={trait.title}
              className="group relative overflow-hidden rounded-2xl p-6 bg-gray-900 border border-gray-800 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-gray-800 text-cyan-400 border-2 border-cyan-700 shadow">
                  {trait.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">
                  {trait.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {trait.description}
                </p>
              </div>
              {/* Subtle hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-cyan-900"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
