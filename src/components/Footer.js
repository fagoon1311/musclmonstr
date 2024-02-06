import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-flow-col bg-[#162135]'> 
        <div className='col-span-5 h-44'>
            <h1 className='text-4xl font-bold p-2 mx-2 text-white'>Follow us</h1>
            

        </div>
        <div className='col-span-7'>
            <h1 className='text-4xl font-bold p-2 mx-2 text-white'>Contact</h1>
            <br></br>
            <h6 className='text-white p-2 mx-4'>🌏 Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
            <h6 className='text-white p-2 mx-4'>📧 Loremipsum@loremipsum</h6>
            <h6 className='text-white p-2 mx-4'>📞 123-1234-123</h6>
        </div>
    </div>
  )
}

export default Footer