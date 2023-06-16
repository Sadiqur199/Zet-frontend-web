import React from 'react';
import img1 from '../../assets/image12.jpg'
import img2 from '../../assets/downloadBtnDark.a0f01343.svg'
import { MotionAnimate } from 'react-motion-animate'


const Banner = () => {
  return (
    <>
    <MotionAnimate animation='fadeInUp' reset={true}>
      <div className='flex mx-auto bg-[#E9F4FF] h-[350px] w-[70%] mt-20 mb-20 justify-between'>
        <div className='ml-20 md:mt-20'>
          <h1 className='text-4xl  font-bold'>Become a Financial Advisor and</h1>
          <h1 className='text-3xl font-bold text-[#2075F0]'>Earn Rs.1 Lakh/Month</h1>
          <p>No investment required</p>
          <img className='md:mt-5' src={img2} alt="" />
        </div>
        <div>
          <img className='h-[100%] md:mt-[-40px]' src={img1} alt="" />
        </div>
      </div>
      </MotionAnimate>
    </>
  );
};

export default Banner;