import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Frontend Developer",
    "UI/UX Designer",
    "Digital Craftsman",
    "Creative Technologist",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 py-11 pt-16 overflow-hidden bg-zinc-950">

      {/* Background Gradients & Grid */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.015) 0%, transparent 50%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.008]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 0.5px, transparent 0.5px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 0.5px, transparent 0.5px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-xl">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-zinc-400 tracking-wide">
              Available for new projects
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-7xl md:text-9xl font-light mb-6 tracking-tight"
          style={{
            fontFamily: "'Inter', sans-serif",
            background: "linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textShadow: "0 0 40px rgba(255, 255, 255, 0.1)",
          }}
        >
          Manthan.
        </motion.h1>

        {/* Role Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 h-8 flex items-center justify-center"
        >
          <motion.h2
            key={currentRole}
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xl md:text-2xl font-normal text-zinc-400 tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {roles[currentRole]}
          </motion.h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl mb-16 text-zinc-500 max-w-2xl mx-auto leading-relaxed font-light"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          I create exceptional digital experiences through thoughtful design
          and precise engineering, focusing on performance, accessibility, and user delight.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            className="group relative px-8 py-4 bg-white text-zinc-950 rounded-full font-medium text-base tracking-wide transition-all duration-300 hover:bg-zinc-100"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              boxShadow: "0 8px 32px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            }}
          >
            <span className="relative z-10">Start a Project</span>
          </motion.button>

          <motion.button
            className="group px-8 py-4 rounded-full font-medium text-base text-zinc-300 border border-zinc-800 backdrop-blur-xl hover:border-zinc-700 hover:text-white transition-all duration-300 tracking-wide"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Portfolio
          </motion.button>
        </motion.div>
      </div>

      {/* Subtle Brand Mark & Year */}
      {/* <div className="absolute top-8 left-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-2 h-2 bg-white rounded-full"
          style={{ boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
        />
      </div> */}

      <div className="absolute top-8 right-8">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xs text-zinc-600 tracking-widest font-medium"
        >
          2025
        </motion.span>
      </div>
    </section>
  );
};

export default Hero;
