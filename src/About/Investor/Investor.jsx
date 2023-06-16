import React from 'react';
import invertorImg1 from '../../assets/investor1.jpg'
import invertorImg2 from '../../assets/investor2.jpg'
import invertorImg3 from '../../assets/investor3.jpg'
import invertorImg4 from '../../assets/investor4.jpg'
import { MotionAnimate } from 'react-motion-animate'
//investor img
import image8 from '../../assets/6.jpg'
import image4 from '../../assets/8.jpg'
import image6 from '../../assets/9.jpg'
import image7 from '../../assets/10.jpg'
import image3 from '../../assets/11.jpg'
import image1 from '../../assets/12.jpg'
import image2 from '../../assets/15.jpg'
import image5 from '../../assets/16.jpg'

const Investor = () => {
    return (

        <div className='max-w-screen-xl mx-auto'>
            <>
                <h2 className='text-4xl font-bold my-16 text-center md:text-start md:px-4 px-2'>Meet the Investors</h2>
                <MotionAnimate animation='fadeInUp' reset={true}>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 md:px-4 px-2 gap-2'>
                        <img className='w-full' src={invertorImg1} alt="" />
                        <img className='w-full' src={invertorImg2} alt="" />
                        <img className='w-full' src={invertorImg3} alt="" />
                        <img className='w-full' src={invertorImg4} alt="" />
                    </div>
                </MotionAnimate>

            </>
            <div className='my-16 '>
                <div className='grid md:grid-cols-4 md:gap-12 md:px-4 px-2 gap-2'>
                    <div className='hover-investor'>
                        <img className='h-56 w-64' src={image1} alt="" />
                        <h3 className='text-xl'>Kunal Shah</h3>
                        <p className='text-gray-400 text-xl'>Founder, CRED</p>
                    </div>
                    <div className='hover-investor'>
                        <img className='h-56 w-64' src={image2} alt="" />
                        <h3 className='text-xl'>Gaurav Munjal</h3>
                        <p className='text-gray-400 text-xl'>Founder, UNACADEMY</p>
                    </div>
                    <div className='hover-investor'>
                        <img className='h-56 w-64' src={image3} alt="" />
                        <h3 className='text-xl'>Aakrit Vaish</h3>
                        <p className='text-gray-400 text-xl'>Co-Founder, HAPTIK</p>
                    </div>
                    <div className='hover-investor'>
                        <img className='h-56 w-64' src={image4} alt="" />
                        <h3 className='text-xl'>Harshil Mathur</h3>
                        <p className='text-gray-400 text-xl'>Founder, RAZORPAY</p>
                    </div>
                    <div className='hover-investor'>
                        <img className='h-56 w-64' src={image5} alt="" />
                        <h3 className='text-xl'>Vidit Aatrey</h3>
                        <p className='text-gray-400 text-xl'>Founder & CEO, MEESHO</p>
                    </div>
                    <div className='hover-investor'>
                        <img className='h-56 w-64' src={image6} alt="" />
                        <h3 className='text-xl'>Amrish Rau</h3>
                        <p className='text-gray-400 text-xl'>CEO, PINELABS</p>
                    </div>
                    <div className='hover-investor'>
                        <img className='h-56 w-64' src={image7} alt="" />
                        <h3 className='text-xl'>Lalit Keshre</h3>
                        <p className='text-gray-400 text-xl'>CEO, GROWW</p>
                    </div>
                    <div className='hover-investor'>
                        <img className='h-56 w-64' src={image8} alt="" />
                        <h3 className='text-xl'>Gokul Rajaram</h3>
                        <p className='text-gray-400 text-xl'>Product, DOORDASH</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Investor;