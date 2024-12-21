import { useEffect, useRef } from "react";

interface GradientBallProps {
  isPendulum?: boolean;
  followCursor?: boolean;
}

const GradientBall = ({ isPendulum, followCursor }: GradientBallProps) => {
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!followCursor || !ballRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const ball = ballRef.current!;
      const rect = ball.getBoundingClientRect();
      const x = clientX - rect.width / 2;
      const y = clientY - rect.height / 2;
      
      ball.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [followCursor]);

  return (
    <div
      ref={ballRef}
      className={`fixed w-64 h-64 rounded-full bg-gradient-to-r from-[#1EAEDB] to-[#221F26] opacity-70 blur-xl
        ${isPendulum ? "animate-pendulum" : ""}
        ${followCursor ? "transition-transform duration-300 ease-out" : ""}
      `}
      style={{
        zIndex: -2,
        pointerEvents: "none",
      }}
    />
  );
};

export default GradientBall;