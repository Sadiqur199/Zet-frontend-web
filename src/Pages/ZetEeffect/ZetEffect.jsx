import React from 'react';
import './ZetEffect.css'
import img1 from '../../assets/image15.jpg'
const ZetEffect = () => {
  return (
    <div className='zetEffect'>
    <div className='grid md:grid-cols-2 content-design bg-[#3D7BD6]'> 
      <div>
        <img className='h-full'  src={img1} alt="" />
      </div>
    <div className='text-center mb-6 text-white'>
        <h1 className='font-bold text-xl  sm:text-center'>THE ZET EFFECT</h1>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full ">
            <p className='md:my-5 md:mx-20 text-justify'>14 Lakh+ Financial Advisor across India are using ZET to increase their income.

              We helped customers in more than 50 cities to get their first financial product

              More than ₹20 Cr earned by our Agents by selling Credit Cards and Loans

            </p>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <p className='md:my-5 md:mx-20 text-justify'>14 Lakh+ Financial Advisor across India are using ZET to increase their income.

              We helped customers in more than 50 cities to get their first financial product

              More than ₹20 Cr earned by our Agents by selling Credit Cards and Loans

            </p>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <p className='md:my-5 md:mx-20 text-justify'>We helped customers in more than 50 cities to get their first financial product

              More than ₹20 Cr earned by our Agents by selling Credit Cards and Loans

              14 Lakh+ Financial Advisor across India are using ZET to increase their income.

            </p>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ZetEffect;