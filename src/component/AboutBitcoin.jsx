import React from 'react';
import card1 from '../assets/card1.jpeg';
import card2 from '../assets/card2.jpeg';
import { FaArrowRight } from "react-icons/fa6";

const AboutBitcoin = () => {
  return (
    <div className="w-[384px] h-[1456px] md:w-[881px] md:h-[995px] bg-white rounded-lg flex flex-col gap-4 p-6 md:p-6">
      <h1 className="text-2xl font-medium text-black">About Bitcoin</h1>

      <div className="md:flex md:flex-col md:gap-2">
        <h3 className="md:text-xl font-medium font-inter leading-5">What is Bitcoin?</h3>
        <p className="text-base md:w-[830px] font-normal text-[#3E424A]">
          Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </div>

      <div className="w-[830px] h-[1px] bg-[#C9CFDD]"></div>

      <div className="md:flex md:flex-col md:gap-3">
        <h4 className="md:text-xl font-inter font-medium leading-5">Lorem ipsum dolor sit amet</h4>
        <div className="text-[#3E424A] flex flex-col gap-2">
          <div className="font-normal">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
          </div>
          <div>
            Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
          </div>
          <div>
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
          </div>
        </div>
      </div>

      <div className="w-[830px] h-[1px] bg-[#C9CFDD]"></div>

      <div className="text-xl font-inter font-medium text-black">Already Holding Bitcoin?</div>

      <div className="flex flex-col gap-3 md:gap-4 md:flex-row">
        <div className="w-full md:w-[388px] h-[151px] rounded-md gradient flex flex-row p-4 gap-6">
          <div className="w-[128px] h-[128px]">
            <img src={card1} alt="card1" className="w-[122px] h-[120px] rounded-md" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-white text-lg font-semibold">
              Calculate your Profits
            </div>
            <div className="h-[32px] flex items-center gap-4 rounded-lg bg-white justify-center flex-row cursor-pointer">
              <p>Check Now</p>
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div className="w-full md:w-[388px] h-[151px] rounded-md gradient2 flex flex-row p-4 gap-6">
          <div className="w-[128px] h-[128px]">
            <img src={card2} alt="card2" className="w-[122px] h-[120px] rounded-md" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-white text-lg font-semibold">
              Calculate your tax liability
            </div>
            <div className="h-[32px] flex items-center gap-4 rounded-lg bg-white justify-center flex-row cursor-pointer">
              <p>Check Now</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[830px] h-[1px] bg-[#C9CFDD]"></div>

      <div className="hidden md:flex w-full md:w-[830px] h-[130px] text-[#3E424A] text-base font-medium">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
      </div>
    </div>
  );
};

export default AboutBitcoin;
