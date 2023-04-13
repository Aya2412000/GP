import React from 'react'
import Navbar from './Nav-bar/Navbar'
import "./Home.css";
import Header from './Header/Header';
export default function Home() {
  return (
    <div>
      <div className='background'>
      <Navbar/>
      <Header/>
      </div>
    </div>
  )
}
