import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      fastRefresh: true,
    })
  ],

  build: {
    target: 'es2018', // Better mobile compatibility
    
    minify: 'terser',
    cssMinify: 'esbuild',

    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          utils: ['react-scroll']
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]'
      }
    },

    chunkSizeWarningLimit: 500, // Stricter limit for mobile
    sourcemap: false,

    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 3, // More aggressive compression
        unsafe_arrows: true,
        unsafe_methods: true,
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    }
  },

  server: {
    hmr: {
      overlay: false
    }
  },

  css: {
    devSourcemap: false,
    preprocessorOptions: {
      css: {
        charset: false
      }
    }
  },

  assetsInclude: ['**/*.webp', '**/*.avif'],

  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['@vite/client', '@vite/env', 'framer-motion']
  },

  preview: {
    port: 4173,
    strictPort: true
  }
})

