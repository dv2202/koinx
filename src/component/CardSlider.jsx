import React from 'react';
import { FaNewspaper } from "react-icons/fa6";
import { IoMdTrendingUp } from "react-icons/io";
const CardSlider = () => {

  return (

    <div className='w-full h-[204px] flex flex-row gap-5'>
        {/* card1 */}
        <div className='w-[456px] h-[204px] '>
            <div className='w-[420px] h-[148px]rounded-xl pt-[18px] pr-[18px] pb-[38px] pl-[18px] flex flex-row bg-[#E8F4FD] gap-4 rounded-xl '>
                <div className='w-[44px] h-[147.5px]'>
                    <div  className='w-[44px] h-[44px] rounded-full bg-[#0082FF] flex items-center justify-center'>
                        <FaNewspaper className='text-white text-[28px] '/>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='font-medium w-fit h-[40px] text-[14px] '> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                    <div className='font-normal   w-fit h-[100px] text-[14px] text-[#3E5765]'>Lorem ipsum dolor nventore, doloremque optio. Molestiae tempora velit, laborum veniam impedit adipisci vero aspernatur a, enim iusto, modi illo et quod facere unde error!</div>
                </div>
            </div>
        </div>
    
        {/* car2 */}
        <div className='w-[456px] h-[204px] '>
            <div className='w-[420px] h-[148px]rounded-xl pt-[18px] pr-[18px] pb-[38px] pl-[18px] flex flex-row bg-[#EBF9F4] gap-4 rounded-xl '>
                <div className='w-[44px] h-[147.5px]'>
                    <div  className='w-[44px] h-[44px] rounded-full bg-[#0FBA83] flex items-center justify-center'>
                        <IoMdTrendingUp className='text-white text-[28px] '/>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='font-medium w-fit h-[40px] text-[14px] '> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                    <div className='font-normal   w-fit h-[100px] text-[14px] text-[#3E5765]'>Lorem ipsum dolor nventore, doloremque optio. Molestiae tempora velit, laborum veniam impedit adipisci vero aspernatur a, enim iusto, modi illo et quod facere unde error!</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CardSlider;