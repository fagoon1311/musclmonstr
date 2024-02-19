import React from 'react'
import careerheader from '../assets/img/careerheader.jpg'


const CareerHead = () => {
  return (
    <div>
        <div className='bg-cover bg-center h-[25rem] flex flex-col justify-center items-center' style={{backgroundImage:`url(${careerheader})`}}>
            <div><h1 className='text-6xl text-white font-extrabold'>To Make a Change.</h1></div>
            <div><h1 className='text-6xl text-white font-extrabold'>Be the Change.</h1></div>
            <div><p className=' text-white my-2'>Join Us. And together we will make this a healthier place.</p></div>
            {/* <button className='text-white bg-[#BF6900] p-2 rounded-3xl my-16'>View All Openings</button> */}
            <div className='my-16'>
                <div className="relative group cursor-pointer">
                    <div
                        className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div
                        className="relative px-7 py-6 bg-[#BF6900] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                    <div className="space-y-2">
                        <p className="text-black">View All Openings</p>
                    </div>
                </div>
                </div>
            </div>   
        </div>
        {/* ----------Image banner------------------ */}
        <div className='flex flex-col'> 
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,c_fit/dpr_2/image/careers-page/stepinside.png"></img>  
             <div className='absolute left-14  flex flex-col  justify-center px-2 py-10 mx-5 my-9 w-[20rem]'>
                <h1 className='text-4xl font-semibold '>Step Inside our <br></br> Office</h1>
                <br></br>
                <p className='text-base'>We’ve carefully handpicked individuals who believe in the vision of cult.fit - to make this world a healthier, fitter place. Breaking boundaries and doing more than what is expected is what people at cult.fit are known for. Join our team of highly motivated individuals, as we reach out to each other to build a product just as unique as you.</p>
             </div>
           
        </div>
        {/* ------------Quote banner------------------ */}
        <div className='flex flex-row'>
            <img className=' mx-[20rem] w-[450px] h-[350px]  my-7'
            src='https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_390,c_fit/dpr_2/image/careers-page/bebetter.png'></img>
            <div className=' flex flex-col absolute w-[20rem] left-[55rem] my-16 '>
                <h1 className='text-4xl font-semibold '>A company as Unique as you</h1>
                <br></br>
                <p className='text-sm'>Being a young and vibrant company trying to change the perspective on how people perceive health and fitness, we make for a colourful bandwagon. At cult.fit, we challenge the routine and look to create meaningful solutions to make healthy a seamless experience for everyone.
                    Fitness as they say is a journey, and perhaps you can be a part of ours.</p>
            </div>
        </div>

    </div>
  )
}

export default CareerHead