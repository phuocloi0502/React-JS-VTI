import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Head } from './components/Head'
import { TopContent } from './components/TopContent'
import { Footer } from './components/Footer'
import { MainContent } from './components/MainContent'


function App() {


  const cardData = [
    {
      type: "Free",
      price: "$0",
      desc: [
        "10 users included",
        "2 GB of storage",
        "Email support",
        "Help center access"
      ],
      action: "Sign up for free"
    },
    {
      type: "Pro",
      price: "$15",
      desc: [
        "20 users included",
        "10 GB of storage",
        "Priority email support",
        "Help center access"
      ],
      action: "Get started"
    },
    {
      type: "Enterprise",
      price: "$0",
      desc: [
        "30 users included",
        "15 GB of storage",
        "Phone and email support",
        "Help center access"
      ],
      action: "Contact us"
    }
  ];
  const [data,setData] = useState(cardData);
  // useEffect(()=>{
  //   //call API
  //   fetch("")
  //   .then( (resStr) =>{
  //     // convert string to json
  //     return resStr.json
  //   })
  //   .then((res) =>{
  //     setData(res.slice(1,10))

  //   })
  //   .catch((err) =>{
  //     console.log("error: ",err)
  //   })
  // },[]); //[] null


  return (
<>

<div className="container">
      <Head />
      <TopContent />
      <MainContent data={cardData} />
    </div>
    <Footer></Footer>
</>
    
  )
}

export default App
