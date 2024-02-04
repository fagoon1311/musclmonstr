import React from 'react';
import mainbg from '../assets/img/mainbackground.jpg';

const MainPage = () => {
  return (
    <div
      className='bg-cover bg-center h-screen'
      style={{ backgroundImage: `url(${mainbg})` }}
    >
      {/* Your content goes here */}
    </div>
  );
};

export default MainPage;
