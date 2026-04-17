import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ccb-deep-blue"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute h-32 w-32 rounded-full border-t-2 border-ccb-rich-red animate-spin opacity-50" />
            <div className="absolute h-40 w-40 rounded-full border-b-2 border-ccb-rich-red animate-[spin_3s_linear_infinite] opacity-30" />
            <motion.h1 
              className="font-display text-4xl font-bold tracking-tighter text-white"
            >
              CCB<span className="text-ccb-rich-red">.</span>
            </motion.h1>
          </motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 font-sans text-xs uppercase tracking-[0.3em] text-white/50"
          >
            Roasting Perfection...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
