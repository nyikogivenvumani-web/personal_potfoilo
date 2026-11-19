import React, { useState } from 'react';
import profilePic from './assets/SNPL21.png';
import { 
  Mail, 
  Copy, 
  Check, 
  ExternalLink, 
  ArrowUpRight, 
  GraduationCap,
  Sparkles,
  Award,
  Cpu,
  Database,
  Layout,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nyikogivenvumani@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projects = [
    {
      title: "Mahumani Technologies",
      subtitle: "Corporate Web Presence",
      badge: "Featured Production",
      description: "Modern corporate website built for Mahumani Technologies featuring clean UI/UX, seamless performance across mobile devices, and structured service showcases.",
      tech: ["React", "Tailwind CSS", "Vercel"],
      demo: "https://mahumanitech.vercel.app/"
    },
    {
      title: "ConnectTransit SA",
      subtitle: "Community Safety Platform",
      badge: "Startup Idea",
      description: "Developed a full-stack mobile-focused public transport safety application built with Next.js and TypeScript on the frontend, backed by a Node.js, Express.js, and PostgreSQL (PLpgSQL) architecture. Implemented silent panic alerts, live GPS location tracking, and direct incident reporting, integrating real-time backend APIs and geolocation services to securely transmit active trip telemetry and commuter reports through a streamlined interface built for fast emergency activation.",
      tech: ["Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL"],
      demo: "https://github.com/NyikogivenVumani-web" // Replace with exact repo link
    },
    {
      title: "ShelfWise",
      subtitle: "B2B Inventory Management & Daily Sales",
      badge: "Business Solution",
      description: "Architected a full-stack B2B inventory management application that helps small businesses track stock levels, monitor daily sales, and run barcode scanning workflows. Engineered a live PostgreSQL database and Node.js/Express.js RESTful API layer to support real-time inventory updates, product categorization, and transactional data integrity, paired with a type-safe React and TypeScript interface that turns stock metrics into daily operational insights.",
      tech: ["TypeScript", "React", "Node.js", "Express.js", "PostgreSQL"],
      demo: "https://shelfwise-psi.vercel.app/"
    },
    {
      title: "Thrive Café Soweto",
      subtitle: "Local Business Web Platform",
      badge: "Client Business",
      description: "Custom responsive web experience designed for Thrive Café in Soweto, featuring interactive food menus, opening hours, geolocation details, and direct contact options.",
      tech: ["React", "Tailwind CSS"],
      demo: "https://thrivecafe.netlify.app/"
    },
    {
      title: "Project Management Dashboard",
      subtitle: "Interactive Team Workflow Application",
      badge: "Full-Stack App",
      description: "Interactive team task and project management dashboard equipped with task assignment, status tracking columns, priority tagging, and local persistence.",
      tech: ["React", "Tailwind CSS", "Local Storage"],
      demo: "https://donezoprojectmanagementdashbaord.netlify.app/"
    },
    {
      title: "Mini Spreadsheet Application",
      subtitle: "Dynamic Grid & Formula Parser",
      badge: "Algorithmic Challenge",
      description: "Lightweight web-based spreadsheet application supporting dynamic cell referencing, mathematical formula execution, custom cell selection, and arithmetic error handling.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      demo: "https://mini-spreadsheet-frontend-challenge.netlify.app/"
    },
    {
      title: "Habit Tracker Web App",
      subtitle: "Daily Habit & Streak Logging Tool",
      badge: "Utility Web App",
      description: "Web application engineered for daily habit logging, consecutive streak calculations, completion analytics, and intuitive progress visualization.",
      tech: ["React", "JavaScript", "CSS3"],
      demo: "https://glistening-cobbler-4bb48a.netlify.app/"
    }
  ];

  const skillCategories = [
    {
      name: "Frontend Development",
      icon: <Layout className="w-4 h-4 text-purple-400" />,
      skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Responsive UI/UX"]
    },
    {
      name: "Backend & Databases",
      icon: <Database className="w-4 h-4 text-purple-400" />,
      skills: ["Node.js", "Express.js", "Python", "C++", "PostgreSQL", "Supabase", "REST APIs"]
    },
    {
      name: "AI & Tools",
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      skills: ["RAG Architectures", "Git & GitHub", "Vercel", "Netlify", "VS Code", "Postman"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#07040d] text-zinc-100 font-sans selection:bg-purple-900 selection:text-purple-200 antialiased overflow-x-hidden relative">
      
      {/* Background Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-900/20 blur-[140px] pointer-events-none rounded-full z-0" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/15 blur-[160px] pointer-events-none rounded-full z-0" />

      {/* --- TOP NAVIGATION --- */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#07040d]/80 border-b border-purple-900/30">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <a href="#home" className="text-2xl font-serif italic text-white hover:text-purple-300 transition-colors tracking-wide flex items-center gap-2">
            <span className="font-sans font-bold not-italic bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
              Nyiko
            </span>
            <span className="text-xs font-mono not-italic px-2 py-0.5 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-300 hidden sm:inline-block">
              Software Engineer
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-300">
            <a href="#home" className="hover:text-purple-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-purple-300 transition-colors">About</a>
            <a href="#projects" className="hover:text-purple-300 transition-colors">Work</a>
            <a href="#skills" className="hover:text-purple-300 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-purple-300 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <a
              href="mailto:nyikogivenvumani@gmail.com"
              className="px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30 border border-purple-400/30 flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              Let's Talk
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-b border-purple-900/40 bg-[#0c0718] px-6 py-4 space-y-3">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 hover:text-purple-300">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 hover:text-purple-300">About</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 hover:text-purple-300">Work</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 hover:text-purple-300">Skills</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 hover:text-purple-300">Contact</a>
          </div>
        )}
      </header>

      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-32 py-12 md:py-20">

        {/* --- HERO SECTION --- */}
        <section id="home" className="relative pt-6 md:pt-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition duration-500"></div>

                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-b from-purple-900/60 to-[#07040d] border-2 border-purple-500/40 p-2 overflow-hidden shadow-2xl flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#120a2a] flex flex-col items-center justify-center relative overflow-hidden">
                    <img 
                      src={profilePic} 
                      alt="Nyiko Given Vumani" 
                      className="w-full h-full object-cover rounded-full"
                    />
                    <div className="absolute bottom-3 px-3 py-1 bg-purple-950/90 border border-purple-500/40 rounded-full text-[10px] font-mono text-purple-200 shadow-md">
                      &lt;Nyiko.dev /&gt;
                    </div>
                  </div>
                </div>

                <div className="absolute -top-10 -right-8 hidden sm:flex items-center space-x-2 text-xs font-mono text-purple-300 bg-purple-950/80 border border-purple-800/80 px-3 py-1.5 rounded-2xl shadow-xl">
                  <span>Hello! I Am <strong className="text-white">Nyiko Given Vumani</strong></span>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center gap-2">
                <div className="inline-flex items-center space-x-2 bg-purple-950/60 border border-purple-800/60 px-4 py-1.5 rounded-full text-xs font-mono text-purple-200">
                  <Award className="w-3.5 h-3.5 text-purple-400" />
                  <span>AI Software Engineering Student @ Melsoft Academy</span>
                </div>
                <div className="inline-flex items-center space-x-2 bg-purple-950/60 border border-purple-800/60 px-4 py-1.5 rounded-full text-xs font-mono text-purple-200">
                  <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                  <span>BSc Math & CS @ UNISA</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-900/30 border border-purple-700/40 text-purple-300 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Available for Full-Stack & AI Roles</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                A Software Engineer who builds <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-200 bg-clip-text text-transparent underline decoration-purple-500/40 decoration-wavy underline-offset-8">scalable web & AI</span> solutions...
              </h1>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                Currently pursuing a BSc in Mathematics & Computer Science at UNISA and sharpening specialized AI software engineering capabilities at Melsoft Academy. Based in Meadowlands, Soweto, Johannesburg.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-purple-900/40 border border-purple-400/30 flex items-center space-x-2 transition-all"
                >
                  <span>Explore My Work</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-5 py-3.5 rounded-2xl bg-[#120a23] hover:bg-[#1a0e33] border border-purple-800/60 text-zinc-200 text-sm font-mono flex items-center space-x-2 transition-all"
                >
                  {copied ? <Check className="w-4 h-4 text-purple-400" /> : <Copy className="w-4 h-4 text-purple-400" />}
                  <span>{copied ? "Copied Email!" : "Copy Email"}</span>
                </button>

                <div className="flex items-center space-x-2 pl-2">
                  <a href="https://github.com/NyikogivenVumani-web" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-[#120a23] border border-purple-900/60 text-zinc-400 hover:text-white hover:border-purple-500 transition-all font-mono text-xs flex items-center gap-1.5">
                    GitHub ↗
                  </a>
                  <a href="https://linkedin.com/in/nyiko-given-vumani-25b254336" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-[#120a23] border border-purple-900/60 text-zinc-400 hover:text-white hover:border-purple-500 transition-all font-mono text-xs flex items-center gap-1.5">
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section id="projects" className="space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-950/60 border border-purple-800/60 px-3.5 py-1.5 rounded-full">
              <span>Work & Projects</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
              Real client deployments, full-stack web applications, and interactive digital products built with modern software stacks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="group relative bg-gradient-to-b from-[#130a2a] to-[#0a0518] hover:from-[#180d35] hover:to-[#0f0724] border border-purple-900/50 hover:border-purple-500/60 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/80 text-purple-300">
                      {project.badge}
                    </span>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="text-xs font-mono text-purple-400 hover:text-white flex items-center space-x-1">
                      <span>Visit Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-purple-400/80 mt-1">{project.subtitle}</p>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-purple-900/40 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#080411] border border-purple-900/60 text-zinc-400">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-purple-900/40 hover:bg-purple-600 text-purple-200 hover:text-white border border-purple-700/50 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SKILLS --- */}
        <section id="skills" className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Stack & Tools
            </h2>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto">
              Core programming languages, web frameworks, database systems, and developer tools I utilize daily.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="bg-[#0f0724] border border-purple-900/50 p-6 rounded-3xl space-y-4">
                <div className="flex items-center space-x-2.5 border-b border-purple-900/40 pb-3">
                  {cat.icon}
                  <h3 className="text-base font-bold text-white">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="text-xs font-mono px-3 py-1.5 rounded-xl bg-[#170c36] border border-purple-800/40 text-purple-200 flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CONTACT / FOOTER --- */}
        <footer id="contact" className="space-y-12 border-t border-purple-900/40 pt-16 text-center">
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Contact
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base">
              Open for software engineering opportunities, collaborative web projects, or full-stack contract work. Let's connect!
            </p>
            <a href="mailto:nyikogivenvumani@gmail.com" className="inline-block text-lg sm:text-2xl font-mono font-bold text-purple-300 hover:text-white underline decoration-purple-500/50 underline-offset-4">
              nyikogivenvumani@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <a href="https://github.com/NyikogivenVumani-web" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-[#120926] border border-purple-800/50 text-purple-300 hover:text-white transition-all font-mono text-xs">
              GitHub ↗
            </a>
            <a href="https://linkedin.com/in/nyiko-given-vumani-25b254336" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-[#120926] border border-purple-800/50 text-purple-300 hover:text-white transition-all font-mono text-xs">
              LinkedIn ↗
            </a>
            <a href="mailto:nyikogivenvumani@gmail.com" className="p-3 rounded-full bg-[#120926] border border-purple-800/50 text-purple-300 hover:text-white transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-xs font-mono text-zinc-500 pt-8">
            <p>© {new Date().getFullYear()} Nyiko Given Vumani. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </div>
  );
}