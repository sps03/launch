import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Lb from '../components/leaderboard/Lb'

const page = () => {
  return (
    <div>
      <div className='flex flex-row bg-black'>
        <Sidebar />
        <div>
          <div className='w-full'>
            <Header />
          </div>

            <Lb />

        </div>
    </div>
    </div>
  )
}

export default page
