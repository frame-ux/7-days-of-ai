import { motion } from 'framer-motion'

const Link = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/60 hover:text-accent-cyan transition-colors duration-300 underline decoration-white/20 underline-offset-2 hover:decoration-accent-cyan/50"
  >
    {children}
  </a>
)

const paragraphs = [
  <>
    My interest in AI started a few years ago when I read Tim Urban&rsquo;s{' '}
    <Link href="https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html">
      &ldquo;The AI Revolution&rdquo;
    </Link>{' '}
    on Wait But Why. Fascinating, but it felt like science fiction. Then the OpenAI Playground appeared, and we were
    passing it around the office like a glorified thesaurus, generating AI-inspired cocktail ingredients. When ChatGPT
    launched, I was in straight away, and I haven&rsquo;t really stopped since: reading everything I could (
    <Link href="https://www.amazon.co.uk/dp/0753560771">Co-Intelligence</Link>,{' '}
    <Link href="https://www.amazon.co.uk/dp/0008288194">The Creativity Code</Link>,{' '}
    <Link href="https://www.amazon.co.uk/Superintelligence-Dangers-Strategies-Nick-Bostrom/dp/0198739834">Superintelligence</Link>,{' '}
    <Link href="https://www.amazon.co.uk/dp/0241678927">Empire of AI</Link>), absorbing TikTok
    creators like{' '}
    <Link href="https://www.tiktok.com/@askcatgpt">CatGPT</Link> and{' '}
    <Link href="https://www.tiktok.com/@iamkylebalmer">AI with Kyle</Link>, and gradually pivoting my actual job toward
    AI as Innovation and Creative Operations Manager at{' '}
    <Link href="https://sweetandchilli.com">Sweet&amp;Chilli</Link>.
  </>,
  <>
    At the beginning of 2026, I heard Casey Newton and Kevin Roose on{' '}
    <Link href="https://podcasts.apple.com/us/podcast/hard-fork/id1528594034">Hard Fork</Link>{' '}
    showing how easy it is to build things with{' '}
    <Link href="https://docs.anthropic.com/en/docs/claude-code">Claude Code</Link>. I spent the next few months
    tinkering: half-finished portfolio sites, abandoned website clones, lots of starts but not much shipping. Then I read{' '}
    <Link href="https://nesslabs.com/book">Tiny Experiments</Link> by Anne-Laure Le Cunff, and it clicked. Stop
    planning, start trying stuff, and actually finish it.
  </>,
  <>So here we are. Seven projects, built from scratch with Claude, one at a time. If this goes well, I might keep going.</>,
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
          {paragraphs.map((content, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-white/40 text-lg font-light leading-relaxed text-left"
            >
              {content}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
