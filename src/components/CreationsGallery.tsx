import { motion } from 'motion/react';
import { useState, useMemo } from 'react';
import { ASSETS } from '@/src/constants';

// 1. Dynamic Auto-Loading System
// This detects any images dropped into /public/images/gallery/
const dynamicImageModules = (import.meta as any).glob('/public/images/gallery/*.{jpg,jpeg,png,webp}', { eager: true });
const dynamicImages = Object.values(dynamicImageModules).map((mod: any) => mod.default);

// 2. Premium Fallbacks
// These ensure the gallery is never empty and looks good out-of-the-box
const BOOTSTRAP_IMAGES = [
  "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  "https://images.unsplash.com/photo-1544070282-59ad53a39e65",
  "https://images.unsplash.com/photo-1550317138-10000687ad32",
  "https://images.unsplash.com/photo-1628840042765-356cda07504e",
  "https://images.unsplash.com/photo-1473093226795-af9932fe5856",
  "https://images.unsplash.com/photo-1612874742237-6526221588e3",
  ASSETS.drinks[0],
  ASSETS.drinks[1],
  ASSETS.drinks[2],
  ASSETS.desserts[0],
  ASSETS.desserts[1],
  ASSETS.food[2],
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
];

export default function CreationsGallery() {
  const [isPaused, setIsPaused] = useState(false);

  // Combine dynamic images with bootstrap if needed
  // If the user adds their own images, they take precedence or augment the list
  const galleryImages = useMemo(() => {
    return dynamicImages.length > 0 ? dynamicImages : BOOTSTRAP_IMAGES;
  }, []);

  // Duplicate for seamless loop
  const duplicatedImages = useMemo(() => [...galleryImages, ...galleryImages], [galleryImages]);

  return (
    <section id="creations" className="py-32 bg-ccb-deep-blue overflow-hidden">
      <div className="mx-auto max-w-7xl mb-20 px-6 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-[0.5em] text-ccb-rich-red"
        >
          Signature Visuals
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-black text-white"
        >
          Our <span className="text-gradient-premium">Creations.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-xl text-white/40 font-light"
        >
          A glimpse into our world of flavors
        </motion.p>
      </div>

      <div className="relative w-full overflow-hidden py-10">
        <motion.div 
          className="flex gap-8 cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          animate={{
            x: isPaused ? undefined : ["0%", "-50%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            }
          }}
          style={{ width: "fit-content" }}
        >
          {duplicatedImages.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.4 }
              }}
              className="relative flex-shrink-0 w-80 md:w-[450px] aspect-[4/5] rounded-[3rem] overflow-hidden group border border-white/5"
            >
              <img
                src={img}
                alt={`Creation ${idx}`}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ccb-deep-blue/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Edge Blurs for premium feel */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-ccb-deep-blue to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-ccb-deep-blue to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
