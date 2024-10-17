import React, { useState } from 'react'
import Header from '../Header/Header'
import About from '../About/About'
import Map from '../Map/Map'
import Work from '../Work/Work'
import Pricing from '../Pricing/Pricing'
import './LandingPage.css'
import Footer from '../Footer/Footer'
import Rates from '../Rates/Rates'
const LandingPage = () => {
  const [language,setLanguage]=useState("")
  // console.log(language)
  return (
    <div className='landingPage'>
      <Header language={language} setLanguage={setLanguage}/>
      <Rates language={language}/>
      <About language={language}/>
      <Map language={language}/>
      <Work language={language}/>
      <Pricing language={language}/>
      <Footer/>
    </div>
  )
}

export default LandingPage
