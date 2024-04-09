import Step1 from '../components/launchpad/Step1'
import Step2 from '../components/launchpad/Step2'
import Step3 from '../components/launchpad/Step3'
import Step4 from '../components/launchpad/Step4'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-row bg-black'>
      <Sidebar />
      <div>
        <div className='w-full'>
          <Header />
        </div>

        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />

      </div>
    </div>
  )
}

export default page
