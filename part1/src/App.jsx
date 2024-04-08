import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello =() =>{
  return(
    <div>
      <h1>hello</h1>
    </div>
  )
}

function App() {
  console.log('hello world')

  return (
    <>
      hello word
    <Hello />
    </>
  )
}

export default App
