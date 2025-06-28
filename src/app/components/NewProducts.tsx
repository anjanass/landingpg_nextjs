import React from 'react'
import ProductCard from './ProductCard';



const productsData =[
    {
        img: "/1.jpg",
        title: "shoes",
        desc: "Pakistani Shoes",
        rating:4,
        price: "Rs.999",
    },
    {
        img: "/2.jpg",
        title: "shoes",
        desc: "Pakistani Shoes",
        rating:4,
        price: "Rs.999",
    },
    {
        img: "/3.jpg",
        title: "shoes",
        desc: "Pakistani Shoes",
        rating:4,
        price: "Rs.999",
    },
    {
        img: "/4.jpg",
        title: "shoes",
        desc: "Pakistani Shoes",
        rating:4,
        price: "Rs.999",
    },
    {
        img: "/5.jpg",
        title: "shoes",
        desc: "Pakistani Shoes",
        rating:4,
        price: "Rs.999",
    },
    {
        img: "/6.jpg",
        title: "shoe",
        desc: "Pakistani Shoes",
        rating:4,
        price: "Rs.999",
    },
    {
        img: "/7.jpg",
        title: "sho",
        desc: "Pakistani Shoes",
        rating:4,
        price: "Rs.999",
    },
    {
        img: "/8.jpg",
        title: "s",
        desc: "Pakistani Shoes",
        rating:4,
        price: "Rs.999",
    },
    {
        img: "/9.jpg",
        title: "shoesw",
        desc: "Pakistani Shoes",
        rating:4,
        price: "Rs.999",
    },
];

const NewProducts = () => {
  return (
    <div>
        <div className='container pt-16'>
            <h2 className='font-medium text-2xl pb-4'>New Products</h2>

            <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
                {productsData.map((item,index)=> (
                <ProductCard key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
                />
                ))}
            </div>
        </div>
    </div>
  )
}

export default NewProducts
