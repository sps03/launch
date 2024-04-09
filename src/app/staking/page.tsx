import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Createstaking from '../components/staking/Createstaking'
import Stakingpool from '../components/staking/Stakingpool'

const page = () => {
  return (
    <div>
       <div className='flex flex-row bg-black'>
      <Sidebar />
      <div>
        <div className='w-full'>
          <Header />
        </div>

        <Createstaking />
        <Stakingpool />

      </div>
    </div>
    </div>
  )
}

export default page
