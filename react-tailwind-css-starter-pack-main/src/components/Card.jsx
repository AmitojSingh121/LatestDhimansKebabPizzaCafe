import React from 'react'
import image1 from '../assests/image1.jpg';

function Card({ name, image1 , ingredient , sizes , Prices , Mini, Media, Maxi, Party , Minifood, Mediafood, Maxifood, Partyfood , bebita , ingri , newingri , paopita , bttn ,  buttonn , Showbuttonn , showPriceButtons}) {
  return (
    <div className='w-[400px] h-[580px] bg-white p-4 rounded-lg  flex flex-col gap-3'>
        {/* This div for my image */}
       <div className='w-[100%] h-[100%] overflow-hidden rounded-lg '>
            <img src={image1  || "/fallback.png"} alt="Pizza Margreta Image" className='w-[100%] h-[100%] object-cover hover:scale-110 transition-all duration-300'/>
       </div>

        {/* This div for my image name  */}
        <div className='text-2xl font-semibold '>
             {name} 
            <span>{paopita}</span> 
            {!Showbuttonn && (
                <button className='bg-yellow-500 w-8 h-8 rounded-full text-lg font-bold outline mx-12'>
                       {buttonn}
                </button>
            )}
        </div>

        {/* This div for ingredient */}
        <div>
            {ingredient}
        </div>
       <div>{bebita}</div>
        {ingri}
        <br/>
        {newingri}
        {/* Size and Price Text  */}

        <div className='flex flex-row justify-center items-center mr-8 gap-12 text-lg font-semibold'>
            <h4 className='mr-10'>{sizes}</h4>
            <h4 className='mr-9'>{Prices}</h4>
        </div>

        {/* This div for sizes , prices , add to cart + button */}
        {/* 1st  */}
        <div className='w-full flex justify-between items-center'>
            <p className='text-large font-bold'>{Mini}</p>

            <div className='mx-auto text-xl'>{Minifood}</div>

            {showPriceButtons && (
                <button className='bg-yellow-500 w-8 h-8 rounded-full text-lg font-bold outline px-2'>
                       {bttn}
                </button>
            )}


        </div>


        {/* 2nd  */}
        <div className='w-full flex justify-between items-center'>
            <p className='text-large font-bold'>{Media}</p>

            <div className='mx-auto text-xl'>{Mediafood}</div>
            {showPriceButtons && (
                <button className='bg-yellow-500 w-8 h-8 rounded-full text-lg font-bold outline px-2'>
                       {bttn}
                </button>
            )}

        </div>

        {/* 3rd  */}
        <div className='w-full flex justify-between items-center'>
            <p className='text-large font-bold'>{Maxi}</p>

            <div className='mx-auto text-xl'>{Maxifood}</div>

            {showPriceButtons&& (
                <button className='bg-yellow-500 w-8 h-8 rounded-full text-lg font-bold outline px-2'>
                       {bttn}
                </button>
            )}

        </div>

        {/* 4th  */}
        <div className='w-full flex justify-between items-center'>
            <p className='text-large font-bold'>{Party}</p>

            <div className='mx-auto text-xl'>{Partyfood}</div>

            {showPriceButtons && (
                <button className='bg-yellow-500 w-8 h-8 rounded-full text-lg font-bold outline px-2'>
                       {bttn}
                </button>
            )}

            
        </div>

    </div>

    
  )
}

export default Card