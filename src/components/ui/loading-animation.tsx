import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

export const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [displayNumber, setDisplayNumber] = useState(0);
  const { theme } = useTheme();
  const numbers = [0, 20, 40, 60, 80, 100];
  
  // Theme-based colors
  const primaryColor = theme === 'dark' ? '#ff4800' : '#ff6b00';
  const secondaryColor = theme === 'dark' ? '#ff7e00' : '#ff9500';
  const bgColor = theme === 'dark' ? 'rgba(0, 0, 0, 0.97)' : 'rgba(255, 255, 255, 0.97)';
  const textColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)';
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < numbers.length - 1) {
        currentIndex++;
        setCurrentNumber(numbers[currentIndex]);
      } else {
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 500);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const duration = 800;
    const steps = 60;
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
  }, [currentNumber, displayNumber]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: bgColor }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Breathing background effect */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                `radial-gradient(circle at 50% 50%, ${primaryColor} 0%, transparent 60%)`,
                `radial-gradient(circle at 50% 50%, ${primaryColor} 0%, transparent 30%)`,
                `radial-gradient(circle at 50% 50%, ${primaryColor} 0%, transparent 60%)`,
              ],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ opacity: theme === 'dark' ? 0.15 : 0.1 }}
          />

          {/* Pulsing rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 border"
              style={{
                width: 1000 - i * 200,
                height: 1000 - i * 200,
                borderRadius: '50%',
                x: '-50%',
                y: '-50%',
                borderColor: theme === 'dark' ? 'rgba(255, 72, 0, 0.2)' : 'rgba(255, 107, 0, 0.15)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: theme === 'dark' ? [0.1, 0.3, 0.1] : [0.05, 0.2, 0.05],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                delay: i * 0.3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}

          {/* Center animation */}
          <div className="relative">
            <motion.div
              className="relative w-[500px] h-[500px]"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  style={{
                    border: '1px solid rgba(255, 72, 0, 0.3)',
                    borderRadius: '40%',
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Welcome text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <motion.div
              className="text-xl tracking-[0.3em] uppercase font-['Great_Vibes']"
              style={{
                color: textColor,
                textShadow: theme === 'dark' 
                  ? '0 0 20px rgba(255, 72, 0, 0.4)'
                  : '0 0 20px rgba(255, 107, 0, 0.3)',
                WebkitTextStroke: theme === 'dark'
                  ? '0.2px rgba(255, 72, 0, 0.3)'
                  : '0.2px rgba(255, 107, 0, 0.2)',
              }}
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [0.98, 1.02, 0.98],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              Welcome to
            </motion.div>
            <motion.div
              className="mt-2 text-4xl font-['Pinyon_Script']"
              style={{
                background: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: theme === 'dark'
                  ? '2px 2px 4px rgba(255, 72, 0, 0.3)'
                  : '2px 2px 4px rgba(255, 107, 0, 0.2)',
                filter: theme === 'dark'
                  ? 'drop-shadow(0 0 10px rgba(255, 72, 0, 0.2))'
                  : 'drop-shadow(0 0 10px rgba(255, 107, 0, 0.15))',
              }}
              animate={{
                opacity: [0.8, 1, 0.8],
                scale: [0.97, 1.04, 0.97],
                rotate: [1, -1, 1],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 0.2,
              }}
            >
              My Portfolio
            </motion.div>
          </div>

          {/* Counter */}
          <div className="fixed bottom-12 right-40 w-[500px]">
            <motion.div
              className="relative flex justify-end items-baseline"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              <motion.span
                className="block text-[160px] font-['Allura'] leading-none"
                style={{
                  background: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: theme === 'dark'
                    ? '0 0 40px rgba(255, 72, 0, 0.4)'
                    : '0 0 40px rgba(255, 107, 0, 0.3)',
                  WebkitTextStroke: theme === 'dark'
                    ? '1px rgba(255, 72, 0, 0.1)'
                    : '1px rgba(255, 107, 0, 0.1)',
                  filter: theme === 'dark'
                    ? 'drop-shadow(0 0 15px rgba(255, 72, 0, 0.2))'
                    : 'drop-shadow(0 0 15px rgba(255, 107, 0, 0.15))',
                }}
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.9, 1, 0.9],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                {Math.round(displayNumber)}
              </motion.span>
              <motion.span
                className="absolute -right-12 bottom-12 text-3xl font-['Great_Vibes']"
                style={{
                  color: textColor,
                  textShadow: theme === 'dark'
                    ? '2px 2px 4px rgba(255, 72, 0, 0.3)'
                    : '2px 2px 4px rgba(255, 107, 0, 0.2)',
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  scale: [1, 1.1, 1],
                  rotate: [0, -3, 0],
                }}
                transition={{
                  opacity: { delay: 0.2 },
                  scale: {
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }
                }}
              >
                %
              </motion.span>
            </motion.div>
          </div>

          {/* Floating particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: theme === 'dark' ? 'rgba(255, 72, 0, 0.3)' : 'rgba(255, 107, 0, 0.2)',
              }}
              animate={{
                y: [0, -100, 0],
                opacity: theme === 'dark' ? [0, 0.8, 0] : [0, 0.6, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
