import React from 'react'
import mmlogo from '../assets/img/mmlogo.png'
import Marquee from 'react-fast-marquee' 
import { Link } from 'react-router-dom'
import Banner from './Banner'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from 'framer-motion'


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
  const { loginWithRedirect } = useAuth0();
  const { logout, isAuthenticated, user} = useAuth0();

  
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
                <motion.li whileHover={{scale:1.05}} className='px-2 text-white'><Link to="/"> Home</Link></motion.li>

                <motion.li whileHover={{scale:1.05}}  className='px-2 text-white'><Link to="/gallery"> Gallery</Link></motion.li>
                {/* <li className='px-2 text-white'><Link to="/login"> Login</Link></li> */}
                <motion.li whileHover={{scale:1.05}} className='px-2 text-white'><Link to="/career"> Careers</Link></motion.li>



                <motion.li whileHover={{scale:1.05}} className='px-2 text-[#BF6900]'> {isAuthenticated && <p> Welcome: {user.name}</p>}</motion.li>

                { isAuthenticated ? 
                <motion.li whileHover={{scale:1.05}} className='px-2 text-white'><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button></motion.li>
                  :
                <motion.li whileHover={{scale:1.05}} className='px-2 text-white'><button className="text-white bg-[#BF6900] hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => loginWithRedirect()}>Log In</button></motion.li>
                }

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