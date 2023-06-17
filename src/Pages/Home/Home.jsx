import React from 'react';
import Banner from '../Banner/Banner';
import TopBrand from '../TopBrand/TopBrand';
import Product from '../Product/Product';
import ZetEffect from '../ZetEeffect/ZetEffect';
import Choose from '../Choose/Choose';
import StartEarning from '../StartEarning/StartEarning';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopBrand></TopBrand>
      <Product></Product>
      <ZetEffect></ZetEffect>
      <Choose></Choose>
      <StartEarning></StartEarning>
    </div>
  );
};

export default Home;