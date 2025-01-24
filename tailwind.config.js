import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["DM Sans", ...fontFamily.sans],
        heading: ["Playfair Display", ...fontFamily.serif],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "text-reveal": {
          "0%": {
            transform: "translate(0, 100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: 1,
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          }
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'pulse-slow': {
          '0%': { transform: 'translate(-50%, -50%) scale(0.95)', opacity: '0.4' },
          '50%': { transform: 'translate(-50%, -50%) scale(1.05)', opacity: '0.2' },
          '100%': { transform: 'translate(-50%, -50%) scale(0.95)', opacity: '0.4' },
        },
        'spotlight': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'glow-1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(30px, -30px) scale(1.1)' },
        },
        'glow-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-20px, -20px) scale(1.15)' },
        },
        'grid-fade': {
          '0%': { opacity: 0.2 },
          '50%': { opacity: 0.1 },
          '100%': { opacity: 0.2 },
        },
        'scan-line': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'float-particle': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, -10px)' },
        },
        'float-minimal': {
          '0%, 100%': { 
            transform: 'translate(0, 0) scale(1)',
            opacity: 0.5
          },
          '50%': { 
            transform: 'translate(-5%, -5%) scale(1.05)',
            opacity: 0.7
          },
        },
        'scan-slow': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'scan-slow-delayed': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'scan-slow-reverse': {
          '0%': { transform: 'translateX(200%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'scan-vertical': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
        'scan-vertical-delayed': {
          '0%': { transform: 'translateY(200%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        'hue-rotate': {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
        'hue-rotate-delayed': {
          '0%': { filter: 'hue-rotate(180deg)' },
          '100%': { filter: 'hue-rotate(540deg)' },
        },
        'hue-rotate-reverse': {
          '0%': { filter: 'hue-rotate(360deg)' },
          '100%': { filter: 'hue-rotate(0deg)' },
        },
        'glow-slow': {
          '0%, 100%': { 
            transform: 'translate(0, 0) scale(1)',
            filter: 'hue-rotate(0deg)'
          },
          '50%': { 
            transform: 'translate(-2%, -2%) scale(1.02)',
            filter: 'hue-rotate(180deg)'
          }
        },
        'glow-slow-delayed': {
          '0%, 100%': { 
            transform: 'translate(0, 0) scale(1)',
            filter: 'hue-rotate(180deg)'
          },
          '50%': { 
            transform: 'translate(2%, 2%) scale(1.02)',
            filter: 'hue-rotate(360deg)'
          }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
        "gradient-x": "gradient-x 3s ease infinite",
        gradient: 'gradient 15s ease infinite',
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
        'spotlight': 'spotlight 15s linear infinite',
        'glow-1': 'glow-1 10s ease-in-out infinite',
        'glow-2': 'glow-2 12s ease-in-out infinite',
        'grid-fade': 'grid-fade 4s ease-in-out infinite',
        'scan-line': 'scan-line 6s linear infinite',
        'float-particle-1': 'float-particle 4s ease-in-out infinite',
        'float-particle-2': 'float-particle 6s ease-in-out infinite 1s',
        'float-particle-3': 'float-particle 5s ease-in-out infinite 2s',
        'float-particle-4': 'float-particle 7s ease-in-out infinite 1.5s',
        'float-particle-5': 'float-particle 8s ease-in-out infinite 2.5s',
        'float-particle-6': 'float-particle 9s ease-in-out infinite 0.5s',
        'float-minimal': 'float-minimal 20s ease-in-out infinite',
        'scan-slow': 'scan-slow 8s linear infinite',
        'scan-slow-delayed': 'scan-slow 8s linear infinite 4s',
        'scan-slow-reverse': 'scan-slow-reverse 12s linear infinite',
        'scan-vertical': 'scan-vertical 10s linear infinite',
        'scan-vertical-delayed': 'scan-vertical-delayed 10s linear infinite 5s',
        'hue-rotate': 'hue-rotate 20s linear infinite',
        'hue-rotate-delayed': 'hue-rotate-delayed 25s linear infinite',
        'hue-rotate-reverse': 'hue-rotate-reverse 30s linear infinite',
        'glow-slow': 'glow-slow 30s ease-in-out infinite',
        'glow-slow-delayed': 'glow-slow-delayed 30s ease-in-out infinite 15s',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}; 