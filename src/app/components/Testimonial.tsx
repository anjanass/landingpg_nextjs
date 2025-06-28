import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-16">
        <h2 className="font-medium text-2xl pb-8">Testimonials</h2>

        {/* Two columns: 22% and 78% */}
        <div className="flex gap-6">
          {/* Left Column (22%) */}
          <div className="w-[22%] border border-gray-300 rounded-2xl flex items-center justify-center p-6">
            <div className="text-center flex flex-col items-center gap-2">
              <Image
                className="rounded-full"
                src="/user.jpg"
                width={80}
                height={20}
                alt="dp"
              />
              <h3 className="text-gray-800 font-bold text-lg">Anjana Silinchhe Shrestha</h3>
              <p className="text-gray-500 text-sm">CEO & Founder Invision</p>
              <Image
                className="py-2"
                src="/Quotes.jpg"
                width={60}
                height={50}
                alt="quotes"
              />
              <p className="max-w-[200px] text-pink-500 break text-sm">
                &quot;If you do what interests you, atleast one person is pleased.&quot;
              </p>
            </div>
          </div>

          {/* Right Column (78%) */}
          <div className="w-[78%] bg-red-600 bg-[url(/Waves-2.webp)] bg-cover h-[500px] rounded-2xl grid place-items-center">
            <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
              {/* Optional content here */}
              <div className="bg-pink-400 text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-black">
                25% DISCOUNT
              </div>
              <p className="text-center text-gray-800 font-bold text-3xl">
                Summer Collection
              </p>
              <p className="text-center text-gray-500 font-medium text-xl">
                Starting @Rs.300 <b>Shop Now</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
