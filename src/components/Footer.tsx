import { motion } from 'motion/react';
import { Coffee, Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/5 bg-ccb-deep-blue">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-ccb-rich-red/30 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 py-20 pb-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ccb-rich-red text-white glow-red-premium">
                <Coffee size={24} />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                CCB<span className="text-ccb-rich-red">.</span>
              </span>
            </div>
            <p className="mt-8 max-w-md text-lg text-white/50 leading-relaxed">
              More than a cafe. A complete dining experience. 
              Authentic flavors, architectural ambiance, and world-class service.
            </p>
            <div className="mt-10 flex gap-6">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: "#E63946" }}
                  className="text-white/40 transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-[0.2em] text-white">Quick Links</h4>
            <ul className="mt-8 space-y-4">
              {["Home", "Story", "Creations", "Gallery", "Privacy"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-white/40 transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-bold uppercase tracking-[0.2em] text-white">Our Location</h4>
            <p className="mt-8 text-sm text-white/40 leading-relaxed">
              20 West Patel Nagar, Circuit House Road,<br />
              Near OTR, Jodhpur, Rajasthan<br />
              <span className="mt-4 block text-ccb-rich-red font-bold">9799552525 | 0291-2515525</span>
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-12 md:flex-row">
          <p className="text-xs tracking-widest text-white/20 uppercase">
            © 2026 Cafe Coffee Break. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl glass-morphism text-white/60 hover:text-white transition-all shadow-xl"
          >
            <ArrowUp size={24} />
          </motion.button>

          <p className="text-xs tracking-widest text-white/20 uppercase">
            Designed for the future
          </p>
        </div>
      </div>
    </footer>
  );
}
