import { motion } from "framer-motion";

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
  return (
    <section className="py-16 px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 25% 30%, rgba(255,255,255,0.03) 0%, transparent 40%),
              radial-gradient(circle at 75% 80%, rgba(255,255,255,0.02) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Title */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-light tracking-tight"
          style={{
            fontFamily: "'Inter', sans-serif",
            background: "linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          More Than Just Code
        </motion.h2>

        {/* The Hook */}
        <motion.p
          custom={0.2}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg text-zinc-300 leading-relaxed"
        >
          Most websites look good but fail to convert. Why?
          <span className="text-white font-medium">
            {" "}Because they don’t make users feel anything.
          </span>
        </motion.p>

        {/* Unique Positioning */}
        <motion.p
          custom={0.4}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-base text-zinc-400 leading-relaxed"
        >
          I blend clean frontend architecture with consumer psychology to build interfaces that connect, guide, and convert.
        </motion.p>

        {/* CTA */}
        <motion.button
          custom={0.6}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 px-8 py-4 bg-white text-zinc-950 rounded-full font-medium tracking-wide transition-all duration-300 hover:bg-zinc-100"
          style={{
            boxShadow: "0 8px 32px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        >
          Let’s Make Something That Works
        </motion.button>
      </div>
    </section>
  );
};

export default About;






