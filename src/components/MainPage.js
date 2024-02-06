import React from 'react';
import mainbg from '../assets/img/mainbackground.jpg';
import ReviewDisplay from './ReviewDisplay';

const MainPage = () => {
  return (
    <div
      className='bg-cover bg-center h-screen'
      style={{ backgroundImage: `url(${mainbg})` }}
    >
      <ReviewDisplay />
    </div>
  );
};

export default MainPage;
