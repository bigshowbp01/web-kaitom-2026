import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-prompt)', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: "0 24px 80px rgba(161, 108, 11, 0.18)"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at top, rgba(255, 246, 224, 0.96), rgba(250, 241, 222, 0.92) 34%, rgba(255, 255, 255, 0.78) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
