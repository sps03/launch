'use client'
import React, { useState,ChangeEvent } from 'react';

const Anti = () => {
  const [tokenAddress, setTokenAddress] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTokenAddress(event.target.value);
  };

  return (
    <div className='px-10'>
       <div className="mt-9 myfont text-white w-[1230px] text-3xl max-md:max-w-full">TokenLaunch Anti-Bot</div>

       <div className="flex flex-col px-11 mt-5 py-11 text-base font-medium border-solid bg-zinc-900 border-[6px] border-zinc-700 rounded-[30px] max-md:px-5">
          <div className="text-2xl myfont leading-4 text-white max-md:max-w-full">
            Token Address
          </div>
          <div className="flex gap-3.5 mt-3.5 text-white leading-[100%] max-md:flex-wrap max-md:max-w-full">
            <input
              type="text"
              value={tokenAddress}
              onChange={handleChange}
              className="justify-center items-start px-4 py-6 rounded-2xl w-[930px] border-4 border-solid bg-zinc-900 border-zinc-700 max-md:pr-5 max-md:max-w-full text-white"
              placeholder="EX: 0x000"
            />
            <div className="my-auto">OR</div>
            <a href='' className="justify-center self-start px-9 py-7 text-xs font-bold bg-purple-600 rounded-[50px] max-md:px-5">
              Create Token
            </a>
          </div>
          <div className="mt-6 leading-6 text-white max-md:max-w-full">
            Choose a token to integrate with Pink Anti-Bot <br />Check out the guide how
            to integrate Pink Anti-Bot for custom contract here 
            <span className="text-purple-600">
              https://github.com/pinkmoonfinance/pink-antibot-guide
            </span>
          </div>
      </div>
    </div>
  );
};

export default Anti;
