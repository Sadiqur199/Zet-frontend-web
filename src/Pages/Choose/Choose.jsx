import React from 'react';
import img1 from '../../assets/image13.jpg'
import './Choose.css'
import img2 from '../../assets/zero_investment.d5743aab.svg'
import img3 from '../../assets/quick_payout.1d689e09.svg'
import img4 from '../../assets/Fin_products.0e8a0582.svg'
import img5 from '../../assets/Icon_support.c8382fc1.svg'
import img6 from '../../assets/customerSupport.5780cd23.svg'
import img7 from '../../assets/financialProduct.1b3d6eec.svg'
import { MotionAnimate } from 'react-motion-animate';

const Choose = () => {
  return (
    <>
    <MotionAnimate animation='fadeInUp' reset={true}>
    <div className='grid md:grid-cols-2 gap-2 mt-10 mb-16 md:ml-0 ml-5'>
      <div className='mb-4 image-set  md:ml-72 mt-10'>
       <div className='mt-10 md:ml-28'>
       <h1 className='font-bold text-xl'>Why <span className='text-[#2175F1]'>Choose Us</span></h1>
        <p>Why we are loved by our customers</p>
       </div>
         <img className='md:mt-24 md:ml-24' src={img1} alt="" />
      </div>

      <div className='grid md:grid-cols-2 gap-6'>
       <div>
        <img src={img2} alt="" />
        <h1 className='font-bold text-xl'>Zero Investment</h1>
        <p>Build your business without any <br/> investment</p>
       </div>

       <div>
        <img src={img3} alt="" />
        <h1 className='font-bold text-xl'>Quick Payout</h1>
        <p>Direct Payout in your bank account in <br /> short time</p>
       </div>

       <div>
        <img src={img4} alt="" />
        <h1 className='font-bold text-xl'>Limitless Earnings</h1>
        <p>Direct Payout in your bank account in <br /> short time</p>
       </div>

       <div>
        <img src={img5} alt="" />
        <h1 className='font-bold text-xl'>Training & Upskilling</h1>
        <p>Get trained by finance and sales experts</p>
       </div>

       <div>
        <img src={img6} alt="" />
        <h1 className='font-bold text-xl'>Customer Support</h1>
        <p>Access tools and content to build <br /> relationship</p>
       </div>

       <div>
        <img src={img7} alt="" />
        <h1 className='font-bold text-xl'>Financial Products</h1>
        <p>Trustworthy & high-rated products & <br /> categories</p>
       </div>
      </div>
    </div>
    </MotionAnimate>
    </>
  );
};

export default Choose;