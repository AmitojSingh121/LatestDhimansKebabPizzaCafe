// import React ,  {useContext  , useEffect} from "react";
// import DhimansLogoimg from "../assests/DhimansLogoimg.webp";
// import { IoSearch } from "react-icons/io5";
// import { LuShoppingCart } from "react-icons/lu";
// import { dataContext } from "../Context/UserContext";
// import {food_items} from '../Foods'
// import { useSelector } from "react-redux";

// function NavBar({  }) {
//   let {input, setInput , setCate , showCart , setShowCart} = useContext(dataContext)

//     // 🔥 SEARCH FILTER

//   useEffect(() =>{
//     const newlist =  food_items.filter((item)=>item.food_name.includes(input) ||item.food_name.toLowerCase().includes(input))
//     setCate(newlist)
//   } , [input])

//   let items = useSelector(state=>state.cart)
//   console.log(items)

//   return (

//     // NavBar component code
//     <div className="w-full h-[80px] justify-between items-center flex  bg-gray-200 px-5 md:px-8 gap-3">

//        <div className="flex justify-between items-center  p-4">
//           {/* 1st way to load the image in React Js  */}
//         <a href="index">
//          <img 
//           src={DhimansLogoimg}   
//           alt="Dhiman's Kebab & Pizza Logo"
//           className="w-20 md:w-24"/>
//         </a>
//        </div>

//         {/* 2nd is Search Bar */}
//         <form className="flex items-center bg-white rounded-md px-3 gap-2 w-full max-w-[500px]" onSubmit={(e)=>e.preventDefault()}>
//               <IoSearch className="w-5 h-5 text-yellow-400 "></IoSearch>
//               <input type="text" placeholder=" Encontre seu sabor favorito..."
//                className="w-full p-2 border
//                 border-gray-300
//                outline-none
//                text-sm
//                md:text-base" 
//                 value={input}
//                onChange={(e)=> setInput(e.target.value) }></input>
//          </form>
         
//          {/* 3rd is Shopping Cart */}
//          <div className="flex justify-center items-center w-[50px] h-[50px] bg-black rounded-full shadow-xl relative" onClick={()=>{
//           setShowCart(true)
//          }}>
//             <span className="absolute top-1 right-1 text-xs bg-yellow-400 text-black
//             font-bold w-5 h-5 flex items-center justify-center rounded-full">{items.length}</span>
//             <LuShoppingCart className="w-5 h-5 text-yellow-500"></LuShoppingCart>
//          </div>         
//     </div>
//   );  
// }

// export default NavBar;

import React, { useContext, useEffect, useState } from "react";
import DhimansLogoimg from "../assests/DhimansLogoimg.webp";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { dataContext } from "../Context/UserContext";
import { food_items } from "../Foods";
import { useSelector } from "react-redux";

function NavBar() {
  let { input, setInput, setCate, showCart, setShowCart } = useContext(dataContext);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const newlist = food_items.filter(
      (item) =>
        item.food_name.includes(input) ||
        item.food_name.toLowerCase().includes(input)
    );
    setCate(newlist);
  }, [input]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let items = useSelector((state) => state.cart);

  return (
    <nav
      className={`w-full h-[72px] fixed top-0 left-0 z-50 flex justify-between items-center px-6 md:px-12 gap-4 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d0d]/95 backdrop-blur-md shadow-lg shadow-black/50"
          : "bg-[#0d0d0d]"
      } border-b border-[#c9a84c]/10`}
    >
      {/* Logo */}
      <a href="/" className="flex items-center gap-3 flex-shrink-0">
        <img
          src={DhimansLogoimg}
          alt="Dhiman's Kebab & Pizza"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover ring-2 ring-[#c9a84c]/30"
        />
        <div className="hidden md:block">
          <p className="text-[#c9a84c] font-playfair text-base font-semibold leading-tight">
            Dhiman's
          </p>
          <p className="text-[#f5f0e8]/60 text-xs tracking-[2px] uppercase">
            Kebab & Pizza
          </p>
        </div>
      </a>

      {/* Search Bar */}
      <form
        className="flex items-center bg-[#1a1a1a] border border-[#c9a84c]/20 rounded-sm px-4 gap-2 w-full max-w-[480px] h-[42px] focus-within:border-[#c9a84c]/60 transition-all duration-300"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className="w-4 h-4 text-[#c9a84c]" />
        <input
          type="text"
          placeholder="Encontre seu sabor favorito..."
          className="w-full bg-transparent outline-none text-sm text-[#f5f0e8] placeholder-[#f5f0e8]/30"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      {/* Cart Button */}
      <button
        className="flex items-center gap-2 bg-[#c9a84c]/10 hover:bg-[#c9a84c]/20 border border-[#c9a84c]/30 hover:border-[#c9a84c]/60 text-[#c9a84c] px-4 py-2 rounded-sm transition-all duration-300 relative flex-shrink-0"
        onClick={() => setShowCart(true)}
      >
        <LuShoppingCart className="w-5 h-5" />
        <span className="hidden md:block text-xs tracking-[1.5px] uppercase font-medium">
          Cart
        </span>
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#c9a84c] text-[#0d0d0d] text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {items.length}
          </span>
        )}
      </button>
    </nav>
  );
}

export default NavBar;


