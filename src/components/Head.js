import React from 'react'
import mmlogo from '../assets/img/mmlogo.png'
import Marquee from 'react-fast-marquee' 
import { Link } from 'react-router-dom'

const Title = () =>{
    return (
      <a href='/'>
      <img 
      className="h-28 p-2"
      alt="musclmonstr"
      src={mmlogo}></img>
      </a>
    )   
}

const Head = () => {
  return (
    <div>
    <div className='flex justify-between bg-orange-800'>
        <Title />
        <div>
            <ul className='flex py-8'>
                <li className='px-2'><Link to="/gallery"> Gallery</Link></li>
                <li className='px-2'><Link to="/about"> About Us</Link></li>
                <li className='px-2'><Link to="/contact"> Contact Us</Link></li>
                {/* <li className='px-2'><Link to="/gallery"></Link></li> */}
            </ul>
        </div>
    </div>
    <div className='bg-black'>
      <Marquee>
        <div>
          <span className='text-white px-10'>Sore today, Strong tomorrow.</span>
          <span className='text-white px-10'>Train insane or remain same.</span>
          <span className='text-white px-10'>The only bad workout is the one which did not happen</span>
          <span className='text-white px-10'>The only thing that's 'too heavy' is the bag of excuses you're carrying - "Arnold Schwarzenegger"</span>
        </div>
      </Marquee>
    </div>
    </div>
  )
}

export default Head