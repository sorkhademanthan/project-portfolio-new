import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay,
    },
  }),
};

const About = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Navigation function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const metrics = [
    { number: "50+", label: "Projects Delivered", description: "From startups to enterprise" },
    { number: "99%", label: "Client Satisfaction", description: "Obsessed with quality" },
    { number: "2.5x", label: "Average ROI Boost", description: "Data-driven results" },
    { number: "24/7", label: "Support & Updates", description: "Your success is my priority" }
  ];

  const skills = [
    { name: "React/Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "UI/UX Design", level: 90, color: "from-purple-500 to-pink-500" },
    { name: "Backend APIs", level: 85, color: "from-green-500 to-emerald-500" },
    { name: "Performance", level: 92, color: "from-orange-500 to-red-500" }
  ];

  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Section with Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm font-semibold text-blue-300 tracking-wider">THE DEVELOPER BEHIND THE MAGIC</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
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

            <p className="text-xl text-zinc-300 leading-relaxed">
              I don't just build websites—I architect digital experiences that turn visitors into customers. 
              <span className="text-white font-semibold"> Every pixel has a purpose.</span>
            </p>

            {/* Value Propositions */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🚀", title: "Performance First", desc: "Sub-second load times" },
                { icon: "🎨", title: "Design Systems", desc: "Scalable & consistent" },
                { icon: "📱", title: "Mobile Obsessed", desc: "80% users are mobile" },
                { icon: "⚡", title: "Conversion Focus", desc: "Every element optimized" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                  <p className="text-zinc-400 text-xs">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Interactive Stats & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setActiveMetric(index)}
                  className={`p-6 rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-xl border transition-all duration-300 cursor-pointer ${
                    activeMetric === index 
                      ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' 
                      : 'border-zinc-700/50 hover:border-zinc-600/50'
                  }`}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {metric.number}
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">{metric.label}</div>
                  <div className="text-zinc-400 text-xs">{metric.description}</div>
                </motion.div>
              ))}
            </div>

            {/* Skills with Progress Bars */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg mb-4">Core Expertise</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
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
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 p-8 rounded-3xl bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-xl border border-zinc-700/50"
        >
          <h3 className="text-3xl font-bold text-white">
            Ready to Build Something <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Extraordinary?</span>
          </h3>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
            Let's turn your vision into a high-converting digital experience that your users will love and your competitors will envy.
          </p>
          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Let's Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
