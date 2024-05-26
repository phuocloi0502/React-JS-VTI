import { useState } from 'react'
import './App.scss'
import { Button, Space, DatePicker, version } from 'antd';
import { Outlet } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer'
import { LeftSidebar } from './components/left_sidebar/LetfSidebar';
import { RightSidebar } from './components/right_sidebar/RightSidebar';


function App() {

  return (
    <div className='wrapper'>
      <div className='header'>
        <Header />
      </div>
      <div className='content'>
        <LeftSidebar />
        <div className='main-content'>
          <Outlet />
        </div>
        <RightSidebar />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default App
