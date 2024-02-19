import React from 'react'
import careerheader from '../assets/img/careerheader.jpg'

const Careers = () => {
  return (
    <div className='flex flex-col'>
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
        {/* ---------------------------- */}
        <div>
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,c_fit/dpr_2/image/careers-page/stepinside.png"></img>  
        </div>
    </div>
  )
}

export default Careers