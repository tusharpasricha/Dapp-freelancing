import React from 'react'
import './find.css'
import Navbar from '../findafreelancer/navbar'
import Afternav from '../findafreelancer/afternav'
import Home from '../findafreelancer/home'
import Footer from '../findafreelancer/footer'
import Feature from '../findafreelancer/feature'
import Howitworks from '../findafreelancer/howitworks'
import Feedback from '../findafreelancer/feedback'
import Categories from '../findafreelancer/categories'

import './become.css'
import Freelancer from '../findafreelancer/freelancers'
import Freelancerform from '../becomeafreelancer/freelancerform'

const Become = () => {
  return (
    <>
    <div className='find'>
    {/* <Navbar/> */}
    {/* <Afternav/> */}
    {/* <Home/> */}
    <Freelancerform/>
    
    {/* <Feature/>
    <Howitworks/>
    <Feedback/> */}
    <Footer/>
    </div>
    </>
      
  )
}

export default Become


