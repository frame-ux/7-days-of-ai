import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-16 px-4 border-t border-white/[0.04]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <p className="text-white/20 text-sm font-light">
            Built entirely with{' '}
            <span className="text-accent-cyan/50">Claude Code</span>
            {' '}&mdash; Day 1 of 7
          </p>
          <p className="text-white/10 text-xs">Arthur Dimsdale &copy; {new Date().getFullYear()}</p>
        </motion.div>
      </div>
    </footer>
  )
}
