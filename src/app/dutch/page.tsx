import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Dutch1 from '../components/dutch/Dutch1'
import Dutch2 from '../components/dutch/Dutch2'

const page = () => {
  return (
    <div className='flex flex-row bg-black'>
      <Sidebar />
      <div>
        <div className='w-full'>
          <Header />
        </div>

        <Dutch1 />
        <Dutch2 />

      </div>
    </div>
  )
}

export default page
