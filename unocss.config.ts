import { defineConfig, presetUno, presetTypography, presetIcons, presetAttributify } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetIcons({ scale: 1.1 }),
    presetAttributify(), // permite usar atributos como flex items-center
  ],
  theme: {
    colors: {
      bg: '#FAF5E9',
      bg2: '#F6F0E4',
      fg: '#1B140F',
      muted: '#6E625B',
      line: '#E8DFD2',
      brand: '#9C5529',
      brand2: '#D09B4E',
      coffee700: '#5E2E02',
      olive700: '#6F6430',
    },
    // Puedes añadir spacing, fonts, radius, etc.
  },
  shortcuts: {
    container: 'max-w-[820px] mx-auto px-6',
    card: 'rounded-2xl border border-[--ring] shadow p-4 bg-white/95',
    btn: 'inline-flex items-center justify-center px-3 py-2 rounded-full font-600 text-white bg-[--brand] shadow hover:bg-[--coffee-700] transition-180',
    'btn-ghost': 'inline-flex items-center justify-center px-3 py-2 rounded-full font-600 border border-[--line] text-[--brand] bg-transparent hover:bg-[--bg2] transition-180',
    muted: 'text-[--muted]'
  },
  safelist: ['prose','prose-sm','md:prose','lg:prose-lg'],
});
