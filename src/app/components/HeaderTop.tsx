import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
      <div className='container py-4'>
        <div className='flex justify-between items-center'>
          <div className='hidden lg:flex gap-1'>
            <div className='header_top_wrapper'>
              <FaFacebook />
            </div>
            <div className='header_top_wrapper'>
              <FaTwitter />
            </div>
            <div className='header_top_wrapper'>
              <FaInstagram />
            </div>
            <div className='header_top_wrapper'>
              <FaLinkedin />
            </div>
            <div className='header_top_wrapper'>
              <FaGithub />
            </div>
          </div>

    <div className='text-gray-500 text-[12px]'>
        <b>FREE SHIPPING</b>  THIS WEEK ORDER OVER - RS.999
    </div>

    <div className='flex gap-4'>
        <select
            className='text-gray-500 text-[12px] w-[70px]'
            name='currency'
            id='currency'
            >
            <option value="NRP Rs">NRP Rs.</option>
            <option value="USD $">USD $</option>
            <option value="EUR ">EUR </option>
        </select>

        <select 
            className='text-gray-500 text-[12px] w-[80px]'
            name='language'
            id='language'
        >
            <option value="English">English</option>
            <option value="French">French</option>
        </select>
    </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
