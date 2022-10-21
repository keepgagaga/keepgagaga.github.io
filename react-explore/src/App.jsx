import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MultiDrag from './components/MultiDrag'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <MultiDrag></MultiDrag>
      </div>
    </div>
  )
}

export default App
