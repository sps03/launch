import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Lplist from '../components/launchpadlist/Lplist'
import Lplistmain from '../components/launchpadlist/Lplistmain'

const page = () => {
  return (
    <div className='flex flex-row bg-black'>
      <Sidebar />
      <div>
        <div className='w-full'>
          <Header />
        </div>

        {/* <Lplist /> */}
        <Lplistmain />

      </div>
    </div>
  )
}

export default page
