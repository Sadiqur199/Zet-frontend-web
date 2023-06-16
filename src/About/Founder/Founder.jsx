import React from 'react';
import image1 from '../../assets/Lokesh.jpg'
import image2 from '../../assets/Yash.jpg'
import image3 from '../../assets/Manish.jpg'
import { FaLinkedin } from 'react-icons/fa';
import { MotionAnimate } from 'react-motion-animate'
import img1 from '../../assets/17.jpg'
const Founders = () => {
    return (
    <>
            <div className='bg-color '>
            <div className='max-w-screen-xl mx-auto'>
                <div className='text-center p-20'>
                    <h2 className='text-5xl font-bold mb-3'>Meet Our Founders</h2>
                    <p className='text-2xl text-gray-500'>Few words from founders desk</p>
                </div>
                <MotionAnimate animation='fadeInUp' reset={true}>
                    <div className='grid md:grid-cols-3 md:gap-12 md:px-4 px-2 gap-10 pb-10'>
                        <div>
                            <img className='h-56 w-64' src={image3} alt="" />
                            <div className='flex justify-between items-center pt-2'>
                                <div>
                                    <h3 className='text-xl'>Manish Shara</h3>
                                    <p className=' text-xl'>Co- Founder & CEO</p>
                                </div>
                                <FaLinkedin className='w-8 h-8' />
                            </div>
                        </div>
                        <div>
                            <img className='h-56 w-64' src={image2} alt="" />
                            <div className='flex justify-between items-center pt-2'>
                                <div>
                                    <h3 className='text-xl'>Yash Desai</h3>
                                    <p className='text-xl'>Co- Founder</p>
                                </div>
                                <FaLinkedin className='w-8 h-8' />
                            </div>
                        </div>
                        <div className=''>
                            <img className='h-56 w-64' src={image1} alt="" />
                            <div className='flex justify-between items-center pt-2'>
                                <div>
                                    <h3 className='text-xl'>Lokesh Agarwal</h3>
                                    <p className=' text-xl'>CTO</p>
                                </div>
                                <FaLinkedin className='w-8 h-8' />
                            </div>
                        </div>
                    </div>
                </MotionAnimate>

            </div>
        </div>
        <div>
          <img className='mb-2' src={img1} alt="" />
        </div>
    </>
    );
};

export default Founders;