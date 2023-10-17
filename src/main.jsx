import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './Components/Provider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Provider/Routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <AuthProvider>
              <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
  </React.StrictMode>,
)
