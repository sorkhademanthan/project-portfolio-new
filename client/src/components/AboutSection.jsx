import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pillars = [
  {
    title: "From base camp to the summit",
    content:
      "We guide organizations toward the full expression of their potential, ensuring meaningful progress.",
    image: "/images/pillar1.png",
    summary:
      "Empowering growth from humble beginnings to outstanding achievement with precision and care.",
  },
  {
    title: "Unlimitech",
    content:
      "We scale with a holistic approach and obsessive implementation that drives true innovation.",
    image: "/images/pillar2.png",
    summary:
      "Blending tech and strategy to unlock limitless organizational capability.",
  },
  {
    title: "Good time, better work",
    content:
      "We believe in balance — meaningful work requires time, space, and clarity.",
    image: "/images/pillar3.png",
    summary:
      "Crafting impactful results through mindful, efficient workflows and team alignment.",
  },
  {
    title: "True impact",
    content:
      "Transformation that’s measurable, lasting, and rooted in real change.",
    image: "/images/pillar4.png",
    summary:
      "Helping brands leave legacies that echo beyond metrics — real, lasting influence.",
  },
];

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-zinc-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center">
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-2">Pillars</h2>
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
            What sustains us and what we stand for.
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
                animate={{ scale: activeIndex === index ? 1.05 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-sm text-zinc-600">{`0${index + 1}`}</span>
                <br />
                <span className="text-lg font-medium">{pillar.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Center - Image */}
          <div className="hidden md:block">
            <motion.img
              key={activeIndex}
              src={pillars[activeIndex].image}
              alt="pillar visual"
              className="w-56 h-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Right - Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
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