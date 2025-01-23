import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';

export const GradientBlobs = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollY } = useScroll();
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  // Slow following effect
  const springConfig = { damping: 30, stiffness: 50, mass: 1 };
  const followX = useSpring(mouseX, springConfig);
  const followY = useSpring(mouseY, springConfig);

  // Transform scroll into blob movement
  const blob1Y = useTransform(scrollY, [0, 1000], [0, 200]);
  const blob2Y = useTransform(scrollY, [0, 1000], [0, 150]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Static animated blob */}
      <motion.div
        ref={blob1Ref}
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))',
          y: blob1Y,
        }}
      />

      {/* Mouse following blob */}
      <motion.div
        ref={blob2Ref}
        className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
        style={{
          background: 'linear-gradient(225deg, hsl(var(--secondary)), hsl(var(--primary)))',
          x: useTransform(followX, [0, 1], [-100, 100]),
          y: useTransform(followY, [0, 1], [-50, 50]),
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Optional: Add more subtle blobs for complexity */}
      <motion.div
        className="absolute top-[20%] left-[30%] w-[300px] h-[300px] rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: 'linear-gradient(135deg, hsl(var(--primary)), transparent)',
        }}
      />
    </div>
  );
}; 