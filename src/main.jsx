import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './Pages/Signup.jsx'
import Login from './Pages/Login.jsx'
import Product from './Pages/Product.jsx'

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/register',
    element: <SignUp />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/product/:packageCost',
    element: <Product />
  },
  {
    path: '/products',
    element: <Product />
  }
]

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)