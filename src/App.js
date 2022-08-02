import React from 'react'
import './App.css'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import MySkills from './components/MySkills'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Banner/>
      <AboutMe/>
      <MySkills/>
      <Contact/>
    </>
  )
}

export default App