import React from 'react'
import Footer from '../../Components/Footer'
import Hero from '../../Components/Hero'
import Navbar from '../../Components/Navbar'
import Roadmap from '../../Components/Roadmap'
import Roadmap2 from '../../Components/Roadmap2'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      {/* <Roadmap/> */}
      <Roadmap2/>
      <Footer/>
    </>
  )
}

export default Home
