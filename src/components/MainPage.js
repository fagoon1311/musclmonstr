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
      </div>  
    </div>
    <div>
    <Footer />
    </div>
    </>
  );
};

export default MainPage;
