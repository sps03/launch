import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Multi1 from '../components/multisender/Multi1'
import Multi2 from '../components/multisender/Multi2'

const page = () => {
  return (
    <div>
      <div className='flex flex-row bg-black'>
        <Sidebar />
        <div>
          <div className='w-full'>
            <Header />
          </div>

            <Multi1 />
            <Multi2 />

        </div>
    </div>
    </div>
  )
}

export default page
