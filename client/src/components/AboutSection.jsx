import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pillars = [
  {
    title: "Convert Visitors into Customers",
    content:
      "Your website is your #1 salesperson. I design and build user experiences that are not just beautiful, but engineered to convert. By focusing on clear calls-to-action, intuitive navigation, and persuasive design, I turn your traffic into tangible business results.",
    image: "/images/pillar1.png",
    summary:
      "Boosting your conversion rates through strategic, data-driven design and development.",
  },
  {
    title: "Build for Performance & Scale",
    content:
      "Slow websites lose money. I write clean, efficient code and optimize for performance to ensure your site is lightning-fast, reliable, and ready to scale. A high-performance site not only improves user experience but also ranks better in search engines.",
    image: "/images/pillar2.png",
    summary:
      "Delivering a fast, secure, and future-proof website that performs flawlessly under pressure.",
  },
  {
    title: "A Partnership You Can Trust",
    content:
      "You're not just hiring a developer; you're gaining a partner. I prioritize clear communication, transparency, and a deep understanding of your goals. I integrate with your team and am personally invested in seeing your project succeed.",
    image: "/images/pillar3.png",
    summary:
      "A dedicated, transparent partner focused on achieving your business objectives.",
  },
  {
    title: "Drive Real Business Impact",
    content:
      "My focus is on delivering measurable results. Whether it's increasing user engagement, improving conversion rates, or enhancing brand perception, I build solutions that provide a clear return on your investment. Let's build something that drives your business forward.",
    image: "/images/pillar4.png",
    summary:
      "Delivering tangible outcomes that boost your bottom line and delight your users.",
  },
];

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-zinc-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center">
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-2">Philosophy</h2>
          <h3
            className="text-4xl md:text-5xl font-light tracking-tight"
            style={{
              fontFamily: "'Inter', sans-serif",
              background: "linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            From Vision to Value.
          </h3>
        </div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 items-start">
          {/* Left - Pillars List */}
          <div className="space-y-6">
            {pillars.map((pillar, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`block text-left w-full transition duration-300 pl-4 border-l-2 
                  ${
                    activeIndex === index
                      ? "border-emerald-400 text-white"
                      : "border-transparent text-zinc-500 hover:text-white"
                  }`}
                whileHover={{ x: activeIndex === index ? 0 : 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-sm text-zinc-600">{`0${index + 1}`}</span>
                <br />
                <span className="text-lg font-medium">{pillar.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Center - Image */}
          <div className="hidden md:block relative w-56 h-80">
            <AnimatePresence>
              <motion.img
                key={activeIndex}
                src={pillars[activeIndex].image}
                alt="pillar visual"
                className="w-full h-full object-cover rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>

          {/* Right - Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <p className="text-zinc-300 text-lg leading-relaxed">
                {pillars[activeIndex].content}
              </p>
              <p className="text-sm text-zinc-400 italic">
                {pillars[activeIndex].summary}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;