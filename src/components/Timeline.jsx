import { motion } from 'framer-motion'

const memories = [
  { year: 'Childhood', title: 'Warm Mornings', text: 'Your hands braiding my hair, the smell of tea, sunlight on the floor — safety woven into ordinary moments.', img: 'https://images.unsplash.com/photo-1518306727298-4c17e1bf6940?q=80&w=1000&auto=format&fit=crop' },
  { year: 'School', title: 'Every Note You Left', text: 'Little reminders in my lunchbox: “You are brave.” They made the day softer.', img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1000&auto=format&fit=crop' },
  { year: 'Graduation', title: 'The Loudest Applause', text: 'Your eyes found mine in a crowd, and I knew success was a shared language.', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop' },
  { year: 'Today', title: 'Home In Your Voice', text: 'No matter where I go, one call brings me back to where love lives.', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop' },
]

function Timeline() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_400px_at_20%_50%,rgba(236,72,153,0.12),transparent),radial-gradient(600px_400px_at_80%_50%,rgba(147,51,234,0.12),transparent)]" />
      <div className="container mx-auto px-6 sm:px-10">
        <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Memory Timeline
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          {/* vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pink-300/50 via-white/20 to-purple-300/50" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {memories.map((m, i) => (
              <motion.div key={i} className={`relative p-6 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.15)] ${i % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}
                whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              >
                <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 shadow-[0_0_30px_rgba(236,72,153,0.6)] border border-white/40" />

                <div className="aspect-video rounded-2xl overflow-hidden border border-white/20 mb-4">
                  <img src={m.img} alt="Memory" className="w-full h-full object-cover" />
                </div>

                <div className="text-white">
                  <p className="text-sm uppercase tracking-widest text-white/70">{m.year}</p>
                  <h3 className="text-2xl font-semibold mt-1">{m.title}</h3>
                  <p className="mt-2 text-white/85">{m.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
