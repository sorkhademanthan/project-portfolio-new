import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Basic frontend validation
    if (!formData.name || formData.name.length < 2) {
      setStatus("error");
      console.error("Name must be at least 2 characters");
      setTimeout(() => setStatus(null), 5000);
      return;
    }

    if (!formData.email || !formData.email.includes('@')) {
      setStatus("error");
      console.error("Please enter a valid email");
      setTimeout(() => setStatus(null), 5000);
      return;
    }

    if (!formData.message || formData.message.length < 5) {
      setStatus("error");
      console.error("Message must be at least 5 characters");
      setTimeout(() => setStatus(null), 5000);
      return;
    }

    try {
      console.log("📤 Sending form data:", formData);
      
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("📨 Server response:", data);

      if (res.ok) {
        setFormData({ 
          name: "", 
          email: "", 
          company: "", 
          subject: "", 
          message: "",
          budget: "",
          timeline: ""
        });
        setStatus("success");
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus("error");
        console.error("❌ Server Error:", data);
        setTimeout(() => setStatus(null), 5000);
      }
    } catch (err) {
      setStatus("error");
      console.error("❌ Network Error:", err.message);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const inputVariants = {
    focused: { scale: 1.01, borderColor: "#3b82f6" },
    unfocused: { scale: 1, borderColor: "#52525b" }
  };

  return (
    <section className="py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-zinc-800/50 border border-zinc-700">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-zinc-300">LET'S COLLABORATE</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Start Your Project
          </h2>
          
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Transform your vision into reality. Let's build something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info - 2 columns */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Get In Touch</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Ready to bring your ideas to life? Whether you need a sleek website, 
                a robust web application, or a complete digital transformation, 
                I'm here to make it happen.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {[
                { icon: "📧", label: "Email", value: "sorkhademanthan@gmail.com", href: "mailto:sorkhademanthan@gmail.com" },
                { icon: "📱", label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: "🌍", label: "Location", value: "Mumbai, India", href: null },
                { icon: "⚡", label: "Response Time", value: "Within 24 hours", href: null }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-sm text-zinc-500 font-medium">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white hover:text-blue-400 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { name: "LinkedIn", href: "#", icon: "💼" },
                  { name: "GitHub", href: "#", icon: "🐙" },
                  { name: "Twitter", href: "#", icon: "🐦" },
                  { name: "Portfolio", href: "#", icon: "�" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-zinc-800/50 border border-zinc-700 rounded-xl flex items-center justify-center text-xl hover:bg-zinc-700/50 hover:border-zinc-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form - 3 columns */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-sm font-semibold text-zinc-300 mb-1">
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
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-semibold text-zinc-300 mb-1">
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
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              {/* Company & Subject Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-sm font-semibold text-zinc-300 mb-1">
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
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Company Inc."
                  />
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-semibold text-zinc-300 mb-1">
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
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors"
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
                </div>
              </div>

              {/* Budget & Timeline Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-sm font-semibold text-zinc-300 mb-1">
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
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="Under $5k">Under $5,000</option>
                    <option value="$5k - $10k">$5,000 - $10,000</option>
                    <option value="$10k - $25k">$10,000 - $25,000</option>
                    <option value="$25k - $50k">$25,000 - $50,000</option>
                    <option value="Over $50k">Over $50,000</option>
                  </motion.select>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-semibold text-zinc-300 mb-1">
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
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select timeline</option>
                    <option value="ASAP">ASAP</option>
                    <option value="1-2 weeks">1-2 weeks</option>
                    <option value="1 month">1 month</option>
                    <option value="2-3 months">2-3 months</option>
                    <option value="3+ months">3+ months</option>
                  </motion.select>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <label className="block text-sm font-semibold text-zinc-300 mb-1">
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
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: status === "loading" ? 1 : 1.01 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.99 }}
              >
                {status === "loading" ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending Message...
                  </div>
                ) : (
                  "Send Message"
                )}
              </motion.button>

              {/* Status Messages */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300 text-center"
                  >
                    ✅ Message sent successfully! I'll get back to you within 24 hours.
                  </motion.div>
                )}
                
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 text-center"
                  >
                    ❌ Failed to send message. Please try again or email me directly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
         
export default Contact;
