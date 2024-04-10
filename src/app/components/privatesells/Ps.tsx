import React from 'react'
import Pscard from './Pscard'

const Ps = () => {
  return (
    <div className='px-10'>
      {/* 1sthalf */}
      <div>
        <div className="flex gap-5 w-[1230px] text-white  items-start px-px mt-9 max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto myfont text-3xl">Private Sales</div>
            <div className="flex gap-5 items-start mt-1.5 text-base">
              <div className="flex flex-col self-stretch font-bold text-purple-600">
                <div>All Private Sales</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/037c621290b83f7e39b9c91be56f0cb8bb26cfe883ec3cfb7898e0272a01f35c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="self-center mt-5 w-3 border-2 border-purple-600 border-solid aspect-[5.88] stroke-[2px] stroke-purple-600"
                />
              </div>
            <div className="flex-auto hover:text-purple-600 hover:font-bold cursor-pointer">My Private Sale</div>
            <div className="flex-auto hover:text-purple-600 hover:font-bold cursor-pointer">My Contributions</div>
          </div>
        </div>

        <div className="flex flex-auto gap-4 py-6 self-start text-neutral-500 max-md:flex-wrap max-md:max-w-full">
        <div className="justify-center items-start px-6 py-5 w-[930px] text-xs bg-zinc-900 rounded-[50px] max-md:px-5 max-md:max-w-full">
      <input
        type="text"
        placeholder="Enter Token name or token symbol"
        className="bg-zinc-900 text-white placeholder-neutral-500 px-3 py-1 rounded-lg outline-none border-none w-full"
      />
    </div>
      <div className="flex gap-1 px-6 py-5 bg-zinc-900 rounded-[50px] max-md:px-5">
        {/* <div className="my-auto">Filter By</div> */}
        {/* <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ea5772014986067f6a25abba397a582ef0842bba87094c0ab20cd862efea812?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-5 aspect-square"
        /> */}
        <select className="bg-zinc-900 border-none text-zinc-500" defaultValue="default">
          <option value="default" disabled hidden>Filter By</option>
          <option value="filter1">Filter 1</option>
          <option value="filter2">Filter 2</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="flex gap-1 px-6 py-5 bg-zinc-900 rounded-[50px] max-md:px-5">
        {/* <div className="my-auto">Sort By</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ea5772014986067f6a25abba397a582ef0842bba87094c0ab20cd862efea812?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-5 aspect-square"
        /> */}
        <select className="bg-zinc-900 h-full w-full border-none text-zinc-500" defaultValue="default">
          <option value="default" disabled hidden>Sort By</option>
          <option value="sort1">Sort 1</option>
          <option value="sort2">Sort 2</option>
          {/* Add more options as needed */}
        </select>
      </div>
    </div>
      </div>


      <div className='py-4'>
        <Pscard />
        <Pscard />
      </div>
    </div>
  )
}

export default Ps
