'use client'
import React, { useState } from 'react';

const Lplistmain = () => {
  const [amount, setAmount] = useState('0.0');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };
  return (
    <div className='flex flex-row px-10 py-2 gap-5'>
      <div>
              <div className="flex flex-col px-8 pt-8 pb-14 border-solid bg-zinc-900 border-[6px] border-zinc-700 rounded-[30px] max-md:px-5 max-md:max-w-full">
              <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d94f1961dc45a97dfad6415048aff7bbecb58b77ae9af0f998878d4399e129f4?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d94f1961dc45a97dfad6415048aff7bbecb58b77ae9af0f998878d4399e129f4?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d94f1961dc45a97dfad6415048aff7bbecb58b77ae9af0f998878d4399e129f4?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d94f1961dc45a97dfad6415048aff7bbecb58b77ae9af0f998878d4399e129f4?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d94f1961dc45a97dfad6415048aff7bbecb58b77ae9af0f998878d4399e129f4?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d94f1961dc45a97dfad6415048aff7bbecb58b77ae9af0f998878d4399e129f4?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d94f1961dc45a97dfad6415048aff7bbecb58b77ae9af0f998878d4399e129f4?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d94f1961dc45a97dfad6415048aff7bbecb58b77ae9af0f998878d4399e129f4?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                    className="shrink-0 max-w-full aspect-square rounded-[210px] w-[101px] max-md:mt-2.5"
                  />
                </div>
                <div className="flex flex-col w-[82%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow mt-1.5 max-md:mt-4 max-md:max-w-full">
                    <div className="flex gap-5 px-px w-full max-md:flex-wrap max-md:max-w-full">
                      <div className="flex-auto my-auto text-2xl font-extrabold text-white">
                        Nexan Presale
                      </div>
                      <div className="flex flex-1 gap-2 text-xs font-bold text-purple-600 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d488418ea1f8bfc178f37dd4488e83a50454cb1334fc2b329916b923244b807?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                          className="shrink-0 w-8 aspect-square"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/464bf1fda3e9fb92143097762642fde66366d5c2f0813f56c5c3601a89c0596d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                          className="shrink-0 w-8 aspect-square"
                        />
                        <div className="justify-center px-4 py-3 bg-purple-500 bg-opacity-10 rounded-[110px]">
                          Upcoming
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-5 mt-4 max-md:flex-wrap">
                      <div className="flex-auto text-xs font-medium leading-4 text-neutral-500">
                        Empowering Web3 with AI-Driven ecosystem. ( 1 ) DexPulse.app -
                        AI Driven Charting Platform ✅ (2 ) DexPulse Bot - Integrated
                        Dexpulse Buybot ✅ Upcoming Utility : (1) EVM Blockchain (2)
                        AI-Driven Sniper Platform | Low Tax ⭐️ Pre-Launch Marketing ✅
                        Secured Many Partnerships ✅ Chinese Marketing campaign ✅
                      </div>
                      <div className="flex gap-2 mr-14 my-auto">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/355b3908ac69d2595613c0e232e465e316b247887071f18a8cc32d5f0e8b2bd0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/355b3908ac69d2595613c0e232e465e316b247887071f18a8cc32d5f0e8b2bd0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/355b3908ac69d2595613c0e232e465e316b247887071f18a8cc32d5f0e8b2bd0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/355b3908ac69d2595613c0e232e465e316b247887071f18a8cc32d5f0e8b2bd0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/355b3908ac69d2595613c0e232e465e316b247887071f18a8cc32d5f0e8b2bd0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/355b3908ac69d2595613c0e232e465e316b247887071f18a8cc32d5f0e8b2bd0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/355b3908ac69d2595613c0e232e465e316b247887071f18a8cc32d5f0e8b2bd0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/355b3908ac69d2595613c0e232e465e316b247887071f18a8cc32d5f0e8b2bd0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                          className="shrink-0 w-8 aspect-square"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd6e04d304d09fe466160216ea62687a1938b3bec39070866c76c5c9d2db1255?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd6e04d304d09fe466160216ea62687a1938b3bec39070866c76c5c9d2db1255?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd6e04d304d09fe466160216ea62687a1938b3bec39070866c76c5c9d2db1255?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd6e04d304d09fe466160216ea62687a1938b3bec39070866c76c5c9d2db1255?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd6e04d304d09fe466160216ea62687a1938b3bec39070866c76c5c9d2db1255?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd6e04d304d09fe466160216ea62687a1938b3bec39070866c76c5c9d2db1255?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd6e04d304d09fe466160216ea62687a1938b3bec39070866c76c5c9d2db1255?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd6e04d304d09fe466160216ea62687a1938b3bec39070866c76c5c9d2db1255?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                          className="shrink-0 w-8 aspect-square"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/49412f67f1f752d9f21e99010d4b8787da6d10c0d41cc12a3ceba8b2aed31207?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/49412f67f1f752d9f21e99010d4b8787da6d10c0d41cc12a3ceba8b2aed31207?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49412f67f1f752d9f21e99010d4b8787da6d10c0d41cc12a3ceba8b2aed31207?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/49412f67f1f752d9f21e99010d4b8787da6d10c0d41cc12a3ceba8b2aed31207?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/49412f67f1f752d9f21e99010d4b8787da6d10c0d41cc12a3ceba8b2aed31207?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49412f67f1f752d9f21e99010d4b8787da6d10c0d41cc12a3ceba8b2aed31207?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/49412f67f1f752d9f21e99010d4b8787da6d10c0d41cc12a3ceba8b2aed31207?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/49412f67f1f752d9f21e99010d4b8787da6d10c0d41cc12a3ceba8b2aed31207?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                          className="shrink-0 w-8 aspect-square"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 px-3 py-5 mt-11 w-full text-sm leading-4 border-b border-solid border-zinc-700 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto my-auto myfont text-white">Presale Address</div>
              <div className="flex flex-auto gap-1 font-bold text-right text-fuchsia-500 whitespace-nowrap">
                <div className="flex-auto my-auto">
                  0x079F6E31e065A526Db2078c072e80E2842e40C89
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cb2ae39c5cb05f61a34c54a904966b213a3fbc0f9e412766b959de1eaa5627d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 w-6 aspect-square"
                />
              </div>
            </div>
            <div className="flex gap-5 px-3 py-6  w-full text-sm leading-4 border-b border-solid border-zinc-700 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto my-auto myfont text-white">Token Name</div>
              <div className="flex flex-auto gap-1 font-bold text-right text-white whitespace-nowrap">
                <div className="flex-auto my-auto">
                  Nexam
                </div>
              </div>
            </div>
            <div className="flex gap-5 px-3 py-6  w-full text-sm leading-4 border-b border-solid border-zinc-700 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto my-auto myfont text-white">Token Symbol</div>
              <div className="flex flex-auto gap-1 font-bold text-right text-white whitespace-nowrap">
                <div className="flex-auto my-auto">
                  NEXN
                </div>
              </div>
            </div>
            <div className="flex gap-5 px-3 py-6  w-full text-sm leading-4 border-b border-solid border-zinc-700 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto my-auto myfont text-white">Token Decimals</div>
              <div className="flex flex-auto gap-1 font-bold text-right text-white whitespace-nowrap">
                <div className="flex-auto my-auto">
                  18
                </div>
              </div>
            </div>
            <div className="flex flex-col px-3 py-6 border-b border-solid border-zinc-700 max-md:max-w-full">
              <div className="flex gap-5 w-full text-sm leading-4 max-md:flex-wrap max-md:max-w-full">
                <div className="my-auto myfont text-white">Token Address</div>
                <div className="flex flex-auto gap-1 font-bold text-right text-fuchsia-500 whitespace-nowrap">
                  <div className="flex-auto my-auto">
                    0x079F6E31e065A526Db2078c072e80E2842e40C89
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cb2ae39c5cb05f61a34c54a904966b213a3fbc0f9e412766b959de1eaa5627d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                    className="shrink-0 w-6 aspect-square"
                  />
                </div>
              </div>
              <div className="self-end mt-2.5 text-xs font-medium leading-4 text-right text-zinc-700">
                (Do not send BNB to the token address!)
              </div>
            </div>
            <div className="flex gap-5 px-3 py-6 w-full text-sm leading-4 border-b border-solid border-zinc-700 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto my-auto myfont text-white">Total Supply</div>
              <div className="flex flex-auto gap-1 font-bold text-right text-white whitespace-nowrap">
                <div className="flex-auto my-auto">
                  2,500,000,000 NEXN
                </div>
              </div>
            </div>
            <div className="flex gap-5 px-3 py-6 w-full text-sm leading-4 border-b border-solid border-zinc-700 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto my-auto myfont text-white">Total For Presale</div>
              <div className="flex flex-auto gap-1 font-bold text-right text-white whitespace-nowrap">
                <div className="flex-auto my-auto">
                  1,240,000,080 NEXN
                </div>
              </div>
            </div>
            <div className="flex gap-5 px-3 py-6 w-full text-sm leading-4 border-b border-solid border-zinc-700 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto my-auto myfont text-white">Total For Liquidity</div>
              <div className="flex flex-auto gap-1 font-bold text-right text-white whitespace-nowrap">
                <div className="flex-auto my-auto">
                  658,030,744,14 NEXN
                </div>
              </div>
            </div>
            <div className="flex gap-5 px-3 py-6 w-full text-sm leading-4 border-b border-solid border-zinc-700 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto my-auto myfont text-white">Presale Rate</div>
              <div className="flex flex-auto gap-1 font-bold text-right text-white whitespace-nowrap">
                <div className="flex-auto my-auto">
                  1 BNB=5,636,364 NEXN
                </div>
              </div>
            </div>
            <div className="flex gap-5 px-3 py-6 w-full text-sm leading-4 border-b border-solid border-zinc-700 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto my-auto myfont text-white">Listing Rate</div>
              <div className="flex flex-auto gap-1 font-bold text-right text-white whitespace-nowrap">
                <div className="flex-auto my-auto">
                  1 BNB=5354,545 NEXN
                </div>
              </div>
            </div>
            <div className="flex gap-5 px-3 py-6 w-full text-sm leading-4 border-b border-solid border-zinc-700 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto my-auto myfont text-white">Initial Market Cap (estimate)</div>
              <div className="flex flex-auto gap-1 font-bold text-right text-white whitespace-nowrap">
                <div className="flex-auto my-auto">
                  $260,405
                </div>
              </div>
            </div>
            <div className="flex gap-5 px-3 py-6 w-full text-sm leading-4 border-b border-solid border-zinc-700 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto my-auto myfont text-white">Soft Cap</div>
              <div className="flex flex-auto gap-1 font-bold text-right text-white whitespace-nowrap">
                <div className="flex-auto my-auto">
                  170 BNB
                </div>
              </div>
            </div>
            <div className="flex gap-5 px-3 py-6 w-full text-sm leading-4 border-b border-solid border-zinc-700 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto my-auto myfont text-white">Hard Cap</div>
              <div className="flex flex-auto gap-1 font-bold text-right text-white whitespace-nowrap">
                <div className="flex-auto my-auto">
                  220 BNB
                </div>
              </div>
            </div>
            <div className="flex gap-5 px-3 py-6 w-full text-sm leading-4 border-b border-solid border-zinc-700 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto my-auto myfont text-white">Unsold Token</div>
              <div className="flex flex-auto gap-1 font-bold text-right text-white whitespace-nowrap">
                <div className="flex-auto my-auto">
                  Refund
                </div>
              </div>
            </div>
            <div className="flex gap-5 px-3 py-6 w-full text-sm leading-4 border-b border-solid border-zinc-700 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto my-auto myfont text-white">Presale Start Time</div>
              <div className="flex flex-auto gap-1 font-bold text-right text-white whitespace-nowrap">
                <div className="flex-auto my-auto">
                  2024.04.09 15:00 (UTC)
                </div>
              </div>
            </div>
            <div className="flex gap-5 px-3 py-6 w-full text-sm leading-4 border-b border-solid border-zinc-700 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto my-auto myfont text-white">Presale End Time</div>
              <div className="flex flex-auto gap-1 font-bold text-right text-white whitespace-nowrap">
                <div className="flex-auto my-auto">
                  2024.04.11 15:00 (UTC)
                </div>
              </div>
            </div>
            <div className="flex gap-5 px-3 py-6 w-full text-sm leading-4 border-b border-solid border-zinc-700 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto my-auto myfont text-white">Listing On</div>
              <div className="flex flex-auto gap-1 font-bold text-right text-fuchsia-500 whitespace-nowrap">
                <div className="flex-auto my-auto">
                  Pancakeswap
                </div>
              </div>
            </div>
            <div className="flex gap-5 px-3 py-6 w-full text-sm leading-4 border-b border-solid border-zinc-700 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto my-auto myfont text-white">Liquidity Percent</div>
              <div className="flex flex-auto gap-1 font-bold text-right text-white whitespace-nowrap">
                <div className="flex-auto my-auto">
                  57%
                </div>
              </div>
            </div>
            <div className="flex gap-5 px-3 py-6 w-full text-sm leading-4 border-b border-solid border-zinc-700 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto my-auto myfont text-white">Liquidity Lockup Time</div>
              <div className="flex flex-auto gap-1 font-bold text-right text-white whitespace-nowrap">
                <div className="flex-auto my-auto">
                  360  days after pool ends
                </div>
              </div>
            </div>
              </div>

              <div className="flex flex-col mt-5 px-8 pt-8 pb-14 border-solid bg-zinc-900 border-[6px] border-zinc-700 rounded-[30px] max-md:px-5 max-md:max-w-full">
              <div className="text-xl myfont leading-4 text-white max-md:max-w-full">
                Affiliate Program
              </div>
              <img src="/vectorform.png" alt="" className='py-6'/>
              <div className="flex gap-5 mt-5 justify-center px-3 py-7 text-sm leading-4 text-white border-b border-solid border-zinc-700 max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto myfont"> Your Rewards</div>
                <div className="font-bold text-right">0 BNB</div>
              </div>
              <div className="flex gap-5 justify-center px-3 py-7 text-sm leading-4 border-b border-solid border-zinc-700 max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto myfont text-white">Pool Referrer Count</div>
                <div className="self-start font-bold text-right text-fuchsia-500">
                  0
                </div>
              </div>
              <div className="flex gap-5 justify-center px-3 py-7 text-sm leading-4 text-white border-b border-solid border-zinc-700 max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto myfont"> Realtime Reward Percentage</div>
                <div className="font-bold text-right">100%</div>
              </div>
              <div className="flex gap-5 justify-center px-3 py-7 text-sm leading-4 text-white border-b border-solid border-zinc-700 max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto myfont">Current Rewards</div>
                <div className="font-bold text-right">0 BNB</div>
              </div>
              <div className="flex gap-5 justify-between px-3 py-7 border-b border-solid border-zinc-700 max-md:flex-wrap max-md:max-w-full">
                <div className="self-start text-sm myfont leading-4 text-white">
                  Max Rewards
                </div>
                <div className="flex flex-col text-right">
                  <div className="self-end text-sm font-bold leading-4 text-white">
                    4.4 BNB
                  </div>
                  <div className="mt-4 text-xs font-medium leading-4 text-zinc-700">
                    (assume hardcap reached)
                  </div>
                </div>
              </div>
              <div className="flex gap-5 mt-7 text-sm leading-4 text-white max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto myfont">Total Ref Amount</div>
                <div className="font-bold text-right">0 BNB</div>
              </div>
            </div>
            <div className="flex flex-col px-8 pt-8 pb-14 mt-5 border-solid bg-zinc-900 border-[6px] border-zinc-700 rounded-[30px] max-md:px-5 max-md:max-w-full">
              <div className="text-xl leading-4 text-white myfont max-md:max-w-full">FAQs</div>
              <img src="/vectorform.png" alt="" className='py-6'/>
              <div className="flex flex-col pb-6 mt-4 border-b border-solid border-zinc-700 max-md:max-w-full">
                <div className="flex gap-5 justify-between mx-4 mt-5 text-base leading-4 text-white max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                  <div className="my-auto myfont">What is KYC?</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/afecec6fdac9b1b0c087fc8468c249258c35531ad2a6bb58531a45de0ab0f836?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                    className="shrink-0 w-6 aspect-square"
                  />
                </div>
                <div className="mt-5 px-4 text-sm leading-6 text-fuchsia-500 max-md:max-w-full">
                  Know Your Customer (KYC) is a process whereby the project owner has
                  shared their identification documents with PinkSale. KYC is used as a
                  deterrent method to reduce illicit and deceptive behaviour.
                  <br />
                  More information about KYC can be found on the Binance Academy website
                  via:{" "}
                  <span className="text-fuchsia-500">
                    https://academy.binance.com/en/glossary/know-your-customer
                  </span>
                  <br />
                  More information on PinkSale KYC process can be seen explained in
                  here:{" "}
                  <span className="text-fuchsia-500">
                    https://docs.pinksale.finance/important/pinksale-kyc
                  </span>
                </div>
              </div>
              <div className="flex gap-5 px-4 py-5 text-base leading-4 text-white border-b border-solid border-zinc-700 max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto my-auto myfont">What is an Audit?</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1afa8c6c729f8ac02e620e22b2c7aa4329913f31148cb4980a24b25d8f61ac99?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 w-6 aspect-square"
                />
              </div>
              <div className="flex gap-5 px-4 py-5 text-base leading-4 text-white border-b border-solid border-zinc-700 max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto my-auto myfont">What is SAFU?</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1afa8c6c729f8ac02e620e22b2c7aa4329913f31148cb4980a24b25d8f61ac99?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 w-6 aspect-square"
                />
              </div>
              <div className="flex gap-5 px-4 py-5 text-base leading-4 text-white border-b border-solid border-zinc-700 max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto my-auto myfont">What is Doxx?</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1afa8c6c729f8ac02e620e22b2c7aa4329913f31148cb4980a24b25d8f61ac99?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 w-6 aspect-square"
                />
              </div>
              <div className="flex gap-5 mx-4 mt-5 text-base leading-4 text-white max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                <div className="flex-auto my-auto myfont">What is DYOR?</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1afa8c6c729f8ac02e620e22b2c7aa4329913f31148cb4980a24b25d8f61ac99?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 w-6 aspect-square"
                />
              </div>
            </div>
      </div>




      <div>
            <div>
                    <div className="flex flex-col px-5 py-8 border-solid bg-zinc-900 border-[6px] border-zinc-700 w-[500px] max-w-[545px] rounded-[30px]">
              <div className="flex gap-3 font-bold">
                <div className="grow justify-center px-5 py-6 text-xs text-white border-2 border-amber-300 border-solid bg-amber-300 bg-opacity-10 rounded-[100px] w-fit">
                  Make sure the website is pinksale.finance!
                </div>
                <div className="justify-center px-6 py-5 my-auto text-base text-amber-300 bg-amber-300 bg-opacity-10 rounded-[169.75px]">
                  2% Affiliate
                </div>
              </div>
              <div className="flex gap-5 mt-6 w-full text-white">
                <div className="flex-auto my-auto myfont text-base leading-4">
                  Presale Starts in :
                </div>
                <div className="flex gap-2 px-px text-sm font-bold leading-4 whitespace-nowrap">
                  <div className="justify-center items-center px-3.5 py-3 rounded-xl bg-purple-500 bg-opacity-10 h-[43px] w-[43px]">
                    06
                  </div>
                  <div className="justify-center items-center px-3.5 py-3 rounded-xl bg-purple-500 bg-opacity-10 h-[43px] w-[43px]">
                    00
                  </div>
                  <div className="justify-center items-center px-3.5 py-3 rounded-xl bg-purple-500 bg-opacity-10 h-[43px] w-[43px]">
                    47
                  </div>
                  <div className="justify-center items-center px-3.5 py-3 rounded-xl bg-purple-500 bg-opacity-10 h-[43px] w-[43px]">
                    53
                  </div>
                </div>
              </div>
              <div className="shrink-0 mt-7 bg-zinc-700 h-[25px] rounded-[40px]" />
              <div className="flex gap-5 myfont justify-between mt-3 text-m leading-4 text-white">
                <div>0 BNB</div>
                <div>220 BNB</div>
              </div>
              <div className="mt-8 text-base leading-4 myfont text-white">Amount</div>
      <div className="flex gap-5  px-3 py-4 mt-3 justify-between text-base leading-4 whitespace-nowrap rounded-lg border-solid bg-zinc-900 border-[3px] border-zinc-700">
        <input
          type="text"
          value={amount}
          onChange={handleChange}
          className="text-zinc-700 text-start bg-transparent border-none outline-none w-full"
        />
        <div className="font-black text-purple-600 text-right cursor-pointer" onClick={() => setAmount('MAX')}>
          MAX
        </div>
      </div>
              <div className="flex gap-5 justify-between mt-3 w-full text-xs">
                <div className="flex gap-3">
                  <a href='' className="justify-center px-9 py-5 font-bold text-white bg-fuchsia-500 rounded-[50px]">
                    Connect Wallet
                  </a>
                  <a href='' className="my-auto font-medium text-purple-600">Auto Buy</a>
                </div>
                 <a href='' className="my-auto font-bold text-fuchsia-500 underline">
                  Affiliate detail
                </a>
              </div>
            </div>
            </div>



            <div className="flex flex-col mt-5 px-8 pt-8 pb-14 text-sm leading-4 border-solid w-[500px] bg-zinc-900 border-[6px] border-zinc-700 max-w-[500px] rounded-[30px]">
          <div className="shrink-0 h-2.5 bg-fuchsia-800 rounded-3xl" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a5d07478c550763e7e21713701fb096f61637191a7c42ec720f6af97a5f8fc6?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="self-center mt-2 w-6 aspect-square"
          />
          <div className="flex gap-5 justify-between px-3 py-7 mt-2 whitespace-nowrap border-b border-solid border-zinc-700">
            <div className="text-white myfont text-start">Status</div>
            <div className="font-extrabold text-right text-fuchsia-500">
              incoming
            </div>
          </div>
          <div className="flex gap-5 justify-between px-3 py-7 border-b border-solid border-zinc-700">
            <div className="text-white myfont text-start">Sale Type</div>
            <div className="font-extrabold text-right text-fuchsia-500">
              Whitelist Only
            </div>
          </div>
          <div className="flex gap-5 justify-between px-3 py-7 text-white border-b border-solid border-zinc-700">
            <div className='myfont'>Minimum Buy</div>
            <div className="font-extrabold  text-right">0.1 BNB</div>
          </div>
          <div className="flex gap-5 justify-between px-3 py-7 text-white border-b border-solid border-zinc-700">
            <div className='myfont'>Maximum Buy</div>
            <div className="font-extrabold  text-right">1 BNB</div>
          </div>
        </div>



            <div className="flex flex-col items-center mt-5 px-8 py-9 text-base w-[500px] font-bold text-white border-solid bg-zinc-900 border-[6px] border-zinc-700 max-w-[500px] rounded-[30px]">
          <div className="self-stretch myfont text-xl leading-4 text-white">
            Token Metrics
          </div>
          
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f3ab402094e0ed78806454b0829460e767d8dd27b9e9779063d9d3043d53c45?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="mt-7 max-w-full aspect-square w-[270px]"
          />
          <div className="flex gap-3 items-start mt-8 text-center whitespace-nowrap">
            <div className="flex flex-1 gap-1.5">
              <div className="shrink-0 self-start w-5 h-2.5 bg-orange-300 rounded-[30px]" />
              <div>Presale</div>
            </div>
            <div className="flex flex-1 gap-1.5">
              <div className="shrink-0 self-start w-5 h-2.5 bg-sky-300 rounded-[30px]" />
              <div>Liquidity</div>
            </div>
            <div className="flex flex-1 gap-1.5">
              <div className="shrink-0 self-start w-5 h-2.5 bg-rose-500 rounded-[30px]" />
              <div>Treasury</div>
            </div>
          </div>
          <div className="flex gap-3.5 justify-between mt-6 text-center whitespace-nowrap">
            <div className="shrink-0 self-start w-5 h-2.5 bg-green-400 rounded-[30px]" />
            <div>Team</div>
            <div className="flex gap-1.5">
              <div className="shrink-0 self-start w-5 h-2.5 bg-pink-400 rounded-[30px]" />
              <div>Unlocked</div>
            </div>
          </div>
        </div>





        <div className="flex flex-col px-8 py-8 mt-5 text-base text-white border-solid bg-zinc-900 border-[6px] border-zinc-700 max-w-[500px] rounded-[30px]">
      <div className="text-xl myfont leading-4">Newsletters</div>
      <img src="/vectorform.png" alt="" className='py-6'/>
      <div className=" text-zinc-700">
        Sign up our mailing list to receive our new presales, features, tips and
        reviews for next 100x projects.
      </div>
      <div className="grow justify-center items-start px-3.5 py-4 mt-2 text-base font-medium leading-4 rounded-2xl border-4 border-solid text-zinc-700 bg-zinc-900 border-zinc-700 w-fit max-md:pr-5 max-md:max-w-full">
      <input
        type="text"
        placeholder="example@gmail.com"
        className="bg-zinc-900 text-white placeholder-zinc-700 px-3 py-1 rounded-lg outline-none border-none"
      />
    </div>
      <a href='' className="justify-center self-start px-9 py-5 mt-4 text-xs font-bold whitespace-nowrap bg-fuchsia-500 rounded-[50px]">
        Subscribe
      </a>
    </div>

      </div>



      



    </div>
  )
}

export default Lplistmain
