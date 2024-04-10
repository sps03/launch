'use client'

import React, { useState } from 'react';
import Step1 from '../components/launchpad/Step1';
import Step2 from '../components/launchpad/Step2';
import Step3 from '../components/launchpad/Step3';
import Step4 from '../components/launchpad/Step4';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Page = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1); // Move to the next step
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1); // Move to the previous step
  };

  return (
    <div className='flex flex-row bg-black'>
      <Sidebar />
      <div>
        <div className='w-full'>
          <Header />
        </div>

        {currentStep === 1 && <Step1 onNextStep={handleNextStep} />}
        {currentStep === 2 && <Step2 onNextStep={handleNextStep} previousStep={handlePreviousStep} />}
        {currentStep === 3 && <Step3 onNextStep={handleNextStep} previousStep={handlePreviousStep} />}
        {currentStep === 4 && <Step4 previousStep={handlePreviousStep} />}
      </div>
    </div>
  );
};

export default Page;
