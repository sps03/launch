import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';

const Degans2 = () => {
  return (
    <div className='flex flex-row gap-3 px-8'>
      <div className="flex  flex-col px-11 py-12 text-base leading-4 w-[1240px]  border-solid bg-zinc-900 border-[6px] border-zinc-700 rounded-[30px] max-md:px-5">
      <div className="flex gap-5 w-full max-md:flex-wrap max-md:mr-1 max-md:max-w-full">
        <div className="flex flex-auto gap-2.5 px-6 py-4 text-xs bg-zinc-700 rounded-[50px] text-neutral-500 max-md:flex-wrap max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6875f4d7feb552f4fdbb83a80199fc407a3e2fc51de5233c760f8e961589af4?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 w-6 aspect-square"
          />
          <div className="my-auto max-md:max-w-full">
            Seach bu token address ...
          </div>
        </div>
        <div className="flex flex-col self-end mt-6 text-base">
          <div className="flex gap-5 justify-between">
            <div className="font-bold text-purple-600">All</div>
            <div className="text-white">My Lock</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/037c621290b83f7e39b9c91be56f0cb8bb26cfe883ec3cfb7898e0272a01f35c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="mt-5 w-3 border-2 border-purple-600 border-solid aspect-[5.88] stroke-[2px] stroke-purple-600"
          />
        </div>
      </div>

      
      </div>
    </div>
  );
};

export default Degans2;
