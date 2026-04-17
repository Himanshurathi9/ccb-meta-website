import { motion } from 'motion/react';
import { ASSETS } from '@/src/constants';

export default function Story() {
  return (
    <section id="story" className="py-32 px-6 overflow-hidden bg-ccb-deep-blue/30">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.5em] text-ccb-rich-red">Premium Heritage</span>
            <h2 className="mt-8 font-display text-5xl md:text-8xl font-black text-white leading-tight">
              Our legacy of <br />
              <span className="text-gradient-premium">Pure Craft.</span>
            </h2>
          </div>

          <div className="space-y-8 text-xl md:text-2xl font-light text-white/50 leading-relaxed">
            <p>
              Founded on the principle that dining is a form of art, CCB has evolved from 
              a boutique coffee spot to a culinary sanctuary. Our mission is to bridge 
              the gap between high-end gastronomy and casual comfort.
            </p>
            <p>
              Every ingredient is sourced from world-class estates, and every recipe 
              is a result of months of experimentation in our deep labs. 
              This isn't just about feeding people; it's about shifting the paradigm of 
              what a "break" really means in a fast-paced world.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
