'use client'
import React,{ useState } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Multi1 from '../components/multisender/Multi1'
import Multi2 from '../components/multisender/Multi2'

const Page = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1); // Move to the next step
  };
  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1); // Move to the previous step
  };

  return (
    <div>
      <div className='flex flex-row bg-black'>
        <Sidebar />
        <div>
          <div className='w-full'>
            <Header />
          </div>

          {currentStep === 1 && <Multi1 onNextStep={handleNextStep} />}
        {currentStep === 2 && <Multi2  previousStep={handlePreviousStep} />}

        </div>
    </div>
    </div>
  )
}

export default Page
