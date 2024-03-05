import React from 'react';

import DonutChart from './DonutChart';
const Tokenomics = () => {
  return (
    <div className='hidden w-[881px] h-[539px] bg-white rounded-lg p-[24px] gap-[24px] md:flex flex-col'>
        <h1 className='text-[24px] font-semibold text-black'>Tokenomics</h1>
        <div className='w-[833px] h-[308px] flex flex-col gap-9'>
            <h2 className='text-[20px] font-medium text-black'>Initial Distribution</h2>
            <div className='w-[810px] h-[180px] gap-[30px] flex flex-row item-center'>
                <div className='w-[179px] h-[179px]'>
                    <DonutChart/>
                </div>
                <div className='w-[216px] h-[111px] gap-[24px] flex flex-col item-center justify-center md:mt-7'>
                    <div className='w-full h-[20px] flex flex-row gap-3 items-center'>
                        <div className='h-[12px] w-[12px] rounded-full bg-[#0082FF]'></div>
                        <p className='text-[16px] font-inter font-normal leading-5 '>Crowdsale investors: 80%</p>
                    </div>
                    <div className='w-full h-[20px] flex flex-row gap-3 items-center'>
                        <div className='h-[12px] w-[12px] rounded-full bg-[#FAA002]'></div>
                        <p className='text-[16px] font-inter font-normal leading-5 '>Foundation: 20%</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[833px] h-[156px] text-[16px] font-medium leading-6 text-[
            #3E424A]'>
                Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
            </div>
    </div>
  );
};

export default Tokenomics;