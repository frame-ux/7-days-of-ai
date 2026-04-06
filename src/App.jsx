import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import ProgressIndicator from './components/ProgressIndicator'
import ProjectGrid from './components/ProjectGrid'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import projects from './data/projects.json'

function App() {
  const completedDays = projects.filter((p) => p.status === 'complete').length

  return (
    <div className="relative min-h-screen bg-surface">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Ambient background gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] -left-[15%] w-[600px] h-[600px] bg-accent-cyan/[0.03] rounded-full blur-[150px]" />
        <div className="absolute top-[60%] -right-[10%] w-[500px] h-[500px] bg-accent-purple/[0.04] rounded-full blur-[150px]" />
        <div className="absolute top-[85%] left-[30%] w-[400px] h-[400px] bg-accent-amber/[0.02] rounded-full blur-[120px]" />
      </div>

      {/* Page content */}
      <main className="relative z-[1]">
        <Hero />
        <IntroSection />
        <ProgressIndicator completed={completedDays} total={7} />
        <ProjectGrid projects={projects} />
      </main>

      <Footer />
    </div>
  )
}

export default App
