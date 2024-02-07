import React from 'react'
import { MapPinned, Mail, Phone, ThumbsUp, Heart, Bird, Globe} from 'lucide-react'
const Footer = () => {
  return (
    <div className='grid grid-flow-col bg-black'> 
        <div className='col-span-5 h-44'>
            <h1 className='text-4xl font-bold p-3 mx-2 text-white'>Follow us</h1>
            <br></br>
            <p className='text-white p-5 flex mx-4'><ThumbsUp /> <Heart/> <Bird/> <Globe/></p>
            <p className='text-white p-5 flex mx-4'><ThumbsUp /> <Heart/> <Bird/> <Globe/></p>
            

        </div>
        <div className='col-span-7'>
            <h1 className='text-4xl font-bold p-3 mx-2 text-white'>Contact</h1>
            <br></br>

            <h6 className='text-white p-2 mx-4 flex'><MapPinned />  <span className='px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit </span></h6>
            <h6 className='text-white p-2 mx-4 flex'><Mail /> <span className='px-2'>Loremipsum@loremipsum</span></h6>
            <h6 className='text-white p-2 mx-4 flex'><Phone /> <span className='px-2'>123-1234-123</span></h6>
        </div>
    </div>
  )
}

export default Footer