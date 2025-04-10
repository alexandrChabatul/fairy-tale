import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import LizaHealingStory from './LizaHealingStory'
import LizaHappy from './LizaHappy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div style={{ padding: '20px', textAlign: 'center', alignSelf: "flex-start" }}>
        <Link to="/liza-healing">
          <button style={{ margin: '0 10px', padding: '10px 20px' }}>
            Liza Healing
          </button>
        </Link>
        <Link to="/liza-happy">
          <button style={{ margin: '0 10px', padding: '10px 20px' }}>
            Liza Happy
          </button>
        </Link>
      </div>
      <Routes>
        <Route path="/liza-healing" element={<LizaHealingStory />} />
        <Route path="/liza-happy" element={<LizaHappy />} />
      </Routes>
    </Router>
  )
}

export default App
