import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Certification", href: "#certification" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY;
      
      setIsScrolled(window.scrollY > 10);

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setActiveSection(targetId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-200",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-white/10" 
          : "bg-transparent border-transparent"
      )}
    >
      <nav className="container mx-auto px-6 h-20">
        <div className="flex items-center justify-between h-full">
          <div className="md:block hidden">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
              className="text-2xl font-bold hover:text-primary transition-colors"
            >
              Portfolio
            </a>
          </div>
          
          <div className="md:hidden block">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
              className="text-2xl font-bold"
            >
              Portfolio
            </a>
          </div>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={cn(
                    "text-sm font-medium transition-all relative py-2",
                    "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300",
                    activeSection === item.href.substring(1)
                      ? "text-primary after:w-full"
                      : "text-foreground/70 after:w-0 hover:text-primary hover:after:w-full"
                  )}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="block md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {isMobileMenuOpen && (
            <div
              className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-white/10 py-4 md:hidden"
            >
              <ul className="container mx-auto px-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className={cn(
                        "text-lg font-medium block py-2 transition-all relative",
                        "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300",
                        activeSection === item.href.substring(1)
                          ? "text-primary after:w-full"
                          : "text-foreground/70 after:w-0 hover:text-primary hover:after:w-full"
                      )}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 