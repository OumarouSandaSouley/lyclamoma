import React from 'react'
import Hero from '../sections/home/Hero'
import PrincipalWelcome from '../sections/home/PrincipalWelcome'
import NewsSection from '../sections/home/News'
import SchoolOverview from '../sections/home/Overview'
import Contact from '../sections/home/Contact'

const Home = () => {
  return (
    <section className="w-full">
        <Hero />
        <PrincipalWelcome />
        <NewsSection />
        <SchoolOverview />
        <Contact />
    </section>
  )
}

export default Home