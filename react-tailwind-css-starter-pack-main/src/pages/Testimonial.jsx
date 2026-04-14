// import React, {useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FaChevronRight } from "react-icons/fa6";
// import { FaStar } from "react-icons/fa";


// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// // import required modules
// import { Navigation } from 'swiper/modules';
// import { testimonialData } from '../constants/Testimonial';

//  function Testimonial() {

//     const [isBeginning , setIsBeginning] = useState(true);
//     const[isEnd , setIsEnd] = useState(false);
    
//     const breakpointsResponsive = {
//   0: {
//     slidesPerView: 1,
//     spaceBetween: 10,
//   },
//   640: {
//     slidesPerView: 2,
//     spaceBetween: 20,
//   },
//   1024: {
//     slidesPerView: 3,
//     spaceBetween: 10,
//   },
//   1280: {
//     slidesPerView: 4,
//     spaceBetween: 30,
//   },
// };


//      const handleSwiperEvents = (swiper) => {
//             setIsBeginning(swiper.isBeginning);
//             setIsEnd(swiper.isEnd)
//         }
//   return (
//     <div className='w-full h-full space-y-5 realtive lg:px-24 md:px-16 sm:px-7 px-4 flex items-center justify-center flex-col'>
//         <div className='w-full flex items-center justify-between mt-6'>
//                 <h2 className='text-2xl text-black font-semibold mx-10 '>
//                    <h2 className='text-3xl text-yellow-400'>Customers Review</h2>
//                     <div className='text-amber-900'>A community of 1,000+ regulars who trust us for every meal</div>
//                 </h2>   

//                 {/* Custom Button */}
//                 <div className="flex items-center gap-6">
//                     <button className=
//                     {`custom-prev text-neutral-50 p-2  z-10 ${isBeginning ? 'opacity-50 cursor-not-allowed' : ''}`}
//                     disabled = {isBeginning}
//                     >
//                     {/* <FaChevronRight size={20}/> */}
//                     </button>

//                     <button className=
//                     {`custom-next  p-2  z-10 ${isBeginning ? 'opacity-50 cursor-not-allowed' : ''}`}
//                     disabled = {isEnd}
//                     >
//                     </button>
//                 </div>

//         </div> 

//     <div className='w-full py-2'>
//             {/* <Swiper
//         slidesPerView={1}
//         spaceBetween={10}
//         breakpoints={breakpointsResponsive}
//         onInit={(swiper)=handleSwiperEvents(swiper)}
//         onSlideChange={(swiper) => handleSwiperEvents(swiper)}
//         modules={[Navigation]}
//         className="mySwiper p-1 "
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper> */}

//       <Swiper
//   slidesPerView={1}
//   spaceBetween={10}
//   navigation
//   breakpoints={breakpointsResponsive}
//   onInit={(swiper) => handleSwiperEvents(swiper)}
//   onSlideChange={(swiper) => handleSwiperEvents(swiper)}
//   modules={[Navigation]}
//   className="mySwiper p-1"
// >

//     {/* testimonial */}
//     {testimonialData.map((item) =>(
//         <SwiperSlide key={item.id}>
//             <div className="w-full h-auto 
//             p-6 space-y-10 
//             group bg-neutral-800/70">

//             <p className='text-neutral-300 text-base 
//             font-normal'>
//                 {item.desc}
//             </p>

//             <div className='w-full flex items-center justify-between'>
//                 <div className='flex items-center gap-3 '>
//                     <img src= {item.img} alt= {item.name} className="w-12 h-12 object-center object-cover rounded-full border outline-yellow-400 outline-double"/>
//                 </div>

//                 <div className='space-y-1'>
//                     <p className="text-yellow-400 text-base font-semibold ">
//                         {item.name}
//                     </p>
//                 </div>

//                  {/* Rating By the Customers */}
//             <div className='flex items-center 
//             gap-1 bg-yellow-500/5 rounded-full px-2 py-1'>

//               <FaStar className='text-yellow-600 text-sm '/>
//               <p className='text-xs text-yellow-600 '>
//                 {item.rating}
//               </p>
//             </div>


//             </div>

           
//             </div>
//         </SwiperSlide>
//     ))}

// </Swiper>

//         </div>
//     </div>
//   )
// }

// export default Testimonial

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { testimonialData } from "../constants/Testimonial";
import { useTranslation } from "react-i18next";

function Testimonial() {
  const breakpoints = {
    0: { slidesPerView: 1, spaceBetween: 16 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 24 },
  };
  const {t} = useTranslation();
  return (
    <section className="bg-[#0d0d0d] py-20 px-6 md:px-16 border-t border-[#c9a84c]/10">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-[#c9a84c] text-[10px] tracking-[4px] uppercase mb-3">
          {t("Whatpeoplesay")}
        </p>
        <h2 className="font-playfair text-[#f5f0e8] text-3xl md:text-4xl mb-2">
         {t("Customerreviews")}
        </h2>
        <p className="text-[#f5f0e8]/30 text-sm mt-3">
         {t("Community")}
        </p>
        <div className="flex items-center justify-center gap-4 mt-5">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a84c]/40" />
          <span className="text-[#c9a84c] text-sm">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a84c]/40" />
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={breakpoints}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        className="pb-4"
      >
        {testimonialData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-[#141414] border border-[#2a2a2a] hover:border-[#c9a84c]/20 p-6 space-y-6 transition-all duration-300 h-full">
              {/* Quote */}
              <div className="text-[#c9a84c]/20 text-5xl font-playfair leading-none">"</div>
              <p className="text-[#f5f0e8]/60 text-sm leading-relaxed -mt-4">
                {item.desc}
              </p>

              {/* Author */}
              <div className="flex items-center justify-between border-t border-[#2a2a2a] pt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover ring-1 ring-[#c9a84c]/30"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="w-10 h-10 rounded-full bg-[#c9a84c]/20 items-center justify-center text-[#c9a84c] font-semibold text-sm hidden">
                    {item.name.charAt(0)}
                  </div>
                  <p className="text-[#f5f0e8] text-sm font-medium">{item.name}</p>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-xs ${i < Math.floor(item.rating) ? "text-[#c9a84c]" : "text-[#2a2a2a]"}`}
                    />
                  ))}
                  <span className="text-[#c9a84c] text-xs ml-1">{item.rating}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonial;