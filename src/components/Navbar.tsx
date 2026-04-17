import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Creations", href: "#creations" },
    { name: "Signature", href: "#signature" },
    { name: "Ambiance", href: "#ambiance" },
    { name: "Story", href: "#story" },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300",
        isScrolled ? "mt-0 px-6 backdrop-blur-md" : "mt-0"
      )}
    >
      <div 
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 py-3 transition-all duration-500 rounded-2xl",
          isScrolled 
            ? "glass-morphism shadow-2xl shadow-ccb-rich-red/10" 
            : "bg-transparent border border-transparent"
        )}
      >
        <div className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-ccb-rich-red text-white glow-red-premium shadow-lg"
          >
            <Coffee size={24} />
          </motion.div>
          <span className="font-display text-xl font-bold tracking-tight text-white">
            CCB<span className="text-ccb-rich-red">.</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-[13px] font-bold uppercase tracking-[0.2em] text-white/50 transition-all hover:text-white"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-ccb-rich-red transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center md:hidden">
          <button 
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute top-full left-6 right-6 mt-4 overflow-hidden rounded-[2.5rem] glass-morphism md:hidden border border-white/10"
          >
            <div className="flex flex-col gap-8 p-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-black text-white/60 hover:text-ccb-rich-red transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
