import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: 'calc(var(--spacing) * 4)', // 1rem with 14px base = 14px padding
      screens: {
        sm: '40rem',
        md: '48rem', 
        lg: '64rem',
        xl: '80rem',
        '2xl': '96rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
        body: ['"Outfit"', 'system-ui', 'sans-serif'],
        serif: ['"Outfit"', 'serif'],
        mono: ['"Outfit"', 'monospace'],
        bagel: ['"Outfit"', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem,5vw,4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem,4vw,3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem,3vw,2.75rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'display-sm': ['clamp(1.375rem,2vw,2rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'body-xl': ['1.25rem', { lineHeight: '1.7' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65' }],
        'body-base': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.55' }],
        'label-lg': ['0.8125rem', { lineHeight: '1', letterSpacing: '0.1em' }],
        'label-sm': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.12em' }],
        'price-xl': ['clamp(2rem,4vw,3rem)', { lineHeight: '-0.01em' }],
      },
      spacing: {
        'section-sm': '3rem',
        'section-md': '5rem',
        'section-lg': '7rem',
        'section-xl': '9rem',
      },
      maxWidth: {
        content: '720px',
        wide: '1100px',
        full: '1400px',
      },
      colors: {
        // Backgrounds
        canvas: '#FAF7F2',
        cream: '#F2EDE3',
        dark: '#1C1A16',
        parchment: '#F5E6C3',
        'pale-fern': '#C8DDD4',

        // Primary brand
        forest: '#1B3A2D',
        jade: '#2D6A4F',
        sage: '#5C8A72',

        // Accent gold
        gold: '#C9983A',
        amber: '#E8B75A',

        // Neutral stone
        'stone-900': '#1C1A16',
        'stone-600': '#5C5750',
        'stone-300': '#C4BDB4',
        'stone-100': '#F0EDE8',

        // Semantic
        'trust-green': '#2E7D32',
        'alert-amber': '#E65100',

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
          blue: "var(--accent-blue)",
          emerald: "var(--accent-emerald)",
          purple: "var(--accent-purple)",
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
        card: '12px',
        badge: '999px',
        btn: '8px',
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        card: '0 2px 12px 0 rgba(27,58,45,0.08)',
        'card-hover': '0 8px 32px 0 rgba(27,58,45,0.16)',
        gold: '0 4px 20px 0 rgba(201,152,58,0.35)',
        glass: '0 8px 32px 0 rgba(27,58,45,0.12)',
      },
      backdropBlur: {
        glass: '12px',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201,152,58,0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(201,152,58,0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fillBar: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--bar-width)' },
        },
        countUp: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
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
      },
      animation: {
        shimmer: 'shimmer 2.5s linear infinite',
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        slideDown: 'slideDown 0.3s ease-out forwards',
        pulse: 'pulse 2s ease-in-out infinite',
        marquee: 'marquee 22s linear infinite',
        fillBar: 'fillBar 1s ease-out forwards',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
