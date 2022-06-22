import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'evan-long',
      fileName: (format) => `evan-long.${format}.js`
    }
  }
});
