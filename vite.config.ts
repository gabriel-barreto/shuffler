import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import type { InlineConfig } from 'vitest'

interface ViteWithVitestConfig extends UserConfig {
  test: InlineConfig
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
  },
  test: {
    coverage: {
      reporter: ['text', 'html', 'lcov'],
      exclude: [
        '.vitest/setup.ts',
        '**/*.spec.*',
        '**/*.styled.*',
        '**/index.*',
        'node_modules/'
      ]
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: '.vitest/setup.ts'
  }
} as ViteWithVitestConfig)
