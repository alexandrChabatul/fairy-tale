import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LizaHealingStory from './LizaHealingStory.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LizaHealingStory />
  </StrictMode>,
)
