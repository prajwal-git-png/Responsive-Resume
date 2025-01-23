import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';

export const AmorphousBlobs = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollY } = useScroll();

  // Slow following effect with heavy damping
  const springConfig = { damping: 50, stiffness: 30, mass: 2 };
  const followX = useSpring(mouseX, springConfig);
  const followY = useSpring(mouseY, springConfig);

  // Return to original position on scroll
  const yRange = useTransform(scrollY, [0, 200], [0, -200]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / 10);
      mouseY.set(e.clientY / 10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Static amorphous blob */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[800px] h-[800px]"
        animate={{
          scale: [1, 1.2, 1.1, 1],
          rotate: [0, 10, -10, 0],
          filter: ["blur(40px)", "blur(50px)", "blur(40px)"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: 'radial-gradient(circle at center, hsl(var(--primary)), transparent)',
          opacity: 0.15,
        }}
      />

      {/* Mouse following blob */}
      <motion.div
        className="absolute top-[-100px] right-[-100px] w-[700px] h-[700px]"
        style={{
          background: 'radial-gradient(circle at center, hsl(var(--secondary)), transparent)',
          opacity: 0.15,
          filter: 'blur(40px)',
          x: followX,
          y: useTransform(
            [followY, yRange],
            ([followY, yRange]) => followY + yRange
          ),
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}; 