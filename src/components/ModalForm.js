import React, { useEffect, useState } from 'react'

const ModalForm = ({ toggle, setToggle }) => {
    // console.log(toggle)
    console.log(setToggle)
    const [formData, setFormData] = useState({
        username:"",
        mobile:"",
        weight:"",
    })
    useEffect(()=>{
        console.log(formData)
    },[formData])


    const handlesubmit = () =>{
        alert(`Thanks ${formData.username} for contacting we will get back to you in a while`)
       setToggle(false)
    }
  return (
    <div className='py-5'>
        <form class="max-w-sm mx-auto">
          <div class="mb-5">

            <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Name</label>
            <input type="text" id="email" class="shadow-sm bg-black border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
            placeholder="" 
            required
            value={formData.name}
            onChange={(e)=>{setFormData({...formData, username:e.target.value})}}>
            </input>

          </div>
          <div class="mb-5">
            <label for="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Contact No.</label>
            <input type="tel" id="password" className="shadow-sm bg-black border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
            required
            value={formData.mobile}
            onChange={(e)=>{setFormData({...formData, mobile:e.target.value})}}></input>
          </div>
          <div class="mb-5">
            <label for="repeat-password" className="block mb-2 text-sm font-medium text-white dark:text-white">Body Weight(kg)</label>
            <input type="number" id="repeat-password" className="shadow-sm bg-black border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
            required
            value={formData.weight}
            onChange={(e)=>{setFormData({...formData, weight:e.target.value})}}></input>
          </div>
          <div className='flex justify-between'>
          <button type="submit" className="text-white bg-[#BF6900] hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={()=>handlesubmit()}>Submit</button>
          <button  className="text-white bg-[#BF6900] hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={()=>setToggle(false)}>Close</button>
          </div>

        </form>
    </div>
  )
}

export default ModalForm