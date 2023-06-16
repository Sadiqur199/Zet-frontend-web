import React from 'react';
import img1 from '../../assets/image.jpg'
import './Footer.css'
import { AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { BsInstagram, BsTelegram, BsTelephone } from 'react-icons/bs';
import { FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa';

const Footer = () => {

  return (
    <div className='footer-design pl-20'>
      <div>
        <h1 className='text-white font-bold text-4xl pt-10 mb-3'>ZET</h1>
        <hr></hr>
      </div>
      <footer className="footer  text-neutral-content">
        <div className='pt-10 text-white'>
          <a className=" text-white">COMPANY</a>
          <a className="link link-hover text-white">About Us</a>
          <a className="link link-hover text-white">Partner With Us</a>
          <a className="link link-hover text-white">Blog</a>
        </div>
        <div className='pt-10'>
          <a className="text-white text-xl">LEGAL</a>
          <a className="link link-hover text-white">Privacy Policy</a>
          <a className="link link-hover text-white">Terms of Use</a>
        </div>
        <div className='pt-10'>
          <a className=" text-xl text-white">CONTACT</a>
          <a className="link link-hover text-white inline-flex"> <AiFillMail className='mt-1 mr-2'></AiFillMail>hi@gmail.com</a>
          <a className="link link-hover inline-flex"><BsTelephone className='mt-1 mr-2'></BsTelephone>+995224411</a>
        </div>

        <div className='pt-10'>
          <a className=" text-xl text-white">FOLLOW US</a>
          <a className="link link-hover text-white inline-flex"><AiFillLinkedin className='mt-1 mr-2 h-5 w-5'></AiFillLinkedin > <FaFacebookSquare className='mt-1 mr-2 h-5 w-5'></FaFacebookSquare > <BsInstagram className='mt-1 mr-2 h-5 w-5'></BsInstagram > <FaWhatsappSquare className='mt-1 mr-2 h-5 w-5'></FaWhatsappSquare > <BsTelegram className='mt-1 mr-2 h-5 w-5'></BsTelegram> </a>

        </div>
      </footer>
    </div>
  );
};

export default Footer;