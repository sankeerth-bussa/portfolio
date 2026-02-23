"use client";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Radial glow */}
      <div className="absolute inset-0 radial-glow pointer-events-none" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }} />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-gray-500 mb-4">Cloud Engineer • DevOps • Automation</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text mb-6 leading-tight">
            Sankeerth Bussa
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            AWS &bull; Kubernetes &bull; Terraform &bull; Python &bull; Ansible
          </p>
          <p className="text-sm text-gray-500 mb-8">📍 Hyderabad, India</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="mailto:sankeerthbussa@gmail.com" className="px-6 py-3 rounded-full glass glass-hover text-sm text-gray-300 hover:text-white transition-all duration-300">
            ✉️ Email
          </a>
          <a href="https://www.linkedin.com/in/sankeerthbussa" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full glass glass-hover text-sm text-gray-300 hover:text-white transition-all duration-300">
            💼 LinkedIn
          </a>
          <a href="tel:+919553370711" className="px-6 py-3 rounded-full glass glass-hover text-sm text-gray-300 hover:text-white transition-all duration-300">
            📱 +91-955-337-0711
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-gray-400"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
