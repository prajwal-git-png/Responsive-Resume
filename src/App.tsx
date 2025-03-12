import { ThemeProvider } from "next-themes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectDetails from "./pages/ProjectDetails";
import { CustomCursor } from "./components/ui/custom-cursor";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Certification from "@/components/home/Certification";

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
    <div className="relative min-h-screen overflow-hidden">
      <CustomCursor />
      <ThemeSwitcher />
      <div className="fixed inset-0 bg-background transition-colors duration-300" />
      <div className="relative z-10">
        <Router>
          <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/certification" element={<Certification />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </div>
    </div>
  </ThemeProvider>
);

export default App;