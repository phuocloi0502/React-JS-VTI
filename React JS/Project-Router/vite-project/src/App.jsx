import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Menu } from "./components/Menu"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className='header'>
        <Menu />
      </div>
      <div className='content'>

      </div>
      <div className='footer'>

      </div>


    </div>
  )
}

export default App
