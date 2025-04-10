import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LizaHealingStory from './LizaHealingStory.jsx'
import App from './App.jsx'
import LizaHappy from './LizaHappy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LizaHappy />
  </StrictMode>,
)
