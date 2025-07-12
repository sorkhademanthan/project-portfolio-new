import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Lazy load App component for code splitting
const App = lazy(() => import('./App.jsx'))

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-zinc-800 border-t-blue-500 rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-500 rounded-full animate-spin" style={{ animationDelay: '0.5s', animationDuration: '1.5s' }}></div>
    </div>
  </div>
)

// Optimized render with concurrent features
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
if (typeof window !== 'undefined') {
  // Preload critical images
  const criticalImages = [
    '/assets/doctor-appointment.png',
    '/assets/ai-dashboard.jpg'
  ]
  
  criticalImages.forEach(src => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)
  })
}
