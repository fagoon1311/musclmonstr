import React from 'react';
import mainbg from '../assets/img/mainbackground.jpg';
import ReviewDisplay from './ReviewDisplay';
import IntroductionSection from './IntroductionSection';
import PlanCard from './PlanCard';
import Footer from './Footer';
const MainPage = () => {
  return (
    <div>
      <IntroductionSection />
      <div
      className='bg-cover bg-center h-screen'
      style={{ backgroundImage: `url(${mainbg})` }}
      >
        <ReviewDisplay />
        
      </div>
    </div>
  );
};

export default MainPage;
