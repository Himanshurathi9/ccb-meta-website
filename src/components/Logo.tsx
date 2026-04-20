// src/components/Logo.tsx
import { useState } from 'react';
import type { CSSProperties } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface LogoProps {
  className?: string;
  imgClassName?: string;
  mobileHeight?: string;
  desktopHeight?: string;
  showText?: boolean;
}

export default function Logo({ 
  className, 
  imgClassName,
  mobileHeight = "32px", 
  desktopHeight = "40px",
  showText = false 
}: LogoProps) {
  const [imgError, setImgError] = useState(false);

  const logoSrc = `/images/Logo/ccb.png`;

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center flex-shrink-0"
      >
        {!imgError ? (
          <img
            src={logoSrc}
            alt="CCB Logo"
            onError={() => setImgError(true)}
            className={cn(
              "w-auto object-contain transition-all duration-300 h-[var(--h-mobile)] md:h-[var(--h-desktop)]",
              imgClassName
            )}
            style={{ 
              "--h-mobile": mobileHeight, 
              "--h-desktop": desktopHeight 
            } as CSSProperties}
          />
        ) : (
          <span
            className={cn(
              "font-display font-black tracking-tighter text-white",
              imgClassName
            )}
            style={{ fontSize: desktopHeight }}
          >
            CCB<span className="text-ccb-rich-red">.</span>
          </span>
        )}
      </motion.div>
      
      {showText && (
        <span className="font-display text-xl font-bold tracking-tight text-white flex-shrink-0">
          CCB<span className="text-ccb-rich-red">.</span>
        </span>
      )}
    </div>
  );
}