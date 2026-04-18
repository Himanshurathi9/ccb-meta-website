import { useState } from 'react';
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
  // Use a timestamp to force refresh on load/mount
  const [version] = useState(Date.now());
  const logoSrc = `/logo/ccb.png?v=${version}`;

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center flex-shrink-0"
      >
        <img
          src={logoSrc}
          alt="CCB Logo"
          className={cn(
            "w-auto object-contain transition-all duration-300 h-[var(--h-mobile)] md:h-[var(--h-desktop)]",
            imgClassName
          )}
          style={{ 
            "--h-mobile": mobileHeight, 
            "--h-desktop": desktopHeight 
          } as any}
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      {showText && (
        <span className="font-display text-xl font-bold tracking-tight text-white flex-shrink-0">
          CCB<span className="text-ccb-rich-red">.</span>
        </span>
      )}
    </div>
  );
}
