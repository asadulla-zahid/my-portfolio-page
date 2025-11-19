import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Twitter, Code, Briefcase, Award, GraduationCap, Star, Zap } from 'lucide-react';

const PortfolioWebsite = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 88 },
    { name: 'UI/UX Design', level: 92 },
    { name: 'AWS', level: 80 }
  ];

  const projects = [
    {
      title: 'AI Analytics Platform',
      description: 'Real-time data visualization dashboard with ML insights',
      tags: ['React', 'Python', 'TensorFlow'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'E-Commerce Suite',
      description: 'Full-stack shopping platform with payment integration',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Mobile Fitness App',
      description: 'Cross-platform health tracking with social features',
      tags: ['React Native', 'Firebase', 'Redux'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Design System Library',
      description: 'Component library with 100+ accessible UI elements',
      tags: ['React', 'Storybook', 'CSS'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Cloud DevOps Tool',
      description: 'Infrastructure automation and monitoring suite',
      tags: ['Docker', 'Kubernetes', 'Go'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Social Media Manager',
      description: 'Multi-platform content scheduling and analytics',
      tags: ['Vue.js', 'Node.js', 'MongoDB'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Inc.',
      description: 'Leading development of cloud-native applications',
      icon: Briefcase,
      color: 'bg-blue-500'
    },
    {
      year: '2023',
      title: 'Best Developer Award',
      company: 'Industry Conference',
      description: 'Recognized for outstanding contributions to open source',
      icon: Award,
      color: 'bg-purple-500'
    },
    {
      year: '2022',
      title: 'Full-Stack Developer',
      company: 'StartUp Labs',
      description: 'Built scalable web applications for 50K+ users',
      icon: Code,
      color: 'bg-green-500'
    },
    {
      year: '2020',
      title: 'Computer Science Degree',
      company: 'University of Technology',
      description: 'Graduated with honors, specialized in AI/ML',
      icon: GraduationCap,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-lg transition-all duration-300 ${
          darkMode ? 'bg-white/10 text-white' : 'bg-gray-900/10 text-gray-900'
        } hover:scale-110 shadow-lg`}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
      }`}>
        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 left-10 w-72 h-72 ${darkMode ? 'bg-blue-500/10' : 'bg-blue-400/20'} rounded-full blur-3xl animate-pulse`}
               style={{ transform: `translateY(${scrollY * 0.5}px)` }} />
          <div className={`absolute bottom-20 right-10 w-96 h-96 ${darkMode ? 'bg-purple-500/10' : 'bg-purple-400/20'} rounded-full blur-3xl animate-pulse`}
               style={{ transform: `translateY(${-scrollY * 0.3}px)`, animationDelay: '1s' }} />
          <div className={`absolute top-1/2 left-1/2 w-64 h-64 ${darkMode ? 'bg-pink-500/10' : 'bg-pink-400/20'} rounded-full blur-3xl animate-pulse`}
               style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.2}px)`, animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="inline-block mb-6">
            <div className={`px-6 py-2 rounded-full backdrop-blur-lg ${
              darkMode ? 'bg-white/10 text-blue-300' : 'bg-white/50 text-blue-600'
            } font-medium text-sm border ${darkMode ? 'border-white/20' : 'border-blue-200'}`}>
              ✨ Available for new opportunities
            </div>
          </div>
          
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Alex Rivera
          </h1>
          
          <p className={`text-2xl md:text-3xl mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Creative Developer & Designer
          </p>
          
          <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-12 ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Crafting beautiful digital experiences with code and design. 
            Specialized in full-stack development and modern UI/UX.
          </p>

          <div className="flex gap-4 justify-center">
            <button className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              darkMode 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-600/30'
            }`}>
              View My Work
            </button>
            <button className={`px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 backdrop-blur-lg ${
              darkMode 
                ? 'border-white/20 text-white hover:bg-white/10' 
                : 'border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}>
              Contact Me
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className={`w-6 h-10 rounded-full border-2 ${
            darkMode ? 'border-white/30' : 'border-gray-400'
          } flex justify-center pt-2`}>
            <div className={`w-1 h-2 rounded-full ${
              darkMode ? 'bg-white' : 'bg-gray-600'
            } animate-pulse`} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-32 px-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className={`absolute inset-0 rounded-3xl blur-2xl ${
                darkMode ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' : 'bg-gradient-to-br from-blue-400/30 to-purple-400/30'
              } group-hover:blur-3xl transition-all duration-500`} />
              <div className={`relative aspect-square rounded-3xl overflow-hidden backdrop-blur-xl border ${
                darkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-2xl'
              }`}>
                <div className={`w-full h-full flex items-center justify-center text-8xl ${
                  darkMode ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10' : 'bg-gradient-to-br from-blue-100 to-purple-100'
                }`}>
                  👨‍💻
                </div>
              </div>
            </div>

            <div>
              <div className={`inline-block px-4 py-2 rounded-full mb-6 ${
                darkMode ? 'bg-blue-500/10 text-blue-300' : 'bg-blue-100 text-blue-600'
              } text-sm font-semibold`}>
                About Me
              </div>
              
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Building digital products with passion
              </h2>
              
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a full-stack developer with 5+ years of experience creating innovative web and mobile applications. 
                My passion lies in turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              
              <p className={`text-lg mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                When I'm not coding, you can find me exploring new technologies, contributing to open source, 
                or sharing knowledge through technical writing and mentorship.
              </p>

              <div className="flex gap-4">
                <div className={`flex-1 p-6 rounded-2xl backdrop-blur-lg border ${
                  darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className={`text-3xl font-bold mb-1 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>50+</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects Completed</div>
                </div>
                <div className={`flex-1 p-6 rounded-2xl backdrop-blur-lg border ${
                  darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className={`text-3xl font-bold mb-1 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>5+</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={`py-32 px-6 ${
        darkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className={`inline-block px-4 py-2 rounded-full mb-6 ${
              darkMode ? 'bg-purple-500/10 text-purple-300' : 'bg-purple-100 text-purple-600'
            } text-sm font-semibold`}>
              My Journey
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Career Timeline
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
              darkMode ? 'bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500' : 'bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400'
            }`} />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="relative pl-24">
                    {/* Icon */}
                    <div className={`absolute left-0 w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content Card */}
                    <div className={`group p-8 rounded-2xl backdrop-blur-lg border transition-all duration-300 hover:scale-[1.02] ${
                      darkMode 
                        ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/10' 
                        : 'bg-white border-gray-200 hover:shadow-2xl'
                    }`}>
                      <div className={`text-sm font-semibold mb-2 ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {item.year}
                      </div>
                      <h3 className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {item.title}
                      </h3>
                      <div className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {item.company}
                      </div>
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={`py-32 px-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className={`inline-block px-4 py-2 rounded-full mb-6 ${
              darkMode ? 'bg-green-500/10 text-green-300' : 'bg-green-100 text-green-600'
            } text-sm font-semibold`}>
              Featured Work
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Selected Projects
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              A showcase of my recent work and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl backdrop-blur-lg border transition-all duration-500 hover:scale-105 cursor-pointer ${
                  darkMode 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                    : 'bg-white border-gray-200 hover:shadow-2xl'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <Zap className="w-7 h-7 text-white" />
                </div>

                <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                
                <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode ? 'bg-white/10 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Arrow */}
                <div className={`absolute bottom-8 right-8 w-10 h-10 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300`}>
                  <span className="text-white">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`py-32 px-6 ${
        darkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className={`inline-block px-4 py-2 rounded-full mb-6 ${
              darkMode ? 'bg-orange-500/10 text-orange-300' : 'bg-orange-100 text-orange-600'
            } text-sm font-semibold`}>
              Expertise
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Skills & Technologies
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className={`p-8 rounded-3xl backdrop-blur-lg border ${
                darkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-lg'
              }`}>
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {skill.name}
                  </h3>
                  <span className={`text-2xl font-bold ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {skill.level}%
                  </span>
                </div>
                
                <div className={`h-3 rounded-full overflow-hidden ${
                  darkMode ? 'bg-white/10' : 'bg-gray-200'
                }`}>
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-32 px-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className={`inline-block px-4 py-2 rounded-full mb-6 ${
            darkMode ? 'bg-pink-500/10 text-pink-300' : 'bg-pink-100 text-pink-600'
          } text-sm font-semibold`}>
            Get In Touch
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Let's work together
          </h2>
          
          <p className={`text-xl mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Have a project in mind? Let's create something amazing together.
          </p>

          <div className={`inline-flex flex-col p-12 rounded-3xl backdrop-blur-lg border ${
            darkMode ? 'bg-white/5 border-white/10' : 'bg-gradient-to-br from-blue-50 to-purple-50 border-gray-200 shadow-2xl'
          }`}>
            <div className="flex gap-4 mb-8 justify-center flex-wrap">
              {[
                { Icon: Mail, label: 'Email', color: 'from-blue-500 to-cyan-500' },
                { Icon: Linkedin, label: 'LinkedIn', color: 'from-blue-600 to-blue-700' },
                { Icon: Github, label: 'GitHub', color: 'from-gray-700 to-gray-900' },
                { Icon: Twitter, label: 'Twitter', color: 'from-blue-400 to-blue-600' }
              ].map(({ Icon, label, color }, i) => (
                <button
                  key={i}
                  className={`group relative p-5 rounded-2xl bg-gradient-to-br ${color} hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl`}
                >
                  <Icon className="w-6 h-6 text-white" />
                  <span className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {label}
                  </span>
                </button>
              ))}
            </div>

            <a
              href="mailto:alex@example.com"
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                darkMode 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-600/30'
              }`}
            >
              alex@example.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 border-t ${
        darkMode ? 'bg-gray-900 border-white/10' : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2024 Alex Rivera. Designed & Built with ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;
