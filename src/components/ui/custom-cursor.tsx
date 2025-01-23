import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-[999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <div className="relative w-8 h-8">
          <div className="absolute inset-0 rounded-full bg-white opacity-50 blur-sm" />
          <div className="absolute inset-[2px] rounded-full bg-white" />
        </div>
      </motion.div>

      {/* Gradient trail */}
      <motion.div
        className="fixed pointer-events-none z-[998] w-32 h-32 rounded-full opacity-30 blur-3xl"
        style={{
          background: 'linear-gradient(45deg, #FF8A80, #82B1FF)',
          x: cursorX,
          y: cursorY,
          scale: 0.5,
        }}
      />
    </>
  );
}; 