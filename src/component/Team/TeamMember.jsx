import React from 'react'
import { Text } from '../Text'
import { Heading } from '../Heading'

const TeamMember = ({image,name,designation,content}) => {
  return (
    <div className="flex flex-row justify-start items-center w-full gap-4 p-[9px] border-light_blue-A700 border border-solid bg-blue-50 rounded-[7px]">
        <div className="flex flex-col items-center justify-start w-[16%] gap-3">
          <div className="flex flex-col items-center justify-start w-[75%]">
            <div className="flex flex-col items-center justify-start w-full bg-blue_gray-800 rounded-md">
              {image}
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[77%] gap-[5px]">
            <Heading size="xs" as="p" className="text-center">
              {name}
            </Heading>
            <Text size="s" as="p" className="!text-blue_gray-400_03 text-center !font-medium">
              {designation}
            </Text>
          </div>
        </div>
        <Text as="p" className="w-[81%] !text-gray-900 !font-normal leading-[160%]">
          {content}
        </Text>
    </div>
  )
}

export default TeamMember
