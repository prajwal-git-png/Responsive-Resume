import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';

export const GradientOrbs = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isHovering = useMotionValue(false);
  const hue1 = useMotionValue(0);
  const hue2 = useMotionValue(180);

  // Faster following effect
  const springConfig = { damping: 50, stiffness: 100, mass: 1 };
  const followX = useSpring(mouseX, springConfig);
  const followY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('hero-section')?.getBoundingClientRect();
      if (!rect) return;
      
      if (e.clientY <= rect.bottom) {
        isHovering.set(true);
        // Adjust the divisor to make the orb follow more closely
        mouseX.set((e.clientX - rect.left) / 2);
        mouseY.set((e.clientY - rect.top) / 2);
      } else {
        isHovering.set(false);
      }
    };

    const handleMouseLeave = () => {
      isHovering.set(false);
    };

    // Animate hue rotation
    const rotateHues = async () => {
      while (true) {
        await animate(hue1, 360, {
          duration: 10,
          ease: "linear",
        });
        hue1.set(0);
        
        await animate(hue2, 540, {
          duration: 10,
          ease: "linear",
        });
        hue2.set(180);
      }
    };

    rotateHues();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Amoeba-like static orb */}
      <motion.div
        className="absolute top-[10%] left-[10%] w-[600px] h-[600px]"
        animate={{
          scale: [1, 1.2, 0.9, 1.1, 1],
          x: [0, 50, -30, 20, 0],
          y: [0, 30, -40, 25, 0],
          rotate: [0, 20, -10, 15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: useTransform(
            hue1,
            (value) => `radial-gradient(circle at 30% 40%, 
              hsl(${value}, 100%, 70%), 
              hsl(${value + 60}, 100%, 50%), 
              transparent 70%)`
          ),
          filter: 'blur(60px)',
          opacity: 0.4,
          mixBlendMode: 'screen',
        }}
      />

      {/* Cursor following orb */}
      <motion.div
        className="absolute top-[15%] right-[15%] w-[500px] h-[500px]"
        style={{
          background: useTransform(
            hue2,
            (value) => `radial-gradient(circle at center, 
              hsl(${value}, 100%, 70%), 
              hsl(${value + 60}, 100%, 50%), 
              transparent 70%)`
          ),
          filter: 'blur(50px)',
          opacity: 0.3,
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

      {/* Additional smaller orbs for more color variety */}
      <motion.div
        className="absolute top-[25%] left-[30%] w-[300px] h-[300px]"
        style={{
          background: useTransform(
            hue1,
            (value) => `radial-gradient(circle at center, 
              hsl(${value + 120}, 100%, 70%), 
              transparent 70%)`
          ),
          filter: 'blur(40px)',
          opacity: 0.2,
          mixBlendMode: 'screen',
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
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