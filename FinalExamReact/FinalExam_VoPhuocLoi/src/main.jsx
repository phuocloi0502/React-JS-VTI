import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store/store.js';
import './index.css'
import router from './routers/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer theme='colored' position='top-center' autoClose='1000' hideProgressBar='true' />
  </Provider>

)
