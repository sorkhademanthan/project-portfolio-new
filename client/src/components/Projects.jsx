import { motion } from "framer-motion";
import React, { useState } from "react";

// Clean, minimal project data
const projects = [
  {
    id: 1,
    title: "MediFlow Pro",
    subtitle: "Healthcare Innovation Platform",
    description: "Revolutionary doctor appointment ecosystem with AI-powered scheduling, real-time analytics, and seamless multi-role management.",
    tags: ["React", "Node.js", "MongoDB", "AI/ML", "REST API"],
    image: "/assets/doctor-appointment.png",
    link: "https://manthansorkhade.framer.website/",
    github: "https://github.com/sorkhademanthan/Edunet-Foodie/",
    category: "Healthcare",
    status: "Live",
    featured: true,
  },
  {
    id: 2,
    title: "NeuralTask AI",
    subtitle: "Next-Gen Productivity Suite",
    description: "Enterprise-grade SaaS platform leveraging OpenAI's latest models for intelligent task management and workflow optimization.",
    image: "/assets/ai-dashboard.jpg",
    tags: ["MERN Stack", "OpenAI GPT-4", "WebSocket", "AWS"],
    link: "https://manthansorkhade.framer.website/",
    github: "https://github.com/sorkhademanthan/firstrepo-demo/",
    category: "AI/SaaS",
    status: "MVP",
    featured: true,
  },
  {
    id: 3,
    title: "Notion Reimagined",
    subtitle: "Collaborative Workspace 2.0",
    description: "Next-generation productivity platform with real-time collaboration and intelligent content organization.",
    tags: ["React", "TypeScript", "Supabase", "Real-time"],
    image: "/assets/notion.jpg",
    link: "https://manthansorkhade.framer.website/",
    github: "https://github.com/sorkhademanthan/portfolio-app/",
    category: "Productivity",
    status: "Beta",
    featured: false,
  },
  {
    id: 4,
    title: "ContentFlow CMS",
    subtitle: "Headless Publishing Platform",
    description: "Modern content management system with headless architecture and intelligent SEO optimization.",
    image: "/assets/portfolio-app.jpg",
    tags: ["Next.js 14", "Sanity.io", "TypeScript", "Vercel"],
    link: "https://manthansorkhade.framer.website/",
    github: "https://github.com/sorkhademanthan/blog-cms-demo/",
    category: "CMS",
    status: "Live",
    featured: false,
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const categories = ['all', 'Healthcare', 'AI/SaaS', 'Productivity', 'CMS'];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Clean Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-zinc-800/50 border border-zinc-700">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-sm font-medium text-zinc-300">FEATURED WORK</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Selected Projects
          </h2>
          
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences that merge innovation with functionality
          </p>
        </motion.div>

        {/* Simple Filter Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-white text-zinc-900 shadow-lg'
                  : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 hover:text-zinc-300'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </motion.div>

        {/* Clean Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl hover:shadow-zinc-900/20">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      project.status === 'Live' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                      project.status === 'MVP' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                      'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 text-yellow-300 border border-yellow-400/30">
                        ⭐ FEATURED
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-blue-400 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-zinc-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-zinc-800 text-zinc-300 rounded-lg border border-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white text-zinc-900 text-center py-3 px-6 rounded-xl font-semibold hover:bg-zinc-100 transition-colors duration-200"
                    >
                      View Live
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-zinc-800 text-zinc-300 text-center py-3 px-6 rounded-xl font-semibold border border-zinc-700 hover:bg-zinc-700 hover:text-white transition-colors duration-200"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


