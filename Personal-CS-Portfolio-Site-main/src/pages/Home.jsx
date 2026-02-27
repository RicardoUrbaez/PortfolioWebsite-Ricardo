import React from 'react'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { AboutMe } from '../components/AboutMe'
import { ExperienceSection } from '../components/ExperienceSection'
import { SkillsSection } from '../components/SkillsSection'
import { Projects } from '../components/Projects'
import { ContactMe } from '../components/ContactMe'
import { Footer } from '../components/Footer'


const Home = () => {
  return (
    <div className='w-full min-h-screen text-foreground overflow-x-hidden'>
        {/* Navbar */}
        <Navbar/>
        {/* Main Content */}
        <main className='w-full'>
          <HeroSection/>
          <AboutMe/>
          <ExperienceSection/>
          <SkillsSection/>
          <Projects/>
          <ContactMe/>
        </main>

        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Home