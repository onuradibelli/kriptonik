import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0E14',
        card: '#151A23',
        primary: '#2962FF',
        bull: '#00C087',
        bear: '#F6465D',
        border: '#222938',
      },
    },
  },
  plugins: [],
};
export default config;
