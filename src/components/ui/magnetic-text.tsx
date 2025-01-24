import { useRef, useEffect, useState } from 'react';

interface MagneticTextProps {
  children: React.ReactNode;
  className?: string;
  magneticStrength?: number;
}

export const MagneticText = ({ 
  children, 
  className = "", 
  magneticStrength = 0.5 
}: MagneticTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const boundingRef = useRef<DOMRect | null>(null);
  const animationRef = useRef<any>(null);
  const [gsap, setGsap] = useState<any>(null);
  const isMobile = useRef(typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    if (isMobile.current) return; // Don't load GSAP on mobile

    // Dynamically import GSAP
    import('gsap').then((gsapModule) => {
      setGsap(gsapModule.default);
    });
  }, []);
  
  useEffect(() => {
    if (!gsap || isMobile.current) return; // Skip all effects on mobile

    const text = textRef.current;
    if (!text) return;

    const calculatePosition = (e: MouseEvent) => {
      if (!boundingRef.current) {
        boundingRef.current = text.getBoundingClientRect();
      }
      
      const bounds = boundingRef.current;
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      
      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;
      
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      const maxDistance = 500;
      
      if (animationRef.current) {
        animationRef.current.kill();
      }
      
      if (distance < maxDistance) {
        const angle = Math.atan2(deltaY, deltaX);
        const force = (maxDistance - distance) / maxDistance;
        
        const x = Math.cos(angle) * force * 30 * magneticStrength;
        const y = Math.sin(angle) * force * 30 * magneticStrength;
        
        animationRef.current = gsap.to(text, {
          x: x,
          y: y,
          duration: 0.6,
          ease: "power3.out"
        });
      } else {
        animationRef.current = gsap.to(text, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "power3.out"
        });
      }
    };

    const resetPosition = () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      
      animationRef.current = gsap.to(text, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      });
    };

    const handleScroll = () => {
      boundingRef.current = text.getBoundingClientRect();
    };

    window.addEventListener('mousemove', calculatePosition);
    window.addEventListener('mouseleave', resetPosition);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', calculatePosition);
      window.removeEventListener('mouseleave', resetPosition);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [gsap, magneticStrength]);

  // On mobile, render without magnetic effect
  if (isMobile.current) {
    return (
      <div className={`inline-block ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div 
      ref={textRef}
      className={`inline-block cursor-none ${className}`}
      onMouseEnter={() => {
        document.documentElement.style.setProperty('--cursor-scale', '1.5');
      }}
      onMouseLeave={() => {
        document.documentElement.style.setProperty('--cursor-scale', '1');
      }}
    >
      {children}
    </div>
  );
}; 