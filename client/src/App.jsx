import { Suspense, lazy, useEffect } from "react";

// Lazy load all components for optimal code splitting
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Simple loading component without framer-motion
const SectionLoader = ({ name }) => (
  <div className="min-h-screen flex items-center justify-center bg-zinc-950">
    <div className="text-center">
      <div className="w-8 h-8 border-2 border-zinc-700 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-zinc-400 text-sm">Loading {name}...</p>
    </div>
  </div>
);

function App() {
  // Performance monitoring
  useEffect(() => {
    // Measure and report performance metrics
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0];
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          
          // Log performance metrics (remove in production)
          console.debug('Page Load Time:', loadTime);
          console.debug('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
        }, 1000);
      }
    };

    measurePerformance();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white scroll-smooth antialiased">
      {/* Optimized background with will-change for performance */}
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 will-change-transform" />
      
      {/* Optimized grain texture - only on desktop for performance */}
      <div 
        className="fixed inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none hidden md:block"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <div className="relative z-50">
        <Suspense fallback={
          <div className="fixed top-0 w-full h-16 bg-zinc-950/60 backdrop-blur-xl border-b border-zinc-800/50 animate-pulse" />
        }>
          <Navbar />
        </Suspense>
      </div>

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero Section - Critical above-the-fold content */}
        <section id="home">
          <Suspense fallback={<SectionLoader name="Hero" />}>
            <Hero />
          </Suspense>
        </section>
        
        {/* Simple divider without motion */}
        <div className="w-full h-px my-8 sm:my-12 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

        {/* About Section - Second priority */}
        <section id="about">
          <Suspense fallback={<SectionLoader name="About" />}>
            <About />
          </Suspense>
        </section>

        <div className="w-full h-px my-8 sm:my-12 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

        {/* Projects Section - Third priority */}
        <section id="projects">
          <Suspense fallback={<SectionLoader name="Projects" />}>
            <Projects />
          </Suspense>
        </section>

        <div className="w-full h-px my-8 sm:my-12 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

        {/* Contact Section - Fourth priority */}
        <section id="contact">
          <Suspense fallback={<SectionLoader name="Contact" />}>
            <Contact />
          </Suspense>
        </section>
      </main>

      {/* Footer - Last priority */}
      <Suspense fallback={
        <div className="h-32 bg-zinc-900/50 border-t border-zinc-800 animate-pulse" />
      }>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
      