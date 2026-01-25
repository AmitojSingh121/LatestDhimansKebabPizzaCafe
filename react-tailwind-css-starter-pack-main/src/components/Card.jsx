import React from 'react'
import image1 from '../assests/image1.jpg';
import { useDispatch } from 'react-redux';
import { AddItem } from '../Redux/cartSlice';

function Card({name, image1 , ingredient , sizes , Prices , Mini, Media, Maxi, Party , Minifood, Mediafood, Maxifood, Partyfood , bebita , ingri , newingri , paopita , bttn ,  buttonn , Showbuttonn , showPriceButtons, id  }) {
  let dispatch = useDispatch();

  return (
    <div className='w-[400px] h-[580px] bg-white p-4 rounded-lg  flex flex-col gap-5'>
        {/* This div for my image */}
       <div className='w-[100%] h-[100%] overflow-hidden rounded-lg '>
            <img src={image1  || "/fallback.png"} alt="Pizza Margreta Image" className='w-[100%] h-[100%] object-cover hover:scale-110 transition-all duration-300'/>
       </div>

        {/* This div for my image name  */}
        <div className='text-2xl font-semibold '>
             {name} 
            <span>{paopita}</span> 
            {/* {!Showbuttonn && (
                <button className='bg-yellow-500 w-8 h-8 rounded-full text-lg font-bold outline mx-12'>
                       {buttonn}
                </button>
            )} */}

            {!Showbuttonn && (
  <button
    className='bg-yellow-500 w-8 h-8 rounded-full text-lg font-bold outline mx-12'
    onClick={() =>
      dispatch(
        AddItem({
          id: id,
          name: name,
          price: Number(Prices), // 👈 IMPORTANT
          image: image1,
          qty: 1,
        })
      )
    }
  >
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
            <p className='text-large font-bold' >{Mini}</p>

            <div className='mx-auto text-xl'>{Minifood}</div>

            {showPriceButtons && (
                <button className='bg-yellow-500 w-8 h-8 rounded-full text-lg font-bold outline px-2' onClick={() =>{ console.log("Clicked" ,id , name ) ; dispatch(AddItem({ id: `${id}-mini`,productId:id, name: `${name} Mini`, price:Minifood,  image:image1 , qty:1 }))}}>  {/* Updated: Includes price and size */}
                       {bttn}
                </button>
            )}
        </div>

        {/* 2nd  */}
        <div className='w-full flex justify-between items-center'>
            <p className='text-large font-bold'>{Media}</p>

            <div className='mx-auto text-xl'>{Mediafood}</div>
            {showPriceButtons && (
                <button className='bg-yellow-500 w-8 h-8 rounded-full text-lg font-bold outline px-2' onClick={() => dispatch(AddItem({ id:`${id}-media` , name: name + Media, price:Mediafood , image:image1 , qty:1  }))}>  {/* Updated */}
                       {bttn}
                </button>
            )}
        </div>

        {/* 3rd  */}
        <div className='w-full flex justify-between items-center'>
            <p className='text-large font-bold'>{Maxi}</p>

            <div className='mx-auto text-xl'>{Maxifood}</div>

            {showPriceButtons&& (
                <button className='bg-yellow-500 w-8 h-8 rounded-full text-lg font-bold outline px-2' onClick={() => dispatch(AddItem({  id: `${id}-maxi`,          // ✅ FIXED
                  name: `${name} ${Maxi}`,   // ✅ CLEAN NAME
                    price: Maxifood,   // ✅ NUMBER
                      image: image1,
                      qty: 1 }))}>  {/* Updated */}

                       {bttn}
                </button>
            )}
        </div>

        {/* 4th  */}
        <div className='w-full flex justify-between items-center'>
            <p className='text-large font-bold'>{Party}</p>

            <div className='mx-auto text-xl'>{Partyfood}</div>
            {showPriceButtons && (
                <button className='bg-yellow-500 w-8 h-8 rounded-full text-lg font-bold outline px-2' onClick={() => dispatch(AddItem({ id:`${id}-party`, name: `${name}${Party}` + Party, price:Partyfood , image:image1 , qty:1}))}> {/* Updated */}
                       {bttn}
                </button>
            )}
        </div>

          {/* ================= KEBAB / DONER (SINGLE PRICE) ================= */}
      {!showPriceButtons && (
        <button
          className="bg-yellow-500 w-full p-3 rounded-lg text-xl font-bold mt-4"
          onClick={() =>
            dispatch(
              AddItem({
                id: id,
                name: name,
                price: Number(Prices),
                image: image1,
                qty: 1,
              })
            )
          }
        >
          Add to Cart
        </button>
      )}
    </div>
  )
}

export default Card


// import React from "react";
// import { useDispatch } from "react-redux";
// import { AddItem } from "../Redux/cartSlice";

// function Card({
//   id,
//   name,
//   image1,
//   ingredient,
//   sizes,
//   Prices,

//   Mini,
//   Media,
//   Maxi,
//   Party,

//   Minifood,
//   Mediafood,
//   Maxifood,
//   Partyfood,

//   bebita,
//   ingri,
//   newingri,
//   paopita,

//   showPriceButtons,
//   bttn,
// }) {
//   const dispatch = useDispatch();

//   return (
//     <div className="w-[400px] h-[580px] bg-white p-4 rounded-lg flex flex-col gap-4">
      
//       {/* IMAGE */}
//       <div className="w-full h-[250px] overflow-hidden rounded-lg">
//         <img
//           src={image1}
//           alt={name}
//           className="w-full h-full object-cover hover:scale-110 transition-all"
//         />
//       </div>

//       {/* NAME */}
//       <h2 className="text-2xl font-semibold">
//         {name} <span>{paopita}</span>
//       </h2>

//       <p>{ingredient}</p>
//       <p>{bebita}</p>
//       {ingri}
//       {newingri}

//       {/* SIZE HEADER */}
//       {showPriceButtons && (
//         <div className="flex justify-between font-semibold mt-2">
//           <span>{sizes}</span>
//           <span>{Prices}</span>
//         </div>
//       )}

//       {/* ================= PIZZA (SIZE BASED) ================= */}
//       {showPriceButtons && (
//         <>
//           {/* MINI */}
//           <div className="flex justify-between items-center">
//             <span>{Mini}</span>
//             <span>{Minifood}</span>
//             <button
//               className="bg-yellow-500 w-8 h-8 rounded-full font-bold"
//               onClick={() =>
//                 dispatch(
//                   AddItem({
//                     id: `${id}-mini`,
//                     name: `${name} ${Mini}`,
//                     price: Number(Minifood),
//                     image: image1,
//                     qty: 1,
//                   })
//                 )
//               }
//             >
//               {bttn}
//             </button>
//           </div>

//           {/* MEDIA */}
//           <div className="flex justify-between items-center">
//             <span>{Media}</span>
//             <span>{Mediafood}</span>
//             <button
//               className="bg-yellow-500 w-8 h-8 rounded-full font-bold"
//               onClick={() =>
//                 dispatch(
//                   AddItem({
//                     id: `${id}-media`,
//                     name: `${name} ${Media}`,
//                     price: Number(Mediafood),
//                     image: image1,
//                     qty: 1,
//                   })
//                 )
//               }
//             >
//               {bttn}
//             </button>
//           </div>

//           {/* MAXI */}
//           <div className="flex justify-between items-center">
//             <span>{Maxi}</span>
//             <span>{Maxifood}</span>
//             <button
//               className="bg-yellow-500 w-8 h-8 rounded-full font-bold"
//               onClick={() =>
//                 dispatch(
//                   AddItem({
//                     id: `${id}-maxi`,
//                     name: `${name} ${Maxi}`,
//                     price: Number(Maxifood),
//                     image: image1,
//                     qty: 1,
//                   })
//                 )
//               }
//             >
//               {bttn}
//             </button>
//           </div>

//           {/* PARTY */}
//           <div className="flex justify-between items-center">
//             <span>{Party}</span>
//             <span>{Partyfood}</span>
//             <button
//               className="bg-yellow-500 w-8 h-8 rounded-full font-bold"
//               onClick={() =>
//                 dispatch(
//                   AddItem({
//                     id: `${id}-party`,
//                     name: `${name} ${Party}`,
//                     price: Number(Partyfood),
//                     image: image1,
//                     qty: 1,
//                   })
//                 )
//               }
//             >
//               {bttn}
//             </button>
//           </div>
//         </>
//       )}

    
//     </div>
//   );
// }

// export default Card;
