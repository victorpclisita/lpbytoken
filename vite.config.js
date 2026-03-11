import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Altere 'bytoken-sittax-lp' para o nome exato do seu repositório no GitHub
// Ex: se o repo for github.com/usuario/meu-repo, coloque '/meu-repo/'
const REPO_NAME = '/bytoken-sittax-lp/'

export default defineConfig({
  plugins: [react()],
  base: REPO_NAME,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
