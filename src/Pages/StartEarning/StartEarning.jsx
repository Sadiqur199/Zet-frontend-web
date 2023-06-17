import React from 'react';
import './StartEarning.css'
import img1 from '../../assets/downloadBtnDark.a0f01343.svg';
import { MotionAnimate } from 'react-motion-animate';
const StartEarning = () => {
  return (
    <div className='startEarning mb-10'>
      <MotionAnimate animation='fadeInUp' reset={true}>
      <div className='grid md:grid-cols-3 gap-7 text-white'>
        <div >
          <h1 className='mb-5 step-btn-design'>STEP 1</h1>
          <p className='mb-5 text-xl font-semibold text-[#7CA3FF]'>DownLoad The App & Sing Up The Zet App</p>
          <img className='mb-5' src={img1} alt="" />
          <progress className="progress w-56 bg-[#7CA3FF]"></progress>
        </div>
        <div>
          <h1 className='mb-5 step-btn-design'>STEP 2</h1>
          <p className='mb-5 text-xl font-semibold text-[#7CA3FF]'>Registration Customer & Recommend Financial Product  </p>
          <img className='mb-5' src={img1} alt="" />
          <progress className="progress w-56 bg-[#7CA3FF]"></progress>
        </div>
        <div>
          <h1 className='mb-5 step-btn-design'>STEP 3</h1>
          <p className='mb-5 text-2xl font-semibold text-[#7CA3FF]'>Start Earning Upto ₹1Lack Per Month</p>
          <img className='mb-5' src={img1} alt="" />
          <progress className="progress w-56 bg-[#7CA3FF]"></progress>
        </div>
      </div>
      </MotionAnimate>
    </div>
  );
};

export default StartEarning;