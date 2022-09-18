import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import ContactWithMe from './Pages/ContactWithMe/Index'
import HomePage from './Pages/HomePage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="contact" element={<ContactWithMe/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App