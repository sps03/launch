import React from 'react';

const Board = () => {
  // Sample array of items
  const items = [
    {
      number: 1,
      name: 'EGGY',
      iconSrc: '/eggy.png',
      balance: '836.3133_BNB',
      date: '2024.03.18',
      viewCount: 100
    },
    {
      number: 2,
      name: 'EGGY',
      iconSrc: '/eggy.png',
      balance: '836.3133_BNB',
      date: '2024.03.18',
      viewCount: 100
    },
    {
      number: 3,
      name: 'EGGY',
      iconSrc: '/eggy.png',
      balance: '836.3133_BNB',
      date: '2024.03.18',
      viewCount: 100
    },
    {
      number: 4,
      name: 'EGGY',
      iconSrc: '/eggy.png',
      balance: '836.3133_BNB',
      date: '2024.03.18',
      viewCount: 100
    },
    {
      number: 5,
      name: 'EGGY',
      iconSrc: '/eggy.png',
      balance: '836.3133_BNB',
      date: '2024.03.18',
      viewCount: 100
    },
    {
      number: 6,
      name: 'EGGY',
      iconSrc: '/eggy.png',
      balance: '836.3133_BNB',
      date: '2024.03.18',
      viewCount: 100
    },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className='py-2'>
          <div className="flex gap-5 justify-between px-6 w-[1230px] py-5 rounded-3xl bg-zinc-900 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between">
              <div className="justify-center py-2 px-2 items-center  my-auto text-xs font-bold text-center text-white whitespace-nowrap bg-zinc-700 h-[34px] rounded-[100px] w-[34px]">
                {item.number}
              </div>
              <div className="flex gap-2">
                <img
                  loading="lazy"
                  src={item.iconSrc}
                  className="shrink-0 aspect-[1.14] w-[74px] h-[68px]"
                />
                <div className="flex flex-col my-auto">
                  <div className="flex gap-2 whitespace-nowrap">
                    <div className="text-base font-bold text-white">{item.name}</div>
                    <div className="flex-auto my-auto text-xs font-medium text-zinc-700">
                      {item.name}
                    </div>
                  </div>
                  <div className="flex gap-4 mt-4 text-xs font-medium text-white">
                    <div className="flex flex-1 gap-1.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8776bf6653609ed5010af37f74a48008ea3136eabf5f5a980721d8c394e509c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="shrink-0 aspect-square w-[13px]"
                      />
                      <div>{item.balance}</div>
                    </div>
                    <div className="flex flex-1 gap-1.5 whitespace-nowrap">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c79bc37d6941c1ff37799ffd60c35a3f74ce6ea710c5a19874ee2abf4e3f3d4a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="shrink-0 aspect-square w-[13px]"
                      />
                      <div>{item.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-between my-auto font-bold whitespace-nowrap">
              <div className="justify-center py-5 px-4 my-auto text-xs text-white rounded-full border-2 border-green-500 border-solid stroke-[2px]">
                {item.viewCount}
              </div>
              <a href='' className="justify-center px-9 py-5 text-xs text-white bg-purple-600 rounded-[50px] max-md:px-5">
                View
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;
