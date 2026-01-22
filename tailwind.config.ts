import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // ===== CENTURY GOTHIC TYPOGRAPHY SYSTEM =====
      fontFamily: {
        // Primary: Century Gothic with extensive fallbacks
        'sans': [
          '"Century Gothic"', 
          '"CenturyGothic"', 
          '"Apple Gothic"', 
          'Futura', 
          '"Trebuchet MS"', 
          'Arial', 
          'sans-serif'
        ],
        // For headings (same as sans for consistency)
        'display': [
          '"Century Gothic"', 
          '"CenturyGothic"', 
          '"Apple Gothic"', 
          'Futura', 
          'sans-serif'
        ],
        // For body text
        'body': [
          '"Century Gothic"', 
          '"CenturyGothic"', 
          '"Apple Gothic"', 
          'Futura', 
          'Verdana', 
          'Geneva', 
          'sans-serif'
        ],
        // Monospace for code
        'mono': [
          'ui-monospace', 
          'SFMono-Regular', 
          'Menlo', 
          'Monaco', 
          'Consolas', 
          'monospace'
        ],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.3', letterSpacing: '0.01em' }],     // 14px
        'base': ['1rem', { lineHeight: '1.5', letterSpacing: '0' }],            // 16px
        'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.005em' }],   // 18px
        'xl': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],     // 20px
        '2xl': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.015em' }],    // 24px
        '3xl': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],   // 30px
        '4xl': ['2.25rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],   // 36px
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.03em' }],         // 48px
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.035em' }],     // 60px
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.04em' }],       // 72px
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.045em' }],        // 96px
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.05em' }],         // 128px
      },
      
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400', // Century Gothic is typically light/medium weight
        'medium': '500',
        'semibold': '600', // Note: Century Gothic may not have bold weights
        'bold': '700',     // Fallback to synthetic bold
        'extrabold': '800',
        'black': '900',
      },
      
      letterSpacing: {
        'tightest': '-0.06em',
        'tighter': '-0.04em',
        'tight': '-0.02em',
        'normal': '0',
        'wide': '0.02em',
        'wider': '0.04em',
        'widest': '0.08em',
      },
      
      lineHeight: {
        'none': '1',
        'tight': '1.2',
        'snug': '1.3',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
      },
      // ===== END TYPOGRAPHY SYSTEM =====
      
      // Consistent spacing system
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
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
          hover: "hsl(var(--primary-hover))",
        },
        "menu-button": "hsl(var(--menu-button))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-card': 'var(--gradient-card)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;