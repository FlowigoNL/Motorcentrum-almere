import { resolve } from 'path'
import { defineConfig } from 'vite'
import { readdirSync } from 'fs'

const htmlFiles = {};
readdirSync(__dirname).forEach(file => {
  if (file.endsWith('.html')) {
    htmlFiles[file.replace('.html', '')] = resolve(__dirname, file);
  }
});

export default defineConfig({
  build: {
    rollupOptions: {
      input: htmlFiles
    }
  }
})
