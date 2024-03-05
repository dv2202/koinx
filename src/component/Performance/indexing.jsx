import React from 'react'
import { Text } from '../Text'

const Indexing = ({title,content}) => {
  return (
    <div className="flex flex-row justify-between items-center w-full pr-1 py-1 border-blue_gray-100 border-b border-solid">
        <div className="flex flex-row justify-start py-3">
          <Text as="p" className="mt-0.5 text-[#768396]">
            {title}
          </Text>
        </div>
        <div className="flex flex-row justify-center mr-[7px]">
          <Text as="p" className="!text-gray-900_03 text-right">
            {content}
          </Text>
        </div>
    </div>
  )
}

export default Indexing