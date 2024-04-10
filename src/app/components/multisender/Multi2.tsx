import React from 'react'

interface Step1Props {
  previousStep: () => void; // Define the type of onNextStep
}

const Multi2: React.FC<Step1Props> = ({ previousStep }) => {

  const handlePreviousStep = () => {
    previousStep() 
  };
  return (
    <div className='px-10'>
      <div className="flex flex-col px-9 mt-2 py-11 border-solid bg-zinc-900 border-[6px] border-zinc-700 rounded-[30px] w-[1230px] max-md:px-5">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10">
              <div className="flex gap-3 font-bold">
                <div className="justify-center items-center px-4 py-1 w-10 h-10 text-base leading-8 text-center text-white whitespace-nowrap bg-purple-600 rounded-full">
                  1
                </div>
                <div className="flex-auto my-auto text-xl leading-4 text-white">
                  Add Your Allocation
                </div>
              </div>
              <div className="flex gap-5 justify-between self-start ml-5 text-base text-zinc-700 max-md:ml-2.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2678c3a5b1d0a216ee0710aa85537999d82819b4e47e2fd7f95e8ab34c2c016?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 w-px border border-purple-600 border-solid aspect-[0] stroke-[1px] stroke-purple-600"
                />
                <div>Enter your token to be send with allocations</div>
              </div>
              <div className="flex gap-3 whitespace-nowrap">
                <div className="justify-center items-center px-4 py-1 w-10 h-10 text-sm font-medium leading-7 text-center text-white bg-purple-600 rounded-full">
                  2
                </div>
                <div className="flex-auto my-auto text-xl font-bold leading-4 text-white">
                  Confirmation
                </div>
              </div>
              <div className="self-center mt-1.5 text-base text-zinc-700">
                Let review your information
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[71%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 max-md:flex-wrap max-md:mt-10">
              {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2be47c060188717c2bc8ec4ce0c363ef83cc935621caa7d6a58b565efeed8bb4?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 w-px border border-white border-solid aspect-[0] stroke-[1px] stroke-white"
              /> */}
              <img src="/vectorstand.png" alt="" className='px-8'/>
              <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit max-md:max-w-full">
                <div className="flex gap-5 justify-center px-3 py-7 text-xl text-white border-b border-solid border-zinc-700 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex-auto myfont">Total Address</div>
                  <div className="self-start myfont text-right">2</div>
                </div>
                <div className="flex gap-5 justify-center px-3 py-7 text-xl border-b border-solid border-zinc-700 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex-auto myfont text-white">
                    Total AMount To Send
                  </div>
                  <div className="text-right myfont text-fuchsia-500">26.93</div>
                </div>
                <div className="flex gap-5 justify-center px-3 py-7 text-xl text-white border-b border-solid border-zinc-700 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex-auto myfont">Number Of Transaction</div>
                  <div className="self-start myfont text-right">1</div>
                </div>
                <div className="flex gap-5 justify-center px-3 py-7 text-xl text-white border-b border-solid border-zinc-700 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex-auto myfont">Your ETH Balance</div>
                  <div className="self-start myfont text-right">0.0 ETH</div>
                </div>
                <div className="flex gap-5 myfont px-8 py-7 mt-16 text-xl text-white whitespace-nowrap bg-zinc-700 rounded-[90px] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div>Address</div>
                  <div className="flex-auto myfont mr-10 text-right">Amount</div>
                </div>
                <div className="flex flex-col items-start pr-20 pl-8 mt-5 text-right whitespace-nowrap max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-1 text-sm font-bold leading-4 text-fuchsia-500">
                      <div className="flex-auto my-auto">
                        0x079F6E31e065A526Db2078c072e80E2842e40C89
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cb2ae39c5cb05f61a34c54a904966b213a3fbc0f9e412766b959de1eaa5627d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="shrink-0 w-6 aspect-square"
                      />
                    </div>
                    <div className="text-xl font-semibold text-white">
                      13.45
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between mt-7 w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-1 text-sm font-bold leading-4 text-fuchsia-500">
                      <div className="flex-auto my-auto">
                        0x079F6E31e065A526Db2078c072e80E2842e40C89
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cb2ae39c5cb05f61a34c54a904966b213a3fbc0f9e412766b959de1eaa5627d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="shrink-0 w-6 aspect-square"
                      />
                    </div>
                    <div className="my-auto text-xl font-semibold text-white">
                      13.48
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-5 gap-3 self-center text-xs font-bold text-white whitespace-nowrap">
      <button onClick={handlePreviousStep} className="justify-center px-9 py-5 bg-zinc-700 rounded-[50px] max-md:px-5">
          Back
        </button>
        <a href='' className="justify-center px-9 py-5 bg-fuchsia-500 rounded-[50px] max-md:px-5">
          Next
        </a>
      </div>
    </div>
    </div>
  )
}

export default Multi2
