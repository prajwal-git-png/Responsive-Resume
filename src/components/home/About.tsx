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
      { name: "Java Fullstack", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "C", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
    ]
  },
  {
    title: "Web Development",
    skills: [
      { name: "React & Express JS", level: "Intermediate" },
      { name: "HTML5 & CSS3", level: "Advanced" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Git & GitHub", level: "Intermediate" },
    ]
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL", level: "Intermediate" },
      { name: "MongoDB", level: "Basic" },
      { name: "Postman", level: "Intermediate" },
      { name: "VS Code", level: "Advanced" },
    ]
  },
  {
    title: "Testing & Quality Assurance",
    skills: [
      { name: "Manual Testing", level: "Advanced" },
      { name: "Test Case Design", level: "Advanced" },
      { name: "Bug Reporting", level: "Intermediate" },
      { name: "Test Documentation", level: "Intermediate" },
    ]
  }
];

const experiences = [
  {
    title: "Software Development",
    description: "Full-stack development experience with focus on creating scalable web applications using modern technologies and best practices",
    icon: "💻"
  },
  {
    title: "Quality Assurance",
    description: "Comprehensive manual testing expertise including test planning, execution, and defect management to ensure software quality",
    icon: "🔍"
  },
  {
    title: "Project Management",
    description: "Led academic and personal projects from conception to deployment, ensuring timely delivery and maintaining high code quality standards",
    icon: "📋"
  }
];

const education = [
  {
    degree: "MCA (Master of Computer Applications)",
    school: "Mysore University",
    year: "2025-Present",
    icon: "🎓",
    details: "Currently pursuing - Advanced computer applications and software engineering",
    status: "Currently Pursuing"
  },
  {
    degree: "BCA (Bachelor of Computer Applications)",
    school: "Dr. CV Raman College, Davangere",
    year: "2021-2024",
    icon: "🎓",
    details: "Specialized in software development and database management"
  },
  {
    degree: "PUC (Pre-University College)",
    school: "DRM Science College, Davangere",
    year: "2019-2021",
    icon: "📚",
    details: "Science stream with focus on mathematics and computer science"
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
                  Hello! I'm <span className="text-primary font-semibold">Prajwal RM</span>, a passionate software developer and quality assurance specialist.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed about-text font-light tracking-wide">
                  With a strong foundation in full-stack development and comprehensive manual testing expertise, I specialize in creating robust, user-centric applications that deliver exceptional experiences. My technical journey encompasses modern web technologies, database management, and quality assurance practices.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed about-text font-light tracking-wide">
                  I am committed to writing clean, maintainable code and implementing thorough testing strategies to ensure software reliability. My approach combines technical proficiency with a keen eye for detail, making me well-equipped to tackle complex development challenges while maintaining high quality standards.
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
                Professional Experience
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
                          <p className="text-sm text-muted-foreground/80 mt-1 font-light tracking-wide">
                            {edu.details}
                          </p>
                          {edu.status && (
                            <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-500 font-medium tracking-wide mt-2">
                              {edu.status}
                            </span>
                          )}
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
