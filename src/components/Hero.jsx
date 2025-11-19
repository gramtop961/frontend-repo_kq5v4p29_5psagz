import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero({ theme }) {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {/* Background gradient depending on theme */}
      <div className={`absolute inset-0 transition-colors duration-700 ${theme === 'dark' ? 'bg-[radial-gradient(1200px_800px_at_50%_-10%,rgba(168,85,247,0.25),rgba(15,23,42,1))]' : 'bg-[radial-gradient(1200px_800px_at_50%_-10%,rgba(236,72,153,0.25),#fff)]'}`}></div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/20 to-black/40 mix-blend-multiply"></div>

      {/* Floating ambient particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(24)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute block rounded-full bg-white/30 shadow-[0_0_30px_rgba(255,255,255,0.4)] backdrop-blur-sm"
            style={{ width: 2 + (i % 3), height: 2 + (i % 3) }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -80 - (i % 20) * 2, 0],
              x: [0, (i % 2 === 0 ? 1 : -1) * (20 + (i % 10) * 4), 0],
            }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
            style={{ top: `${(i * 7) % 100}%`, left: `${(i * 13) % 100}%` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 sm:px-10">
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.35)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            To the woman who shaped my world — My Mom.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/85"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            In the quiet hours and the brightest days, your love has been my North Star — a gentle, unwavering light guiding every step I take.
          </motion.p>

          {/* Heart pulse behind text */}
          <motion.div
            aria-hidden="true"
            className="absolute -z-0 -left-24 top-1/3 w-[28rem] h-[28rem] rounded-full blur-3xl"
            style={{ background:
              'radial-gradient(circle at 50% 50%, rgba(236,72,153,0.45), rgba(147,51,234,0.25), transparent 70%)' }}
            initial={{ scale: 0.9, opacity: 0.7 }}
            animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Holographic portrait placeholder */}
          <motion.div
            className="mt-10 w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-gradient-to-br from-white/30 to-white/5 backdrop-blur-xl border border-white/30 shadow-[0_0_50px_rgba(255,255,255,0.25)] relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity opacity-80" />
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,rgba(255,255,255,0.2),rgba(236,72,153,0.25),rgba(147,51,234,0.2),rgba(255,255,255,0.2))] animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center gap-3 text-white/80">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.span className="h-6 w-3 rounded-full border border-white/60 relative" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 2 }}>
            <motion.span className="absolute left-1/2 -translate-x-1/2 top-1 w-1 h-1 rounded-full bg-white" animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} />
          </motion.span>
        </div>
      </div>
    </section>
  )
}

export default Hero
