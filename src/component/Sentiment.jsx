import React from 'react';
import { IoInformationCircle } from 'react-icons/io5';
import CardSlider from './CardSlider';
import AnalystEstimates from './AnalystEstimates';

const Sentiment = () => {
  return (
    <div className="w-[384px] h-[1100px] md:w-[881px] md:h-[556px] p-[24px] bg-white rounded-lg">
      <div className="w-full md:w-[831px] h-full flex flex-col gap-[16px] md:gap-6">
        <h2 className="text-xl md:text-2xl font-semibold leading-7 font-inter text-black">
          Sentiment
        </h2>
        <div className="flex gap-3 items-center">
          <h3 className="text-base rounded-md text-[#44475B]">Key Insight</h3>
          <IoInformationCircle className="text-[20px] text-[#555762]" />
        </div>
        <CardSlider />
        <AnalystEstimates />
      </div>
    </div>
  );
};

export default Sentiment;
