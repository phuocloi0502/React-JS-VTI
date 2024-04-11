import { useState } from 'react'
import './App.css'
import { Counter, Gift,MyformInput,MyformRadio,MyformCheckBox,MyEffect } from './components/MyExample'
import useFetch from './customHook/useFetch';
function App() {
  const buttons=["1","2","3"];
  const [id,setId]=useState(1);
  const [myData,setMyData] =useFetch(1);
  return (
    <>
      {/* <MyEffect/>
      <Counter />
      <Gift />
      <MyformInput/>
      <MyformRadio/>
      <MyformCheckBox/> */}

      {/* customHook */}
      <div>
        User ID: 
       {
        buttons.map(bt => (
          <button type="button" >{bt}</button>
        ))
       
       }
       <div>
        <h1>sss</h1>
       </div>
      </div>
    


    </>
  )
}

export default App
