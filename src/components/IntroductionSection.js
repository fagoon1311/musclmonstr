import React from 'react'
import { introduction } from '../utils/Constants'

const IntroductionSection = () => {
  return (
    <div className='bg-[#162135] grid grid-flow-col'>
        <div className='col-span-6 p-2'>
          {/* <h1 class="mb-4 text-xl font-extrabold text-white dark:text-white md:text-5xl lg:text-6xl">Welcome to <span class="text-transparent bg-clip-text bg-gradient-to-r to-[#BF6900] from-black">MUSCLMONSTR</span> </h1> */}
          <h1 className='text-white text-3xl font-sans font-extrabold pl-48 m-2 '>Welcome to MuscleMonstr</h1>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">Regain <mark class="px-2 text-black bg-[#BF6900] rounded dark:bg-blue-500">control</mark> over your Body</h1>
          {/* <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p> */}
          <br></br>
          <p class="mb-3 text-white dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-[#BF6900] dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">Unlock Your Fitness Potential with Tarun: Your Path to Strength, Endurance, and Confidence.</p>
          <p class="text-gray-500 dark:text-gray-400">{introduction}</p>
           <br></br>
           <br></br>
           <span className='flex justify-center px-2'>
           <button className='border-4 border-[#BF6900] px-5 py-2 w-[14rem] text-white border-separate mx-2 hover:bg-[#BF6900]'>Book an Appointment</button>
           <button className='border-4 border-[#BF6900] px-5 py-2 w-[14rem] text-white border-separate hover:bg-[#BF6900]'>Locate Us</button>
           </span>
        </div>
        <div className='flex justify-end col-span-6'>
          <img 
          src="https://images.unsplash.com/photo-1545346315-f4c47e3e1b55?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt='bodybuilder'
          className='h-[700px] w-[600px] justify-end rounded-r-lg'
          ></img>
        </div>
      </div>
  )
}

export default IntroductionSection