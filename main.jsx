/**
 * main.jsx — Ponto de entrada React
 * ──────────────────────────────────
 * Este arquivo é usado quando o projeto roda com Vite + React
 * (Opção 2 das instruções de deploy).
 *
 * Para o deploy simples via GitHub Pages com HTML estático,
 * este arquivo não é necessário — basta o index.html.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

// Importa e renderiza o conteúdo estático da landing page
// via iframe ou componente, caso queira migrar para React.
// Por ora, o index.html é auto-contido e não depende deste arquivo.

function App() {
  return (
    <div
      style={{ fontFamily: 'inherit', width: '100%', minHeight: '100vh' }}
      dangerouslySetInnerHTML={{
        __html: `
          <!-- Para usar o React plenamente, migre o conteúdo
               do index.html para componentes .jsx aqui. -->
        `,
      }}
    />
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
