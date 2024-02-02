import React from 'react'
import mmlogo from '../assets/img/mmlogo.png'

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
    <div className='flex justify-between bg-'>
        <Title />
        <div>
            <ul className='flex py-6'>
                <li className='p-2'>About us</li>
                <li className='p-2'>Contact us</li>
            </ul>
        </div>
    </div>
  )
}

export default Head