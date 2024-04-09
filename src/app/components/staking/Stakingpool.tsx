import React from 'react'
import Stakingcard from './Stakingcard'

const Stakingpool = () => {
  return (
    <div className='flex flex-col px-10'>
      {/* 1sthalf */}
      <div>
        <div className="flex gap-5 w-[1230px] items-start px-px mt-9  text-white max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto myfont text-3xl">Staking Pools</div>
          <div className="flex gap-5 items-start mt-1.5 text-base">
            <div className="flex flex-col self-stretch font-bold text-purple-600">
              <div>All Staking Pools</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/037c621290b83f7e39b9c91be56f0cb8bb26cfe883ec3cfb7898e0272a01f35c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="self-center mt-4 w-3 border-2 border-purple-600 border-solid aspect-[5.88] stroke-[2px] stroke-purple-600"
              />
            </div>
            <div className="flex-auto">My Staking Pools</div>
            <div className="flex-auto">My Staked Pools</div>
          </div>
        </div>
      </div>


      {/* 2ndhalf */}
      <div>
        <Stakingcard />
        <Stakingcard />
      </div>


    </div>
  )
}

export default Stakingpool
