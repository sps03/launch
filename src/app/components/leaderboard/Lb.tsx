import React from 'react'
import Board from './Board'

const Lb = () => {
  return (
    <div className='px-10'>
      {/* 1sthalf  */}
      <div>
        <div className="flex gap-5 w-[1230px] items-start mt-9  max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto text-3xl myfont text-white">Leaderboard</div>
            <div className="flex gap-5 mt-1 text-right max-md:flex-wrap">
              <div className="flex flex-auto gap-5 items-center my-auto">
                <div className="grow self-stretch myfont my-auto text-xl text-white">
                  Total Success This Week :
                </div>
                <div className="self-stretch text-3xl font-bold text-purple-600">
                  62
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/82324afdc10445d3f2c7ce502aa3aac3c983d9ede1baaf7d15aff56438f6f03a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 self-stretch my-auto w-0.5 border-2 border-solid aspect-[0.11] border-zinc-700 stroke-[2px] stroke-zinc-700"
                />
              </div>
              <div className="flex flex-auto gap-3.5">
                <div className="grow my-auto myfont text-xl text-white">
                  Total Raised This Week :
                </div>
                <div className="flex-auto text-3xl font-bold text-purple-600">
                  $6.05M
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-auto gap-5 w-[1230px] justify-between mt-5 items-center px-5 py-2.5 text-xs bg-zinc-900 rounded-[50px] text-zinc-700 max-md:flex-wrap max-md:pl-5">
      <div className="flex flex-col self-stretch my-auto font-bold text-purple-600">
        <div>Week 13/2024</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/037c621290b83f7e39b9c91be56f0cb8bb26cfe883ec3cfb7898e0272a01f35c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="self-center mt-2.5 w-3 border-2 border-purple-600 border-solid aspect-[5.88] stroke-[2px] stroke-purple-600"
        />
      </div>
      <div className="self-stretch my-auto">Week 12/2024</div>
      <div className="self-stretch my-auto">Week 12/2024</div>
      <div className="self-stretch my-auto">Week 12/2024</div>
      <div className="self-stretch my-auto">Week 12/2024</div>
      <div className="self-stretch my-auto">Week 12/2024</div>
      <div className="self-stretch my-auto">Week 12/2024</div>
      <div className="self-stretch my-auto">Week 12/2024</div>
      <div className="self-stretch my-auto">Week 12/2024</div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5e2108975dc3b628e7e9497738ac5feb2b503c2be36ba251c271a5fe53f348a7?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e2108975dc3b628e7e9497738ac5feb2b503c2be36ba251c271a5fe53f348a7?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e2108975dc3b628e7e9497738ac5feb2b503c2be36ba251c271a5fe53f348a7?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e2108975dc3b628e7e9497738ac5feb2b503c2be36ba251c271a5fe53f348a7?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e2108975dc3b628e7e9497738ac5feb2b503c2be36ba251c271a5fe53f348a7?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e2108975dc3b628e7e9497738ac5feb2b503c2be36ba251c271a5fe53f348a7?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e2108975dc3b628e7e9497738ac5feb2b503c2be36ba251c271a5fe53f348a7?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e2108975dc3b628e7e9497738ac5feb2b503c2be36ba251c271a5fe53f348a7?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
        className="shrink-0 self-stretch max-w-full border border-solid aspect-[2.17] border-zinc-700 rounded-[37.202px] w-[125px]"
      />
    </div>



        </div>

      <div className='mt-5'>
      <Board />
      </div>
      

    </div>
  )
}

export default Lb
