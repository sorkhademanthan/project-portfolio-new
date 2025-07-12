import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "",
    company: "", 
    subject: "", 
    message: "",
    budget: "",
    timeline: ""
  });
  const [status, setStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // Optimized responsive detection with debouncing
  useEffect(() => {
    let timeoutId;
    const checkMobile = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 100);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Intersection Observer for performance
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "50px" }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  // Optimized form handlers with proper debouncing
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Basic frontend validation
    if (!formData.name || formData.name.length < 2) {
      setStatus("error");
      setTimeout(() => setStatus(null), 5000);
      return;
    }

    if (!formData.email || !formData.email.includes('@')) {
      setStatus("error");
      setTimeout(() => setStatus(null), 5000);
      return;
    }

    if (!formData.message || formData.message.length < 10) {
      setStatus("error");
      setTimeout(() => setStatus(null), 5000);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ 
          name: "", email: "", company: "", subject: "", 
          message: "", budget: "", timeline: ""
        });
        setTimeout(() => setStatus(null), 10000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(null), 5000);
    }
  }, [formData]);

  // Memoized data and variants for performance
  const contactMethods = useMemo(() => [
    { icon: "📧", label: "Email", value: "sorkhademanthan@gmail.com", href: "mailto:sorkhademanthan@gmail.com" },
    { icon: "📱", label: "Phone", value: "+91 8454898626", href: "tel:+918454898626" },
    { icon: "🌍", label: "Location", value: "Mumbai, India", href: null },
    { icon: "⚡", label: "Response Time", value: "Within 24 hours", href: null }
  ], []);

  const socialLinks = useMemo(() => [
    { name: "Instagram", href: "https://instagram.com/manthan_sorkhade", icon: "📷" },
    { name: "LinkedIn", href: "https://linkedin.com/in/manthansorkhade", icon: "💼" },
    { name: "X (Twitter)", href: "https://twitter.com/manthan_dev", icon: "🐦" },
    { name: "Upwork", href: "https://upwork.com/freelancers/manthansorkhade", icon: "💻" }
  ], []);

  // Optimized animation variants
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
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : (isMobile ? 15 : 20) },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: prefersReducedMotion ? "tween" : "spring",
        stiffness: prefersReducedMotion ? undefined : 100,
        damping: prefersReducedMotion ? undefined : 12,
        duration: prefersReducedMotion ? 0.2 : undefined
      }
    }
  }), [prefersReducedMotion, isMobile]);

  const inputVariants = useMemo(() => ({
    focused: { 
      scale: prefersReducedMotion ? 1 : (isMobile ? 1.005 : 1.01), 
      borderColor: "#3b82f6",
      boxShadow: prefersReducedMotion ? "none" : "0 0 0 3px rgba(59, 130, 246, 0.1)",
      transition: { duration: 0.2 }
    },
    unfocused: { 
      scale: 1, 
      borderColor: "#52525b",
      boxShadow: "0 0 0 0px rgba(59, 130, 246, 0)",
      transition: { duration: 0.2 }
    }
  }), [prefersReducedMotion, isMobile]);

  return (
    <section 
      id="contact"
      ref={containerRef}
      className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden will-change-transform"
    >
      {/* Optimized Background - Only render when in view */}
      {isInView && !prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full opacity-15 md:opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
              filter: `blur(${isMobile ? '15px' : '25px'})`,
              top: isMobile ? '5%' : '10%',
              left: isMobile ? '-5%' : '2%',
              transform: "translateZ(0)"
            }}
            animate={{
              x: [0, 15, 0],
              y: [0, -10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full opacity-10 md:opacity-15"
            style={{
              background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
              filter: `blur(${isMobile ? '20px' : '35px'})`,
              bottom: isMobile ? '5%' : '10%',
              right: isMobile ? '-10%' : '2%',
              transform: "translateZ(0)"
            }}
            animate={{
              x: [0, -20, 0],
              y: [0, 15, 0],
              scale: [1, 0.95, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>
      )}

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Optimized Header */}
        <motion.div 
          className="text-center mb-6 sm:mb-8 lg:mb-12"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 mb-3 sm:mb-4 rounded-full bg-zinc-800/50 border border-zinc-700 text-xs sm:text-sm"
            whileHover={!prefersReducedMotion ? { scale: 1.02 } : undefined}
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-medium text-zinc-300 tracking-wider">LET'S COLLABORATE</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent leading-tight">
            Start Your Project
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Transform your vision into reality. Let's build something extraordinary together.
          </p>
        </motion.div>

        {/* Optimized Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-start">
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-2 space-y-4 sm:space-y-6 order-2 lg:order-1"
            variants={itemVariants}
          >
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">Get In Touch</h3>
              <p className="text-zinc-400 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Ready to bring your ideas to life? Whether you need a sleek website, 
                a robust web application, or a complete digital transformation, 
                I'm here to make it happen.
              </p>
            </div>

            {/* Optimized Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {contactMethods.map((item, index) => (
                <motion.div 
                  key={item.label}
                  className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors duration-300 will-change-transform"
                  variants={itemVariants}
                  whileHover={!prefersReducedMotion ? { x: isMobile ? 1 : 3 } : undefined}
                >
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-zinc-500 font-medium">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-white hover:text-blue-400 transition-colors cursor-pointer font-medium text-sm break-all sm:break-normal"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Optimized Social Links */}
            <div>
              <h4 className="text-base font-semibold mb-3 text-white">Follow Me</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-zinc-800/50 border border-zinc-700 rounded-xl flex items-center justify-center text-lg hover:bg-zinc-700/50 hover:border-zinc-600 transition-colors duration-300 will-change-transform"
                    variants={itemVariants}
                    whileHover={!prefersReducedMotion ? { scale: 1.05 } : undefined}
                    whileTap={!prefersReducedMotion ? { scale: 0.95 } : undefined}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Optimized Form */}
          <motion.div 
            className="lg:col-span-3 order-1 lg:order-2"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div className="relative" variants={itemVariants}>
                  <label className="block text-xs sm:text-sm font-semibold text-zinc-300 mb-1">
                    Full Name *
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    variants={inputVariants}
                    animate={focusedField === 'name' ? 'focused' : 'unfocused'}
                    className="w-full px-3 py-2.5 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors duration-300 text-sm will-change-transform"
                    placeholder="John Doe"
                    required
                  />
                </motion.div>
                
                <motion.div className="relative" variants={itemVariants}>
                  <label className="block text-xs sm:text-sm font-semibold text-zinc-300 mb-1">
                    Email Address *
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    variants={inputVariants}
                    animate={focusedField === 'email' ? 'focused' : 'unfocused'}
                    className="w-full px-3 py-2.5 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors duration-300 text-sm will-change-transform"
                    placeholder="john@company.com"
                    required
                  />
                </motion.div>
              </div>

              {/* Company & Subject Responsive Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div className="relative" variants={itemVariants}>
                  <label className="block text-xs sm:text-sm font-semibold text-zinc-300 mb-1">
                    Company/Organization
                  </label>
                  <motion.input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                    variants={inputVariants}
                    animate={focusedField === 'company' ? 'focused' : 'unfocused'}
                    className="w-full px-3 py-2.5 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors duration-300 text-sm will-change-transform"
                    placeholder="Company Inc."
                  />
                </motion.div>
                
                <motion.div className="relative" variants={itemVariants}>
                  <label className="block text-xs sm:text-sm font-semibold text-zinc-300 mb-1">
                    Project Type *
                  </label>
                  <motion.select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    variants={inputVariants}
                    animate={focusedField === 'subject' ? 'focused' : 'unfocused'}
                    className="w-full px-3 py-2.5 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 text-sm appearance-none cursor-pointer will-change-transform"
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Other">Other</option>
                  </motion.select>
                </motion.div>
              </div>

              {/* Budget & Timeline Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div className="relative" variants={itemVariants}>
                  <label className="block text-xs sm:text-sm font-semibold text-zinc-300 mb-1">
                    Budget Range
                  </label>
                  <motion.select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('budget')}
                    onBlur={() => setFocusedField(null)}
                    variants={inputVariants}
                    animate={focusedField === 'budget' ? 'focused' : 'unfocused'}
                    className="w-full px-3 py-2.5 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 text-sm appearance-none cursor-pointer will-change-transform"
                  >
                    <option value="">Select budget range</option>
                    <option value="Under $5k">Under $5,000</option>
                    <option value="$5k - $10k">$5,000 - $10,000</option>
                    <option value="$10k - $25k">$10,000 - $25,000</option>
                    <option value="$25k - $50k">$25,000 - $50,000</option>
                    <option value="Over $50k">Over $50,000</option>
                  </motion.select>
                </motion.div>
                
                <motion.div className="relative" variants={itemVariants}>
                  <label className="block text-xs sm:text-sm font-semibold text-zinc-300 mb-1">
                    Timeline
                  </label>
                  <motion.select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('timeline')}
                    onBlur={() => setFocusedField(null)}
                    variants={inputVariants}
                    animate={focusedField === 'timeline' ? 'focused' : 'unfocused'}
                    className="w-full px-3 py-2.5 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 text-sm appearance-none cursor-pointer will-change-transform"
                  >
                    <option value="">Select timeline</option>
                    <option value="ASAP">ASAP</option>
                    <option value="1-2 weeks">1-2 weeks</option>
                    <option value="1 month">1 month</option>
                    <option value="2-3 months">2-3 months</option>
                    <option value="3+ months">3+ months</option>
                  </motion.select>
                </motion.div>
              </div>

              {/* Message */}
              <motion.div className="relative" variants={itemVariants}>
                <label className="block text-xs sm:text-sm font-semibold text-zinc-300 mb-1">
                  Project Description *
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  variants={inputVariants}
                  animate={focusedField === 'message' ? 'focused' : 'unfocused'}
                  rows={isMobile ? 4 : 5}
                  className="w-full px-3 py-2.5 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none text-sm will-change-transform"
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                  required
                />
              </motion.div>

              {/* Optimized Submit Button */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-sm will-change-transform"
                variants={itemVariants}
                whileHover={!prefersReducedMotion && status !== "loading" ? { scale: isMobile ? 1.01 : 1.02 } : undefined}
                whileTap={!prefersReducedMotion && status !== "loading" ? { scale: 0.98 } : undefined}
              >
                {status === "loading" ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <span>🚀</span>
                  </span>
                )}
              </motion.button>

              {/* Status Messages */}
              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300 text-center text-sm"
                  >
                    ✅ Message sent successfully! I'll get back to you within 24 hours.
                  </motion.div>
                )}
                
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="p-3 sm:p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 text-center text-sm sm:text-base"
                  >
                    ❌ Failed to send message. Please try again or email me directly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
                 