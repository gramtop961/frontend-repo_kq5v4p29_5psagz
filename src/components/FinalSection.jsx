import { motion } from 'framer-motion'

function FinalSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(700px_500px_at_50%_10%,rgba(236,72,153,0.2),transparent)]" />
      {/* Floating petals/hearts */}
      {[...Array(18)].map((_, i) => (
        <motion.span key={i} className="pointer-events-none absolute text-pink-300/70" initial={{ opacity: 0, y: -20 }} animate={{ opacity: [0, 1, 0], y: [0, 120, 180] }} transition={{ duration: 8 + (i % 5), repeat: Infinity, delay: i * 0.4 }} style={{ left: `${(i * 11) % 100}%`, top: `${(i * 7) % 20}%` }}>
          ❤
        </motion.span>
      ))}

      <div className="container mx-auto px-6 sm:px-10 text-center">
        <motion.h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.35)]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          I love you, Mom. Today, tomorrow, always.
        </motion.h2>
      </div>
    </section>
  )
}

export default FinalSection
