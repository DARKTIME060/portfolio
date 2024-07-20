import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Works from './components/Works'
import Footer from './components/Footer'

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <Works/>
      <Footer/>
    </div>
  )
}

export default App