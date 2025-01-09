import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex-col">
      <button className="btn">Example Button
      </button>
      <div className="radial-progress" style={{ '--value' :60 }}>Uh oh</div>
    </div>
  )
}

export default App
