import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "@/hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: "Intermediate" },
      { name: "C", level: "Intermediate" },
      { name: "PHP", level: "Intermediate" },
      { name: "Java Fullstack", level: "Intermediate" },
    ]
  },
  {
    title: "Web Development",
    skills: [
      { name: "React & Express JS", level: "Basic" },
      { name: "HTML5 & CSS3", level: "Intermediate" },
      { name: "JavaScript", level: "Basic" },
      { name: "Git", level: "Intermediate" },
    ]
  }
];

const experiences = [
  {
    title: "Project Management",
    description: "Managed and led various academic projects, ensuring timely delivery and quality outcomes",
    icon: "💼"
  },
  {
    title: "Frontend Development",
    description: "Essential experience in front-end development, focusing on creating responsive websites using HTML, CSS, and JavaScript",
    icon: "🎨"
  },
  {
    title: "Backend Development",
    description: "Key experience in backend development, mainly building and managing server-side applications using PHP, JavaScript, Python, and Flask",
    icon: "⚙️"
  }
];

const education = [
  {
    degree: "BCA (Bachelor of Computer Applications)",
    school: "Dr.CV Raman College, Davangere",
    year: "2021-2024",
    icon: "🎓"
  },
  {
    degree: "PUC (Pre-University College)",
    school: "DRM Science College, Davangere",
    year: "2019-2021",
    icon: "📚"
  }
];

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // More performant animation setup
      const skillItems = gsap.utils.toArray<HTMLElement>(".skill-item");
      
      ScrollTrigger.batch(skillItems, {
        interval: 0.1, // time window between batched items
        batchMax: 3,   // maximum batch size
        onEnter: batch => {
          gsap.to(batch, {
            opacity: 1,
            x: 0,
            y: 0,
            stagger: 0.15,
            overwrite: true,
            duration: 0.8,
            ease: "power2.out"
          });
        },
        start: "top 85%",
      });

      // Optimize text animations
      const textElements = gsap.utils.toArray<HTMLElement>(".about-text");
      gsap.set(textElements, { opacity: 0, y: 20 });
      
      ScrollTrigger.batch(textElements, {
        interval: 0.1,
        onEnter: batch => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
          });
        },
        start: "top 85%",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Variants for Framer Motion animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0,
      x: isMobile ? 0 : -20,
      y: isMobile ? 20 : 0 
    },
    visible: { 
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className="custom-scrollbar min-h-screen w-full bg-background py-12 md:py-16 lg:py-20"
    >
      <section 
        id="about" 
        className="py-20 pt-28 relative min-h-screen scroll-mt-20"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto about-section">
            {/* About Me Section */}
            <div className="mb-20">
              <motion.h2 
                className="text-5xl md:text-7xl font-heading font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                About Me
              </motion.h2>
              
              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed about-text font-light tracking-wide">
                  I am glad you are here! Hi, I'm <span className="text-primary font-semibold">Prajwal RM</span>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed about-text font-light tracking-wide">
                Welcome! I'm Prajwal RM.

With a strong foundation in programming and web development, I specialize in creating interactive and user-friendly web applications. My journey into the tech world began with a fascination for AI and Machine Learning, and over time, I have expanded my skills across a variety of technologies, including Python, Java, and web development. I'm passionate about building innovative solutions and continuously learning to keep up with the evolving tech landscape.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-20">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  className="mb-16"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
                  }}
                >
                  <motion.h3 
                    className="text-3xl font-heading font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
                    variants={skillVariants}
                  >
                    {category.title}
                  </motion.h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="skill-item group"
                        variants={skillVariants}
                        whileHover={!isMobile ? { scale: 1.02 } : undefined}
                      >
                        <div className="relative overflow-hidden bg-glass backdrop-blur-lg p-6 rounded-lg border border-primary/10">
                          <div className="relative z-10">
                            <h4 className="text-xl font-medium mb-2">{skill.name}</h4>
                            <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium tracking-wide">
                              {skill.level}
                            </span>
                          </div>
                          
                          {!isMobile && (
                            <>
                              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105" />
                            </>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Experience Section */}
            <motion.div
              variants={containerVariants}
              className="mb-20"
            >
              <motion.h3 
                className="text-3xl font-heading font-bold mb-12 flex items-center gap-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
                variants={skillVariants}
              >
                <span className="text-4xl">💼</span>
                Experience
              </motion.h3>

              <div className="grid grid-cols-1 gap-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    variants={{
                      hidden: { 
                        opacity: 0, 
                        x: isMobile ? 0 : -50,
                        y: isMobile ? 30 : 0 
                      },
                      visible: { 
                        opacity: 1, 
                        x: 0, 
                        y: 0,
                        transition: {
                          type: "spring",
                          damping: 20,
                          stiffness: 100,
                          delay: index * 0.1
                        }
                      }
                    }}
                    className="relative"
                  >
                    <motion.div 
                      className="bg-glass backdrop-blur-lg p-6 rounded-lg border border-primary/10 group 
                                 hover:bg-primary/5 transition-all duration-500 relative overflow-hidden"
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* Timeline connector */}
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/20 -ml-4 hidden md:block" />
                      <div className="absolute left-0 top-1/2 w-3 h-3 rounded-full bg-primary -ml-[0.65rem] hidden md:block 
                                      group-hover:scale-150 group-hover:glow transition-all duration-300" />
                      
                      <div className="flex items-start gap-4 relative z-10">
                        <motion.span 
                          className="text-2xl"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {exp.icon}
                        </motion.span>
                        <div>
                          <h4 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                            {exp.title}
                          </h4>
                          <p className="text-muted-foreground transform-gpu transition-all duration-300 
                                        group-hover:translate-x-2 font-light tracking-wide leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </div>

                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                      animate-gradient-x" />
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 
                                      blur-xl transition-all duration-500 group-hover:scale-110" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              variants={containerVariants}
              className="mb-20"
            >
              <motion.h3 
                className="text-3xl font-heading font-bold mb-12 flex items-center gap-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
                variants={skillVariants}
              >
                <span className="text-4xl">🎓</span>
                Education
              </motion.h3>

              <div className="grid grid-cols-1 gap-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    variants={{
                      hidden: { 
                        opacity: 0, 
                        x: isMobile ? 0 : 50,
                        y: isMobile ? 30 : 0 
                      },
                      visible: { 
                        opacity: 1, 
                        x: 0, 
                        y: 0,
                        transition: {
                          type: "spring",
                          damping: 20,
                          stiffness: 100,
                          delay: index * 0.2
                        }
                      }
                    }}
                    className="relative"
                  >
                    <motion.div 
                      className="bg-glass backdrop-blur-lg p-6 rounded-lg border border-primary/10 group 
                                 hover:bg-primary/5 transition-all duration-500 relative overflow-hidden"
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* Timeline connector */}
                      <div className="absolute right-0 top-0 bottom-0 w-px bg-primary/20 -mr-4 hidden md:block" />
                      <div className="absolute right-0 top-1/2 w-3 h-3 rounded-full bg-primary -mr-[0.65rem] hidden md:block 
                                      group-hover:scale-150 group-hover:glow transition-all duration-300" />
                      
                      <div className="flex items-start gap-4 relative z-10">
                        <motion.span 
                          className="text-2xl"
                          whileHover={{ scale: 1.2, rotate: -360 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {edu.icon}
                        </motion.span>
                        <div className="flex-1 transform-gpu transition-all duration-300 group-hover:translate-x-2">
                          <h4 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                            {edu.degree}
                          </h4>
                          <p className="text-muted-foreground font-light tracking-wide">{edu.school}</p>
                          <p className="text-sm text-muted-foreground/60 mt-2 group-hover:text-primary/60 font-light tracking-wide">
                            {edu.year}
                          </p>
                        </div>
                      </div>

                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                      animate-gradient-x" />
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 
                                      blur-xl transition-all duration-500 group-hover:scale-110" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
