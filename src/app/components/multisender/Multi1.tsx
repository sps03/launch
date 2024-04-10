import React from 'react';

interface Step1Props {
  onNextStep: () => void; // Define the type of onNextStep
}

const Multi1: React.FC<Step1Props> = ({ onNextStep }) => {

  const handleNextStep = () => {
    onNextStep(); // Call the callback function to proceed to the next step
  };
  return (
    <div className='px-10'>
      <div className="flex gap-5 justify-between items-start px-9 py-12 border-solid bg-zinc-900 border-[6px] border-zinc-700 rounded-[30px] max-md:flex-wrap max-md:px-5">
        <div className="flex flex-col">
          <div className="flex gap-3 font-bold">
            <div className="justify-center items-center px-4 py-1 w-10 h-10 text-base leading-8 text-center text-white whitespace-nowrap bg-purple-600 rounded-full">
              1
            </div>
            <div className="flex-auto my-auto text-xl leading-4 text-white">
              Add Your Allocation
            </div>
          </div>
          <div className="flex gap-5 justify-between mx-5 text-base text-zinc-700 max-md:mx-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/15d8f977af4d25a4f33e4abb84ce540db4b1c54d48304845c497019ab042f159?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 w-px border border-solid aspect-[0] border-slate-600 fill-slate-600 stroke-[1px] stroke-slate-600"
            />
            <div>Enter your token to be sent with allocations</div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="justify-center items-center px-4 py-1 w-10 h-10 text-sm font-medium leading-7 text-center text-white whitespace-nowrap rounded-full border border-solid bg-slate-600 border-slate-600 stroke-[1px]">
              2
            </div>
            <div className="flex flex-col grow shrink-0 mt-4 basis-0 w-fit">
              <div className="text-xl font-bold leading-4 text-white">
                DeFi Launchpad Info
              </div>
              <div className="mt-3 text-base text-zinc-700">
                Enter the launchpad information that you want to raise, that
                should be enter all details about your presale
              </div>
            </div>
          </div>
        </div>
        {/* <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2be47c060188717c2bc8ec4ce0c363ef83cc935621caa7d6a58b565efeed8bb4?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-px border border-white border-solid aspect-[0] stroke-[1px] stroke-white"
        /> */}
        <img src="/vectorstand.png" alt="" className='px-8'/>
        <div className="flex flex-col mt-3.5 max-md:max-w-full">
          <div className="text-xl leading-4 text-white max-md:max-w-full">
            Token Address (optional)
          </div>
          <input
            type="text"
            className="justify-center items-start px-3.5 py-6 mt-2.5 text-base font-medium leading-4 text-white rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 max-md:pr-5 max-md:max-w-full"
            placeholder="Ex: Ethereum"
          />
          <div className="mt-4 text-base leading-5 text-purple-600 max-md:max-w-full">
            Pink Multi-sender allows you to send ERC20 token in batch by the easiest
            way. You can enter a token address to send a specific token or leave it
            blank to send chain token such as BNB....
          </div>
          <div className="mt-8 text-xl myfont leading-4 text-white max-md:max-w-full">
            Token Address (optional)
          </div>
          <input
            type="text"
            className="items-start px-3.5 pt-6 pb-48 mt-2.5 text-base font-medium leading-4 text-white rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 max-md:pr-5 max-md:pb-10 max-md:max-w-full"
            placeholder="Ex: Ethereum"
          />
          <div className="justify-center items-start px-7 py-5 mt-3 text-base font-semibold text-white border-2 border-amber-300 border-solid bg-amber-300 bg-opacity-10 rounded-[100px] max-md:px-5 max-md:max-w-full">
            Please exclude from fees, rewards, max tx amount to start sending
            tokens.
          </div>
          <div className="flex gap-5 justify-between px-px mt-8 w-full font-bold max-md:flex-wrap max-md:max-w-full">
          <button onClick={handleNextStep} className="justify-center self-start px-9 py-5 mt-11 text-s font-bold text-white whitespace-nowrap bg-purple-600 rounded-[50px] max-md:px-5 max-md:mt-10">
            Next
          </button>
            <div className="flex gap-4">
              <a href='' className="justify-center myfont px-9 py-5 text-xs text-white bg-zinc-700 rounded-[50px] max-md:px-5">
                Or Choose From CSV file
              </a>
              <div className="flex-auto my-auto text-base text-purple-600">
                Sample CSV file
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Multi1;
