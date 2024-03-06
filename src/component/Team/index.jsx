import React from 'react'
import { Text } from '../Text'
import { Heading } from '../Heading'
import { Img } from '../Img'
import TeamMember from './TeamMember'
import Footer from '../Footer'

const Team = () => {
  return (
    <div className="w-[384px] h-fit md:w-[881px] md:h-[776px] rounded-lg space-y-5 md:px-5 bg-white p-2 md:p-4">
        <div className="flex flex-row justify-start w-full">
          <Heading as="h4">Team</Heading>
        </div>
        <div className="flex flex-col items-center w-full h-full gap-6">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-center w-full">
              <Text size="2xl" as="p" className="!text-gray-800 !leading-[160%]">
                Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi
                integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
              </Text>
            </div>
          </div>
          <div className="flex flex-col w-[99%] gap-[23px]">
            <TeamMember name={'John Smith'} designation={'Designation here'} image={<Img
                src="images/img_image_209.png"
                alt="john_smith_one"
                className="w-full object-cover rounded-md"
              />} content={'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiammi gravida praesent interdu'}/>
            <TeamMember name={'Elina Williams'} designation={'Designation here'} image={<Img
                src="images/img_image_209_104x96.png"
                alt="image209_one"
                className="w-full object-cover rounded-md"
              />} content={'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiammi gravida praesent interdu'}/>
            <TeamMember name={'John Smith'} designation={'Designation here'} image={<Img
                src="images/img_image_209_1.png"
                alt="image209_one"
                className="w-full object-cover rounded-md"
              />} content={'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiammi gravida praesent interdu'}/>
          </div>
          <Footer/>
        </div>
    </div>
  )
}

export default Team
