import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Anti from '../components/antibot/Anti'

const page = () => {
  return (
    <div>
      <div className='flex flex-row bg-black'>
        <Sidebar />
        <div>
          <div className='w-full'>
            <Header />
          </div>

          <Anti />

        </div>
    </div>
    </div>
  )
}

export default page
