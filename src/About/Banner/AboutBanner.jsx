import React from 'react';
import './AboutBanner.css'

const AboutBanner = () => {
    return (
        <div className='bannerImage text-white flex items-center justify-center p-60'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold'>OUR MISSION</h2>
                <p className='py-4 text-xl '>Enabling financial inclusion for the next billion Indians <br />
                    & making their Zindagi Set. Building a platform that enables you to sell <br />
                    financial products & earn up to Rs. 1 lakh every month.
                </p>
                <h3 className='tracking-widest text-xl font-semibold'>EARN BETTER. LIVE BETTER.</h3>
            </div>
        </div>
    );
};

export default AboutBanner;