import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectDetails from "./pages/ProjectDetails";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { CustomCursor } from "./components/ui/custom-cursor";
import { AmorphousBlobs } from "./components/ui/amorphous-blobs";
import { LoadingAnimation } from "./components/ui/loading-animation";
import "./styles/gradient.css";
import "./styles/scrollbar.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <div className="relative min-h-screen overflow-hidden">
          <LoadingAnimation />
          <div className="fixed inset-0 bg-background transition-colors duration-300" />
          <AmorphousBlobs />
          <CustomCursor />
          <ThemeSwitcher />
          <div className="relative z-10">
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/project/:id" element={<ProjectDetails />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;