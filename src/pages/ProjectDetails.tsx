import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Code, BookOpen, Wrench } from "lucide-react";
import { projects } from "@/components/home/Projects";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface TechStack {
  frontend?: string[];
  tools?: string[];
  [key: string]: string[] | undefined;
}

interface Screenshot {
  url: string;
  caption: string;
}

interface CodeExample {
  title: string;
  code: string;
  language: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  techStack: TechStack;
  screenshots: Screenshot[];
  codeExamples: CodeExample[];
  installation: string[];
  usage: string[];
  challenges: string[];
  learnings: string[];
}

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-foreground/70 mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                  >
                    {tag}
                  </span>
                ))}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm hover:bg-primary/30 transition-colors flex items-center gap-1"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                )}
              </div>
            <div className="flex gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Github size={20} />
                  View Source
                </a>
              )}
             
            </div>
          </div>

          {/* Main Project Image */}
          <div className="mb-12 rounded-2xl overflow-hidden bg-card">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Project Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview Section */}
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen size={24} />
                  Overview
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  {project.longDescription}
                </p>
              </section>

              {/* Screenshots Section */}
              {project.screenshots && (
                <section>
                  <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.screenshots.map((screenshot, index) => (
                      <div key={index} className="space-y-2">
                        <div className="rounded-lg overflow-hidden bg-card">
                          <img
                            src={screenshot.url}
                            alt={screenshot.caption}
                            className="w-full h-auto"
                          />
                        </div>
                        <p className="text-sm text-foreground/70 text-center">
                          {screenshot.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Code Examples Section */}
              {project.codeExamples && (
                <section>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Code size={24} />
                    Code Examples
                  </h2>
                  <div className="space-y-6">
                    {project.codeExamples.map((example, index) => (
                      <div key={index} className="space-y-2">
                        <h3 className="text-lg font-semibold">{example.title}</h3>
                        <div className="rounded-lg overflow-hidden">
                          <SyntaxHighlighter
                            language={example.language}
                            style={vscDarkPlus}
                            className="!bg-card !p-4"
                          >
                            {example.code}
                          </SyntaxHighlighter>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Installation & Usage */}
              {(project.installation || project.usage) && (
                <section className="grid md:grid-cols-2 gap-8">
                  {project.installation && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Installation</h2>
                      <ol className="list-decimal list-inside space-y-2 text-foreground/70">
                        {project.installation.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                  {project.usage && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Usage</h2>
                      <ol className="list-decimal list-inside space-y-2 text-foreground/70">
                        {project.usage.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Wrench size={24} />
                  Tech Stack
                </h2>
                {project.techStack && (
                  <div className="space-y-4">
                    {Object.entries(project.techStack).map(([category, technologies]) => (
                      <div key={category}>
                        <h3 className="text-lg font-semibold mb-2 capitalize">
                          {category}
                        </h3>
                        <ul className="list-disc list-inside text-foreground/70">
                          {technologies.map((tech) => (
                            <li key={tech}>{tech}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* Key Features */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="list-disc list-inside space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="text-foreground/70">
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Challenges & Learnings */}
              {(project.challenges || project.learnings) && (
                <section className="space-y-6">
                  {project.challenges && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Challenges</h2>
                      <ul className="list-disc list-inside space-y-2 text-foreground/70">
                        {project.challenges.map((challenge, index) => (
                          <li key={index}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.learnings && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Key Learnings</h2>
                      <ul className="list-disc list-inside space-y-2 text-foreground/70">
                        {project.learnings.map((learning, index) => (
                          <li key={index}>{learning}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
