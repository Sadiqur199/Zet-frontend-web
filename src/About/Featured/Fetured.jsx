import React from 'react';
import featureImg1 from '../../assets/4.jpg'
import featureImg2 from '../../assets/13.jpg'
import featureImg3 from '../../assets/1.jpg'
import featureImg4 from '../../assets/3.jpg'
import featureImg5 from '../../assets/5.jpg'


const Featured = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <h2 className='md:px-4 px-2 text-center md:text-start text-4xl font-bold my-16'>Got Featured</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:gap-4 md:px-4 px-2 gap-2'>
                <img className='w-full' src={featureImg1} alt="" />
                <img className='w-full' src={featureImg2} alt="" />
                <img className='w-full' src={featureImg3} alt="" />
                <img className='w-full' src={featureImg4} alt="" />
                <img className='w-full' src={featureImg5} alt="" />
            </div>
        </div>
    );
};

export default Featured;