/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className = 'bg-green-400 text-black rounded-xl p-4 mb-4'>Tailwind test</h1>
      <Card username="Deepak sav" />
      <Card username="Rohit Sav" />
    </>
  )
}

export default App
