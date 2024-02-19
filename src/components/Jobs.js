import { useState } from "react"
import React from 'react'

const JobSection = ({title, description, isVisible, setIsVisible}) =>{
    return(
        <div className="bg-[#162135] p-2 flex">
            <span className="px-5"><h3 className="text-[#BF6900] font-semibold text-2xl">{title}</h3></span>
            <span>
            {isVisible && <p className="text-white text-sm">{description}</p>}
            {
                isVisible ? 
                <button 
                className=" border border-[#BF6900] text-white px-3"
                onClick={()=>setIsVisible(false)}>Hide</button> :
                <button 
                className="border border-[#BF6900] text-white  px-3"
                onClick={()=>setIsVisible(true)}>Show</button>
            }
            </span>
        </div>
    )
}


const Jobs = () => {
    const [visibleSection, setVisibleSection] = useState("")
  return (
    <div>
        <JobSection title={"Backend Engineer"}
        description={"Backend engineering powers all the user experiences be it on the App or in-center at one of our cult.fit, mind.fit or care.fit centers. The team is also involved in building the business process systems behind each of our verticals. "}
        isVisible={visibleSection === 'Backend Engineer'}
        setIsVisible={()=>{
            if(visibleSection === 'Backend Engineer'){
                setVisibleSection('')
            }
            else setVisibleSection('Backend Engineer')
        }}
        />

        <JobSection title={"Frontend Engineer"}
        description={"Front End Engineering powers the entire App and Website experience. The team is responsible for delivering an exceptional product experience to users, both in terms of usability and performance. Frontend engineers are involved heavily in feature development, performance improvement and experimentation "}
        isVisible={visibleSection === 'Frontend Engineer'}
        setIsVisible={()=>{
            if(visibleSection === 'Frontend Engineer'){
                setVisibleSection('')
            }
            else setVisibleSection('Frontend Engineer')
        }}
        />
        
        <JobSection title={"Data Analyst"}
        description={"As a data analyst, you'll be responsible for analyzing data sets to extract valuable insights and trends that can inform business decisions and strategies. You'll work closely with various teams within the organization to understand their data needs and provide them with actionable insights. Your role will involve collecting, cleaning, and organizing large volumes of data from multiple sources, such as databases, spreadsheets, and external APIs. "}
        isVisible={visibleSection === 'Data Analyst'}
        setIsVisible={()=>{
            if(visibleSection === 'Data Analyst'){
                setVisibleSection('')
            }
            else setVisibleSection('Data Analyst')
        }}
        />


    </div>
  )
}

export default Jobs