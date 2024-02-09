import React from 'react'
import mmlogo from '../assets/img/mmlogo.png'
import Marquee from 'react-fast-marquee' 
import { Link } from 'react-router-dom'
import Banner from './Banner'
import { Player, Controls } from '@lottiefiles/react-lottie-player';


const Title = () =>{
    return (
      <a href='/'>
      <img 
      className="h-20 py-2 my-2"
      alt="musclmonstr"
      src={mmlogo}></img>
      </a>
    )   
}

const Head = () => {
  return (
    <div >
    <div className='grid grid-flow-col bg-[#BF6900]'>

        <div className='col-span-1 px-2'><Title /></div>
        <div className='col-span-11 flex justify-end bg-black'>
          <Player
            autoplay
            loop
            src="https://lottie.host/31dd8822-fdfb-47d2-8e27-73a343a76810/53laaWuhmM.json"
            style={{ height: '80px', width: '80px' }}
          >
          {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
          </Player>
          
            <ul className='flex py-8'>
                <li className='px-2 text-white'><Link to="/gallery"> Gallery</Link></li>
                <li className='px-2 text-white'><Link to="/about"> About Us</Link></li>
                <li className='px-2 text-white'><Link to="/contact"> Contact Us</Link></li>
                {/* <li className='px-2'><Link to="/gallery"></Link></li> */}
            </ul>
        </div>
    </div>
    <div className='bg-black'>
      <Marquee>
        <Banner />
      </Marquee>
    </div>
    </div>
  )
}

export default Head