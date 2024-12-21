import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A beautiful web application built with React and TypeScript.",
    image: "/placeholder.svg",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "Project Two",
    description: "An innovative mobile app designed for seamless user experience.",
    image: "/placeholder.svg",
    tags: ["React Native", "Firebase", "Node.js"],
  },
  {
    id: 3,
    title: "Project Three",
    description: "A powerful backend system built with modern technologies.",
    image: "/placeholder.svg",
    tags: ["Python", "PostgreSQL", "Docker"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: typeof projects[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative bg-glass backdrop-blur-lg rounded-2xl overflow-hidden"
  >
    <div className="aspect-video">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-foreground/70 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        to={`/project/${project.id}`}
        className="inline-flex items-center gap-2 text-primary hover:underline"
      >
        View Details
        <ArrowUpRight size={16} />
      </Link>
    </div>
  </motion.div>
);

export default Projects;