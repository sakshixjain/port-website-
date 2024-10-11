import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { Route, createBrowserRouter,createRoutesFromElements, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements( 
    <Route path='/' element={<App/>}>
    <Route path='' element={<Header/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='project' element={<Project/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
       
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
