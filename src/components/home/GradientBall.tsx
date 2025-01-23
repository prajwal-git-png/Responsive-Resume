import { useEffect, useRef } from "react";

interface GradientBallProps {
  isPendulum?: boolean;
  followCursor?: boolean;
  isRandom?: boolean;
  index?: number;
}

const GradientBall = ({ isPendulum, followCursor, isRandom, index = 0 }: GradientBallProps) => {
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!followCursor || !ballRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      requestAnimationFrame(() => {
        if (!ballRef.current) return;
        ballRef.current.style.transform = `translate(${clientX - 32}px, ${clientY - 32}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [followCursor]);

  useEffect(() => {
    if (!isRandom || !ballRef.current) return;

    const animate = () => {
      if (!ballRef.current) return;
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      ballRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    animate();
    const interval = setInterval(animate, 5000);
    return () => clearInterval(interval);
  }, [isRandom]);

  return (
    <div
      ref={ballRef}
      className={`fixed w-64 h-64 rounded-full opacity-50 blur-xl mix-blend-multiply dark:mix-blend-plus-lighter transition-transform
        ${isPendulum ? "animate-pendulum left-1/2 top-1/4" : ""}
        ${followCursor ? "duration-75 ease-out" : ""}
        ${isRandom ? "duration-[3000] ease-in-out" : ""}
      `}
      style={{
        zIndex: -2 + index,
        pointerEvents: "none",
        background: `radial-gradient(circle at center, 
          ${isPendulum ? 'hsl(var(--primary))' : isRandom ? 'hsl(var(--accent))' : 'hsl(var(--secondary))'} 0%, 
          ${isPendulum ? 'hsl(var(--secondary))' : isRandom ? 'hsl(var(--primary))' : 'hsl(var(--primary))'} 100%)`,
        transform: followCursor ? 'translate(-50%, -50%)' : undefined,
        top: followCursor ? '0' : undefined,
        left: followCursor ? '0' : undefined,
      }}
    />
  );
};

export default GradientBall;