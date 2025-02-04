import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingAnimation = () => {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Increment counter
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // Check if device is mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: isMobile ? 0.2 : 0.3 }}
        >
          <div className="relative flex flex-col items-center gap-4 md:gap-6">
            {/* Number counter */}
            <motion.div
              className="text-5xl md:text-7xl font-bold tracking-tighter text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: isMobile ? 0.3 : 0.5,
                type: "spring",
                stiffness: 100
              }}
            >
              {count}
              <span className="text-xl md:text-2xl ml-1">%</span>
            </motion.div>

            {/* Loading line */}
            <div className="w-36 md:w-48 h-[2px] bg-muted relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${count}%` }}
                transition={{ 
                  duration: 0.1,
                  type: "tween"
                }}
              />
            </div>

            {/* Loading text */}
            <motion.div
              className="text-muted-foreground text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                delay: isMobile ? 0.1 : 0.2,
                duration: 0.2
              }}
            >
              Loading the Portfolio...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 