import React from 'react'
import Lpcard from './Lpcard'

const Lplist = () => {
  return (
    <div className='px-10'>
      <img src="/lpvector.png" alt="" className='py-2 mt-4 w-[1220px]' />
      <div className="flex gap-5 items-start w-[1230px] px-px mt-9  max-md:flex-wrap max-md:max-w-full">
      
      <div className="flex-auto text-5xl myfont text-white">Current Presales</div>
      <div className="flex gap-4 items-start mt-2 text-base text-white">
        <div className="flex flex-col self-stretch font-bold text-purple-600">
          <div>All launchpads</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/037c621290b83f7e39b9c91be56f0cb8bb26cfe883ec3cfb7898e0272a01f35c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="self-center mt-4 w-3 border-2 border-purple-600 border-solid aspect-[5.88] stroke-[2px] stroke-purple-600"
          />
        </div>
        <div className="flex-auto hover:font-bold cursor-pointer hover:text-purple-600">Advanced Mode</div>
        <div className="flex-auto hover:font-bold cursor-pointer hover:text-purple-600">My Contributions</div>
      </div>
    </div>
    <img src="/lpvector.png" alt="" className='py-2 mt-4 w-[1230px]' />


    <div className="flex flex-auto gap-3 mt-4 w-[1230px] text-neutral-500 max-md:flex-wrap max-md:max-w-full">
    <input
        type="text"
        className="justify-center items-start px-6 py-5 text-xs w-[600px] bg-zinc-900 rounded-[50px] max-md:px-5 max-md:max-w-full"
        placeholder="Enter Token name or token symbol"
      />
      <div className="flex gap-1 px-8 py-5 whitespace-nowrap bg-zinc-900 rounded-[50px] max-md:px-5">
        {/* <div className="my-auto">Filter</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba4aa63323f95e81b9fac8015d0e852a072ac28031d5f69627ef11722480b6ff?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-5 aspect-square"
        /> */}
        <select className="bg-zinc-900 border-none text-zinc-500" defaultValue="default">
          <option value="default" disabled hidden>Filter</option>
          <option value="filter1">Filter 1</option>
          <option value="filter2">Filter 2</option>
          {/* Add more options as needed */}
        </select>
      </div>
      {/* <div className="flex gap-1 px-8 py-5 bg-zinc-900 rounded-[50px] max-md:px-5">
        <div className="my-auto">Pool Type</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba4aa63323f95e81b9fac8015d0e852a072ac28031d5f69627ef11722480b6ff?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-5 aspect-square"
        />
      </div> */}
      <div className="flex gap-1 px-8 py-5 bg-zinc-900 rounded-[50px] max-md:px-5">
        {/* <div className="my-auto">Pool Type</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba4aa63323f95e81b9fac8015d0e852a072ac28031d5f69627ef11722480b6ff?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-5 aspect-square"
        /> */}
        <select className="bg-zinc-900 border-none text-zinc-500 " defaultValue="default">
          <option value="default" disabled hidden className="text-zinc-600"> Pool Type</option>
          <option value="type1">Type 1</option>
          <option value="type2">Type 2</option>
          <option value="pool type">Pool Type</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="flex gap-1 px-8 py-5 bg-zinc-900 rounded-[50px] max-md:px-5">
        {/* <div className="my-auto">Sort By</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba4aa63323f95e81b9fac8015d0e852a072ac28031d5f69627ef11722480b6ff?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-5 aspect-square"
        /> */}
        <select className="bg-zinc-900 border-none text-zinc-500" defaultValue="default">
          <option value="default" disabled hidden>Sort By</option>
          <option value="sortBy1">Option 1</option>
          <option value="sortBy2">Option 2</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="flex gap-1 px-8 py-5 whitespace-nowrap bg-zinc-900 rounded-[50px] max-md:px-5">
        {/* <div className="my-auto">Chain</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba4aa63323f95e81b9fac8015d0e852a072ac28031d5f69627ef11722480b6ff?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-5 aspect-square"
        /> */}
        <select className="bg-zinc-900 border-none text-zinc-500" defaultValue="default">
          <option value="default" disabled hidden>Chain</option>
          <option value="chain1">Chain 1</option>
          <option value="chain2">Chain 2</option>
          {/* Add more options as needed */}
        </select>
      </div>
    </div>

        <Lpcard />
        <Lpcard />
        <Lpcard />
        <Lpcard />

    </div>
  )
}

export default Lplist
