import { useState } from "react"
import React from 'react'
import { ChevronDownCircle, ChevronUpCircle } from "lucide-react"
const JobSection = ({title, description, isVisible, setIsVisible, skillset}) =>{
    return(
        <div className="bg-[#162135] p-2 flex flex-col">
            <span className="px-5"><h3 className="text-[#BF6900] font-semibold text-2xl">{title}</h3></span>
            <span className="px-5">
            {isVisible && <p className="text-white text-sm p-2">{description}</p>}
            {isVisible && <h1 className="text-[#bf6900] font-bold">Requirements</h1>}
            {isVisible&& <p className="text-white text-sm p-2">{skillset}</p>}
            {
                isVisible ? 
                <button 
                className="  text-white px-3"
                onClick={()=>setIsVisible(false)}><ChevronUpCircle /></button> :
                <button 
                className=" text-white  px-3"
                onClick={()=>setIsVisible(true)}><ChevronDownCircle /></button>
            }
            </span>
        </div>
    )
}


const Jobs = () => {
    const [visibleSection, setVisibleSection] = useState("")
  return (
    <div className="flex flex-col">
        <div className="grid grid-flow-col grid-cols-12 ">
            <div className="bg-[#162135] flex justify-center items-center col-span-5">
                <h1 className="font-bold text-2xl text-white">Engineering</h1>
            </div>

            <div className="flex flex-col col-span-7">
                <JobSection title={"Backend Engineer"}
                description={"Backend engineering powers all the user experiences be it on the App or in-center at one of our cult.fit, mind.fit or care.fit centers. The team is also involved in building the business process systems behind each of our verticals. "}
                isVisible={visibleSection === 'Backend Engineer'}
                setIsVisible={()=>{
                    if(visibleSection === 'Backend Engineer'){
                        setVisibleSection('')
                    }
                    else setVisibleSection('Backend Engineer')
                }}
                skillset = {"Strong understanding of relational and NoSQL databases, including [specific databases],Experience with API design and development, RESTful or GraphQL, Familiarity with server management and deployment tools such as Docker, Kubernetes, or AWS, Solid understanding of software development principles, design patterns, and best practices, Excellent problem-solving skills and attention to detail, Effective communication skills and ability to collaborate with cross-functional teams. "} 
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
                skillset={`Strong knowledge of frontend frameworks/libraries such as React, Angular, or Vue.js.
                Experience with responsive design principles and CSS preprocessors like Sass or Less.
                Familiarity with version control systems like Git and code collaboration tools like GitHub or GitLab.
                Solid understanding of web standards, accessibility principles, and SEO best practices.
                Excellent problem-solving skills and ability to debug and troubleshoot frontend issues effectively.
                Effective communication skills and ability to collaborate with cross-functional teams.
                .`}
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
                skillset={`Proficiency in SQL for data querying and manipulation; experience with programming languages like Python or R is a plus.
                Strong analytical skills and experience with statistical analysis, data modeling, and hypothesis testing.
                Experience with data visualization tools such as Tableau, Power BI, or matplotlib/seaborn.
                Familiarity with machine learning algorithms and techniques for predictive modeling is a plus.
                Excellent problem-solving skills and attention to detail.
                Effective communication skills and ability to collaborate with cross-functional teams.`}
                />
            </div>
        </div>
        {/* --------------------------------------------------------- */}
        <div className="grid grid-flow-col grid-cols-12 border bottom-1">
            <div className="bg-[#162135] flex justify-center items-center col-span-5">
                <h1 className="font-bold text-2xl text-white">Staff Openings</h1>
            </div>

            <div className="flex flex-col col-span-7">
                <JobSection title={"Personal Trainer"}
                description={"Seeking motivated Personal Trainer to join our team. Design personalized exercise programs, offer nutrition guidance, and motivate clients to achieve fitness goals. Assess fitness levels, monitor progress, and provide instruction on proper techniques. Strong communication skills and certification in personal training required. Previous experience preferred. Join us in inspiring wellness!"}
                isVisible={visibleSection === 'Personal Trainer'}
                setIsVisible={()=>{
                    if(visibleSection === 'Personal Trainer'){
                        setVisibleSection('')
                    }
                    else setVisibleSection('Personal Trainer')
                }}
                skillset={`Strong knowledge of exercise physiology, anatomy, and biomechanics.
                Ability to assess clients' fitness levels, identify areas for improvement, and develop effective training programs.
                Excellent interpersonal skills and ability to build rapport with clients of all ages and fitness levels.
                Passion for health and fitness, with a commitment to helping others achieve their wellness goals.
                CPR/AED certification and knowledge of first aid procedures.
                Effective communication skills and ability to provide clear instructions and feedback.
                Willingness to work flexible hours, including evenings and weekends, to accommodate clients' schedules.`}
                />

                <JobSection title={"Cleaner"}
                description={"We're looking for a diligent Gym Cleaner to maintain cleanliness and hygiene standards in our facility. Responsibilities include cleaning gym equipment, floors, and restrooms, disinfecting surfaces, and restocking supplies. Attention to detail and the ability to work independently are essential. Experience in cleaning preferred. Join our team today!"}
                isVisible={visibleSection === 'Cleaner'}
                setIsVisible={()=>{
                    if(visibleSection === 'Cleaner'){
                        setVisibleSection('')
                    }
                    else setVisibleSection('Cleaner')
                }}
                skillset={`Able to Maintain a hygienic environment`}
                />
                
                <JobSection title={"Receptionist"}
                description={"We're hiring a friendly and organized Gym Receptionist to be the first point of contact for our members. Responsibilities include greeting visitors, answering inquiries, processing memberships, scheduling appointments, and handling payments. Excellent communication and customer service skills are required. Previous experience in a similar role preferred. Join our team and be the welcoming face of our gym!"}
                isVisible={visibleSection === 'Receptionist'}
                setIsVisible={()=>{
                    if(visibleSection === 'Receptionist'){
                        setVisibleSection('')
                    }
                    else setVisibleSection('Receptionist')
                }}
                skillset={`Excellent communication skills, both verbal and written, with a friendly and professional demeanor.
                Strong organizational skills and attention to detail, with the ability to multitask and prioritize tasks effectively.
                Proficiency in computer applications such as MS Office and gym management software (e.g., Mindbody, Zen Planner).
                Ability to work independently with minimal supervision and as part of a team in a fast-paced environment.
                Positive attitude, proactive approach, and willingness to go above and beyond to exceed member expectations.
                Flexibility to work flexible hours, including evenings, weekends, and holidays, as required by the gym schedule.`}
                />
            </div>
        </div>

    </div>
  )
}

export default Jobs