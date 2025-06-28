"use client";
import React from 'react'
import Slider from "react-slick";
import Slide from './Slide';



const Hero = () => {

    const settings ={
        dots: true,
        infinite: true,
        slidesToShow:1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData =[
        {
            id:0,
            img:"/banner1.png",
            title: "Trending Items",
            mainTitle: "WOMEN'S LATEST FASHION SALES",
            price: "Rs.600"
        },
        {
            id:1,
            img:"/banner2.png",
            title: "Trending Accessories",
            mainTitle: "SUNGLASSES",
            price: "Rs.500"
        },
        {
            id:3,
            img:"/banner3.png",
            title: "Sale Offer",
            mainTitle: "NEW FASHION SUMMER SALE",
            price: "Rs.600"
        },
    ];

    return (
        <div >
            <div className='container pt-6 lg:pt-0'>
                <Slider {...settings}>
                    {slideData.map((item) => (
                        <Slide key={item.id}
                        img={item.img}
                        title={item.title}
                        mainTitle={item.mainTitle}
                        price={item.price}/>
                        ))}
                </Slider>
            </div>
        </div>
  )
}

export default Hero
