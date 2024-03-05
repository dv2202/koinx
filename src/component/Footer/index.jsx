import React from 'react'
import { Heading } from '../Heading'
import { Img } from '../Img'
import Cart from './Cart'

const Footer = () => {
  return (
    <div className="flex flex-row justify-center w-full bg-white">
        <div className="flex flex-col w-full gap-px p-[51px] bg-white-A700">
          <div className="flex flex-col items-center justify-start w-full mt-4 pb-[30px] gap-5 mx-auto max-w-[1330px]">
            <div className="flex flex-row justify-start w-[98%]">
              <Heading as="h2" className="mt-1 !text-gray-900_01">
                You May Also Like
              </Heading>
            </div>
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row justify-center items-center w-full">
                <Img src="images/img_button_next_slide.svg" alt="bnb_one" className="h-[44px] z-[1]" />
                <div className="flex flex-row w-[99%] ml-[-8px] gap-2.5">
                    <Cart name={'BNB'} percentChange={'+0.52%'} price={'$319.34'} image={<Img src="images/img_202401031434_svg.svg" alt="bnb_two" className="h-[60px] mb-1" />}/>
                    <Cart name={'SOL'} percentChange={'-2.89%'} price={'$109.33'} image={<Img src="images/img_202401031434_svg.svg" alt="image" className="h-[60px] mb-1" />} direction={'!text-red-300'}/>
                    <Cart name={'XRP'} percentChange={'+0.78%'} price={'$0.634810'} image={<Img src="images/img_202401031434_svg.svg" alt="image" className="h-[60px] mb-1" />}/>
                    <Cart name={'ADA'} percentChange={'+0.78%'} price={'$0.634810'} image={<Img src="images/img_202401031434_svg.svg" alt="image" className="h-[60px] mb-1" />}/>
                    <Cart name={'AVAX'} percentChange={'-3.78%'} price={'$41.05'} image={<Img src="images/img_202401031437_svg.svg" alt="image" className="h-[60px] mb-1" />}/>
                  <Img
                    src="images/img_button_next_slide_white_a700.svg"
                    alt="bnb_one"
                    className="h-[44px] my-[58px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full mb-4 pb-[30px] gap-5 mx-auto max-w-[1330px]">
            <div className="flex flex-row justify-start w-[98%]">
              <Heading as="h3" className="mt-1 !text-gray-900_01">
                Trending Coins
              </Heading>
            </div>
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row justify-center items-center w-full">
                <Img src="images/img_button_next_slide.svg" alt="bnb_one" className="h-[44px] z-[1]" />
                <div className="flex flex-row w-[99%] ml-[-8px] gap-2.5">
                    <Cart name={'BTC'} percentChange={'+0.10%'} price={'$45,332.83'} image={<Img
                        src="images/img_202401031434_svg.svg"
                        alt="btc_two"
                        className="h-[60px] mt-[-1px] mb-1"
                      />}/>
                    <Cart name={'ETH'} percentChange={'-0.21%'} price={'$2,375.15'} image={<Img
                        src="images/img_202401031434_svg.svg"
                        alt="image"
                        className="h-[60px] mt-[-1px] mb-1"
                      />}/>
                    <Cart name={'stETH'} percentChange={'-0.34%'} price={'$2,371.72'} image={<Img
                        src="images/img_202401031437_svg_black_900.svg"
                        alt="image"
                        className="h-[60px] mt-[-1px] mb-1"
                      />}/>
                    <Cart name={'UNI'} percentChange={'-4.02%'} price={'$7.3192'} image={<Img src="images/img_202401031434_svg.svg" alt="image" className="h-[60px] mb-1" />}/>
                    <Cart name={'CFG'} percentChange={'-1.76%'} price={'$0.773600'} image={<Img src="images/img_202401031437_svg.svg" alt="image" className="h-[60px] mb-1" />}/>
                  <Img
                    src="images/img_button_next_slide_white_a700.svg"
                    alt="bnb_one"
                    className="h-[44px] my-[58px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer;
