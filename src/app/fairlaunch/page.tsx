import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Firstpage from '../components/fairlaunch/Firstpage'
import Secondpage from '../components/fairlaunch/Secondpage'

const page = () => {
  return (
    <div className='flex flex-row bg-black'>
      <Sidebar />
      <div>
        <div className='w-full'>
          <Header />
        </div>

        {/* <Firstpage /> */}
        <Secondpage />

      </div>
    </div>
  )
}

export default page
