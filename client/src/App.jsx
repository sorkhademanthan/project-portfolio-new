import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white scroll-smooth">
      {/* Simple background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
      
      {/* Subtle grain texture */}
      <div 
        className="fixed inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Main content */}
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        
        {/* Clean section divider */}
        <div className="w-full h-px my-12 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

        <section id="about">
          <About />
        </section>

        <div className="w-full h-px my-12 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

        <section id="projects">
          <Projects />
        </section>

        <div className="w-full h-px my-12 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
