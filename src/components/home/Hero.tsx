import { motion } from "framer-motion";
import GradientBackground from "../ui/GradientBackground";

const Hero = () => {
  return (
    <section className="w-full h-screen relative flex items-center overflow-hidden">
      <GradientBackground>
        <div className="w-full h-full flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-12">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-[1px] h-[120%] bg-gradient-to-b from-transparent via-border/20 to-transparent animate-gradient-breathe" />
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-24 h-[1px] bg-gradient-to-r from-border/20 to-transparent animate-gradient-breathe" />
              
              <div className="pl-8 space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.h2 
                    className="text-xs sm:text-sm tracking-[0.35em] uppercase font-light mb-6 
                    text-gray-800 dark:text-white
                    after:content-[''] after:block after:w-12 after:h-[1px] after:bg-gray-400/30 dark:after:bg-white/30 after:mt-6"
                  >
                    Welcome to my portfolio
                  </motion.h2>
                </motion.div>

                <div className="relative space-y-2">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight">
                      <span className="inline-block text-gray-900 dark:text-white leading-[1.1]">
                        Hello!
                      </span>
                    </h1>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative"
                  >
                    <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.9]">
                      <span className="inline-block text-gray-900 dark:text-white
                        relative after:absolute after:content-[''] after:bottom-0 after:left-0 
                        after:w-full after:h-[2px] after:bg-gradient-to-r after:from-primary/50 after:to-primary/50">
                        I'm Prajwal
                      </span>
                    </h1>
                  </motion.div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 pl-8 relative flex justify-between items-start gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl relative leading-relaxed">
                  <span className="font-medium text-gray-900 dark:text-white">Curiosity</span> and 
                  <span className="font-medium text-gray-900 dark:text-white"> dedication</span> drive me to explore new technologies and build things that matter.
                  {/* Decorative dots */}
                  <span className="absolute -left-8 top-1/2 -translate-y-1/2 flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-primary/80 
                      animate-gradient-breathe opacity-70" />
                  </span>
                </p>
              </motion.div>
              
              <div className="flex flex-col gap-3 min-w-[180px]">
                <motion.a
                  href="#projects"
                  className="group relative overflow-hidden rounded-lg px-6 py-3
                    bg-gradient-to-r from-primary/10 to-primary/20 hover:from-primary/20 hover:to-primary/30
                    border border-primary/20 hover:border-primary/30 transition-all duration-300
                    backdrop-blur-sm"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 text-base font-medium text-gray-900 dark:text-white flex items-center justify-between w-full">
                    View Projects
                    <motion.span 
                      className="inline-block"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >→</motion.span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 
                    translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </motion.a>
                
                <motion.a
                  href="#contact"
                  className="group relative overflow-hidden rounded-lg px-6 py-3
                    bg-gradient-to-r from-primary/10 to-primary/20 hover:from-primary/20 hover:to-primary/30
                    border border-primary/20 hover:border-primary/30 transition-all duration-300
                    backdrop-blur-sm"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 text-base font-medium text-gray-900 dark:text-white flex items-center justify-between w-full">
                    Get in Touch
                    <motion.span 
                      className="inline-block"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >→</motion.span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 
                    translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </GradientBackground>
    </section>
  );
};

export default Hero;