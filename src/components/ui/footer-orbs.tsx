import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const FooterOrbs = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isHovering = useMotionValue(false);

  // Faster following effect
  const springConfig = { damping: 50, stiffness: 100, mass: 1 };
  const followX = useSpring(mouseX, springConfig);
  const followY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('footer-section')?.getBoundingClientRect();
      if (!rect) return;
      
      if (e.clientY >= rect.top) {
        isHovering.set(true);
        mouseX.set((e.clientX - rect.left) / 2);
        mouseY.set((e.clientY - rect.top) / 2);
      } else {
        isHovering.set(false);
      }
    };

    const handleMouseLeave = () => {
      isHovering.set(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Static pink-yellow orb */}
      <motion.div
        className="absolute bottom-0 left-[5%] w-[200px] h-[200px]"
        animate={{
          scale: [1, 1.2, 0.9, 1.1, 1],
          x: [0, 20, -10, 5, 0],
          y: [0, 10, -15, 7, 0],
          rotate: [0, 10, -5, 3, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: 'radial-gradient(circle at 30% 40%, #ff69b4, #ffff00, transparent 70%)',
          filter: 'blur(30px)',
          opacity: 0.25,
          mixBlendMode: 'screen',
        }}
      />

      {/* Cursor following blue-white orb */}
      <motion.div
        className="absolute bottom-0 right-[5%] w-[180px] h-[180px]"
        style={{
          background: 'radial-gradient(circle at center, #00bfff, #ffffff, transparent 70%)',
          filter: 'blur(25px)',
          opacity: 0.2,
          mixBlendMode: 'screen',
          x: followX,
          y: followY,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Red accent orb */}
      <motion.div
        className="absolute bottom-[10%] left-[40%] w-[150px] h-[150px]"
        style={{
          background: 'radial-gradient(circle at center, #ff0000, transparent 70%)',
          filter: 'blur(20px)',
          opacity: 0.15,
          mixBlendMode: 'screen',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}; 