import { motion } from "framer-motion";
import { MagneticText } from "@/components/ui/magnetic-text";
import { GradientOrbs } from "@/components/ui/gradient-orbs";

const Hero = () => {
  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center">
      <GradientOrbs />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[90vw] mx-auto"
        >
          <h1 className="text-[12vw] md:text-[8vw] font-heading font-bold leading-none tracking-tighter mb-8">
            <MagneticText>Hello !</MagneticText>
            <br />
            <MagneticText>
              <span className="text-stroke">I'm  Prajwal</span>
            </MagneticText>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-8 mt-12">
            <p className="text-lg md:text-xl text-muted-foreground">
            Aspiring developer dedicated to building creative and efficient solutions – welcome to my portfolio.
            </p>
            
            <div className="flex flex-col gap-4">
              <MagneticText magneticStrength={0.3}>
                <motion.a
                  href="#projects"
                  className="hover-line inline-flex items-center text-lg"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  View Projects →
                </motion.a>
              </MagneticText>
              
              <MagneticText magneticStrength={0.3}>
                <motion.a
                  href="#contact"
                  className="hover-line inline-flex items-center text-lg"
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