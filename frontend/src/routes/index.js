import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Dashboard from '../components/Dashboard'
import Login from '../components/Login'
import Signup from '../components/Signup'

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children: [
            {
              index:true,
              element:<Dashboard/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"register",
                element:<Signup/>
            }
        ]
    }
])

export default router