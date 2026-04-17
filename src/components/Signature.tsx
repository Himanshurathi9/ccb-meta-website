import { motion } from 'motion/react';
import { ChefHat } from 'lucide-react';

export default function Signature() {
  return (
    <section id="signature" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-full w-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-ccb-rich-red blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 overflow-hidden rounded-[4rem] shadow-2xl depth-shadow border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1550317138-10000687ad32?auto=format&fit=crop&w=1200" 
                alt="Signature Dish" 
                className="h-full w-full object-cover aspect-square"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Design Element */}
            <div className="absolute -top-12 -left-12 h-64 w-64 rounded-full border border-ccb-rich-red/10 -z-0" />
            <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full border border-white/5 -z-0" />
            
            <motion.div 
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-12 bottom-1/4 z-20 glass-morphism rounded-[2.5rem] p-8 shadow-2xl border border-white/10"
            >
              <div className="flex flex-col gap-3">
                <ChefHat className="text-ccb-rich-red" size={40} />
                <span className="font-display font-black text-2xl text-white">Master Roast</span>
                <span className="text-[11px] text-white/40 uppercase tracking-[0.3em] font-bold">Chef's Signature</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 space-y-10"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.5em] text-ccb-rich-red">The Masterpiece</span>
              <h2 className="mt-8 font-display text-5xl md:text-7xl font-black leading-[1.1] text-white">
                The Royal <br />
                <span className="text-gradient-premium">CCB Roast.</span>
              </h2>
            </div>
            
            <p className="text-xl text-white/50 leading-relaxed font-light">
              Our secret house blend, roasted for exactly 14 minutes at 220°C. 
              Infused with rare cocoa nibs and topped with a 24k edible gold dust layer. 
              The pinnacle of luxury in every sip.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {[
                "Ethiopian Heirloom Beans",
                "Triple Pulse Filtration",
                "Cold-Aged Storage",
                "Award-Winning Extraction"
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-4"
                >
                  <div className="h-2 w-2 rounded-full bg-ccb-rich-red" />
                  <span className="text-sm font-bold uppercase tracking-widest text-white/70">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
