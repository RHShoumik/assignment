import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextDisplay from './TextDisplay'
import ToggleComponent from './ToggleComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToggleComponent />
    </>
  )
}

export default App
