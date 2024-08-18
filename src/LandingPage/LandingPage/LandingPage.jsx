import React from 'react'
import Header from '../Header/Header'
import About from '../About/About'
import Map from '../Map/Map'
import Work from '../Work/Work'
import Pricing from '../Pricing/Pricing'
import './LandingPage.css'
const LandingPage = () => {
  return (
    <div className='landingPage'>
      <Header/>
      <About/>
      <Map/>
      <Work/>
      <Pricing/>
    </div>
  )
}

export default LandingPage
