import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About Me
          </h2>
          <div className="bg-glass backdrop-blur-lg rounded-2xl p-8">
            <p className="text-lg text-foreground/80 mb-6">
              I'm a passionate developer with a keen eye for design and a love for creating
              beautiful, functional web experiences. With expertise in modern web
              technologies, I bring ideas to life through clean code and creative
              solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Skill title="Frontend" items={["React", "TypeScript", "Tailwind"]} />
              <Skill title="Backend" items={["Node.js", "Python", "PostgreSQL"]} />
              <Skill title="Tools" items={["Git", "Docker", "AWS"]} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skill = ({ title, items }: { title: string; items: string[] }) => (
  <div className="text-center">
    <h3 className="font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="text-foreground/70">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default About;