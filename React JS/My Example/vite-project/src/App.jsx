import { useState } from 'react'
import './App.css'
import { Counter, Gift, MyformInput, MyformRadio, MyformCheckBox, MyEffect } from './components/MyExample'
import useFetch from './customHook/useFetch';
function App() {
  const buttons = ["1", "2", "3"];
  const [id, setId] = useState(1);
  const [myData, setMyData] = useFetch(id);
  console.log("Id: ", id);
  console.log("myData: ", myData);
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
            <button
              type="button"
              onClick={() => {
                setId(bt)
              }}

            >{bt}</button>
          ))

        }
        {myData === undefined ? "Loading..." : (
          <div>
            <ul style={{ textAlign: "left" }}>
              <li>ID: {myData.id}</li>
              <li>Name: {myData.name}</li>
              <li>User Name: {myData.username}</li>
              <li>Phone: {myData.phone}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default App
