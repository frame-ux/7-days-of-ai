import { motion } from 'framer-motion'
import CardCanvas from './CardCanvas'

export default function ProjectCard({ project, index, featured = false }) {
  const isComplete = project.status === 'complete'

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        whileHover={{ y: -6 }}
        className="group relative"
      >
        {/* Hover glow */}
        <div
          className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ background: `linear-gradient(135deg, ${project.accentColor}30, transparent 60%)`, filter: 'blur(1px)' }}
        />

        <div className="glass-card rounded-2xl overflow-hidden relative flex flex-col md:flex-row">
          {/* Large 3D canvas */}
          <div className="w-full md:w-1/2 h-72 md:h-96 relative">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(circle at 50% 60%, ${project.accentColor}12, transparent 70%)` }}
            />
            <CardCanvas shape={project.shape} color={project.accentColor} isActive={isComplete} />
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xs font-display font-bold tracking-[0.2em] uppercase"
                style={{ color: project.accentColor }}
              >
                Day {String(project.day).padStart(2, '0')}
              </span>
              <div className="h-px flex-1 bg-white/5" />
              {isComplete && (
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan/80 uppercase tracking-wider font-medium">
                  Shipped
                </span>
              )}
            </div>

            <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">{project.name}</h3>

            <p className="text-white/40 font-light leading-relaxed mb-6 max-w-md">{project.description}</p>

            {/* Tags */}
            {project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-3 py-1 rounded-full bg-white/[0.04] text-white/50 font-medium border border-white/[0.04]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Meta */}
            {isComplete && (
              <div className="flex items-center gap-4 pt-5 border-t border-white/5">
                {project.timeSpent && <span className="text-xs text-white/25">{project.timeSpent}</span>}
                <div className="flex gap-4 ml-auto">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="text-sm font-medium transition-colors hover:opacity-80"
                      style={{ color: project.accentColor }}
                    >
                      Live Demo &rarr;
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a href={project.sourceUrl} className="text-sm text-white/30 hover:text-white/60 transition-colors font-medium">
                      Source
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  // Regular card
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={isComplete ? { y: -8, scale: 1.02 } : { y: -3, scale: 1.01 }}
      className="group relative"
    >
      {/* Hover glow */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: `linear-gradient(135deg, ${project.accentColor}25, transparent 60%)`, filter: 'blur(1px)' }}
      />

      <div className={`glass-card rounded-2xl overflow-hidden relative ${!isComplete ? 'opacity-[0.45]' : ''}`}>
        {/* 3D Canvas */}
        <div className="h-48 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(circle at 50% 70%, ${project.accentColor}10, transparent 70%)` }}
          />
          <CardCanvas shape={project.shape} color={project.accentColor} isActive={isComplete} />
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-display font-bold tracking-[0.15em] uppercase" style={{ color: project.accentColor }}>
              Day {String(project.day).padStart(2, '0')}
            </span>
            {!isComplete && (
              <span className="text-[9px] px-2 py-0.5 rounded-full border border-white/8 text-white/25 uppercase tracking-widest">
                Soon
              </span>
            )}
          </div>

          <h3 className="font-display font-bold text-lg text-white mb-1.5">{project.name}</h3>

          <p className="text-sm text-white/35 font-light leading-relaxed mb-4">{project.description}</p>

          {/* Tags */}
          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.03] text-white/35 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          {isComplete && (
            <div className="flex items-center justify-between pt-3 border-t border-white/5">
              <span className="text-xs text-white/20">{project.timeSpent || '\u2014'}</span>
              <div className="flex gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="text-xs font-medium transition-colors hover:opacity-80"
                    style={{ color: project.accentColor }}
                  >
                    Live &rarr;
                  </a>
                )}
                {project.sourceUrl && (
                  <a href={project.sourceUrl} className="text-xs text-white/25 hover:text-white/50 transition-colors font-medium">
                    Source
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
