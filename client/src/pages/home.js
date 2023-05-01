import React from 'react'
import './home.css'
import {FaQuestionCircle} from "react-icons/fa"
import { Link } from 'react-router-dom'
import { Link as Lk, animateScroll as scroll } from "react-scroll";
import Login from './Login';

const Home = () => {
  return (
    <>
          <Link to="/become">Become a freelancer</Link>
          <Link to="/find">find a freelancer</Link>
          <Link to="/contract">contract</Link>

    <Login/>
    </>
  )
}

export default Home