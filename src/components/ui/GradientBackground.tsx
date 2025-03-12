import React from 'react';
import '../../styles/gradient-animations.css';

interface GradientBackgroundProps {
  children?: React.ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => {
  return (
    <div className="relative w-full h-full bg-white dark:bg-[#030014]">
      {/* Main gradient container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Primary gradient sphere - Blue */}
        <div className="absolute top-[-30%] right-[-20%] w-[140vh] h-[140vh]
          bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,rgba(37,99,235,0.05)_35%,transparent_70%)]
          dark:bg-[radial-gradient(circle,rgba(29,78,216,0.6)_0%,rgba(29,78,216,0.2)_35%,transparent_70%)]
          animate-glow-slow blur-[60px] mix-blend-multiply dark:mix-blend-screen" />

        {/* Secondary accent - Cyan */}
        <div className="absolute top-[10%] left-[20%] w-[100vh] h-[100vh]
          bg-[radial-gradient(circle,rgba(6,182,212,0.15)_0%,rgba(6,182,212,0.05)_45%,transparent_70%)]
          dark:bg-[radial-gradient(circle,rgba(6,182,212,0.4)_0%,rgba(6,182,212,0.1)_45%,transparent_70%)]
          animate-glow-slow-delayed blur-[50px] mix-blend-multiply dark:mix-blend-screen" />

        {/* Tertiary layer - Purple */}
        <div className="absolute bottom-[-20%] left-[-10%] w-[120vh] h-[120vh]
          bg-[radial-gradient(circle,rgba(147,51,234,0.15)_0%,rgba(147,51,234,0.05)_40%,transparent_70%)]
          dark:bg-[radial-gradient(circle,rgba(147,51,234,0.5)_0%,rgba(147,51,234,0.2)_40%,transparent_70%)]
          animate-float-minimal blur-[70px] mix-blend-multiply dark:mix-blend-screen" />

        {/* Accent highlights - Light Blue */}
        <div className="absolute top-[40%] right-[15%] w-[50vh] h-[50vh]
          bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,rgba(59,130,246,0.05)_50%,transparent_70%)]
          dark:bg-[radial-gradient(circle,rgba(147,197,253,0.3)_0%,rgba(147,197,253,0.1)_50%,transparent_70%)]
          animate-pulse-slow blur-[40px] mix-blend-multiply dark:mix-blend-screen" />
      </div>

      {/* Enhanced grain overlay */}
      <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.12] mix-blend-overlay" />
      
      {/* Dynamic vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.4)_80%,rgba(255,255,255,0.5)_100%)] 
        dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,0,20,0.8)_80%,rgba(3,0,20,0.95)_100%)]
        animate-gradient-breathe" />

      {/* Content */}
      <div className="relative h-full">
        {children}
      </div>
    </div>
  );
};

export default GradientBackground; 