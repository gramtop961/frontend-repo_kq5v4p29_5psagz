import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = Array.from({ length: 12 }).map((_, i) =>
  `https://images.unsplash.com/photo-15${30 + i}50855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop`
)
const videos = [
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
]

function Lightbox({ src, onClose }) {
  return (
    <AnimatePresence>
      {src && (
        <motion.div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="max-w-5xl w-full" initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}>
            {src.endsWith('.mp4') ? (
              <video src={src} controls autoPlay className="w-full rounded-xl shadow-2xl" />
            ) : (
              <img src={src} alt="Zoomed" className="w-full rounded-xl shadow-2xl" />
            )}
            <button onClick={onClose} className="mt-4 text-white/90 hover:text-white">Close</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Gallery() {
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => setIndex((i) => (i + 1) % images.length), 3500)
    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6 sm:px-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-8">Photo & Video Gallery</h2>

        {/* Auto slideshow */}
        <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.15)]">
          <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <img src={images[index]} alt="Slideshow" className="w-full h-[40vh] object-cover" />
          </motion.div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((src, i) => (
            <motion.button key={i} onClick={() => setLightbox(src)} className="aspect-square rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl"
              whileHover={{ scale: 1.02 }}>
              <img src={src} alt="Memory" className="w-full h-full object-cover" />
            </motion.button>
          ))}
          {videos.map((src, i) => (
            <motion.button key={`v-${i}`} onClick={() => setLightbox(src)} className="aspect-square rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl"
              whileHover={{ scale: 1.02 }}>
              <video src={src} className="w-full h-full object-cover" />
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
    </section>
  )
}

export default Gallery
