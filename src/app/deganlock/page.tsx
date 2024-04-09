import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Degans1 from '../components/deganlock/Degans1'
import Degans2 from '../components/deganlock/Degans2'
import Degans3 from '../components/deganlock/Degans3'

const page = () => {
  return (
    <div className='flex flex-row bg-black'>
      <Sidebar />
      <div>
        <div className='w-full'>
          <Header />
        </div>

        <Degans1 />

      </div>
    </div>
  )
}

export default page
