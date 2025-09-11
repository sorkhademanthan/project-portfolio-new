import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Expert Frontend Engineer",
    "User-Centric UI/UX Designer",
    "Digital Product Strategist",
    "Creative Technologist",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [roles.length]);

  // Navigation functions
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 py-11 pt-16 overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">

      {/* Ultra Premium Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.06) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.04) 0%, transparent 50%),
              radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        
        {/* Premium grain texture - More performant version */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
          style={{
            backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAD8/vz8/vz8/vz8/vz8/vz8/vwhc3sVAAAABnRSTlMAAAAAAGS0cfgAAAAtSURBVDjLY2CgDmB8+vQZGJoPjB8Mh24YoYELo38ABgYjBfABAPM5Axw24/3dAAAAAElFTkSuQmCC')`,
            backgroundRepeat: 'repeat'
          }}
        />
        
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-zinc-950/30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Ultra Premium Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-zinc-700/40 bg-gradient-to-r from-zinc-900/60 to-zinc-800/40 backdrop-blur-2xl shadow-2xl">
            <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50" />
            <span className="text-sm font-semibold text-zinc-200 tracking-wider uppercase">
              Available for Elite Projects
            </span>
          </div>
        </motion.div>

        {/* Ultra Premium Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-7xl md:text-9xl mb-6 tracking-tight"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 200,
            background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 25%, #e2e8f0 50%, #cbd5e1 75%, #94a3b8 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textShadow: "0 0 80px rgba(255, 255, 255, 0.15)",
            letterSpacing: "-0.04em",
            lineHeight: 0.85,
          }}
        >
          Manthan.
        </motion.h1>

        {/* Ultra Premium Role Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 h-10 flex items-center justify-center"
        >
          <motion.h2
            key={currentRole}
            initial={{ opacity: 0, y: 15, filter: "blur(6px)", scale: 0.95 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0, y: -15, filter: "blur(6px)", scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xl md:text-2xl font-medium tracking-wide"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              background: "linear-gradient(135deg, #94a3b8 0%, #64748b 50%, #475569 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              letterSpacing: "0.02em"
            }}
          >
            {roles[currentRole]}
          </motion.h2>
        </motion.div>

        {/* Ultra Premium Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl mb-20 text-zinc-400 max-w-3xl mx-auto leading-relaxed"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            letterSpacing: "-0.01em",
            lineHeight: 1.8
          }}
        >
          I create <span className="text-zinc-200 font-medium">extraordinary digital experiences</span> through 
          meticulous design and precision engineering, focusing on 
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold"> performance</span>, 
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold"> accessibility</span>, 
          and exceptional user delight.
        </motion.p>

        {/* Ultra Premium CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="group relative px-10 py-5 bg-gradient-to-r from-white to-zinc-50 text-zinc-950 rounded-full font-semibold text-base tracking-wide transition-all duration-500 hover:shadow-2xl overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              boxShadow: "0 20px 60px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
              fontWeight: 600,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-3">
              Start Elite Project
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-lg"
              >
                →
              </motion.span>
            </span>
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('projects')}
            className="group px-10 py-5 rounded-full font-semibold text-base text-zinc-200 border-2 border-zinc-600/40 backdrop-blur-2xl hover:border-zinc-500/60 hover:text-white hover:bg-zinc-800/30 transition-all duration-500 tracking-wide overflow-hidden relative cursor-pointer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontWeight: 600,
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-3">
              View Projects
              <span className="text-lg">
                ✦
              </span>
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Ultra Premium Year Badge */}
      <div className="absolute top-8 right-8">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xs text-zinc-400 tracking-[0.2em] font-semibold bg-gradient-to-r from-zinc-900/60 to-zinc-800/40 backdrop-blur-xl px-4 py-2 rounded-full border border-zinc-700/40 shadow-lg"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
          }}
        >
          MMXXIV
        </motion.span>
      </div>
    </section>
  );
};

export default Hero;
