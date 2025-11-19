import { useState } from 'react'
import Hero from './components/Hero'
import Story from './components/Story'
import Timeline from './components/Timeline'
import Reasons from './components/Reasons'
import Gallery from './components/Gallery'
import LoveLetter from './components/LoveLetter'
import Interactive from './components/Interactive'
import FinalSection from './components/FinalSection'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'} text-white`}>
      <ThemeToggle onChange={setTheme} />
      <Hero theme={theme} />
      <main className="[&>*:nth-child(odd)]:bg-gradient-to-b [&>*:nth-child(odd)]:from-white/0 [&>*:nth-child(odd)]:to-white/5">
        <Story />
        <Timeline />
        <Reasons />
        <Gallery />
        <LoveLetter />
        <Interactive />
        <FinalSection />
      </main>
      <footer className="py-10 text-center text-white/60">
        Crafted with love.
      </footer>
    </div>
  )
}

export default App
