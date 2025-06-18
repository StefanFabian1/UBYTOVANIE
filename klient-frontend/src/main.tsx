import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClientStatusProvider } from './context/ClientStatusContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClientStatusProvider>
      <App />
    </ClientStatusProvider>
  </StrictMode>,
)
