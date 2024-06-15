import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig((data)=>{
  return {
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    // 强制内联CSS
    css: {
      modules: {
        scopeBehaviour:'local'
      }
    },
    build: {
      outDir: './dist',
      target: 'es2020',
      lib: {
        entry: './components/index.ts',
        name: 'fast-code-vue3',
        fileName: 'fast-code-vue3'
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      }
    }
  }
})
