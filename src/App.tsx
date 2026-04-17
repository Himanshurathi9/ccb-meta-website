/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CreationsGallery from './components/CreationsGallery';
import Story from './components/Story';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';

export default function App() {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const { scrollYProgress } = useScroll();
  
  const addRipple = (e: React.MouseEvent) => {
    const newRipple = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1000);
  };

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div 
      onClick={addRipple}
      className="relative min-h-screen bg-ccb-deep-blue selection:bg-ccb-rich-red selection:text-white"
    >
      <LoadingScreen />
      <CustomCursor />
      
      {/* Click Ripples */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ opacity: 0.5, scale: 0 }}
            animate={{ opacity: 0, scale: 4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="fixed z-[100] pointer-events-none rounded-full border border-ccb-rich-red/30"
            style={{
              left: ripple.x - 20,
              top: ripple.y - 20,
              width: 40,
              height: 40,
            }}
          />
        ))}
      </AnimatePresence>
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-ccb-rich-red glow-red-premium"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <Story />
        <CreationsGallery />
        <Gallery />
        <Testimonials />
      </main>
      
      <Footer />
      
      <div className="fixed inset-0 pointer-events-none -z-20">
        <div className="absolute top-0 left-0 h-full w-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02]" />
      </div>
    </div>
  );
}
