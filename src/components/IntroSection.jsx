import { motion } from 'framer-motion'

const paragraphs = [
  'This is an experiment in creative velocity. Can you build and ship something meaningful every single day for a week, using AI as your co-pilot?',
  "I\u2019m proving what\u2019s possible when you combine genuine curiosity with powerful AI tools. Every project is built from scratch in a single session with Claude \u2014 no templates, no boilerplate, just ideas becoming reality at speed.",
  'Learning in public. Shipping daily. Seeing how far the tools can take us.',
]

export default function IntroSection() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="font-display font-bold text-3xl sm:text-4xl text-white mb-12"
        >
          Why This Exists
        </motion.h2>

        <div className="space-y-6">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-white/40 text-lg font-light leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
