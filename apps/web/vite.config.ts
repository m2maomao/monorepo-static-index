import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@vue-monorepo/utils': resolve(__dirname, '../../packages/utils/src'),
      '@vue-monorepo/ui': resolve(__dirname, '../../packages/ui')
    }
  },
  optimizeDeps: {
    include: ['@vue-monorepo/utils', '@vue-monorepo/ui']
  },
  base: '/your-repo-name/',  // 确保这里的配置正确
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router'],
          'ui-vendor': ['@vue-monorepo/ui'],
        }
      }
    }
  }
})
