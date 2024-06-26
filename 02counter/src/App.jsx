/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  const addValue = () => {
    setCounter(counter + 1)
  }
  const removeValue = () => {
    if(counter>0){
      setCounter(counter - 1)
    } else {
      alert("Counter value cannot be less than 0")
    }
  }
  return (
    <>
      <h1>Counter Project with React</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
