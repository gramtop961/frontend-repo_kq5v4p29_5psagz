import { motion } from 'framer-motion'
import { Heart, Star, Sparkles, Shield, Sun, Moon, Infinity } from 'lucide-react'

const reasons = [
  { icon: Heart, text: 'Your love is the oxygen of my courage.' },
  { icon: Shield, text: 'You stood between me and every storm.' },
  { icon: Sparkles, text: 'You find constellations in my smallest wins.' },
  { icon: Star, text: 'You taught me to reach higher than the sky.' },
  { icon: Sun, text: 'You warmed the coldest mornings with a smile.' },
  { icon: Moon, text: 'Your quiet strength lights the darkest nights.' },
  { icon: Infinity, text: 'With you, love has no edges.' },
]

function Reasons() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6 sm:px-10">
        <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Why You Mean Everything to Me
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div key={i} className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white flex gap-4 items-start shadow-[0_0_30px_rgba(255,255,255,0.12)]" whileHover={{ y: -6, scale: 1.02 }}>
              <div className="p-3 rounded-xl bg-gradient-to-br from-pink-400/70 to-purple-500/70 border border-white/30 shadow-[0_0_20px_rgba(236,72,153,0.6)]">
                {<r.icon className="w-6 h-6" />}
              </div>
              <p className="text-white/90 text-lg">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reasons
