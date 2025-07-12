# 🚀 Manthan Sorkhade - Portfolio Website

> A high-performance, modern portfolio website showcasing frontend development expertise with React, Next.js, and cutting-edge web technologies.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://manthansorkhade.com)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-90+-green?style=for-the-badge)](https://pagespeed.web.dev/)
[![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)

## ✨ Features

### 🎨 **Design & User Experience**

- **Ultra-Premium UI/UX** - Minimalist design with sophisticated animations
- **Fully Responsive** - Pixel-perfect across all devices (mobile-first approach)
- **Dark Theme** - Modern dark aesthetic with custom color palette
- **Smooth Animations** - Framer Motion powered micro-interactions
- **Performance Optimized** - Sub-second load times with 90+ Lighthouse score

### ⚡ **Technical Excellence**

- **Code Splitting** - Lazy loading for optimal bundle size
- **SEO Optimized** - Meta tags, structured data, and Open Graph
- **PWA Ready** - Service worker and offline capabilities
- **TypeScript Ready** - Type-safe development environment
- **Modern Build Tools** - Vite with advanced optimizations

### 📱 **Sections**

- **Hero** - Dynamic role animations with call-to-action
- **About** - Skills showcase with interactive metrics
- **Projects** - Filterable portfolio with live demos
- **Contact** - Fully functional contact form with validation

## 🛠️ Tech Stack

### **Frontend**

- **React 18.2** - Modern React with hooks and Suspense
- **Framer Motion** - Production-ready motion library
- **Tailwind CSS** - Utility-first CSS framework
- **React Scroll** - Smooth scrolling navigation
- **React Icons** - Comprehensive icon library

### **Build Tools**

- **Vite** - Next-generation frontend tooling
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - CSS vendor prefixing

### **Backend** (Optional)

- **Node.js + Express** - Contact form handling
- **Nodemailer** - Email functionality
- **MongoDB** - Message storage
- **CORS** - Cross-origin resource sharing

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/sorkhademanthan/portfolio-website.git
cd portfolio-website
```

2. **Install dependencies**

```bash
cd client
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **Open in browser**

```
http://localhost:5173
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Analyze bundle size
npm run analyze
```

## 📁 Project Structure

```
Portfolio Website New/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   │   ├── assets/        # Images and media
│   │   ├── robots.txt     # SEO crawler instructions
│   │   └── favicon.svg    # Site favicon
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Hero.jsx   # Landing section
│   │   │   ├── About.jsx  # About section
│   │   │   ├── Projects.jsx # Portfolio showcase
│   │   │   ├── Contact.jsx  # Contact form
│   │   │   ├── Navbar.jsx   # Navigation
│   │   │   └── Footer.jsx   # Footer section
│   │   ├── App.jsx        # Main app component
│   │   ├── main.jsx       # Entry point
│   │   └── index.css      # Global styles
│   ├── package.json       # Dependencies and scripts
│   ├── vite.config.js     # Vite configuration
│   └── tailwind.config.js # Tailwind configuration
├── server/                # Backend API (optional)
│   ├── server.js          # Express server
│   └── package.json       # Backend dependencies
└── README.md              # Project documentation
```

## 🎯 Performance Optimizations

### **Lighthouse Scores**

- **Performance**: 90+ ⚡
- **Accessibility**: 92+ ♿
- **Best Practices**: 100 ✅
- **SEO**: 95+ 🔍

### **Optimizations Applied**

- **Code Splitting** - Vendor, motion, and utils chunks
- **Lazy Loading** - Components and images
- **Image Optimization** - WebP format with fallbacks
- **Bundle Analysis** - Tree shaking and dead code elimination
- **Caching Strategy** - Service worker implementation
- **Critical CSS** - Inlined above-the-fold styles

## 🎨 Customization

### **Colors**

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      zinc: {
        950: '#09090b', // Custom dark background
      }
    }
  }
}
```

### **Content**

Update personal information in:

- `src/components/Hero.jsx` - Name and roles
- `src/components/About.jsx` - Skills and metrics
- `src/components/Projects.jsx` - Portfolio projects
- `src/components/Contact.jsx` - Contact information

### **Animation Speed**

Modify animation durations in component files:

```javascript
transition={{ duration: 0.8, delay: 0.2 }}
```

## 📧 Contact Form Setup

### **Client-side Only**

The contact form works with:

- **Formspree** - Add your endpoint to Contact.jsx
- **Netlify Forms** - Add `data-netlify="true"` attribute
- **EmailJS** - Configure EmailJS service

### **Full-stack Setup**

1. Navigate to server directory:

```bash
cd server
npm install
```

2. Create `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

3. Start backend server:

```bash
npm run dev
```

## 🚀 Deployment

### **Frontend (Recommended)**

- **Vercel** - `vercel --prod`
- **Netlify** - Drag and drop `dist` folder
- **GitHub Pages** - Push `dist` to `gh-pages` branch

### **Full-stack**

- **Railway** - Deploy both frontend and backend
- **Heroku** - Use buildpacks for Node.js
- **DigitalOcean** - VPS deployment with PM2

## 📈 Analytics & Monitoring

### **Performance Monitoring**

- **Web Vitals** - Built-in performance tracking
- **Google Analytics** - Add GA4 tracking code
- **Hotjar** - User behavior analytics

### **Error Tracking**

- **Sentry** - Error monitoring and performance
- **LogRocket** - Session replay and debugging

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit changes** (`git commit -m 'Add amazing feature'`)
4. **Push to branch** (`git push origin feature/amazing-feature`)
5. **Open Pull Request**

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Framer** - For the powerful motion library
- **Tailwind CSS** - For the utility-first CSS framework
- **Vite Team** - For the lightning-fast build tool
- **Unsplash** - For the beautiful stock images

## 📞 Contact

**Manthan Sorkhade**

- **Website**: [manthansorkhade.com](https://manthansorkhade.com)
- **Email**: sorkhademanthan@gmail.com
- **LinkedIn**: [linkedin.com/in/manthansorkhade](https://linkedin.com/in/manthansorkhade)
- **Twitter**: [@manthan_dev](https://twitter.com/manthan_dev)
- **GitHub**: [@sorkhademanthan](https://github.com/sorkhademanthan)

---

<div align="center">
  <h3>⭐ Star this repo if you found it helpful!</h3>
  <p>Built with ❤️ by Manthan Sorkhade</p>
</div>
