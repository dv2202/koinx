import React from 'react';
import { IoInformationCircle } from "react-icons/io5";
const AnalystEstimates = () => {
  return (
    <div className='w-[364px] h-[186px] md:w-[710px] md:h-[186px]'>
        <div className='w-[710px] h-[20px] pr-[526.96px] flex items-center '>
            <h2 className='text-[18.91px] font-semibold leading-5 text-[#44475B]'>Analyst Estimates</h2>
            <IoInformationCircle className='text-[20px] text-[#555762]'/>
        </div>
        <div className='md:w-[710px] md:h-[120px] mt-[38px] flex flex-row  md:gap-[40px]'>
            <div className='w-[116px] h-[116px] md:w-[120px] md:h-[120px]  rounded-full text-center flex items-center justify-center bg-[#EBF9F4] text-green-600 text-[36.41px]'><p>76%</p></div>
            <div className='w-[244px] h-[114px] md:w-[553.14px] md:h-[114px]'>
                <div className='w-[244px] md:w-[553px] h-[38px] md:pt-[8px] md:pr-[101.16px] md:pb-[8px] md:pl-[8px] flex items-center p-[6px]'>
                    <div className='w-[49.71px] h-[22px] text-[15px] font-normal text-[#44475B]'>Buy</div>
                    <div className='md:w-[349.14px] w-[139px] h-[8px] rounded-sm bg-[#00B386]'></div>
                    <div className='w-[41.13px] h-[22px] pl-[10px] text-[15px] font-normal text-[#44475B]'>76%</div>
                </div>
                <div className='w-full md:w-[553px] h-[38px] pt-[8px] pr-[101.16px] pb-[8px] pl-[8px] flex items-center '>
                    <div className='w-[49.71px] h-[22px] text-[15px] font-normal text-[#44475B]'>Hold</div>
                    <div className='w-[33px] h-[8px] rounded-sm bg-[#C7C8CE]'></div>
                    <div className='w-[41.13px] h-[22px] pl-[10px] text-[15px] font-normal text-[#44475B]'>8%</div>
                </div>
                <div className='w-full md:w-[553px] h-[38px] pt-[8px] pr-[101.16px] pb-[8px] pl-[8px] flex items-center '>
                    <div className='w-[49.71px] h-[22px] text-[15px] font-normal text-[#44475B]'>Sell</div>
                    <div className='w-[41px] md:w-[66.5px] h-[8px] rounded-sm bg-[#F7324C]'></div>
                    <div className='w-[41.13px] h-[22px] pl-[10px] text-[15px] font-normal text-[#44475B]'>16%</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AnalystEstimates;