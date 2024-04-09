import React from 'react';

const Createstaking = () => {
  return (
    <div className='px-8'>
      <div className="flex flex-col px-11 py-10 text-base leading-3 text-white border-solid bg-zinc-900 border-[6px] border-zinc-700 rounded-[30px] max-md:px-5">
        <div className="text-xl text-white max-md:max-w-full">Token Address</div>
        <div className="justify-center items-start px-4 py-6 mt-3.5 font-medium rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 leading-[100%] max-md:pr-5 max-md:max-w-full">
          <input
            type="text"
            placeholder="Enter Token Address"
            className="text-white bg-zinc-900 focus:outline-none"
          />
        </div>
        <div className="mt-4 text-xs font-bold text-purple-600 max-md:max-w-full">
          Pool creation fee: 0.1 ETH
        </div>
        <a href='' className="justify-center self-start px-9 py-5 mt-8 text-xs font-bold bg-purple-600 rounded-[50px] max-md:px-5">
          Create Token
        </a>
        <div className="mt-10 text-xl text-white max-md:mt-10 max-md:max-w-full">
          Min Staking Period
        </div>
        <div className="flex gap-4 mt-2.5 font-medium leading-[100%] max-md:flex-wrap max-md:max-w-full">
          <div className="grow justify-center items-start px-4 py-6 rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 w-fit max-md:pr-5 max-md:max-w-full">
            <input
              type="text"
              placeholder="Min Staking Period"
              className="text-white bg-zinc-900 focus:outline-none"
            />
          </div>
          <div className="flex gap-5 justify-center px-9 py-5 whitespace-nowrap rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 max-md:px-5">
            <div className="my-auto">Months</div>
            <select className="text-white bg-zinc-900 focus:outline-none">
            <option value="1">1 </option>
              <option value="2">2</option>
              <option value="3">3 </option>
              <option value="4">4 </option>
              <option value="5">5 </option>
              <option value="6">6 </option>
              <option value="7">7 </option>
              <option value="8">8 </option>
              <option value="9">9 </option>
              <option value="10">10 </option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
        </div>
        <div className="flex gap-5 mt-10 text-xl text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto">Min Staking Amount</div>
          <div className="flex-auto max-md:max-w-full">Max Staking Amount</div>
        </div>
        <div className="flex gap-5 mt-2.5 font-medium leading-[100%] max-md:flex-wrap max-md:max-w-full">
          <div className="grow justify-center items-start px-4 py-6 rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 w-fit max-md:pr-5 max-md:max-w-full">
            <input
              type="text"
              placeholder="Min Staking Amount"
              className="text-white bg-zinc-900 focus:outline-none"
            />
          </div>
          <div className="grow justify-center items-start px-4 py-6 rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 w-fit max-md:pr-5 max-md:max-w-full">
            <input
              type="text"
              placeholder="Max Staking Amount"
              className="text-white bg-zinc-900 focus:outline-none"
            />
          </div>
        </div>
        <div className="mt-10 text-xl text-white max-md:mt-10 max-md:max-w-full">
          Boost Settings
        </div>
        <div className="flex gap-2 justify-between mt-2.5 font-medium leading-[100%] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-center px-9 py-5 whitespace-nowrap rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 max-md:px-5">
            <div className="my-auto text-zinc-700">Months</div>
            <select className="text-white bg-zinc-900 focus:outline-none">
              <option value="1">1 </option>
              <option value="2">2</option>
              <option value="3">3 </option>
              <option value="4">4 </option>
              <option value="5">5 </option>
              <option value="6">6 </option>
              <option value="7">7 </option>
              <option value="8">8 </option>
              <option value="9">9 </option>
              <option value="10">10 </option>
              <option value="11">11</option>
              <option value="12">12</option>
              
            </select>
          </div>
          <div className="justify-center items-start px-4 py-6 w-[400px] rounded-2xl border-4 border-solid text-zinc-700 bg-zinc-900 border-zinc-700 max-md:pr-5">
            Duration (month)
          </div>
          <div className="justify-center items-start px-4 py-6  w-[400px] rounded-2xl border-4 border-solid text-zinc-700 bg-zinc-900 border-zinc-700 max-md:pr-5 max-md:max-w-full">
            Percentage ( % )
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5e9f163209e24a782e40c8acd92732ee1d7720f96234c35eb71bff7ae07b318?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 my-auto aspect-square w-[35px]"
          />
        </div>
        <div className="justify-center text-center items-center px-9 py-5 mt-14 font-bold text-fuchsia-500 border border-fuchsia-500 border-dashed rounded-[50px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          Add Setting
        </div>
        <a href='' className="justify-center self-center px-9 py-5 mt-7 text-xs font-bold whitespace-nowrap bg-purple-600 rounded-[50px] max-md:px-5">
          Create
        </a>
      </div>
    </div>
  );
};

export default Createstaking;
