import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './pages/home.jsx'
import Service from './pages/services.jsx'
import About from './pages/about.jsx'
const router = createBrowserRouter([{
  path:"/",
  element: <Layout/>,
  children: [
    {
      path: '',
      element: <Home/>
    },
    {
      path: 'about',
      element: <About/>
    },
    {
      path: 'service',
      element: <Service/>
    }

  ]
},{
  path:"*",
  element: <h1 className='text-center text-3xl mt-10 font-bold'>Page not Found!!</h1>
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
