import React from 'react';

const Table = () => {
  return (
    <div>
      <div className='flex flex-col px-5 py-6 overflow-hidden border-solid bg-zinc-900 border-[6px] w-full border-zinc-700 max-w-full max-h-full rounded-[30px]'>
        <div className="flex gap-5 text-base font-medium whitespace-nowrap text-zinc-700">
          <div className="flex items-center">Rank</div>
          <div className="flex items-center">#1</div>
        </div>
        <div className="flex gap-5 text-base font-medium whitespace-nowrap text-zinc-700">
          <div className="flex items-center">Token</div>
          <div className="flex items-center">Your Image and Text Here</div>
        </div>
        <div className="flex gap-5 text-base font-medium whitespace-nowrap text-zinc-700">
          <div className="flex items-center">Price</div>
          <div className="flex items-center">$100</div>
        </div>
        <div className="flex gap-5 text-base font-medium whitespace-nowrap text-zinc-700">
          <div className="flex items-center">10 Change</div>
          <div className="flex items-center">+5%</div>
        </div>
        <div className="flex gap-5 text-base font-medium whitespace-nowrap text-zinc-700">
          <div className="flex items-center">10 Volume</div>
          <div className="flex items-center">1000</div>
        </div>
        <div className="flex gap-5 text-base font-medium whitespace-nowrap text-zinc-700">
          <div className="flex items-center">Liquidity</div>
          <div className="flex items-center">1000</div>
        </div>
        <div className="flex gap-5 text-base font-medium whitespace-nowrap text-zinc-700">
          <div className="flex items-center">Market Cap</div>
          <div className="flex items-center">$1,000,000</div>
        </div>
      </div>
    </div>
  );
};

export default Table;
