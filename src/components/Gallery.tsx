import { motion, AnimatePresence } from 'motion/react';
import { useState, useMemo } from 'react';
import { X, Maximize2 } from 'lucide-react';
import { ASSETS } from '@/src/constants';

// 1. Dynamic Atmosphere Loading System
// Using a relative path from src/components to public/images/ambiance
const dynamicAmbianceModules = (import.meta as any).glob('../../public/images/ambiance/*.{jpg,jpeg,png,webp}', { eager: true });
const dynamicAmbianceImages = Object.values(dynamicAmbianceModules).map((mod: any) => {
  // If mod.default is a path like "/public/images/ambiance/name.jpg", 
  // we need to remove "/public" for the browser to find it
  const path = typeof mod.default === 'string' ? mod.default : mod.default?.toString();
  return path?.replace(/^\/public/, '') || path;
});

// 2. High-End Fallbacks
const AMBIANCE_FALLBACKS = [
  ASSETS.interiors[0],
  ASSETS.interiors[1],
  ASSETS.interiors[2],
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = useMemo(() => {
    return dynamicAmbianceImages.length > 0 ? dynamicAmbianceImages : AMBIANCE_FALLBACKS;
  }, []);

  return (
    <section id="ambiance" className="py-32 px-6 bg-ccb-deep-blue/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.5em] text-ccb-rich-red"
          >
            Atmosphere
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 font-display text-5xl font-black text-white md:text-7xl lg:text-8xl"
          >
            Curated <span className="text-gradient-premium">Ambiance.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-white/40 font-light max-w-2xl mx-auto"
          >
            Experience the sophisticated soul of our space through every corner and curated detail.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedImage(src)}
              className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] bg-white/5 aspect-square border border-white/5 shadow-2xl hover:shadow-ccb-rich-red/10 transition-all duration-500"
            >
              <img 
                src={src} 
                alt={`Ambiance ${i}`} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-ccb-rich-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="h-14 w-14 rounded-full glass-morphism flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
                  <Maximize2 size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ccb-deep-blue/95 p-6 backdrop-blur-xl"
          >
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute top-10 right-10 z-[110] h-14 w-14 rounded-full glass-morphism flex items-center justify-center text-white hover:bg-ccb-rich-red transition-colors"
            >
              <X size={32} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full h-auto max-h-[85vh] overflow-hidden rounded-[3rem] shadow-2xl border border-white/10"
            >
              <img
                src={selectedImage}
                alt="Selected Ambiance"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
