import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Buycrypto from '../components/buycrypto/Buycrypto'

const page = () => {
  return (
    <div>
      <div className='flex flex-row bg-black'>
        <Sidebar />
        <div>
          <div className='w-full'>
            <Header />
          </div>

          <Buycrypto />

        </div>
    </div>
    </div>
  )
}

export default page
