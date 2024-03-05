import React from 'react';
import { FaNewspaper } from "react-icons/fa6";
import { IoMdTrendingUp } from "react-icons/io";
const CardSlider = () => {

  return (

    <div className=' h-[142px] md:w-full md:h-[204px] flex flex-row gap-5 sm:overflow-hidden overflow-hidden '>
        {/* card1 */}
        <div className='w-full md:w-[456px] md:h-[204px]'>
            <div className='md:w-[420px] md:h-[189px] pt-3 pr-3 pb-[26px] pl-3 md:pt-[18px] md:pr-[18px] md:pb-[38px] md:pl-[18px] flex flex-row bg-[#E8F4FD] gap-4 rounded-xl'>
            <div className='w-[30px] h-[103px] md:w-[44px] md:h-[147.5px]'>
                <div className='w-[30px] h-[30px] md:w-[44px] md:h-[44px] rounded-full bg-[#0082FF] flex items-center justify-center'>
                <FaNewspaper className='text-white text-[19px] md:text-[28px]' />
                </div>
            </div>
            <div className='w-[257px] h-[103px] flex flex-col gap-2'>
                <div className='font-medium md:w-fit md:h-[40px] text-[10px] md:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                <div className='font-normal md:w-fit md:h-[100px] text-[10px] md:text-[14px] text-[#3E5765]'>Lorem ipsum dolor nventore, doloremque optio. Molestiae tempora velit, laborum veniam impedit adipisci vero aspernatur a, enim iusto, modi illo et quod facere unde error!</div>
            </div>
            </div>
        </div>
    
        {/* car2 */}
        <div className='w-full md:w-[456px] md:h-[204px]'>
            <div className=' md:w-[420px] md:h-[189px] rounded-xl pt-[18px] pr-[18px] pb-[38px] pl-[18px] flex flex-row bg-[#EBF9F4] gap-4 '>
                <div className='w-[30px] h-[103px] md:w-[44px] md:h-[147.5px]'>
                    <div  className='w-[30px] h-[30px] md:w-[44px] md:h-[44px] rounded-full bg-[#0FBA83] flex items-center justify-center'>
                        <IoMdTrendingUp className='text-white text-[19px] md:text-[28px]'/>
                    </div>
                </div>
                <div className='w-[257px] h-[103px] flex flex-col gap-2'>
                    <div className='font-medium md:w-fit md:h-[40px] text-[10px] md:text-[14px] '> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                    <div className='font-normal md:w-fit md:h-[100px] text-[10px] md:text-[14px] text-[#3E5765]'>Lorem ipsum dolor nventore, doloremque optio. Molestiae tempora velit, laborum veniam impedit adipisci vero aspernatur a, enim iusto, modi illo et quod facere unde error!</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CardSlider;