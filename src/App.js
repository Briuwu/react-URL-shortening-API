import React from 'react'
import './styles/style.css'

import Navbar from './components/Navbar'
import Intro from './components/Intro'
import LinkShorten from './components/LinkShorten'
import Cards from './components/Cards'
import Footer from './components/Footer'

const App = () => {
  return (
    <main>
      <Navbar />
      <Intro />
      <LinkShorten />
      <Cards />
      <Footer />
    </main>
  )
}

export default App