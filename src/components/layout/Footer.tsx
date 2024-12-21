import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-glass backdrop-blur-lg mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              to="/"
              className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Portfolio
            </Link>
          </div>
          <div className="flex space-x-6">
            <SocialLink href="https://github.com" icon={<Github size={20} />} />
            <SocialLink
              href="https://linkedin.com"
              icon={<Linkedin size={20} />}
            />
            <SocialLink href="mailto:email@example.com" icon={<Mail size={20} />} />
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-foreground/60">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground/60 hover:text-foreground transition-colors duration-200"
  >
    {icon}
  </a>
);

export default Footer;