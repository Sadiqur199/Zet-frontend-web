import React from 'react';
import './Product.css'
import img1 from '../../assets/CC.webp'
import img2 from '../../assets/Loan.webp'
import img3 from '../../../public/BNPL.webp'
import img4 from '../../assets/AccountSave.webp'
import { MotionAnimate } from 'react-motion-animate'


const Product = () => {
  return (
    <div className='md:p-16 md:pl-0 pl-5 bg-image'>
      <div className='text-center mb-6'>
        <h1 className='font-bold text-xl'>Products on ZET</h1>
        <p>We are trusted by best brand in the country</p>
      </div>
       
      <MotionAnimate
       animation='fadeInUp'
       reset={true}
       distance={200}
       delay={1}
       speed={1}>
      <div className='grid md:grid-cols-2 gap-4'>
        <div className="card card-side bg-[#F1F8FF] shadow-xl h-[200px] hover-animation">
          <figure><img className='h-[150px] w-[150px] ml-10' src={img1} alt="Credit Card" /></figure>
          <div className="card-body m-5">
            <h2 className="card-title">CREDIT CARDS</h2>
            <p>100% Contactless Application Process with Instant Approval From Top Banks.</p>
          </div>
        </div>
        <div className="card card-side bg-[#FFF1CA] shadow-xl h-[200px] hover-animation">
          <figure><img className='h-[150px] w-[150px] ml-10' src={img2} alt="Loans" /></figure>
          <div className="card-body m-5">
            <h2 className="card-title">LOANS</h2>
            <p>100% Contactless Application Process with Instant Approval From Top Banks.</p>
          </div>
        </div>
        <div className="card card-side bg-[#FFEEE7] shadow-xl h-[200px] hover-animation">
          <figure><img className='h-[150px] w-[150px] ml-10' src={img3} alt="Buy Now" /></figure>
          <div className="card-body m-5">
            <h2 className="card-title">BUY NOW PAY LATER</h2>
            <p>Short-term financing that allows consumers to make purchases and pay for them over time.</p>
          </div>
        </div>
        <div className="card card-side bg-[#FFEEE7] shadow-xl h-[200px] hover-animation">
          <figure><img className='h-[150px] w-[150px] ml-10' src={img4} alt="Saving Account" /></figure>
          <div className="card-body m-5">
            <h2 className="card-title">SAVING ACCOUNTS</h2>
            <p>ZET offers range of savings account that suits your personal needs for the banking.</p>
          </div>
        </div>
      </div>
      </MotionAnimate>

      </div>
      );
};

      export default Product;