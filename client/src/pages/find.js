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

import Freelancer from '../findafreelancer/freelancers'

const Find = () => {
  return (
    <div className='find'>
    <Navbar/>
    <Afternav/>
    <Home/>
    <Freelancer/>
    <Categories/>
    <Feature/>
    <Howitworks/>
    <Feedback/>
    <Footer/>
    </div>
  )
}

export default Find