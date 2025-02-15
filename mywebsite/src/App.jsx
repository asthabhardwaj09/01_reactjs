import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chai from "./chai"


function App() {
  const username = "chai or code"
// username {} it is a evaluated expression we cannot write whole things inside return if we want to write than we can write inside function. 
  return (
      <>
      <Chai/>
      <h1>hello everyone {username}</h1>
      <p>Hyy astha</p>
      </>
    
  )
}

export default App
