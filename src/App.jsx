import StaggeredMenu from './components/StaggeredMenu'
import Galaxy from './components/Galaxy'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home section', link: '#' },
  { label: 'About', ariaLabel: 'Learn about me', link: '#about' },
  { label: 'Experience', ariaLabel: 'View my experience', link: '#experience' },
  { label: 'Skills', ariaLabel: 'See my skills', link: '#skills' },
  { label: 'Projects', ariaLabel: 'View my projects', link: '#projects' },
  { label: 'Certifications', ariaLabel: 'View certifications', link: '#certifications' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
]

const socialItems = [
  { label: 'LinkedIn', link: 'https://linkedin.com/in/durga-chandrika' },
  { label: 'GitHub', link: 'https://github.com/durga-chandrika' },
  { label: 'Email', link: 'mailto:durga.chandrika@email.com' }
]

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans relative">
      {/* Galaxy Background - Fixed and covers entire viewport */}
      <div className="fixed inset-0 z-0">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={0.8}
          glowIntensity={0.4}
          saturation={0.15}
          hueShift={45}
          twinkleIntensity={0.4}
          rotationSpeed={0.05}
          repulsionStrength={1.5}
          autoCenterRepulsion={0}
          starSpeed={0.3}
          speed={0.8}
          transparent={false}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          logoText="DC"
          menuButtonColor="#D4AF37"
          openMenuButtonColor="#D4AF37"
          changeMenuColorOnOpen={true}
          colors={['#0A0A0A', '#111111', '#000000']}
          accentColor="#D4AF37"
          isFixed={true}
          closeOnClickAway={true}
        />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
