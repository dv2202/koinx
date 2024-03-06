import React from 'react';
import { IoInformationCircle } from "react-icons/io5";
import { Text } from '../component/Text';
import { Heading } from '../component/Heading';
import { Img } from '../component/Img';
import Indexing from '../component/Performance/indexing';
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
        <div className='md:hidden flex flex-col  '>
        <div className="flex  mt-[22px]">
            <div className="flex flex-row ">
              <Heading size="md" as="h6" className="!text-blue_gray-800_02 !text-[18.91px]">
                Fundamentals
              </Heading>
            </div>
            <Img src="images/img_svg_margin.svg" alt="svgmargin_one" className="h-[20px]" />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center md:w-[99%] mt-3.5">
            <div className="flex flex-col items-center justify-start w-full md:w-[42%]">
              <Indexing title={'Bitcoin Price'} content={'$16,815.46'}/>
              <div className="flex flex-col items-center justify-start w-full">
                <Indexing title={'24h Low / 24h High'} content={'$16,382.07 / $16,874.12'}/>
                <Indexing title={'7d Low / 7d High'} content={'$16,382.07 / $16,874.12'}/>
                <Indexing title={'Trading Volume'} content={'$23,249,202,782'}/>
                <Indexing title={'Market Cap Rank'} content={'#1'}/>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full md:w-[42%]">
              <div className="flex flex-col items-center justify-start w-full">
                <Indexing title={'Market Cap'} content={'$323,507,290,047'}/>
                <Indexing title={'Market Cap Dominance'} content={'38.343%'}/>
                <Indexing title={'Volume / Market Cap'} content={'0.0718'}/>
                <Indexing title={'All-Time High'} content={<div className="flex flex-col items-end justify-start gap-[3px]">
                  <Text as="p" className="!text-gray-900_03 !font-roboto text-right">
                    <span className="text-gray-900_03 font-inter">$69,044.77 </span>
                    <span className="text-red-500 font-inter">-75.6%</span>
                  </Text>
                  <Text size="xs" as="p" className="!text-gray-900_03 text-right !text-[11.2px]">
                    Nov 10, 2021 (about 1 year)
                  </Text>
                </div>}/>
                <Indexing title={'All-Time Low'} content={<div className="flex flex-col items-end justify-start gap-[7px]">
                  <Text as="p" className="!text-gray-900_03 !font-roboto text-right">
                    <span className="text-gray-900_03 font-inter">$67.81 </span>
                    <span className="text-teal-A700 font-inter">24729.1%</span>
                  </Text>
                  <Text size="xs" as="p" className="!text-gray-900_03 text-right !text-[11.2px]">
                    Jul 06, 2013 (over 9 years)
                  </Text>
                </div>}/>
              </div>
            </div>
          </div>
          </div>     
    </div>
  );
};

export default AnalystEstimates;