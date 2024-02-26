import React from 'react'
import CareerCards from './CareerCards'
import CareerHead from './CareerHead'
import Jobs from './Jobs'
import {motion} from 'framer-motion'

const Careers = () => {
  return (
    <motion.div 
    initial={{x:'100vw'}}
    animate={{x:'0vw'}}
    transition={{type: 'spring', bounce:0}}
    className='flex flex-col'>
        <CareerHead />
        <CareerCards />
        <Jobs />
    </motion.div>
  )
}

export default Careers