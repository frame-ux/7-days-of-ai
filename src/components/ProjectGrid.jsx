import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

export default function ProjectGrid({ projects }) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">The Projects</h2>
          <p className="text-white/35 font-light">Seven days. Seven projects. All built with AI.</p>
        </motion.div>

        {/* Featured Day 1 card */}
        <div className="mb-8">
          <ProjectCard project={projects[0]} index={0} featured />
        </div>

        {/* Remaining cards in grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(1).map((project, i) => (
            <ProjectCard key={project.day} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
