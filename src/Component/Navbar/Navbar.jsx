import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/360_F_468442364_TbrCsIYDbzNGJmxCfHmB6vl1oLUlpgGE.jpg'

const Navbar = () => {

  const navOption = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/partner">Partner With Us</Link></li>
    <li><Link to="/blog">Blog</Link></li>
  </>
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             {navOption}
            </ul>
          </div>
          <Link to='/'>
             <img src={img1} className='h-[60px]' alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOption}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-sm bg-[#2075F0] text-white">Download ZET</a>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;