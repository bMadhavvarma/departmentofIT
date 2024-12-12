import React from 'react'
import Navbar from './Navbar'
import Homepage from './Homepage'
import Features from './Features'
import About from './About'
import Faculty from './Faculty'
import Laboratory from './Laboratory'
import Activities from './Activities'
import Acheivments from './Acheivments'
import Alumni from './Alumni'
import Gallery from './Gallery'
import Contact from './Contact'
import Footer from './Footer'


function Landingpage({change}) {
  return (
    <div>
      <div className='fixed' style={{width:"100vw"}}>
      <Navbar change={change}/>
      </div>
       <Homepage />
       <Features/>
       <About/>
       <Faculty/> 
       <Laboratory/>
       <Activities/>
       <Acheivments/>
       <Alumni/>
       <Gallery/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default Landingpage