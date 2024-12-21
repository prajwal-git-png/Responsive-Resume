import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A beautiful web application built with React and TypeScript.",
    fullDescription: "This project showcases modern web development practices using React and TypeScript. It features a responsive design, state management with React Query, and a beautiful UI built with Tailwind CSS.",
    image: "/placeholder.svg",
    screenshots: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    tags: ["React", "TypeScript", "Tailwind"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    codeSnippet: `
// Example React component
const Button = ({ children }) => {
  return (
    <button className="px-4 py-2 bg-primary text-white rounded-md">
      {children}
    </button>
  );
};
    `,
  },
  {
    id: 2,
    title: "Project Two",
    description: "An innovative mobile app designed for seamless user experience.",
    fullDescription: "This project focuses on creating a mobile application that provides a smooth and engaging user experience, utilizing React Native and Firebase.",
    image: "/placeholder.svg",
    screenshots: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    tags: ["React Native", "Firebase", "Node.js"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    codeSnippet: `
// Example React Native component
const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello, world!</Text>
    </View>
  );
};
    `,
  },
  {
    id: 3,
    title: "Project Three",
    description: "A powerful backend system built with modern technologies.",
    fullDescription: "This project demonstrates a robust backend system using Python and PostgreSQL, focusing on API development and database management.",
    image: "/placeholder.svg",
    screenshots: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    tags: ["Python", "PostgreSQL", "Docker"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    codeSnippet: `
// Example Python Flask route
@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"data": "Hello, World!"})
    `,
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground mb-8"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>

          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-foreground/70 text-lg mb-8">{project.fullDescription}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {project.screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="rounded-lg shadow-lg w-full"
                />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Sample Code</h2>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{project.codeSnippet}</code>
              </pre>
            </Card>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Github size={20} />
                Source Code
              </a>
            </Button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
