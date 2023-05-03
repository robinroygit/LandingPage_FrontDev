import React, { useEffect } from 'react'
import HeroSection from './Components/HeroSection'
import { useGlobalContext } from './context';

const About = () => {

  const {updateAboutPage} = useGlobalContext();
   
  useEffect(()=>updateAboutPage(),[])

  return (
      <HeroSection/>

  )
}

export default About