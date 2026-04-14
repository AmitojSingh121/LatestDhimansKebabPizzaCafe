  // import React from 'react'
  // import image1 from "../assests/image1.jpg"
  // import { RiDeleteBin6Line } from "react-icons/ri";
  // import { useDispatch } from 'react-redux';
  // import { DecrementQty, IncrementQty, RemoveItem } from '../Redux/cartSlice';

  // function Card2({name , id , image , qty , price  , ingredients , drink }) {
  //       let dispatch = useDispatch();
  //   return (
  //     <div className='w-full min-h-[120px] p-2 shadow-lg  flex justify-between'>
  //         <div className='w-[60%] flex gap-5'>
  //             {/* image */} 
  //             <div className='w-[40%] h-full overflow-hidden'>
  //                 <img src= {image} alt="FoodImagesinAddToCart" className='object
  //                 cover'/>
  //             </div>

  //             <div className='w-[60%] h-full flex flex-col gap-5'>
  //                 <div className='text-lg text-gray-600 font-semibold'>{name}</div>

  //             {/* Ingrediends Show Ho Rahe Ha  */}
  //                <p className='text-xs text-gray-500 italic'>
  //                    {Array.isArray(ingredients) ? ingredients.join(", ") : ""}
  //               </p>

  //               {drink && (
  //               <p className="text-xs text-blue-500">
  //                  Drink: {drink}
  //               </p>
  //                 )}
                
  //               <div className='w-[120px] h-[40px] bg-slate-400 flex rounded-lg overflow-hidden shadow-md font-semibold border-2 border-yellow-500 '>
  //                     <button className='w-[33%]  bg-white flex justify-center items-center text-yellow-500 ' 
  //                     onClick={()=> qty>1?dispatch(DecrementQty(id)):null}
  //                     >-</button>

  //                     <span className='w-[60%] h-full bg-slate-300 flex justify-center items-center text-yellow-500 font-bold'>{qty}</span>

  //                     <button className='w-[33%] flex justify-center items-center bg-white text-yellow-500'
  //                      onClick={() =>{
  //                       dispatch(IncrementQty(id))
  //                     }}>+</button>
  //               </div>
  //             </div>
  //         </div>

  //         {/* Right Div price and Empty Box */}
  //         <div className='flex flex-col justify-start items-end gap-6'> 
  //           <span className='text-xl text-yellow-400 font-semibold'>€{price ? Number(price).toFixed(2) : "0.00"}</span>
  //             <RiDeleteBin6Line className='w-[30px] h-[40px] text-red-400 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))}/>
  //         </div>
          
  //     </div>
  //   )
  // }

  // export default Card2

// import React from "react";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { useDispatch } from "react-redux";
// import { DecrementQty, IncrementQty, RemoveItem } from "../Redux/cartSlice";

// function Card2({ name, id, image, qty, price, ingredients, drink }) {
//   const dispatch = useDispatch();

//   return (
//     <div className="w-full p-4 border-b border-[#2a2a2a] flex gap-4 hover:bg-[#1a1a1a]/50 transition-all duration-200">
//       {/* Image */}
//       <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-sm bg-[#1a1a1a]">
//         <img src={image} alt={name} className="w-full h-full object-cover" />
//       </div>

//       {/* Details */}
//       <div className="flex-1 min-w-0">
//         <p className="text-[#f5f0e8] text-sm font-medium truncate">{name}</p>

//         {Array.isArray(ingredients) && ingredients.length > 0 && (
//           <p className="text-[#f5f0e8]/35 text-[10px] mt-0.5 leading-relaxed line-clamp-2">
//             {ingredients.join(", ")}
//           </p>
//         )}

//         {drink && (
//           <p className="text-[#c9a84c]/70 text-[10px] mt-0.5">
//             🥤 {drink}
//           </p>
//         )}

//         {/* Qty Controls */}
//         <div className="flex items-center gap-3 mt-2">
//           <div className="flex items-center border border-[#2a2a2a] rounded-sm overflow-hidden">
//             <button
//               className="w-7 h-7 flex items-center justify-center text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors text-base"
//               onClick={() => qty > 1 ? dispatch(DecrementQty(id)) : null}
//             >−</button>
//             <span className="w-8 h-7 flex items-center justify-center text-[#f5f0e8] text-xs font-semibold bg-[#1a1a1a]">
//               {qty}
//             </span>
//             <button
//               className="w-7 h-7 flex items-center justify-center text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors text-base"
//               onClick={() => dispatch(IncrementQty(id))}
//             >+</button>
//           </div>
//         </div>
//       </div>

//       {/* Price & Delete */}
//       <div className="flex flex-col items-end justify-between flex-shrink-0">
//         <span className="text-[#c9a84c] font-semibold text-sm">
//           €{price ? Number(price).toFixed(2) : "0.00"}
//         </span>
//         <button onClick={() => dispatch(RemoveItem(id))}
//           className="text-[#f5f0e8]/20 hover:text-red-400 transition-colors">
//           <RiDeleteBin6Line className="w-4 h-4" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Card2;

import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { DecrementQty, IncrementQty, RemoveItem } from "../Redux/cartSlice";

function Card2({ name, id, image, qty, price, ingredients, drink , saladIngredients}) {
  const dispatch = useDispatch();

  return (
    <div className="w-full p-4 border-b border-[#2a2a2a] flex gap-4 hover:bg-[#1a1a1a]/50 transition-all duration-200">
      
      {/* Image */}
      <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-sm bg-[#1a1a1a]">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0 flex flex-col gap-1">
        
      <p className="text-[#f5f0e8] text-sm font-medium">{name}</p>
        {/* Ingredients */}
       {ingredients?.length > 0 && (
      <p className="text-xs text-gray-400">
       Ingredients: {ingredients.join(", ")}
      </p>
     )}

{/* Salada */}
{saladIngredients?.length > 0 && (
<p className="text-xs text-yellow-400">
Salada: {saladIngredients.join(", ")}
</p>
)}
        {Array.isArray(ingredients) && ingredients.length > 0 && (
          <p className="text-[#f5f0e8]/35 text-[10px] leading-relaxed">
            {ingredients.join(", ")}
          </p>
        )}

        {drink && (
          <p className="text-[#c9a84c]/70 text-[10px]">🥤 {drink}</p>
        )}

        {/* Qty + Delete in same row */}
        <div className="flex items-center justify-between mt-2">
          
          {/* Qty Controls */}
          <div className="flex items-center border border-[#2a2a2a] rounded-sm overflow-hidden">
            <button
              className="w-8 h-8 flex items-center justify-center text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors text-lg"
              onClick={() => qty > 1 ? dispatch(DecrementQty(id)) : null}
            >−</button>
            <span className="w-8 h-8 flex items-center justify-center text-[#f5f0e8] text-xs font-semibold bg-[#1a1a1a]">
              {qty}
            </span>
            <button
              className="w-8 h-8 flex items-center justify-center text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors text-lg"
              onClick={() => dispatch(IncrementQty(id))}
            >+</button>
          </div>

          {/* Price */}
          <span className="text-[#c9a84c] font-semibold text-sm">
            €{price ? Number(price).toFixed(2) : "0.00"}
          </span>

          {/* Delete Button */}
          <button
            onClick={() => dispatch(RemoveItem(id))}
            className="flex items-center justify-center w-8 h-8 rounded-sm border border-red-500/20 hover:border-red-500/60 hover:bg-red-500/10 text-red-400/50 hover:text-red-400 transition-all duration-200"
          >
            <RiDeleteBin6Line className="w-4 h-4" />
          </button>

        </div>
      </div>
    </div>
  );
}

export default Card2;