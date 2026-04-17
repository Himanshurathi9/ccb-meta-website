import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, UtensilsCrossed, Calendar } from 'lucide-react';
import { ASSETS } from '@/src/constants';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Immersive Background */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ccb-deep-blue/80 via-transparent to-ccb-deep-blue z-10" />
        <img 
          src={ASSETS.interiors[0]} 
          alt="Premium Ambiance" 
          className="h-full w-full object-cover scale-110"
        />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center px-6 max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-2 glass-morphism px-6 py-2 rounded-full mb-8"
        >
          <div className="h-2 w-2 rounded-full bg-ccb-rich-red animate-pulse" />
          <span className="text-xs uppercase tracking-[0.5em] font-bold text-white/80">
            A Masterpiece in Every Bite
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-white"
        >
          More Than <br /> 
          <span className="text-gradient-premium">A Cafe.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 text-xl md:text-2xl font-light text-white/60 max-w-3xl mx-auto leading-relaxed"
        >
          A Complete Dining Experience. Explore over 100+ meticulously crafted 
          delicacies inspired by universal palettes.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex items-center justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(230, 57, 70, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 bg-ccb-rich-red px-12 py-6 rounded-full font-bold text-xl shadow-xl transition-all"
          >
            <UtensilsCrossed size={22} />
            Explore Menu
            <ArrowRight size={22} />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating Elements (Subtle parallax) */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 right-20 z-30 hidden lg:block"
      >
        <div className="glass-morphism p-6 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-ccb-rich-red/20 to-transparent group-hover:opacity-100 transition-opacity opacity-0" />
          <img 
            src={ASSETS.food[1]} 
            alt="Signature" 
            className="h-48 w-48 rounded-[2rem] object-cover"
          />
          <div className="mt-4">
            <p className="text-xs uppercase tracking-widest text-ccb-rich-red font-bold">Signature Dish</p>
            <h4 className="text-xl font-bold">Pizza Royale</h4>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">Scroll to explore</span>
        <div className="h-10 w-6 border border-white/20 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-2 w-2 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
