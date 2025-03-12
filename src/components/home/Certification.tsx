import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp, CheckCircle } from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  provider: string;
  date: string;
  verificationId: string;
  verificationUrl: string;
  screenshot: string;
  description: string;
}

const certificates: Certificate[] = [
  {
    id: "1",
    title: "MongoDB Learnathon",
    provider: "MongoDB",
    date: "2023",
    verificationId: "MMnNKd4xTu-w1jhSytAT5A",
    verificationUrl: "https://learn.mongodb.com/c/MMnNKd4xTu-w1jhSytAT5A",
    screenshot: "/images/certificates/mongo.png",
    description: "Completed comprehensive MongoDB training covering database design, querying, aggregation pipelines, and performance optimization. Learned best practices for building scalable applications with MongoDB."
  },
  {
    id: "2",
    title: "Web Development Bootcamp",
    provider: "Udemy",
    date: "2024",
    verificationId: "UC-6a8a0a42-8186-4214-91d9-908a1d44cdb2",
    verificationUrl: "https://www.udemy.com/certificate/UC-6a8a0a42-8186-4214-91d9-908a1d44cdb2/",
    screenshot: "/images/certificates/webdev.jpg",
    description: "Full-stack web development course covering modern web technologies including HTML5, CSS3, JavaScript, React, Node.js, and MongoDB. Developed practical skills through hands-on projects."
  }
];

const CertificateCard = ({ certificate }: { certificate: Certificate }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group border border-border/50 bg-background/50 backdrop-blur-xl rounded-none overflow-hidden
        hover:bg-foreground/5 transition-colors duration-300"
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
              {certificate.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {certificate.provider} • {certificate.date}
            </p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
            aria-label={isExpanded ? "Show less" : "Show more"}
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-primary" />
            ) : (
              <ChevronDown className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed">{certificate.description}</p>
            
            {/* Certificate Screenshot */}
            <div className="relative aspect-[16/9] bg-background/50 rounded-none overflow-hidden border border-border/50">
              <img
                src={certificate.screenshot}
                alt={`${certificate.title} Certificate`}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Verification Section */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-4 border-t border-border/50">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Verification ID: {certificate.verificationId}
              </div>
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 
                  text-primary rounded-none transition-colors text-sm border border-primary/20"
              >
                Verify Certificate
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const Certification = () => {
  return (
    <section id="certification" className="relative py-20 pt-28 min-h-screen scroll-mt-20 bg-background border-y border-border/50">
      {/* Decorative elements */}
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-[1px] h-[120%] bg-gradient-to-b from-transparent via-border/50 to-transparent animate-gradient-breathe" />
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-24 h-[1px] bg-gradient-to-r from-border/50 to-transparent animate-gradient-breathe" />

      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative pl-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground
              after:content-[''] after:block after:w-12 after:h-[1px] after:bg-border/50 after:mt-6">
              Certifications
            </h2>
            <div className="space-y-6">
              {certificates.map((certificate) => (
                <CertificateCard key={certificate.id} certificate={certificate} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Border gradient at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
    </section>
  );
};

export default Certification; 