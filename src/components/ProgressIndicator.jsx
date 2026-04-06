import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ProgressIndicator({ completed = 1, total = 7 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const progress = completed / total
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference * (1 - progress)

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
          {/* Animated ring */}
          <div className="relative w-36 h-36 shrink-0">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              {/* Track */}
              <circle cx="60" cy="60" r={radius} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="5" />
              {/* Progress arc */}
              <motion.circle
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                stroke="url(#progressGrad)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={isInView ? { strokeDashoffset } : {}}
                transition={{ duration: 1.8, ease: 'easeOut', delay: 0.3 }}
              />
              {/* Glow duplicate */}
              <motion.circle
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                stroke="url(#progressGrad)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={isInView ? { strokeDashoffset } : {}}
                transition={{ duration: 1.8, ease: 'easeOut', delay: 0.3 }}
                opacity={0.15}
                filter="blur(4px)"
              />
              <defs>
                <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00f0ff" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center counter */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
                className="font-display font-bold text-4xl text-white leading-none"
              >
                {completed}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-white/25 text-xs mt-0.5"
              >
                of {total}
              </motion.span>
            </div>
          </div>

          {/* Info */}
          <div className="text-center sm:text-left">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-display font-bold text-2xl text-white mb-2"
            >
              Challenge Progress
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-white/35 font-light text-sm mb-5"
            >
              {completed} of {total} projects shipped. {total - completed} days remaining.
            </motion.p>

            {/* Day bars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex gap-1.5"
            >
              {Array.from({ length: total }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1.0 + i * 0.08 }}
                  className={`h-1 rounded-full origin-left ${
                    i < completed ? 'w-10 bg-gradient-to-r from-accent-cyan to-accent-purple' : 'w-10 bg-white/8'
                  }`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
