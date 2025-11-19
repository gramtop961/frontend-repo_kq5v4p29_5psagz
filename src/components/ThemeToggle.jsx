import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

function ThemeToggle({ onChange }) {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const hour = new Date().getHours()
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const auto = hour >= 19 || hour < 7 ? 'dark' : 'light'
    const initial = prefersDark ? 'dark' : auto
    setTheme(initial)
    onChange?.(initial)
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    onChange?.(next)
  }

  return (
    <button onClick={toggle} className="fixed right-4 top-4 z-50 inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl text-white hover:bg-white/15 transition">
      {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      <span className="text-sm">{theme === 'dark' ? 'Day' : 'Night'} Mode</span>
    </button>
  )
}

export default ThemeToggle
