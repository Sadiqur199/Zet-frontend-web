import React from 'react';
import img from '../../assets/7.jpg'

const Evolved = () => {
    return (
        <div className='max-w-screen-xl mx-auto mb-16'>
            <h2 className='text-center text-4xl font-bold my-16'>How we evolved over the years</h2>
            <img className='mb-12' src={img} alt="evolved pic" />
        </div>
    );
};

export default Evolved;