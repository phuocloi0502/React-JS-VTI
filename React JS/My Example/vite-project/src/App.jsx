import { useState } from 'react'
import './App.css'
import { Counter, Gift,MyformInput,MyformRadio,MyformCheckBox,MyHook } from './components/MyExample'

function App() {
  return (
    <>
      {/* <MyHook/> */}
      <Counter />
      <Gift />
      <MyformInput/>
      <MyformRadio/>
      <MyformCheckBox/>
    


    </>
  )
}

export default App
