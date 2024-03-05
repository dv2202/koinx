import React from 'react';
import { IoInformationCircle } from "react-icons/io5";
import CardSlider from './CardSlider';
import AnalystEstimates from './AnalystEstimates';
const Sentiment = () => {
  return (
    <div className='w-[881px] h-[556px]  p-[24px] bg-white rounded-lg'>
        <div className='w-[831px] h-full flex flex-col gap-6'>
            <h2 className='w-[120px] h-[29px] text-[24px] font-semibold leading-7 font-inter text-black'>Sentiment</h2>
            <div className='flex gap-3 items-center '>
                <h3 className='text-[18.91px] rounded-md text-[#44475B]'>Key Insight</h3>
                <IoInformationCircle className='text-[16.67px]'/>
            </div>
            <CardSlider/>
            <AnalystEstimates/>
        </div>
    </div>
  );
};

export default Sentiment;