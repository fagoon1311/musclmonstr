import React from 'react';
import mainbg from '../assets/img/mainbackground.jpg';
import ReviewDisplay from './ReviewDisplay';

const MainPage = () => {
  return (
    <div
      className='bg-cover bg-center h-screen'
      style={{ backgroundImage: `url(${mainbg})` }}
    >

      <h1 className='text-2xl text-white px-2'>Fitness by</h1>
      <h1 className='text-xl text-white px-2'>Tarun Kashyap</h1>
      <ReviewDisplay />
    </div>
  );
};

export default MainPage;
