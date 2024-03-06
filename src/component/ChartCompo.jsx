import React from 'react';
import TradingViewWidget from './TradingViewWidget';
import axios from 'axios';
import { useEffect, useState } from 'react';
import bitcoin from '../assets/bitcoin.png';
import etherium from '../assets/etherium .webp'
import { RiArrowUpSFill } from "react-icons/ri";
import { useLocation } from 'react-router-dom';
const ChartCompo = () => {
    const [coinData, setCoinData] = useState(null);
    const [previousUsd24hVol, setPreviousUsd24hVol] = useState(null);
    const location = useLocation();
    const path = location.pathname.split('/');
    let defaultSymbol = path[1] === '' ? 'bitcoin' : path[1];
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
            params: {
              ids: defaultSymbol,
              vs_currencies: 'usd,inr',
              include_24hr_vol: true,
            },
          });
          const fetchedData = response.data;
          
          if (fetchedData[defaultSymbol] && fetchedData[defaultSymbol].usd_24h_vol !== null) {
            const rawValue = fetchedData[defaultSymbol].usd_24h_vol;
            const percentageChange = ((rawValue / 1000000000).toFixed(2)) + '%';
            console.log('Percentage Change:', percentageChange);
          }
    
          setCoinData(fetchedData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData();
    }, [defaultSymbol]);
    
    useEffect(() => {
      console.log('Coin Data:', coinData);
      
      if (coinData && coinData[defaultSymbol]) {
        console.log(`${defaultSymbol.toUpperCase()} USD: $${coinData[defaultSymbol].usd}`);
      }
    }, [coinData, defaultSymbol]);

  return (
    <div className='md:h-[711px] md:w-[881px] rounded-lg bg-white p-0 pb-20 flex flex-col gap-[20px] '>
        <div className='md:h-[40px] md:w-[full] flex flex-row items-center mt-[24px] ml-[24px] gap-[40px]'>
            <div className='md:w-[166.22px] md:h-[36px] flex flex-row items-center justify-center'>
                    <div className='w-[36px] h-[36px]'>
                        {
                          defaultSymbol === 'bitcoin' ? (
                            <img src={bitcoin} alt="bitcoin" />
                          ) : (
                            <img src={etherium} alt="etherium"/>
                          )
                        }
                    </div>
                    <div className='md:w-[130.22px] h-[28px] flex flex-row items-center justify-center text-center gap-5 '>
                      <h1 className='text-[24px] w-[81px] h-[28.8px] text-center font-medium text-[#000000] leading-[28.8px]'>
                          {defaultSymbol === 'bitcoin' ? 'Bitcoin' : 'Etherium'}
                      </h1>
                      <div className='text-[#5D667B] text-[16px]  font-medium leading-[20px]'>
                        {
                          defaultSymbol === 'bitcoin' ? 'BTC' : 'ETH' 
                        }
                      </div>
                    </div>
              </div>
            <div className='w-[80px] h-[40px] bg-[#808A9D] rounded-lg border-[#808A9D] flex items-center justify-center'>
                <p className='w-[60px] h-[20px] text-[16px] font-medium text-white'>Rank #1</p>
            </div>
        </div>



    <div className='w-[382px] h-[391px] md:w-[837px] md:h-[574px] gap-[24px] ml-[24px]'>
        <div className='w-[568.72px] h-[66px] gap-[32px] flex flex-row'>
        <div className='w-[161px] h-[66px] flex flex-col'>
          <p className='text-[28px] font-semibold'>
            {`$${coinData && coinData[defaultSymbol] && coinData[defaultSymbol].usd}`}
          </p>
          <p className='w-[94px] h-[27px] text-[16px] font-inter font-medium'>
            {`₹${coinData && coinData[defaultSymbol] && coinData[defaultSymbol].inr}`}
          </p>
        </div>
            <div className='w-[375.72px] h-[38.39px] gap-[8px] flex flex-row'>
            <div className={`w-[84px] h-[28px] flex rounded gap-[3px] mt-2 text-center items-center justify-center ${coinData && coinData[defaultSymbol] && coinData[defaultSymbol].usd_24h_vol >= 0 ? 'bg-green-100' : 'bg-red-500'}`}>
              <RiArrowUpSFill className={`${coinData && coinData[defaultSymbol] && coinData[defaultSymbol].usd_24h_vol >= 0 ? 'text-green-500' : 'text-red-500'} text-[16px]'`} />
              <p className={`${coinData && coinData[defaultSymbol] && coinData[defaultSymbol].usd_24h_vol >= 0 ? 'text-green-500' : 'text-red-500'} font-medium`}>
                {`${(coinData && coinData[defaultSymbol] && (coinData[defaultSymbol].usd_24h_vol / 10000000000).toFixed(2))}%`}
              </p>
            </div>  
            <div className='w-[39px] h-[27px] text-[14px] mt-2 leading-7'>
                (24H)
            </div>                                         
            </div>
        </div>
        <div className='w-[342px] md:w-[827px] h-[1px] bg-[#DEE1E6] mb-[32px] mt-[32px]'></div>
        <div className='w-[344px] h-[216px] md:w-[837px] md:h-[460px]'>
            <TradingViewWidget/>
        </div>
    </div>

</div>
  );
};

export default ChartCompo;