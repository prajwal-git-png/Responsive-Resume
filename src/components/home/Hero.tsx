import { motion } from "framer-motion";
import { MagneticText } from "@/components/ui/magnetic-text";
import { GradientOrbs } from "@/components/ui/gradient-orbs";

const Hero = () => {
  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 select-none">
      <GradientOrbs />
      
      {/* Content container with glass effect */}
      <div className="container relative mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[95vw] sm:max-w-[90vw] mx-auto"
        >
          <h1 className="text-[10vw] sm:text-[8vw] font-heading font-bold leading-tight sm:leading-none tracking-tighter mb-4 sm:mb-8 relative">
            <MagneticText>
              <span className="relative inline-block">
                Hello !
                <motion.span
                  className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </span>
            </MagneticText>
            <br />
            <MagneticText>
              <span className="text-stroke relative">
                I'm Prajwal
                <div className="absolute -z-10 inset-0 blur-3xl opacity-20 bg-primary" />
              </span>
            </MagneticText>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-4 sm:gap-8 mt-8 sm:mt-12">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground backdrop-blur-sm bg-background/5 rounded-2xl p-6">
              Curiosity and dedication drive me to explore new technologies and build things.
            </p>
            
            <div className="flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-0">
              <MagneticText magneticStrength={0.3}>
                <motion.a
                  href="#projects"
                  className="hover-line inline-flex items-center text-base sm:text-lg group relative overflow-hidden px-6 py-2"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative z-10">View Projects →</span>
                  <div className="absolute inset-0 bg-primary/10 -z-10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </motion.a>
              </MagneticText>
              
              <MagneticText magneticStrength={0.3}>
                <motion.a
                  href="#contact"
                  className="hover-line inline-flex items-center text-base sm:text-lg group relative overflow-hidden px-6 py-2"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative z-10">Get in Touch →</span>
                  <div className="absolute inset-0 bg-primary/10 -z-10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </motion.a>
              </MagneticText>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;