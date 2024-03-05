import React from 'react';
import TradingViewWidget from './TradingViewWidget';
import axios from 'axios';
import { useEffect, useState } from 'react';
import bitcoin from '../assets/bitcoin.png';
import { RiArrowUpSFill } from "react-icons/ri";
const ChartCompo = () => {

    const [coinData, setCoinData] = useState(null);
    const [previousUsd24hVol, setPreviousUsd24hVol] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
            params: {
              ids: 'bitcoin',
              vs_currencies: 'usd,inr',
              include_24hr_vol: true,
            },
          });
          const fetchedData = response.data;
          if (fetchedData.bitcoin.usd_24h_vol !== null) {
            const rawValue = fetchedData.bitcoin.usd_24h_vol;
            const percentageChange = ((rawValue / 1000000000).toFixed(2)) + '%'; // Assuming 1 billion as the reference number
            console.log('Percentage Change:', percentageChange);
          }
  
  
          setCoinData(fetchedData);  
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);

    useEffect(() => {
        console.log('Coin Data:', coinData);
    }, [coinData]);

  return (
    <div className='md:h-[711px] md:w-[881px] rounded-lg bg-white p-0 pb-20 flex flex-col gap-[20px] '>
        <div className='md:h-[40px] md:w-[full] flex flex-row items-center mt-[24px] ml-[24px] gap-[40px]'>
            <div className='md:w-[166.22px] md:h-[36px] flex flex-row items-center justify-center'>
                    <div className='w-[36px] h-[36px]'>
                        <img src={bitcoin} alt="bitcoin" />
                    </div>
                    <div className='md:w-[130.22px] h-[28px] flex flex-row items-center justify-center text-center'>
                    <h1 className='text-[24px] w-[81px] h-[28.8px] text-center font-medium text-[#000000] leading-[28.8px]'>
                        {coinData ? 'Bitcoin' : 'Loading...'}
                    </h1>
                    <div className='text-[#5D667B] text-[16px] font-medium leading-[20px]'>BTC</div>
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
                {`$${coinData && coinData.bitcoin && coinData.bitcoin.usd}`}
            </p>
            <p className='w-[94px] h-[27px] text-[16px]   font-inter font-medium'>
                {`₹${coinData && coinData.bitcoin && coinData.bitcoin.inr}`}
            </p>
            </div>
            <div className='w-[375.72px] h-[38.39px] gap-[8px] flex flex-row'>
            <div className={`w-[84px] h-[28px] flex rounded gap-[3px] mt-2 text-center items-center justify-center ${coinData && coinData.bitcoin && coinData.bitcoin.usd_24h_vol >= 0 ? 'bg-[#EBF9F4]' : 'bg-red-500'}`}>
                <RiArrowUpSFill className='text-green-500 text-[16px]'/>    
                <p className='text-green-500 font-medium'>
                {`${(coinData && coinData.bitcoin && (coinData.bitcoin.usd_24h_vol / 10000000000).toFixed(2))}%`}
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