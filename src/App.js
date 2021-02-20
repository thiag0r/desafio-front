import React from 'react'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Home from './views/home/Home'
import './App.scss'

export default function App() {
  return (
      <React.Fragment>
        <Header />
        <Home />
        <Footer />
      </React.Fragment>
  )
}
