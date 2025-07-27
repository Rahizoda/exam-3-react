import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Servicies from './pages/Servicies';
import CaseStudies from './pages/CaseStudies';
import AboutUs from './pages/AboutUs'
import User from './pages/User';

function App() {
  const router = createBrowserRouter( 
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Servicies />} />
        <Route path='casestudies' element={<CaseStudies />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='user/:id' element={<User/>} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App