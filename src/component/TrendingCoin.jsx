import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const TrendingCoin = () => {
    const[trendingCoins, setTrendingCoins] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrendingCoins = async () => {
          try {
            const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
            setTrendingCoins(response.data.coins);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching trending coins:', error);
            setLoading(false);
          }
        };
    
        fetchTrendingCoins();
      }, []);



  return (
    <div className="w-[427px] h-[min-content] bg-white p-[24px] rounded-[8px] gap-[24px]">
        <h3 className='w-[246px] h-[29px] font-inter font-semibold text-[24px] leading-[28.8px]'>Trending Coins (24h)</h3>
        {
            trendingCoins.slice(0,3).map((coin,index)=>(
                <div key={index} className='w-[379px] h-[60px] rounded-[8px] flex items-center justify-between gap-[20px]'>
                    <div className='flex flex-row items-center text-center w-fit h-[28px] gap-4' >
                        <img src={coin.item.small} alt="coin" className='w-[30px] h-[30px] rounded-full'/>
                        <div className='flex items-center text-center gap-1'>
                        <h3 className=' text-[16px] font-medium leading-[20px]'>{coin.item.name}</h3>
                        <p className=' text-[16px] font-normal leading-[16px] text-[#828282]'>{coin.item.symbol}</p>
                        </div>
                    </div>
                    {/* <div className='w-[40px] h-[40px] rounded-full bg-[#E5E5E5] flex items-center justify-center'>
                        <img src={coin.item.trending_up ? '/trending-up.svg' : '/trending-down.svg'} alt="trending" className='w-[24px] h-[24px]'/>
                    </div> */}
                </div>
            ))
        }
    </div>
  );
};

export default TrendingCoin;