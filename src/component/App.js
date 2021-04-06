import React, { Component } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Achievment from './Achievment'
import Portofolio from './Portofolio'
import Footer from './Footer'

 class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Header></Header>
        <About></About>
        <Achievment></Achievment>
        <Portofolio></Portofolio>
        <Footer></Footer>
      </div>
    )
  }
}

export default App
