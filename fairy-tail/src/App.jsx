import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import LizaHealingStory from './LizaHealingStory'
import LizaHappy from './LizaHappy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/liza-healing" element={<LizaHealingStory />} />
        <Route path="/liza-happy" element={<LizaHappy />} />
      </Routes>
    </Router>
  )
}

export default App
