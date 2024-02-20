import React from 'react'
import CareerCards from './CareerCards'
import CareerHead from './CareerHead'
import Jobs from './Jobs'

const Careers = () => {
  return (
    <div className='flex flex-col'>
        <CareerHead />
        <CareerCards />
        <Jobs />
    </div>
  )
}

export default Careers