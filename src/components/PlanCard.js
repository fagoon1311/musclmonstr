import React from 'react';

const PlanCard = ({ info }) => {
  return (
    <div>
      <div class=" w-[20rem] max-w-sm p-4 bg-[#162135] bg-opacity-50 border-4 border-[#BF6900] rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400 text-center">{info.planname}</h5>
        <div class="flex items-baseline justify-center text-gray-900 dark:text-white">
          <span class="text-3xl font-semibold  text-[#BF6900]">$</span>
          <span class="text-5xl font-extrabold tracking-tight text-[#BF6900]">{info.cost}</span>
          <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
        </div>
        <ul role="list" class="space-y-5 my-7">
          <li class="flex items-center justify-center bg-[#BF6900] rounded-lg p-2">
            <span class="text-base font-normal leading-tight text-black dark:text-gray-400 ms-3">{info.duration}</span>
          </li>
          <li class="flex items-center justify-center">
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">LoremIpsum</span>
          </li>
         
          <li class="flex items-center justify-center">
            <span class="text-base font-normal leading-tight text-gray-500 ms-3">LoremIpsum</span>
          </li>
        </ul>
        <button type="button" class="text-white bg-[#BF6900] hover:bg-orange-700  dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
      </div>
    </div>
  );
};

export default PlanCard;
