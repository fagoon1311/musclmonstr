import React from 'react'
import { Clock12, Scale, Siren} from 'lucide-react'


const CareerCards = () => {
  return (
    <div>
                <div className='flex flex-row items-center justify-center'>
            <div className='flex flex-col  p-4 w-[25rem] m-2 bg-[#162135] rounded-xl'>
                <div className='justify-center items-center flex'><Siren color='#BF6900' /></div>
                <br></br>
                <h1 className='font-bold text-[#BF6900]'>No Hierarchy</h1>
                <br></br>
                <p className='text-white'> We believe in action rather than position. So we’ve eliminated the entire hierarchical structure to make room for individuals to own up to projects and drive them with full responsibility</p>
            </div>
            <div className='flex flex-col  p-4 w-[25rem] m-2 bg-[#162135] rounded-xl'>
                <div className='justify-center items-center flex'><Scale color='#BF6900' /></div>
                <br></br>
                <h1 className='font-bold text-[#BF6900]'>Flexible Work Hours</h1>
                <br></br>
                <p className='text-white'>We believe in action rather than position. So we’ve eliminated the entire hierarchical structure to make room for individuals to own up to projects and drive them with full responsibility</p>
            </div>
            <div className='flex flex-col  p-4 w-[25rem] m-2 bg-[#162135] rounded-xl'>
                <div className='justify-center items-center flex'><Clock12 color='#BF6900' /></div>
                <br></br>
                <h1 className='font-bold text-[#BF6900]'>WorkLife Balance</h1>
                <br></br>
                <p className='text-white'>We believe in action rather than position. So we’ve eliminated the entire hierarchical structure to make room for individuals to own up to projects and drive them with full responsibility</p>
            </div>
        </div>
    </div>
  )
}

export default CareerCards