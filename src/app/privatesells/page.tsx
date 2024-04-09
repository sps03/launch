import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Ps from '../components/privatesells/Ps'

const page = () => {
  return (
    <div>
      <div className='flex flex-row bg-black'>
        <Sidebar />
        <div>
          <div className='w-full'>
            <Header />
          </div>

          <Ps />

        </div>
    </div>
 </div>
  )
}

export default page
