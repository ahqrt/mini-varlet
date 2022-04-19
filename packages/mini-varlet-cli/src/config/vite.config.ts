import vue from '@vitejs/plugin-vue'
import { defineConfig, InlineConfig } from 'vite'
import { MINI_VARLET, ROUTES, SITE_OUTPUT_PATH } from '../constants'
import markdown from '@mini-varlet/vite-markdown-plugin'
import { resolve } from 'path'

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

export function getBuildConfig(inlineConfig: InlineConfig): InlineConfig {
  return {
    ...inlineConfig,
    base: './',
    build: {
      outDir: SITE_OUTPUT_PATH,
      brotliSize: false,
      emptyOutDir: true,
      cssTarget: 'chrome61',
      rollupOptions: {
        input: {
          main: resolve(MINI_VARLET, 'index.html'),
        },
      },
    },
  }
}
