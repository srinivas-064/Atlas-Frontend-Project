import React, { Children } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Country from './pages/Country'
import ErrorPage from './pages/ErrorPage'
import Applayout from './components/Layout/Applayout'
import { createBrowserRouter, Router,RouterProvider } from 'react-router-dom'

export default function App() {
  
  const router = createBrowserRouter([
    {
      path : "/",
      element : <Applayout />,
      errorElement : <ErrorPage />,
      children :[
        {
          path : "/",
          element : <Home />,
        },
        {
          path : "/country",
          element : <Country />,
        },
        {
          path : "/about",
          element : <About />,
        },
        {
          path : "/contact",
          element : <Contact />,
        }  
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} >
      <Applayout/>
      </RouterProvider>
    </div>
  )
}
