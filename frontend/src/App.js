import React from 'react'
import Signup from './components/Signup'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
const App = () => {
  const myRouter = createBrowserRouter([  
       {path:'/',Component:Login},
       {path:'login',Component:Login},
       {path:'register',Component:Signup},
       {path:'dashboard',Component:Dashboard}
  ])
  return (
    <div>
     
       <RouterProvider router={myRouter}/>
       
    </div>
  )
}

export default App