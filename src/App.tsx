import { useState } from 'react'
import './App.css'
import Signin from './assets/Signin'
import Signup from './assets/Signup'

function App() {

  return (
    <>
      <div>
      
      </div>
      <h1>Press Paws</h1>
      <h2>Where slowing down is Furever encouraged.</h2>
      <div className="card">
       <Signin/>
       <Signup/>
       </div>
    </>
  )
}

export default App
