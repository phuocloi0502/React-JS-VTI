import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import App from './App.jsx'
import { Home } from './components/Home.jsx'
import { User } from './components/User.jsx'
import { Contact } from './components/Contact.jsx'
import { ErrorPage } from './components/ErrorPage.jsx'
import { UserDetail } from './components/UserDetail.jsx'
import { CreateUser } from './components/CreateUser.jsx'
import { EditUser } from './components/EditUser.jsx'
import './index.css'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />,
     
      },
      {
        path: '/user',
        element: <User />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path:"/userdetail/:id",
        element:<UserDetail/>,
      },
      {
        path:"/user/add",
        element:<CreateUser/>,
      },
      {
        path:"/user/edit/:id",
        element:<EditUser/>,
      },
    ],
  },


]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
