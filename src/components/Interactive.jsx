import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

function Interactive() {
  const [revealed, setRevealed] = useState(false)
  const audioRef = useRef(null)

  const toggleAudio = () => {
    const a = audioRef.current
    if (!a) return
    if (a.paused) a.play()
    else a.pause()
  }

  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6 sm:px-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Message from the future */}
          <motion.button onClick={() => setRevealed(true)} className="p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl text-left shadow-[0_0_40px_rgba(255,255,255,0.15)]" whileHover={{ scale: 1.02 }}>
            <h3 className="text-2xl font-semibold text-white">Message From The Future</h3>
            <p className="mt-2 text-white/80">Tap to reveal</p>
            {revealed && (
              <motion.p className="mt-6 text-lg text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                “In every timeline, every world, every future — you are my guiding light.”
              </motion.p>
            )}
          </motion.button>

          {/* Audio button */}
          <div className="p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl text-white shadow-[0_0_40px_rgba(255,255,255,0.15)]">
            <h3 className="text-2xl font-semibold">Press to Hear a Message</h3>
            <p className="mt-2 text-white/80">A gentle note that says everything.</p>
            <motion.button onClick={toggleAudio} className="mt-6 relative inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold overflow-hidden"
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Play / Pause</span>
              <span className="absolute inset-0 rounded-2xl bg-white/30 blur-md" />
            </motion.button>
            <audio ref={audioRef} src="https://cdn.pixabay.com/audio/2022/03/15/audio_6f8e5adf13.mp3" preload="auto" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Interactive
