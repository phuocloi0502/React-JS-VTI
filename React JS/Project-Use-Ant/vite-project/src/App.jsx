import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { Header } from "./components/Header"

import './App.css'



function App() {


  return (
    <div className="container">
      <div className='header'> <Header/> </div>
      <div className='content'> <Outlet/> </div>
    </div>

  )
}

export default App
