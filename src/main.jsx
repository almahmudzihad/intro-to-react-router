import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>welcome to react router</div>
  },
  {
    path: 'about',
    element: <h1>about me router</h1>
  },
  {
    path: 'blogs',
    element: <h1>all my blogs are here</h1>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
