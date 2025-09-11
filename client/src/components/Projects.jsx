import React, { useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaTimes,
    FaArrowRight,
} from "react-icons/fa";

// --- DATA ---
const projects = [
    {
        id: 1,
        title: "TINTD",
        description: "A luxury streetwear brand where minimalist silhouettes are viewed through a sophisticated lens of color.",
        tags: ["React", "Node.js", "MongoDB", "AI/ML", "Express"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
        link: "https://manthansorkhade.framer.website/",
        github: "https://github.com/sorkhademanthan/Edunet-Foodie/",
        category: "Healthcare",
        featured: true,
    },
    {
        id: 2,
        title: "NeuralTask AI",
        description: "Developed an enterprise SaaS solution with OpenAI's GPT-4, automating complex workflows and boosting team productivity.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
        tags: ["MERN Stack", "OpenAI GPT-4", "AWS"],
        link: "https://manthansorkhade.framer.website/",
        github: "https://github.com/sorkhademanthan/firstrepo-demo/",
        category: "AI/SaaS",
        featured: true,
    },
    {
        id: 3,
        title: "Notion Reimagined",
        description: "Built a real-time collaborative workspace inspired by Notion, featuring intelligent content organization and seamless editing.",
        tags: ["React", "TypeScript", "Supabase", "Real-time"],
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center",
        link: "https://manthansorkhade.framer.website/",
        github: "https://github.com/sorkhademanthan/portfolio-app/",
        category: "Productivity",
        featured: false,
    },
    {
        id: 4,
        title: "ContentFlow CMS",
        description: "Created a high-performance headless CMS with Next.js 14, enabling teams to publish content twice as fast.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
        tags: ["Next.js 14", "Sanity.io", "Vercel"],
        link: "https://manthansorkhade.framer.website/",
        github: "https://github.com/sorkhademanthan/blog-cms-demo/",
        category: "CMS",
        featured: false,
    },
];

// --- CHILD COMPONENTS ---

// 1. Project Modal Component (with staggered content animation)
const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    const modalVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
        exit: { y: 30, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
    };

    // ✨ NEW: Variants for staggering content
    const contentContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // This creates the sequential animation effect
            },
        },
    };

    const contentItemVariants = {
        hidden: { y: 10, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    };

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-zinc-900 border border-zinc-700/60 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative">
                            <img src={project.image} alt={project.title} className="w-full h-64 md:h-80 object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                            <button onClick={onClose} className="absolute top-4 right-4 text-zinc-400 hover:text-white bg-black/50 rounded-full p-2 transition-all" aria-label="Close project details">
                                <FaTimes size={20} />
                            </button>
                        </div>
                        
                        {/* ✨ NEW: Wrap content in a motion.div for staggering */}
                        <motion.div 
                            className="p-6 md:p-8"
                            variants={contentContainerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.h2 variants={contentItemVariants} className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</motion.h2>
                            <motion.p variants={contentItemVariants} className="text-zinc-300 text-base md:text-lg leading-relaxed mb-6">{project.description}</motion.p>
                            
                            <motion.div variants={contentItemVariants} className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 text-xs font-medium text-sky-300 bg-sky-900/50 border border-sky-500/30 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </motion.div>
                            
                            <motion.div variants={contentItemVariants} className="flex flex-col sm:flex-row items-center gap-4">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white text-zinc-900 rounded-full font-semibold text-sm shadow-lg hover:bg-zinc-200 transition-all transform hover:scale-105">
                                    View Live Project <FaExternalLinkAlt />
                                </a>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-zinc-300 rounded-full font-semibold text-sm hover:bg-zinc-800 transition-colors transform hover:scale-105">
                                    <FaGithub /> View on GitHub
                                </a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// 2. Project Card Component (with enhanced hover effects)
const ProjectCard = React.memo(({ project, onCardClick }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={() => onCardClick(project)}
            // Added perspective for 3D effect on children
            className="group relative h-[450px] rounded-xl overflow-hidden cursor-pointer"
            style={{ perspective: "1000px" }}
        >
            {/* --- Animated Glowing Border --- */}
            <div className="absolute inset-0 z-0 transition-all duration-500 opacity-0 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/40 to-transparent blur-2xl" />
            
            <motion.div 
                // Added subtle 3D rotation on hover
                whileHover={{ rotateY: 5, transition: { duration: 0.3 } }}
                className="relative z-10 w-full h-full p-1 bg-zinc-900 rounded-xl"
            >
                <img 
                    src={project.image} 
                    alt={project.title} 
                    // Added scale transition for the background image
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700 ease-in-out" 
                />
                
                {/* --- ✨ NEW: Shine Effect --- */}
                <div className="absolute top-0 left-[-100%] h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                <div className="relative p-6 flex flex-col justify-end h-full">
                    <div>
                        <span className={`inline-block px-3 py-1 text-xs rounded-full mb-2 ${project.featured ? 'bg-blue-500/20 text-blue-300' : 'bg-zinc-700/50 text-zinc-300'}`}>
                            {project.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-white font-semibold text-sm mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        View Details <FaArrowRight />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
});

// --- MAIN COMPONENT ---
const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map(p => p.category)))], []);
    const filteredProjects = useMemo(
        () => activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter),
        [activeFilter]
    );

    return (
        <>
            <section id="projects" className="py-24 bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-base font-semibold text-blue-400 tracking-wider uppercase">My Work</h2>
                        <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400">
                            Engineered with Purpose, Designed for Impact.
                        </p>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="flex space-x-1 border border-zinc-800 bg-zinc-900 rounded-full p-1.5 overflow-x-auto">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveFilter(category)}
                                    className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 whitespace-nowrap ${
                                        activeFilter === category ? "text-white" : "text-zinc-400 hover:text-white"
                                    }`}
                                >
                                    {activeFilter === category && (
                                        <motion.div layoutId="active-pill" className="absolute inset-0 bg-blue-600/50 rounded-full" transition={{ type: "spring", stiffness: 300, damping: 30 }}/>
                                    )}
                                    <span className="relative z-10 capitalize">{category}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} onCardClick={setSelectedProject} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
            
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </>
    );
};

// --- PROP TYPES (FOR JAVASCRIPT) ---
ProjectModal.propTypes = {
    project: PropTypes.object,
    onClose: PropTypes.func.isRequired,
};
ProjectCard.propTypes = {
    project: PropTypes.object.isRequired,
    onCardClick: PropTypes.func.isRequired,
};
ProjectCard.displayName = "ProjectCard";

export default Projects;
