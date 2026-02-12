import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    // Calculate percentage (-0.5 to 0.5)
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useMotionTemplate`${mouseY.get() * -20}deg`; // Inverted Y for natural tilt
  const rotateY = useMotionTemplate`${mouseX.get() * 20}deg`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX, // These don't work directly in style if they rely on get() inside template without being motion values themselves. 
                 // Actually useMotionTemplate returns a MotionValue, so this is correct.
        rotateY
      }}
      className={`relative transition-all duration-200 ease-linear group ${className}`}
    >
        <div style={{ transform: "translateZ(20px)" }} className="h-full w-full">
            {children}
        </div>
        
        {/* Gloss/Reflection Effect */}
        <div 
             className="absolute inset-0 z-10 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-white/10 to-transparent mix-blend-overlay"
        />
    </motion.div>
  );
};

export default TiltCard;
