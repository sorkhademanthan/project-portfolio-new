import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState, useCallback, useMemo } from "react";

const About = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "50px" });
  const prefersReducedMotion = useReducedMotion();

  // Performance optimized navigation function with debouncing
  const scrollToSection = useCallback((sectionId) => {
    requestAnimationFrame(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start'
        });
      }
    });
  }, [prefersReducedMotion]);

  // Memoized data to prevent re-renders
  const metrics = useMemo(() => [
    { number: "50+", label: "Projects Delivered", description: "From startups to enterprise" },
    { number: "99%", label: "Client Satisfaction", description: "Obsessed with quality" },
    { number: "2.5x", label: "Average ROI Boost", description: "Data-driven results" },
    { number: "24/7", label: "Support & Updates", description: "Your success is my priority" }
  ], []);

  const skills = useMemo(() => [
    { name: "React/Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "UI/UX Design", level: 90, color: "from-purple-500 to-pink-500" },
    { name: "Backend APIs", level: 85, color: "from-green-500 to-emerald-500" },
    { name: "Performance", level: 92, color: "from-orange-500 to-red-500" }
  ], []);

  const valueProps = useMemo(() => [
    { icon: "🚀", title: "Performance First", desc: "Sub-second load times" },
    { icon: "🎨", title: "Design Systems", desc: "Scalable & consistent" },
    { icon: "📱", title: "Mobile Obsessed", desc: "80% users are mobile" },
    { icon: "⚡", title: "Conversion Focus", desc: "Every element optimized" }
  ], []);

  // Optimized animation variants with reduced motion support
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.05,
        delayChildren: prefersReducedMotion ? 0 : 0.1
      }
    }
  }), [prefersReducedMotion]);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: prefersReducedMotion ? "tween" : "spring",
        stiffness: prefersReducedMotion ? undefined : 100,
        damping: prefersReducedMotion ? undefined : 12,
        duration: prefersReducedMotion ? 0.3 : undefined
      }
    }
  }), [prefersReducedMotion]);

  // Optimized hover handler with throttling
  const handleMetricHover = useCallback((index) => {
    if (activeMetric !== index) {
      setActiveMetric(index);
    }
  }, [activeMetric]);

  return (
    <section 
      id="about"
      ref={ref} 
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden will-change-transform"
    >
      {/* Optimized Background Effects - Only render if in view */}
      {isInView && (
        <div className="absolute inset-0 pointer-events-none">
          {!prefersReducedMotion && (
            <>
              <motion.div
                className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 rounded-full opacity-15 sm:opacity-20"
                style={{
                  background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
                  filter: "blur(30px)",
                  transform: "translateZ(0)" // Force GPU acceleration
                }}
                animate={{
                  x: [0, 15, 0],
                  y: [0, -10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-56 h-56 sm:w-96 sm:h-96 rounded-full opacity-10 sm:opacity-15"
                style={{
                  background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
                  filter: "blur(40px)",
                  transform: "translateZ(0)"
                }}
                animate={{
                  x: [0, -20, 0],
                  y: [0, 15, 0],
                  scale: [1, 0.95, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </>
          )}
        </div>
      )}

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Hero Section with Optimized Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20">
          {/* Left: Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 lg:space-y-8"
          >
            <motion.div 
              className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
              whileHover={!prefersReducedMotion ? { scale: 1.02 } : undefined}
              transition={{ duration: 0.2 }}
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-blue-300 tracking-wider">THE DEVELOPER BEHIND THE MAGIC</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Crafting Digital
              </span>
              <br />
              <span className="text-white">Experiences That</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Actually Convert
              </span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed">
              I don't just build websites—I architect digital experiences that turn visitors into customers. 
              <span className="text-white font-semibold"> Every pixel has a purpose.</span>
            </p>

            {/* Optimized Value Propositions Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {valueProps.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="p-3 sm:p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300 will-change-transform"
                  whileHover={!prefersReducedMotion ? { scale: 1.02 } : undefined}
                >
                  <div className="text-lg sm:text-2xl mb-2">{item.icon}</div>
                  <h4 className="text-white font-semibold text-xs sm:text-sm">{item.title}</h4>
                  <p className="text-zinc-400 text-xs">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Interactive Stats & Skills */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 lg:space-y-8"
          >
            {/* Optimized Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  variants={itemVariants}
                  onHoverStart={() => handleMetricHover(index)}
                  className={`p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-xl border transition-all duration-300 cursor-pointer will-change-transform ${
                    activeMetric === index 
                      ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' 
                      : 'border-zinc-700/50 hover:border-zinc-600/50'
                  }`}
                  whileHover={!prefersReducedMotion ? { scale: 1.02 } : undefined}
                >
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {metric.number}
                  </div>
                  <div className="text-white font-semibold text-xs sm:text-sm mb-1">{metric.label}</div>
                  <div className="text-zinc-400 text-xs">{metric.description}</div>
                </motion.div>
              ))}
            </div>

            {/* Fixed Skills without Lazy Loading */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-base sm:text-lg mb-4">Core Expertise</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium text-sm">{skill.name}</span>
                    <span className="text-zinc-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: prefersReducedMotion ? 0.3 : 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Optimized Bottom CTA Section */}
        <motion.div
          variants={itemVariants}
          className="text-center space-y-6 lg:space-y-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-xl border border-zinc-700/50"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Build Something <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Extraordinary?</span>
          </h3>
          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto">
            Let's turn your vision into a high-converting digital experience that your users will love and your competitors will envy.
          </p>
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer will-change-transform"
            whileHover={!prefersReducedMotion ? { scale: 1.02 } : undefined}
            whileTap={!prefersReducedMotion ? { scale: 0.98 } : undefined}
          >
            Let's Start Your Project
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
       