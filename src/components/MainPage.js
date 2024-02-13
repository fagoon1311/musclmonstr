import React from 'react';
import mainbg from '../assets/img/mainbackground.jpg';
import ReviewDisplay from './ReviewDisplay';
import IntroductionSection from './IntroductionSection';
// import PlanCard from './PlanCard';
import Footer from './Footer';
import Plans from './Plans';

const MainPage = () => {
  return (
    <>
    <div>
      <IntroductionSection />
      <div
      className='bg-cover bg-center '
      style={{ backgroundImage: `url(${mainbg})` }}
      >
        <ReviewDisplay />
        <Plans />
        <div className='flex flex-col w-full justify-center items-center h-60'>
          <h1 className='text-white font text-sm '>Call us Today</h1>
          <h1 className='text-white font-bold text-7xl py-10'>+91-1234567890</h1>
          <p className='text-white text-sm '>Do something today that your future self will thank you for</p>
        </div> 
      </div>  
    </div>
    <div>
    <Footer />
    </div>
    </>
  );
};

export default MainPage;
