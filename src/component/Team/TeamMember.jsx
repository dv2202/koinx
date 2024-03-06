import React from 'react'
import { Text } from '../Text'
import { Heading } from '../Heading'

const TeamMember = ({image,name,designation,content}) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start items-center justify-center w-[362px] h-[391px] md:w-full gap-4 md:p-[9px] border-light_blue-A700 border border-solid bg-blue-50 rounded-[7px]">
        <div className="flex flex-col items-center justify-start w-[16%] gap-3">
          <div className="flex flex-col items-center justify-start w-[75%]">
            <div className="flex flex-col items-center justify-start w-[96.35px] h-[104.81px] md:w-full bg-blue_gray-800 rounded-md ">
              {image}
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:w-[77%] gap-[5px] w-[100px] h-[37.12px]">
            <Heading size="xs" as="p" className="text-center">
              {name}
            </Heading>
            <Text size="s" as="p" className="!text-blue_gray-400_03 text-center !font-medium">
              {designation}
            </Text>
          </div>
        </div>
        <Text as="p" className="w-[340px] h-[198px] md:w-[81%] !text-gray-900 !font-normal leading-[160%]">
          {content}
        </Text>
    </div>
  )
}

export default TeamMember
