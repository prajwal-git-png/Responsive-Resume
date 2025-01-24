export const GradientOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none bg-background">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--muted-foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--muted-foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/90" />

      {/* Ethereal light sources */}
      <div className="absolute inset-0">
        {/* First light source */}
        <div className="absolute -right-1/4 top-0 w-[70vh] h-[70vh]">
          <div className="absolute inset-0 animate-glow-slow">
            <div className="absolute inset-0 rounded-full animate-hue-rotate">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-purple-500/30 to-blue-500/30 blur-[120px]" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-primary/20 to-purple-500/20 blur-[150px]" />
            </div>
          </div>
        </div>

        {/* Second light source */}
        <div className="absolute -left-1/4 bottom-0 w-[70vh] h-[70vh]">
          <div className="absolute inset-0 animate-glow-slow-delayed">
            <div className="absolute inset-0 rounded-full animate-hue-rotate-reverse">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/30 via-pink-500/30 to-purple-500/30 blur-[120px]" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-accent/20 to-pink-500/20 blur-[150px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scanner lines */}
      <div className="absolute inset-0">
        {/* Horizontal scanner lines */}
        <div className="absolute inset-x-0 top-1/4 h-[1px] animate-scan-slow">
          <div className="h-full w-1/3 mx-auto bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
        <div className="absolute inset-x-0 top-2/4 h-[1px] animate-scan-slow-delayed">
          <div className="h-full w-1/3 mx-auto bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        </div>
        <div className="absolute inset-x-0 top-3/4 h-[1px] animate-scan-slow-reverse">
          <div className="h-full w-1/3 mx-auto bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        {/* Vertical scanner lines */}
        <div className="absolute inset-y-0 w-[1px] left-1/4 animate-scan-vertical">
          <div className="w-full h-1/3 my-auto bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
        </div>
        <div className="absolute inset-y-0 w-[1px] right-1/4 animate-scan-vertical-delayed">
          <div className="w-full h-1/3 my-auto bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        </div>
      </div>

      {/* Additional color transition layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/0 via-primary/5 to-accent/5 animate-gradient opacity-50" />
    </div>
  );
}; 