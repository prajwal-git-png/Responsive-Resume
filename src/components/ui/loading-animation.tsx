import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

export const LoadingAnimation = () => {
  // Set initial loading state to true and prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [displayNumber, setDisplayNumber] = useState(0);
  const { theme } = useTheme();
  const numbers = [0, 15, 35, 60, 85, 100];
  
  // Modern color palette
  const primaryColor = theme === 'dark' ? '#6366f1' : '#4f46e5'; // Indigo
  const secondaryColor = theme === 'dark' ? '#ec4899' : '#db2777'; // Pink
  const accentColor = theme === 'dark' ? '#8b5cf6' : '#7c3aed'; // Purple
  const bgColor = theme === 'dark' ? '#000000' : '#ffffff'; // Black/White
  const textColor = theme === 'dark' ? '#ffffff' : '#0f172a'; // White/Slate
  
  // Handle mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < numbers.length - 1) {
        currentIndex++;
        setCurrentNumber(numbers[currentIndex]);
      } else {
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 300);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    
    const duration = 500;
    const steps = 30;
    const stepDuration = duration / steps;
    const increment = (currentNumber - displayNumber) / steps;
    
    if (currentNumber !== displayNumber) {
      const timer = setInterval(() => {
        setDisplayNumber(prev => {
          const next = prev + increment;
          if (Math.abs(currentNumber - next) < Math.abs(increment)) {
            clearInterval(timer);
            return currentNumber;
          }
          return next;
        });
      }, stepDuration);
      
      return () => clearInterval(timer);
    }
  }, [currentNumber, displayNumber, mounted]);

  // Don't render anything until mounted
  if (!mounted) {
    return (
      <div 
        className="fixed inset-0 z-[99999]" 
        style={{ background: bgColor }}
      />
    );
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center"
          style={{ background: bgColor }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Morphing background shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute w-[800px] h-[800px] blur-3xl"
              style={{
                background: `linear-gradient(45deg, ${primaryColor}30, ${secondaryColor}30)`,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '50% 50% 50% 50%', '30% 70% 70% 30% / 30% 30% 70% 70%'],
              }}
              transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </div>

          {/* Center content container */}
          <div className="relative max-w-[90vw] w-full md:w-[500px] aspect-square flex items-center justify-center">
            {/* Rotating border */}
            <motion.div
              className="absolute inset-0"
              style={{
                border: `2px solid ${primaryColor}15`,
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              }}
              animate={{
                rotate: 360,
                scale: [0.8, 1, 0.8],
                borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '50% 50% 50% 50%', '30% 70% 70% 30% / 30% 30% 70% 70%'],
              }}
              transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
              }}
            />

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Loading text */}
              <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  className="text-sm sm:text-base uppercase tracking-[0.2em] font-light"
                  style={{ color: textColor }}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                 Welcome to my portfolio
                </motion.div>
              </motion.div>

              {/* Progress number */}
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="relative flex items-center justify-center">
                  <motion.span
                    className="block text-6xl sm:text-7xl font-light"
                    style={{ color: primaryColor }}
                    animate={{
                      opacity: [0.85, 1, 0.85],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    {Math.round(displayNumber)}
                  </motion.span>
                  <motion.span
                    className="ml-1 text-xl sm:text-2xl"
                    style={{ color: secondaryColor }}
                    animate={{
                      y: [-1, 1, -1],
                      opacity: [0.85, 1, 0.85],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    %
                  </motion.span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                <div
                  className="w-2 h-2"
                  style={{
                    background: i % 2 === 0 ? `${primaryColor}` : `${secondaryColor}`,
                    borderRadius: i % 3 === 0 ? '50%' : '0%',
                    transform: `rotate(${Math.random() * 360}deg)`,
                    opacity: theme === 'dark' ? 0.4 : 0.3,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
