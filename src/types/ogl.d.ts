declare module 'ogl' {
  export class Renderer {
    constructor(options?: {
      dpr?: number;
      alpha?: boolean;
      antialias?: boolean;
    });
    gl: WebGLRenderingContext;
    dpr?: number;
    setSize(width: number, height: number): void;
    render(options: { scene: Mesh }): void;
    destroy?(): void;
  }

  export class Program {
    constructor(gl: WebGLRenderingContext, options: {
      vertex: string;
      fragment: string;
      uniforms: Record<string, { value: any }>;
    });
    remove?(): void;
  }

  export class Mesh<T = any> {
    constructor(gl: WebGLRenderingContext, options: {
      geometry: T;
      program: Program;
    });
    remove?(): void;
  }

  export class Triangle {
    constructor(gl: WebGLRenderingContext);
    remove?(): void;
  }
}
