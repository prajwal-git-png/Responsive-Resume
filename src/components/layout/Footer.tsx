import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/prajwal-git-png",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/prajwal-r-makanur-242517354/",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/im_prajwal21/",
    icon: Instagram,
  },
  {
    name: "Email",
    href: "mailto:prajwalrm3@gmail.com",
    icon: Mail,
  },
];

const Footer = () => {
  return (
    <footer className="relative">
      {/* Gradient Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary deep blue gradient sphere */}
        <div className="absolute bottom-[-50%] right-[-20%] w-[140vh] h-[140vh]
          bg-[radial-gradient(circle,rgba(29,78,216,0.6)_0%,rgba(29,78,216,0.2)_35%,transparent_70%)]
          animate-glow-slow blur-[60px] mix-blend-screen" />

        {/* Secondary cyan accent */}
        <div className="absolute bottom-[20%] left-[10%] w-[100vh] h-[100vh]
          bg-[radial-gradient(circle,rgba(6,182,212,0.4)_0%,rgba(6,182,212,0.1)_45%,transparent_70%)]
          animate-glow-slow-delayed blur-[50px] mix-blend-screen" />

        {/* Tertiary indigo layer */}
        <div className="absolute top-[-20%] right-[-10%] w-[120vh] h-[120vh]
          bg-[radial-gradient(circle,rgba(79,70,229,0.5)_0%,rgba(79,70,229,0.2)_40%,transparent_70%)]
          animate-float-minimal blur-[70px] mix-blend-screen" />

        {/* Accent highlights */}
        <div className="absolute bottom-[30%] right-[25%] w-[50vh] h-[50vh]
          bg-[radial-gradient(circle,rgba(147,197,253,0.3)_0%,rgba(147,197,253,0.1)_50%,transparent_70%)]
          animate-pulse-slow blur-[40px] mix-blend-screen" />
      </div>

      {/* Enhanced grain overlay */}
      <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.12] mix-blend-overlay" />
      
      {/* Content */}
      <div className="relative border-t border-border/50 bg-background/50 backdrop-blur-xl">
        <div className="container px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Prajwal</h3>
              <p className="text-muted-foreground max-w-xs">
                A passionate developer focused on creating intuitive and engaging web experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link to="/#about" className="hover:text-primary transition-colors">About</Link>
                <Link to="/#projects" className="hover:text-primary transition-colors">Projects</Link>
                <Link to="/#contact" className="hover:text-primary transition-colors">Contact</Link>
              </nav>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                    aria-label={link.name}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Prajwal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;