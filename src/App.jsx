import React from 'react'
import Back from './pages/Back'
import Home from './pages/Home'
import MainScene from './pages_3d/MainScene'
import "./App.css"

export default function App() {
  return (
    <main className=' w-screen h-screen flex  justify-center items-center'>

      <Back/>
     {/*  <Home/>   */}
    
      <MainScene/>
    </main>
  )
}
