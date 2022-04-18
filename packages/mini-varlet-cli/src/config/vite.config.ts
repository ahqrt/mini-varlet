import vue from '@vitejs/plugin-vue'
import { defineConfig, InlineConfig } from 'vite'
import { MINI_VARLET, ROUTES } from '../constants'
import markdown from '@mini-varlet/vite-markdown-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    markdown()
  ],
  resolve: {
    alias: {
      '@routes': ROUTES
    }
  },
  root: MINI_VARLET
}) as InlineConfig