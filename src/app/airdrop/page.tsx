import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Air1 from '../components/airdrop/Air1'
import Airdroplist from '../components/airdrop/Airdroplist'
import Airdropopen from '../components/airdrop/Airdropopen'


const page = () => {
  return (
    <div className='flex flex-row bg-black '>
      <Sidebar />
      <div>
        <div className='w-full'>
          <Header />
        </div>

        <Air1 />
        <Airdroplist />
        <Airdropopen />

      </div>
    </div>
  )
}

export default page
