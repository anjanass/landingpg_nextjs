import React from 'react'
import Image from 'next/image';

interface PropsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<PropsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div className='outline-none border-none relative'>
      {/* You can use the img, mainTitle, and price here as needed */}
      {/* <img src={img} alt={title} className="w-full h-auto object-cover" /> */}

      <div className='absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none'>
        <h3 className='text-pink-500 text-[24px] lg:text-[28px]'>{title}</h3>
        <h2 className='text-black text-[26px] font-bold md:text-[30px] lg:text-[44px] leading-[1.2]'>{mainTitle}</h2>
        
        <h3 className='text-[24px] text-gray-500'>
            starting at{" "}
            <b className='text-[20px] md:text-[24px] lg:text-[30px]'>{price}</b>
            .00
        </h3>
        <div className='bg-pink-400 text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-black'>
            Shop Now
        </div>
      </div>

    <Image className='w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom'
        src={img}
        alt="banner"
        width={2000}
        height={2000}/>
    </div>
  );
};

export default Slide;