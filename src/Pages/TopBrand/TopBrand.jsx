import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../assets/image2.jpg'
import img2 from '../../assets/image3.jpg'
import img3 from '../../assets/image4.jpg'
import img4 from '../../assets/image5.jpg'
import img5 from '../../assets/image6.jpg'
import img6 from '../../assets/image7.jpg'
import img8 from '../../assets/image8.jpg'
import img9 from '../../assets/image10.jpg'
import img10 from '../../assets/image11.jpg'

const TopBrand = () => {
  return (
    <div>
      <div className='text-center mb-6'>
        <h1 className='font-bold text-xl'>Top Brands on ZET</h1>
        <p>We are trusted by best brand in the country</p>
      </div>
      <div className='mb-10 w-[80%] mx-auto'>
      <Marquee speed={70} className='text-white'>
          <div className='border mr-8'>
          <img src={img1} alt="" />
          </div>
          <div className='border mr-8'>
          <img src={img2} alt="" />
          </div>
          <div className='border mr-8'>
          <img src={img3} alt="" />
          </div>
          <div className='border mr-8'>
          <img src={img4} alt="" />
          </div>
          <div className='border mr-8'>
          <img src={img5} alt="" />
          </div>
          <div className='border mr-8'>
          <img src={img6} alt="" />
          </div>
          <div className='border mr-8'>
          <img src={img8} alt="" />
          </div>
          <div className='border mr-8'>
          <img src={img9} alt="" />
          </div>
          <div className='border mr-8'>
          <img src={img10} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TopBrand;