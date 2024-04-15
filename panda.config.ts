import { defineConfig } from '@pandacss/dev';

const isProduction =
  (process.env.PANDA_ENV ?? process.env.NODE_ENV) === 'production';

export default defineConfig({
  hash: isProduction,
  clean: true,
  eject: true,
  exclude: [],
  include: ['./src/**/*.{ts,tsx}'],
  lightningcss: true,
  polyfill: true,
  shorthands: false,
  jsxFramework: 'react',
  jsxStyleProps: 'minimal',
  separator: '-',
  outdir: 'styled-system',
  outExtension: 'js',
  preflight: false,
  presets: ['@pandacss/preset-base'],
  strictTokens: false,
  theme: {
    tokens: {
      colors: {
        red: { value: '#ff0000' },
        green: { value: '#00ff00' },
        blue: { value: '#0000ff' },
        gold: { value: '#ffd700' },
        pink: { value: '#ffc0cb' },
        white: { value: '#ffffff' },
      },
      spacing: {
        small: { value: '5px' },
        medium: { value: '15px' },
        large: { value: '25px' },
      },
    },
    semanticTokens: {
      colors: {
        error: { value: '{colors.red}' },
        success: { value: '{colors.green}' },
        info: { value: '{colors.blue}' },
        warning: { value: '{colors.gold}' },
        off: { value: '{colors.pink}' },
        none: { value: '{colors.white}' },
      },
    },
    breakpoints: {
      '@mobile': '0px',
      '@tablet': '768px',
      '@desktop': '1024px',
    },
  },
});
