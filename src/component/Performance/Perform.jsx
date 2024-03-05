import React from 'react';
import { Text } from '../Text';
import { Heading } from '../Heading';
import { Img } from '../Img';
import Indexing from './indexing';

const Perform = () => {
  return (
    <div className="w-[384px] h-fit md:w-[881px] md:h-[662px] bg-white p-[24px] border rounded-lg">
      <div className="" />
        <div className="">
          <Heading as="h4">Performance</Heading>
        </div>
        <div className="flex flex-col md:items-center w-full">
        <div className='flex flex-row items-center justify-center'>
          <div className="flex flex-col items-center justify-start w-[14%] pb-[13px] gap-2.5">
            <div className="flex flex-row justify-start w-full">
              <Text
                size="md"
                as="p"
                className="mt-2 !text-blue_gray-800_02 !text-[13.78px] !font-normal"
              >
                Today’s Low
              </Text>
            </div>
            <div className="flex flex-row justify-start w-full pt-[3px]">
              <Text size="xl" as="p" className="!text-blue_gray-800_02 !text-[15.63px]">
                46,930.22
              </Text>
            </div>
          </div>
          <div className="flex flex-row justify-center w-[73%]">
            <div className="flex flex-col items-end justify-start w-full">
              <Img
                src="images/img_div_pbar29range.png"
                alt="divpbar29range"
                className="w-full object-cover"
              />
              <div className="flex flex-col items-center justify-start w-[13%] md:mt-[-19px] mr-[102px] gap-[9px]">
                <Img src="images/img_div_absolute.svg" alt="divabsolute_one" className="h-[8px]" />
                <Text as="p" className="!text-blue_gray-800_02 !font-sfprotext !font-normal">
                  $48,637.83
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[14%] pb-[13px] gap-2.5">
            <div className="flex flex-row justify-end w-full">
              <Text
                size="md"
                as="p"
                className="mt-2 !text-blue_gray-800_02 text-right !text-[13.56px] !font-normal"
              >
                Today’s High
              </Text>
            </div>
            <div className="flex flex-row justify-end w-full pt-[3px]">
              <Text size="xl" as="p" className="!text-blue_gray-800_02 text-right !text-[15.63px]">
                49,343.83
              </Text>
            </div>
        </div>
        </div>
        <div className="flex flex-row justify-center items-center w-full">
          <div className="flex flex-col items-center justify-start w-[15%] pb-[13px] gap-2.5">
            <div className="flex flex-row justify-start w-full">
              <Text as="p" className="mt-[5px] !text-blue_gray-800_02 !font-normal">
                52W Low
              </Text>
            </div>
            <div className="flex flex-row justify-start w-full pt-[3px]">
              <Text size="xl" as="p" className="!text-blue_gray-800_02 !text-[15.63px]">
                16,930.22
              </Text>
            </div>
          </div>
          <Img
            src="images/img_div_pbar29range.png"
            alt="divpbar29range"
            className="w-[72%] object-cover"
          />
          <div className="flex flex-col items-center justify-start w-[14%] pb-[13px] gap-2.5">
            <div className="flex flex-row justify-end w-full">
              <Text
                size="md"
                as="p"
                className="mt-2 !text-blue_gray-800_02 text-right !text-[13.78px] !font-normal"
              >
                52W High
              </Text>
            </div>
            <div className="flex flex-row justify-end w-full pt-[3px]">
              <Text size="xl" as="p" className="!text-blue_gray-800_02 text-right !text-[15.63px]">
                49,743.83
              </Text>
            </div>
          </div>
        </div>

        
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
  )
}

export default Perform;