import { motion } from 'framer-motion'

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/arthur-dimsdale-030b9032/',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/ArthurDimsdale',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="py-16 px-4 border-t border-white/[0.04]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-white/20 hover:text-accent-cyan/70 transition-colors duration-300 p-2"
              >
                {s.icon}
              </a>
            ))}
          </div>

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
