///<reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    //habilita vitest en todos los archivos de test sin necesidad de importar vitest
    globals: true,
    //Le dice a vitest que ambiente y archivos se va a usar para el test y extensiones utilizar
    include: ['src/**/*.{test.spec}.{js,ts,jsx,tsx}'],
    //para que @testing-library pueda montar los componentes de react en un dom (sin navegador) y testearlos
    environment: 'jsdom',
  },
});
