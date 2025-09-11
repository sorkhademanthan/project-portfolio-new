import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Lazy load App component for code splitting
const App = lazy(() => import('./App.jsx'))

// Ultra-lightweight loading component for mobile
const LoadingFallback = () => (
  <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-zinc-800 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
)

// Optimized render
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <App />
    </Suspense>
  </React.StrictMode>
)

// Performance optimization: Prefetch critical resources
if (typeof window !== 'undefined') {
  // Preload critical images when available
  const criticalImages = [
    '/assets/doctor-appointment.png',
    '/assets/ai-dashboard.jpg'
  ]
  
  criticalImages.forEach(src => {
    const img = new Image()
    img.src = src
  })
}
