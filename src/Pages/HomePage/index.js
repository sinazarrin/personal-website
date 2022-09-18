import React from 'react'
import AboutMe from '../../components/AboutMe'
import Banner from '../../components/Banner'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import MySkills from '../../components/MySkills'

const HomePage = () => {
  return (
    <>
        <Banner/>
      <AboutMe/>
      <MySkills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default HomePage