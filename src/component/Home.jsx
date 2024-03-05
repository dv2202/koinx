import React from 'react';
import Perform from '../component/Performance/Perform'
import Team from '../component/Team';
import { FaArrowRight } from "react-icons/fa6";
import image2 from '../assets/asset2.png';
import TrendingCoin from './TrendingCoin';
import ChartCompo from './ChartCompo';
import Sentiment from './Sentiment';
import AboutBitcoin from './AboutBitcoin'
import Tokenomics from './Tokenomics';

const Home = () => {
    
  return (
    <div className='bg-[#e2e2e2] w-[100vw]  absolute overflow-x-hidden'>
        <div className='max-w-[1328px] flex  md:flex-row mx-auto  gap-4 mt-[60px]'>
            {/* Left Side */}
            <div className='flex flex-col gap-5 '>
                <ChartCompo/>
                <Perform/>
                <Sentiment/>
                <AboutBitcoin/>
                <Tokenomics/>
                <Team/>
            </div>
            
            {/* Right Side  */}

            <div className=' flex flex-col rounded-[16px] gap-[20px] md:ml-0 ml-1 sticky top-0'>
                <div className='w-[379px] h-[384px] md:w-[426px] md:h-[515px] p-[31px 16px 31px 16px] bg-[#0052FE] rounded-[8px] gap-[19px] flex flex-col items-center justify-center'>
                    <div className='w-[327px] h-[182px] gap-[14px] flex flex-col items-center justify-center'>
                        <h2 className='w-[359px] h-[40px] md:w-[268px] md:h-[80px] text-white leading-10 text-center font-medium text-[24px]'>Get Started with KoinX for FREE</h2>
                        <p className='w-[359px] md:w-[327px] md:h-[68px] text-white font-inter text-[14px] font-medium leading-6 text-center'>With our range of features that you can equip for free,
                        KoinX allows you to be more educated and aware of your tax reports.
                        </p>
                    </div>
                    <img src={image2} alt="image2" className='w-[178.66px] h-[186.22px]'/>
                    <div className=' mb-3 md:mb-0 w-[241px] h-[48px] md:w-[327px] md:h-[50px] text-[16px] bg-white text-black font-medium rounded-[8px] flex items-center justify-center gap-2'>
                        <div>Get Started for FREE</div>
                        <FaArrowRight/>
                    </div>
                </div>
                    <TrendingCoin/>
                </div>
        </div>
    </div>
  );
};

export default Home;