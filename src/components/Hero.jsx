import { motion } from 'framer-motion'
import HeroBackground from './HeroBackground'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />

      {/* Bottom fade into page */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 50%, #0a0a0f 100%)' }} />

      {/* Radial vignette */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, #0a0a0f 80%)' }} />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Overline badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-block px-5 py-2 rounded-full border border-accent-cyan/20 text-accent-cyan/70 text-xs font-body tracking-[0.2em] uppercase">
            A Creative Challenge
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display font-extrabold text-[3.2rem] sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8"
        >
          <span className="block text-white">7 Days of</span>
          <span className="block gradient-text mt-1">Building with AI</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg sm:text-xl text-white/40 font-body font-light max-w-lg mx-auto mb-4 leading-relaxed"
        >
          One project a day, built from scratch with Claude
        </motion.p>

        {/* Author */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-sm text-white/25 font-body tracking-wide"
        >
          by Arthur Dimsdale
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-xs text-white/15 font-body font-light max-w-md mx-auto mt-3 leading-relaxed"
        >
          Innovation &amp; Creative Operations Manager at{' '}
          <a href="https://sweetandchilli.com" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-accent-cyan/60 transition-colors">
            Sweet&amp;Chilli
          </a>
          , exploring what&rsquo;s possible when you combine curiosity with AI.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-9 rounded-full border border-white/15 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], height: [6, 10, 6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-0.5 rounded-full bg-accent-cyan/60"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
