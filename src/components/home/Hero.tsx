import { motion } from "framer-motion";
import { MagneticText } from "@/components/ui/magnetic-text";
import { GradientOrbs } from "@/components/ui/gradient-orbs";

const Hero = () => {
  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 select-none">
      <GradientOrbs />
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[95vw] sm:max-w-[90vw] mx-auto"
        >
          <h1 className="text-[10vw] sm:text-[8vw] font-heading font-bold leading-tight sm:leading-none tracking-tighter mb-4 sm:mb-8">
            <MagneticText>Hello !</MagneticText>
            <br />
            <MagneticText>
              <span className="text-stroke">I'm  Prajwal</span>
            </MagneticText>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-4 sm:gap-8 mt-8 sm:mt-12">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
               Curiosity and dedication drive me to explore new technologies and build things.
                   </p>
            
            <div className="flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-0">
              <MagneticText magneticStrength={0.3}>
                <motion.a
                  href="#projects"
                  className="hover-line inline-flex items-center text-base sm:text-lg"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  View Projects →
                </motion.a>
              </MagneticText>
              
              <MagneticText magneticStrength={0.3}>
                <motion.a
                  href="#contact"
                  className="hover-line inline-flex items-center text-base sm:text-lg"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  Get in Touch →
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