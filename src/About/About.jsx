import React from 'react';
import AboutBanner from './Banner/AboutBanner';
import Evolved from './Evolved/Evolved';
import Featured from './Featured/Fetured';
import Investor from './Investor/Investor';
import Founders from './Founder/Founder';

const About = () => {
  return (
    <div>
      <AboutBanner></AboutBanner>
      <Evolved></Evolved>
      <Featured></Featured>
      <Investor></Investor>
      <Founders></Founders>
    </div>
  );
};

export default About;