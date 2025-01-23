import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Mail, ArrowRight } from "lucide-react";
import { FooterOrbs } from "@/components/ui/footer-orbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer id="footer-section" className="relative bg-glass backdrop-blur-lg mt-20">
      <FooterOrbs />
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              to="/"
              className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Portfolio
            </Link>
            <p className="text-sm text-muted-foreground">
              Crafting..
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Bangalore, India</p>
              <a href="mailto:prajwalrm3@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Mail size={16} /> prajwalrm3@gmail.com
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">Contact me for any queries.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/50"
              />
              <Button type="submit" size="sm">
                <ArrowRight size={16} />
              </Button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-border/50 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <SocialLink 
                href="https://github.com/prajwal-git-png" 
                icon={<Github size={20} />}
                label="GitHub"
              />
              <SocialLink 
                href="https://linkedin.com/in/prajwal-rm" 
                icon={<Linkedin size={20} />}
                label="LinkedIn"
              />
              <SocialLink 
                href="https://www.instagram.com/im_prajwal21/" 
                icon={<Instagram size={20} />}
                label="Instagram"
              />
            </div>
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Prajwal R M. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full hover:bg-primary/10 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Footer;