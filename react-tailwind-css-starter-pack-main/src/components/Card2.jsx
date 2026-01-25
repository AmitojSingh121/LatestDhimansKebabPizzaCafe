import React from 'react'
import image1 from "../assests/image1.jpg"
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../Redux/cartSlice';

 function Card2({name , id , image , qty , price }) {
       let dispatch = useDispatch();
  return (
    <div className='w-full h-[120px] p-2 shadow-lg  flex justify-between'>
        <div className='w-[60%] h-[120px]  flex gap-5'>
            {/* image */}
            <div className='w-[50%] h-full overflow-hidden'>
                <img src= {image} alt="" className='object-cover'/>
            </div>

            <div className='w-[40%] h-full flex flex-col gap-5'>
                 <div className='text-lg text-gray-600 font-semibold'>{name}</div>
               
               <div className='w-[110px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-yellow-500 '>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center text-yellow-400 hover:bg-gray-200 ' onClick={()=>
                     qty>1?dispatch(DecrementQty(id)):1
                    }>-</button>
                    <span className='w-[40%] h-full bg-slate-300 flex justify-center items-center text-yellow-500'>{qty}</span>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center text-yellow-400 hover:bg-gray-200' onClick={() =>{
                      dispatch(IncrementQty(id))
                    }}>+</button>
               </div>
            </div>
            
        </div>

        {/* Right Div price and Empty Box */}
         <div className='flex flex-col justify-start items-end gap-6'> 
            <span className='text-xl text-yellow-400 font-semibold'>{price.toFixed(2)}</span>
            <RiDeleteBin6Line className='w-[30px] h-[40px] text-red-400 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))}/>
         </div>
        
    </div>
  )
}

export default Card2
