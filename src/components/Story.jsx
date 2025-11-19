import { motion } from 'framer-motion'

const quotes = [
  'A mother is the heartbeat in the home; and without her, there seems to be no heartthrob. — Leroy Brownlow',
  'Life began with waking up and loving my mother’s face. — George Eliot',
  'All that I am, or ever hope to be, I owe to my angel mother. — Abraham Lincoln',
  'Motherhood is the exquisite inconvenience of being another person’s everything. — Unknown',
]

function Story() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_400px_at_10%_10%,rgba(236,72,153,0.18),transparent),radial-gradient(600px_400px_at_90%_20%,rgba(147,51,234,0.18),transparent)]" />

      <div className="container mx-auto px-6 sm:px-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Her Strength, My Inspiration
        </motion.h2>

        <motion.p
          className="max-w-3xl text-white/85 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          You taught me grace without saying the word. In your hands, storms found their quiet. Every sacrifice you made
          stitched a new horizon for me. I carry your courage like a secret sunrise—soft, certain, and endlessly returning.
        </motion.p>

        {/* Horizontal scrolling quotes */}
        <div className="mt-12 overflow-x-auto scrollbar-none -mx-6 px-6">
          <div className="flex gap-6 w-max">
            {quotes.map((q, i) => (
              <motion.blockquote
                key={i}
                className="w-[22rem] sm:w-[26rem] shrink-0 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                whileHover={{ y: -6, rotate: i % 2 === 0 ? -0.6 : 0.6 }}
                transition={{ type: 'spring', stiffness: 250, damping: 18 }}
              >
                “{q}”
              </motion.blockquote>
            ))}
          </div>
        </div>

        {/* AI illustration placeholders */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <motion.div key={i} className="aspect-video rounded-2xl bg-gradient-to-br from-purple-300/20 to-pink-300/10 border border-white/20 backdrop-blur-md relative overflow-hidden"
              whileHover={{ scale: 1.02 }}>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-screen" />
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.25),transparent)] animate-[spin_8s_linear_infinite]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Story
