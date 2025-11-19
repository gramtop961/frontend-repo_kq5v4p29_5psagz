import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const letter = `Mom,\n\nIn every season of my life, your hands have been the softest place to land. You taught me that gentleness is not weakness, that patience is a cathedral, and that love arrives not in thunder, but in the steady hush of everyday care.\n\nI have seen you trade sleep for my dreams, fear for my courage, and doubt for my faith. I walk through doors you unlocked; I breathe easier because you chose the heavier wind.\n\nIf I could fold the sky into a letter, I would send you every sunrise you gave me. If I could bottle time, I would pour it back into the moments you spent holding me together.\n\nThank you for being my beginning, my compass, and the quiet miracle in the middle of every storm.\n\nI love you — today, tomorrow, always.`

function LoveLetter() {
  const ref = useRef(null)
  const [autoScroll, setAutoScroll] = useState(true)

  useEffect(() => {
    if (!autoScroll || !ref.current) return
    let raf
    let y = 0
    const step = () => {
      if (!ref.current) return
      y = Math.min(ref.current.scrollHeight - ref.current.clientHeight, y + 0.3)
      ref.current.scrollTop = y
      if (y >= ref.current.scrollHeight - ref.current.clientHeight) return
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [autoScroll])

  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6 sm:px-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-8">AI‑Generated Love Letter</h2>

        <div className="grid md:grid-cols-[1fr,280px] gap-6 items-start">
          <motion.div className="h-[50vh] rounded-3xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl p-6 text-white overflow-y-auto shadow-[0_0_40px_rgba(255,255,255,0.15)]" ref={ref}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="prose prose-invert max-w-none">
              <pre className="whitespace-pre-wrap font-sans text-lg leading-8">{letter}</pre>
            </div>
          </motion.div>
          <div className="sticky top-24 space-y-4">
            <button onClick={() => setAutoScroll((v) => !v)} className="w-full py-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/15 transition">
              {autoScroll ? 'Pause Auto‑Scroll' : 'Resume Auto‑Scroll'}
            </button>
            <p className="text-white/70 text-sm">Displayed in a cyber‑paper scroll with a gentle glow.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoveLetter
