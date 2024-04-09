import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Bb from '../components/bridge/Bb'

const page = () => {
  return (
    <div>
      <div className='flex flex-row bg-black'>
        <Sidebar />
        <div>
          <div className='w-full'>
            <Header />
          </div>

          <Bb />

        </div>
    </div>
    </div>
  )
}

export default page
