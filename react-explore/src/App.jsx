import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <p>写点小玩意儿</p>
        <p>todo</p>
        <ul>
          <li>音频播放</li>
          <li>视频播放</li>
        </ul>

      </div>
    </div>
  )
}

export default App
