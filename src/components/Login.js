import React from 'react';
import loginpagebg from '../assets/img/loginpagebg.jpg';
import SignUpForm from './SignUpForm';
// import { SimpleRegistrationForm } from './SignUp';

const Login = () => {
  return (
    <div className='bg-cover bg-center h-screen flex flex-col'
      style={{backgroundImage:`url(${loginpagebg})`}}>
        <div className='bg-[#bf6900] w-64 px-2 flex items-center justify-center rounded-lg my-1'>
            <h1 className='text-4xl'>Welcome Back</h1>
        </div>
        <div>
          <SignUpForm />
        </div>

    </div>
  );
};

export default Login;
