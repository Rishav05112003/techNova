import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DarkModeProvider } from './components/darkModeContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
    <App />
    </DarkModeProvider>
  </StrictMode>,
)
