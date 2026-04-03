import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, useResolvedPath } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Mobile from './components/Mobile/Mobile.jsx';
import Laptops from './components/Laptops/Laptops.jsx';
import Users from './components/Users/Users.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Home },
      {path: '/mobile' , Component: Mobile},
      {path: 'laptops', Component: Laptops},
      {
        path: 'users', 
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users
      }
    ]
  },
  {
    path: 'about',
    element: <h1>about me router</h1>
  },
  {
    path: 'blogs',
    element: <h1>all my blogs are here</h1>
  },
  {
    path: 'app',
    Component: App
  },
  {
    path: 'app2',
    element: <App />

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
