import './App.css'
import Accordian from './components/accordian/Accordian'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/**Accordian */}
    <Accordian/>
    </>
  )
}

export default App
