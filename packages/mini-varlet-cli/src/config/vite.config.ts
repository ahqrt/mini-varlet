import vue from '@vitejs/plugin-vue'
import { defineConfig, InlineConfig } from 'vite'
import { MINI_VARLET } from '../constants'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  root: MINI_VARLET
}) as InlineConfig