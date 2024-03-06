import React from 'react'
import { Img } from '../Img'
import { Text } from '../Text'

const Cart = ({name,percentChange,price,image}) => {
  const directionClass = percentChange.includes('+') ? 'text-green-500' : 'text-red-300';
  return (
    <div className="flex flex-col items-start justify-center md:w-[20%] p-[17px] border-gray-300_04 border border-solid rounded-[10px]">
        <div className="flex flex-col items-start justify-start w-[54%] gap-[11px]">
          <div className="flex flex-row justify-start w-full">
            <div className="flex flex-row justify-start items-center w-full">
              <div className="flex flex-row justify-start items-center w-[57%]">
                <Img
                  src="images/img_img_margin.png"
                  alt="you_may_also"
                  className="w-[50%] object-cover"
                />
                <div className="flex flex-row justify-start md:w-[50%]">
                  <Text size="2xl" as="p" className="!text-gray-900_01 !font-normal">
                    {name}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-start md:w-[44%]">
                <Text
                  size="s"
                  as="p"
                  className={`md:flex hidden justify-center items-center md:w-[50px] h-[20px] p-[3px] ${directionClass} bg-teal-500_0f rounded-sm`}
                >
                  {percentChange}
                </Text>
              </div>
            </div>
          </div>
          <a href="#">
            <Text size="3xl" as="p" className="!text-gray-900_05">
              {price}
            </Text>
          </a>
        </div>
        {image}
    </div>
  )
}

export default Cart
